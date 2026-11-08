class AudioManager{
	constructor(){
		this.bgm=null;
		this.bgmName='';
		this.isMuted=false;
		this.bgmVolume=0.45;
		this.sfxVolume=0.7;
		this.audioContext=null;
		this.sounds={};
		this.initAudioMap();
	}
	initAudioMap(){
		const sfxList={
			paper_slide:'assets/audio/sfx/sfx_ui_paper_slide.mp3',
			card_pickup:'assets/audio/sfx/sfx_ui_button_click.mp3',
			button_click:'assets/audio/sfx/sfx_ui_button_click.mp3',
			goal_success:'assets/audio/sfx/sfx_ui_goal_success.mp3',
			chime:'assets/audio/sfx/Chime_sparkle.mp3',
			fail_thud:'assets/audio/sfx/fail thud.mp3',
			wood_thud:'assets/audio/sfx/Wood_thud.mp3',
			act_transition:'assets/audio/sfx/sfx_ui_act_transition.mp3',
			bomb_explosion:'assets/audio/sfx/sfx_bomb_explosion_distant.wav',
			train_whistle:'assets/audio/sfx/Train_whistle.mp3',
			pencil_writing:'assets/audio/sfx/Pencil_writing.mp3',
			xray_machine:'assets/audio/sfx/Xray_machine-2.mp3',
			bubbling:'assets/audio/sfx/Bubbling_liquid.mp3',
			model_collapse:'assets/audio/sfx/Model_collapse.mp3',
			wire_collapse:'assets/audio/sfx/sfx_wire_model_collapse.wav',
			camera_shutter:'assets/audio/sfx/Soft_camera_shutter.mp3',
			rotary_notch:'assets/audio/sfx/sfx_mini_rotary_notch.mp3',
			focus_lock:'assets/audio/sfx/sfx_mini_focus_lock_ding.mp3',
			applause:'assets/audio/sfx/Applause.mp3',
			projector_loop:'assets/audio/sfx/Film_projector_loop.mp3',
			children_laugh:'assets/audio/sfx/Childeren_laugh.mp3',
			heart_monitor:'assets/audio/sfx/Heart_monitor_slow.mp3',
			rocket:'assets/audio/sfx/Rocket_launch.mp3'
		};
		const bgmList={
			wartime:'assets/audio/bgm/bgm_chp3_wartime_london.mp3',
			paris:'assets/audio/bgm/bgm_chp3_paris_laboratory.wav',
			tension:'assets/audio/bgm/Chp3-bgm-tension.mp3',
			mysterious:'assets/audio/bgm/Chp4-bgm-mysterious.mp3',
			sad:'assets/audio/bgm/Chp5 bgm sad.mp3',
			dreamy:'assets/audio/bgm/Chp6 bgm dreamy.mp3'
		};
		this.sfxPaths=sfxList;
		this.bgmPaths=bgmList;
	}
	ensureContext(){
		if(!this.audioContext){
			const AudioContextClass=window.AudioContext||window.webkitAudioContext;
			if(AudioContextClass) this.audioContext=new AudioContextClass();
		}
		if(this.audioContext&&this.audioContext.state==='suspended') this.audioContext.resume();
	}
	playSFX(name){
		if(this.isMuted) return;
		this.ensureContext();
		const path=this.sfxPaths[name];
		if(!path) return;
		try{
			const audio=new Audio(path);
			audio.volume=this.sfxVolume;
			audio.play().catch(()=>{});
		}catch(e){}
	}
	playBGM(name){
		if(this.bgmName===name&&this.bgm&&!this.bgm.paused) return;
		this.ensureContext();
		const path=this.bgmPaths[name];
		if(!path) return;
		if(this.bgm){
			this.bgm.pause();
			this.bgm=null;
		}
		this.bgmName=name;
		try{
			this.bgm=new Audio(path);
			this.bgm.loop=true;
			this.bgm.volume=this.isMuted?0:this.bgmVolume;
			this.bgm.play().catch(()=>{});
		}catch(e){}
	}
	stopBGM(){
		if(this.bgm){
			this.bgm.pause();
			this.bgm=null;
			this.bgmName='';
		}
	}
	toggleMute(){
		this.isMuted=!this.isMuted;
		if(this.bgm) this.bgm.volume=this.isMuted?0:this.bgmVolume;
		return this.isMuted;
	}
	setBGMVolume(vol){
		this.bgmVolume=Math.max(0,Math.min(1,vol));
		if(this.bgm&&!this.isMuted) this.bgm.volume=this.bgmVolume;
	}
	setSFXVolume(vol){
		this.sfxVolume=Math.max(0,Math.min(1,vol));
	}
}
window.audioMgr=new AudioManager();

