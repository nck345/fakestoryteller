document.addEventListener('DOMContentLoaded',()=>{
	const modalLayer=document.getElementById('modalLayer');
	window.minigameCtrl.init(modalLayer);
	window.codexCtrl.init(modalLayer);
	window.cutsceneCtrl.init(modalLayer);
	const initialAct=window.storyEngine.getCurrentAct();
	window.uiCtrl.renderAct(initialAct);
	window.storyEngine.evaluateAll();
	window.uiCtrl.updateMinigamesHub();
	const coverBtn=document.getElementById('coverOpenBtn');
	if(coverBtn){
		coverBtn.onclick=()=>{
			if(window.audioMgr){
				window.audioMgr.ensureContext();
				window.audioMgr.playSFX('button_click');
			}
			const coverScreen=document.getElementById('bookCoverScreen');
			if(coverScreen) coverScreen.classList.add('hidden');
			window.storyEngine.goToAct(0,0,false);
			window.cutsceneCtrl.playTutorial();
		};
	}
	const muteBtn=document.getElementById('muteToggleBtn');
	if(muteBtn){
		muteBtn.onclick=()=>{
			const muted=window.audioMgr.toggleMute();
			muteBtn.textContent=muted?'🔇 Muted':'🔊 Sound';
			muteBtn.classList.toggle('muted',muted);
		};
	}
	const resetBtn=document.getElementById('resetActBtn');
	if(resetBtn) resetBtn.onclick=()=>window.storyEngine.resetAct();
	const prevBtn=document.getElementById('prevActBtn');
	if(prevBtn) prevBtn.onclick=()=>window.storyEngine.prevAct();
	const nextBtn=document.getElementById('nextActBtn');
	if(nextBtn) nextBtn.onclick=()=>window.storyEngine.nextAct();
	const hintBtn=document.getElementById('hintBtn');
	if(hintBtn){
		hintBtn.onclick=()=>{
			const solvedIdx=window.storyEngine.autoSolveNearestFrame();
			if(solvedIdx===null){
				if(window.audioMgr) window.audioMgr.playSFX('chime');
			}
		};
	}
	const hubBtn=document.getElementById('minigamesHubBtn');
	const hubDrop=document.getElementById('minigamesDropdown');
	if(hubBtn&&hubDrop){
		hubBtn.onclick=e=>{
			e.stopPropagation();
			hubDrop.classList.toggle('hidden');
		};
		document.addEventListener('click',e=>{
			if(!e.target.closest('#minigamesHubWrap')) hubDrop.classList.add('hidden');
		});
	}
	const guideBtn=document.getElementById('guideBtn');
	if(guideBtn) guideBtn.onclick=()=>window.cutsceneCtrl.playTutorial();
	const codexBtn=document.getElementById('codexBtn');
	if(codexBtn) codexBtn.onclick=()=>window.codexCtrl.open();
	const tocBtn=document.getElementById('tocBtn');
	const tocModal=document.getElementById('tocModal');
	const tocClose=document.getElementById('tocClose');
	if(tocBtn&&tocModal){
		tocBtn.onclick=()=>{
			window.uiCtrl.renderTableOfContents();
			tocModal.classList.remove('hidden');
			if(window.audioMgr) window.audioMgr.playSFX('button_click');
		};
		if(tocClose) tocClose.onclick=()=>tocModal.classList.add('hidden');
	}
	const filterBtns=document.querySelectorAll('.filter-tab');
	filterBtns.forEach(btn=>{
		btn.onclick=()=>{
			filterBtns.forEach(b=>b.classList.remove('active'));
			btn.classList.add('active');
			window.uiCtrl.activeFilter=btn.dataset.filter;
			const act=window.storyEngine.getCurrentAct();
			window.uiCtrl.renderTray(act.availableCards);
			if(window.audioMgr) window.audioMgr.playSFX('button_click');
		};
	});
	const unlockAudio=()=>{
		if(window.audioMgr) window.audioMgr.ensureContext();
		window.removeEventListener('click',unlockAudio);
		window.removeEventListener('keydown',unlockAudio);
		window.removeEventListener('touchstart',unlockAudio);
	};
	window.addEventListener('click',unlockAudio);
	window.addEventListener('keydown',unlockAudio);
	window.addEventListener('touchstart',unlockAudio);
});