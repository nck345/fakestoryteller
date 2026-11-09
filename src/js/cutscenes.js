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
		const coverEl=document.getElementById('bookCoverScreen');
		if(coverEl) coverEl.classList.add('hidden');
		if(window.audioMgr) window.audioMgr.playBGM(window.storyEngine?.getCurrentAct()?.bgm||'paris');
	}
	playTutorial(onComplete){
		if(!this.container) return;
		this.container.classList.remove('hidden');
		const text="Explore the historical story of Rosalind Franklin by arranging settings, characters, and items into the comic frames. Read the goal for each act, then assemble the events in accurate historical order. Drag and drop cards into a frame, or click a card to select it and click a frame. Click placed characters or items inside a frame to remove them. When all frames are correct, the next act unlocks!";
		this.renderCutscene({
			title:"How to Play: Storyteller",
			subtitle:"The Rosalind Franklin Story",
			image:"assets/images/characters/rosalindfranklin.png",
			narration:text,
			sound:'projector_loop',
			btnText:'Continue →',
			onComplete:()=>{
				const act=window.storyEngine.getCurrentAct();
				this.playActIntro(act,onComplete);
			}
		});
	}
	playActIntro(act,onComplete){
		if(!this.container) return;
		this.container.classList.remove('hidden');
		const intro=act.fullIntroText||act.introText||`Welcome to Act ${act.actNumber}: ${act.title}. Goal: ${act.goal}`;
		this.renderCutscene({
			title:`Act ${act.actNumber}: ${act.title}`,
			subtitle:act.goal,
			image:null,
			narration:intro,
			sound:'projector_loop',
			btnText:'Start Act →',
			onComplete:()=>{
				this.close();
				if(onComplete) onComplete();
			}
		});
	}
	playEnding(onComplete){
		if(!this.container) return;
		this.container.classList.remove('hidden');
		const epilogueText="From wartime coal microstructures to the double helix of DNA, Rosalind Franklin pursued the fundamental truths of matter with meticulous experimental rigor. Her precise observations laid the empirical foundation for modern molecular biology. Her legacy reminds us to honor the diligence, integrity, and scientific evidence behind every transformative discovery.";
		if(window.audioMgr){
			window.audioMgr.playBGM('dreamy');
			window.audioMgr.playSFX('applause');
		}
		this.renderCutscene({
			title:"Epilogue: Standing on the Shoulders of Giants",
			subtitle:"In Memory of Rosalind Franklin (1920 - 1958)",
			image:"assets/images/characters/rosalindfranklin.png",
			narration:epilogueText,
			sound:null,
			btnText:'Return to Storybook',
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
					<button class="primary-btn" id="skipCutsceneBtn">${opts.btnText||'Start Act →'}</button>
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
		},16);
		const contentBox=this.container.querySelector('.cutscene-content');
		if(contentBox){
			contentBox.onclick=()=>{
				charIdx=fullText.length;
				targetEl.textContent=fullText;
				clearInterval(this.typingInterval);
			};
		}
		const btn=document.getElementById('skipCutsceneBtn');
		btn.onclick=()=>{
			if(window.audioMgr) window.audioMgr.playSFX('button_click');
			clearInterval(this.typingInterval);
			if(opts.onComplete) opts.onComplete();
		};
	}
}
window.cutsceneCtrl=new CutsceneController();
