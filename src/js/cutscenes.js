class CutsceneController{
	constructor(){
		this.container=null;
		this.typingInterval=null;
	}
	init(containerEl){
		this.container=containerEl;
	}
	close(){
		if(this.typingInterval) clearInterval(this.typingInterval);
		if(this.container){
			this.container.classList.add('hidden');
			this.container.innerHTML='';
		}
		if(window.audioMgr) window.audioMgr.playBGM(window.storyEngine?.getCurrentAct()?.bgm||'paris');
	}
	playTutorial(onComplete){
		if(!this.container) return;
		this.container.classList.remove('hidden');
		const text="Discover Rosalind Franklin's story by arranging settings, characters, and objects inside the comic panels. Read each act's introduction, then build the historical events in sequence. Drag cards into a panel, or click to slot them. Click placed items to remove them. When every panel is correct, the next act unlocks!";
		this.renderCutscene({
			title:"How to Play: Storyteller's Guide",
			subtitle:"The Rosalind Franklin Story",
			image:"assets/images/characters/rosalindfranklin.png",
			narration:text,
			sound:'projector_loop',
			onComplete:onComplete
		});
	}
	playActIntro(act,onComplete){
		if(!this.container||!act.introText){
			if(onComplete) onComplete();
			return;
		}
		this.container.classList.remove('hidden');
		this.renderCutscene({
			title:`Act ${act.actNumber}: ${act.title}`,
			subtitle:act.goal,
			image:null,
			narration:act.introText,
			sound:'projector_loop',
			onComplete:onComplete
		});
	}
	playEnding(onComplete){
		if(!this.container) return;
		this.container.classList.remove('hidden');
		const epilogueText="From coal to DNA, Rosalind Franklin investigated structures hidden from view. Her careful experiments helped lay the foundations for the greatest molecular discoveries that followed. Her scientific story extends far beyond a single photograph - reminding us to recognize the people, the discipline, and the empirical truth behind every discovery.";
		if(window.audioMgr){
			window.audioMgr.playBGM('dreamy');
			window.audioMgr.playSFX('applause');
		}
		this.renderCutscene({
			title:"Epilogue: The Shoulders of Giants",
			subtitle:"In Memory of Rosalind Franklin (1920 - 1958)",
			image:"assets/images/characters/rosalindfranklin.png",
			narration:epilogueText,
			sound:null,
			isEnding:true,
			onComplete:onComplete
		});
	}
	renderCutscene(opts){
		if(this.typingInterval) clearInterval(this.typingInterval);
		this.container.innerHTML=`
			<div class="modal-card cutscene-card">
				<div class="film-grain"></div>
				<div class="cutscene-header">
					<h2>${opts.title}</h2>
					<h4>${opts.subtitle||''}</h4>
				</div>
				<div class="cutscene-content">
					${opts.image?`<img src="${opts.image}" class="cutscene-portrait" alt="Visual">`:''}
					<div class="narration-box" id="cutsceneText"></div>
				</div>
				<div class="cutscene-footer">
					<button class="primary-btn" id="skipCutsceneBtn">${opts.isEnding?'Return to Storybook':'Begin Act →'}</button>
				</div>
			</div>
		`;
		const targetEl=document.getElementById('cutsceneText');
		const fullText=opts.narration;
		let charIdx=0;
		this.typingInterval=setInterval(()=>{
			if(charIdx<fullText.length){
				targetEl.textContent+=fullText[charIdx];
				++charIdx;
			}else{
				clearInterval(this.typingInterval);
			}
		},18);
		const btn=document.getElementById('skipCutsceneBtn');
		btn.onclick=()=>{
			if(charIdx<fullText.length){
				charIdx=fullText.length;
				targetEl.textContent=fullText;
				clearInterval(this.typingInterval);
			}else{
				this.close();
				if(opts.onComplete) opts.onComplete();
			}
		};
	}
}
window.cutsceneCtrl=new CutsceneController();

