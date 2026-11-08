document.addEventListener('DOMContentLoaded',()=>{
	const modalLayer=document.getElementById('modalLayer');
	window.minigameCtrl.init(modalLayer);
	window.codexCtrl.init(modalLayer);
	window.cutsceneCtrl.init(modalLayer);
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
	const hintModal=document.getElementById('hintModal');
	const hintText=document.getElementById('hintText');
	const hintClose=document.getElementById('hintClose');
	if(hintBtn&&hintModal&&hintText){
		hintBtn.onclick=()=>{
			const act=window.storyEngine.getCurrentAct();
			hintText.textContent=act.hint||'Arrange elements in chronological order.';
			hintModal.classList.remove('hidden');
			if(window.audioMgr) window.audioMgr.playSFX('button_click');
		};
		if(hintClose) hintClose.onclick=()=>hintModal.classList.add('hidden');
	}
	const introCutsceneBtn=document.getElementById('actIntroBtn');
	if(introCutsceneBtn){
		introCutsceneBtn.onclick=()=>{
			const act=window.storyEngine.getCurrentAct();
			window.cutsceneCtrl.playActIntro(act);
		};
	}
	const guideBtn=document.getElementById('guideBtn');
	if(guideBtn) guideBtn.onclick=()=>window.cutsceneCtrl.playTutorial();
	const codexBtn=document.getElementById('codexBtn');
	if(codexBtn) codexBtn.onclick=()=>window.codexCtrl.open();
	const mgGasBtn=document.getElementById('mgGasBtn');
	if(mgGasBtn) mgGasBtn.onclick=()=>window.minigameCtrl.openGasMaze();
	const mgFocusBtn=document.getElementById('mgFocusBtn');
	if(mgFocusBtn) mgFocusBtn.onclick=()=>window.minigameCtrl.openXrayFocus();
	const mgDarkBtn=document.getElementById('mgDarkBtn');
	if(mgDarkBtn) mgDarkBtn.onclick=()=>window.minigameCtrl.openDarkroom();
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

