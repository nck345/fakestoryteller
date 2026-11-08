class UIController{
	constructor(){
		this.selectedCardId=null;
		this.activeFilter='all';
		this.initListeners();
	}
	initListeners(){
		window.storyEngine.on('actLoaded',act=>this.renderAct(act));
		window.storyEngine.on('stateUpdated',data=>this.updateFramesState(data));
		window.storyEngine.on('actSolved',act=>this.onActSolved(act));
		window.storyEngine.on('actReset',act=>this.renderAct(act));
		window.storyEngine.on('gasLabTriggered',data=>this.onGasLabTriggered(data));
		window.storyEngine.on('frameAutoSolved',data=>this.onFrameAutoSolved(data));
	}
	renderAct(act){
		const titleEl=document.getElementById('actTitle');
		const goalEl=document.getElementById('actGoal');
		const stampEl=document.getElementById('solvedStamp');
		const chNameEl=document.getElementById('chapterName');
		if(titleEl) titleEl.textContent=`Act ${act.actNumber}: ${act.title}`;
		if(goalEl) goalEl.textContent=act.goal;
		if(chNameEl) chNameEl.textContent=window.storyEngine.getCurrentChapter().title;
		if(stampEl) stampEl.classList.remove('visible');
		this.renderFrames(act.framesCount);
		this.renderTray(act.availableCards);
		this.updateNavigation();
		this.updateHeaderMinigames(act);
		if(window.audioMgr) window.audioMgr.playBGM(act.bgm||'paris');
	}
	updateHeaderMinigames(act){
		const mgGas=document.getElementById('mgGasBtn');
		const mgFocus=document.getElementById('mgFocusBtn');
		const mgDark=document.getElementById('mgDarkBtn');
		if(mgGas) mgGas.style.display='none';
		if(mgFocus){
			const showFocus=(act.id==='act3_3'||act.id==='act4_2'||act.id==='act4_3');
			mgFocus.style.display=showFocus?'inline-flex':'none';
		}
		if(mgDark){
			const showDark=(act.id==='act4_4');
			mgDark.style.display=showDark?'inline-flex':'none';
		}
	}
	renderFrames(count){
		const container=document.getElementById('panelsRow');
		if(!container) return;
		container.innerHTML='';
		for(let i=0;i<count;++i){
			const frameEl=document.createElement('div');
			frameEl.className='comic-frame';
			frameEl.dataset.frameIndex=i;
			frameEl.innerHTML=`
				<div class="frame-index-badge">${i+1}</div>
				<button class="frame-clear-btn" title="Clear Frame">&times;</button>
				<div class="frame-canvas" data-frame-index="${i}">
					<div class="frame-bg"></div>
					<div class="frame-elements-row"></div>
					<div class="frame-reaction-overlay"></div>
					<div class="rosalind-speech hidden" id="speech_${i}">
						<img src="assets/images/characters/rosalindfranklin.png" alt="Rosalind" class="speech-avatar">
						<span>Rosalind: "Hãy thử làm thí nghiệm nhé!"</span>
					</div>
				</div>
				<div class="frame-caption">Kéo thả bối cảnh, nhân vật hoặc đồ vật vào đây...</div>
			`;
			this.attachFrameEvents(frameEl,i);
			container.appendChild(frameEl);
		}
	}
	attachFrameEvents(frameEl,frameIdx){
		const canvas=frameEl.querySelector('.frame-canvas');
		const clearBtn=frameEl.querySelector('.frame-clear-btn');
		clearBtn.onclick=e=>{
			e.stopPropagation();
			window.storyEngine.clearFrame(frameIdx);
			if(window.audioMgr) window.audioMgr.playSFX('button_click');
		};
		canvas.ondragover=e=>{e.preventDefault();canvas.classList.add('drag-over');};
		canvas.ondragleave=()=>{canvas.classList.remove('drag-over');};
		canvas.ondrop=e=>{
			e.preventDefault();
			canvas.classList.remove('drag-over');
			const cardId=e.dataTransfer.getData('text/plain');
			this.placeCardInFrame(cardId,frameIdx);
		};
		canvas.onclick=()=>{
			if(this.selectedCardId){
				this.placeCardInFrame(this.selectedCardId,frameIdx);
				this.deselectCard();
			}
		};
	}
	placeCardInFrame(cardId,frameIdx){
		const card=STORY_CARDS[cardId];
		if(!card) return;
		if(card.type==='setting'){
			window.storyEngine.setSetting(frameIdx,card.id);
		}else{
			window.storyEngine.addElement(frameIdx,card.id);
		}
		if(window.audioMgr) window.audioMgr.playSFX('paper_slide');
	}
	renderTray(cardIds){
		const tray=document.getElementById('cardsTray');
		if(!tray) return;
		tray.innerHTML='';
		const filteredIds=cardIds.filter(id=>{
			const card=STORY_CARDS[id];
			if(!card) return false;
			if(this.activeFilter==='all') return true;
			return card.type===this.activeFilter;
		});
		filteredIds.forEach(id=>{
			const card=STORY_CARDS[id];
			const el=document.createElement('div');
			el.className=`story-card card-${card.type}`;
			el.dataset.cardId=card.id;
			el.draggable=true;
			el.innerHTML=`
				<div class="card-thumb">
					<img src="${card.image}" alt="${card.name}" loading="lazy">
				</div>
				<span class="card-title">${card.name}</span>
			`;
			el.title=card.desc||card.name;
			el.ondragstart=e=>{
				e.dataTransfer.setData('text/plain',card.id);
				el.classList.add('dragging');
				if(window.audioMgr) window.audioMgr.playSFX('card_pickup');
			};
			el.ondragend=()=>{el.classList.remove('dragging');};
			el.onclick=()=>{
				if(this.selectedCardId===card.id){
					this.deselectCard();
				}else{
					this.selectCard(card.id,el);
				}
			};
			tray.appendChild(el);
		});
	}
	selectCard(cardId,cardEl){
		this.deselectCard();
		this.selectedCardId=cardId;
		cardEl.classList.add('selected');
		if(window.audioMgr) window.audioMgr.playSFX('card_pickup');
	}
	deselectCard(){
		this.selectedCardId=null;
		const prev=document.querySelector('.story-card.selected');
		if(prev) prev.classList.remove('selected');
	}
	updateFramesState(data){
		const frames=data.frames;
		const frameEls=document.querySelectorAll('.comic-frame');
		frames.forEach((f,idx)=>{
			const frameEl=frameEls[idx];
			if(!frameEl) return;
			const bgEl=frameEl.querySelector('.frame-bg');
			const elementsRow=frameEl.querySelector('.frame-elements-row');
			const overlayEl=frameEl.querySelector('.frame-reaction-overlay');
			const captionEl=frameEl.querySelector('.frame-caption');
			if(f.setting){
				const sc=STORY_CARDS[f.setting];
				bgEl.style.backgroundImage=`url("${sc.image}")`;
				bgEl.style.opacity='1';
			}else{
				bgEl.style.backgroundImage='none';
				bgEl.style.opacity='0';
			}
			elementsRow.innerHTML='';
			overlayEl.innerHTML='';
			frameEl.classList.remove('state-success','state-fail');
			const hasActionAnim=Boolean(f.result&&f.result.anim);
			if(hasActionAnim){
				elementsRow.style.display='none';
				overlayEl.innerHTML=`<img src="${f.result.anim}" class="anim-reaction" alt="Action Animation">`;
			}else{
				elementsRow.style.display='flex';
				f.elements.forEach(elId=>{
					const card=STORY_CARDS[elId];
					if(!card) return;
					const spriteNode=document.createElement('div');
					spriteNode.className='placed-entity-sprite';
					spriteNode.title=`Bấm để gỡ ${card.name}`;
					spriteNode.innerHTML=`<img src="${card.image}" alt="${card.name}">`;
					spriteNode.onclick=e=>{
						e.stopPropagation();
						window.storyEngine.removeElement(idx,elId);
						if(window.audioMgr) window.audioMgr.playSFX('button_click');
					};
					elementsRow.appendChild(spriteNode);
				});
			}
			if(f.result){
				captionEl.textContent=f.result.text;
				if(f.result.type==='fail'){
					frameEl.classList.add('state-fail');
					if(f.result.sound&&window.audioMgr) window.audioMgr.playSFX(f.result.sound);
				}else if(f.result.type==='success'){
					frameEl.classList.add('state-success');
				}
			}else{
				captionEl.textContent='Kéo thả bối cảnh, nhân vật hoặc đồ vật vào đây...';
			}
		});
		const nextBtn=document.getElementById('nextActBtn');
		if(nextBtn){
			if(data.isSolved){
				nextBtn.classList.add('ready');
			}else{
				nextBtn.classList.remove('ready');
			}
		}
	}
	onGasLabTriggered(data){
		const speech=document.getElementById(`speech_${data.frameIndex}`);
		if(speech){
			speech.classList.remove('hidden');
			if(window.audioMgr) window.audioMgr.playSFX('focus_lock');
			setTimeout(()=>{
				speech.classList.add('hidden');
				if(window.minigameCtrl) window.minigameCtrl.openGasMaze();
			},1200);
		}else{
			if(window.minigameCtrl) window.minigameCtrl.openGasMaze();
		}
	}
	onFrameAutoSolved(data){
		const frameEls=document.querySelectorAll('.comic-frame');
		const target=frameEls[data.frameIndex];
		if(target){
			target.classList.add('auto-solved-flash');
			setTimeout(()=>target.classList.remove('auto-solved-flash'),900);
		}
		if(window.audioMgr){
			window.audioMgr.playSFX('paper_slide');
			window.audioMgr.playSFX('goal_success');
		}
	}
	onActSolved(act){
		const stamp=document.getElementById('solvedStamp');
		if(stamp) stamp.classList.add('visible');
		if(window.audioMgr){
			window.audioMgr.playSFX('goal_success');
			window.audioMgr.playSFX('chime');
		}
		const ch=window.storyEngine.getCurrentChapter();
		const isLastActInCh=window.storyEngine.currentActIndex===ch.acts.length-1;
		const isLastChapter=window.storyEngine.currentChapterIndex===CHAPTERS_DATA.length-1;
		if(isLastActInCh&&isLastChapter){
			setTimeout(()=>window.cutsceneCtrl.playEnding(),1400);
		}
	}
	updateNavigation(){
		const prevBtn=document.getElementById('prevActBtn');
		const nextBtn=document.getElementById('nextActBtn');
		const chIdx=window.storyEngine.currentChapterIndex;
		const actIdx=window.storyEngine.currentActIndex;
		if(prevBtn) prevBtn.disabled=(chIdx===0&&actIdx===0);
		this.renderTableOfContents();
	}
	renderTableOfContents(){
		const menu=document.getElementById('tocMenu');
		if(!menu) return;
		menu.innerHTML='';
		CHAPTERS_DATA.forEach((ch,cIdx)=>{
			const group=document.createElement('div');
			group.className='toc-group';
			group.innerHTML=`<h4>${ch.title}</h4>`;
			ch.acts.forEach((act,aIdx)=>{
				const isUnlocked=window.storyEngine.unlockedActs.has(act.id);
				const isCurrent=cIdx===window.storyEngine.currentChapterIndex&&aIdx===window.storyEngine.currentActIndex;
				const item=document.createElement('button');
				item.className=`toc-item ${isCurrent?'current':''} ${!isUnlocked?'locked':''}`;
				item.disabled=!isUnlocked;
				item.innerHTML=`<span>Act ${act.actNumber}: ${act.title}</span> ${!isUnlocked?'🔒':'✓'}`;
				item.onclick=()=>{
					window.storyEngine.goToAct(cIdx,aIdx);
					document.getElementById('tocModal')?.classList.add('hidden');
				};
				group.appendChild(item);
			});
			menu.appendChild(group);
		});
	}
}
window.uiCtrl=new UIController();
