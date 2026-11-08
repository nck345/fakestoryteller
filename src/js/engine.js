class StoryEngine{
	constructor(){
		this.currentChapterIndex=1;
		this.currentActIndex=0;
		this.framesState=[];
		this.isActSolved=false;
		this.unlockedActs=new Set(['act1_1','act3_1']);
		this.listeners={};
		this.loadProgress();
		this.initAct();
	}
	on(event,cb){
		if(!this.listeners[event]) this.listeners[event]=[];
		this.listeners[event].push(cb);
	}
	emit(event,data){
		if(this.listeners[event]) this.listeners[event].forEach(cb=>cb(data));
	}
	getCurrentChapter(){
		return CHAPTERS_DATA[this.currentChapterIndex]||CHAPTERS_DATA[0];
	}
	getCurrentAct(){
		const ch=this.getCurrentChapter();
		return ch.acts[this.currentActIndex]||ch.acts[0];
	}
	initAct(){
		const act=this.getCurrentAct();
		this.framesState=Array.from({length:act.framesCount},()=>({setting:null,elements:[],characters:[],items:[],result:null,isCorrect:false}));
		this.isActSolved=false;
		this.emit('actLoaded',act);
		this.evaluateAll();
	}
	setSetting(frameIdx,settingId){
		if(!this.framesState[frameIdx]) return;
		this.framesState[frameIdx].setting=settingId;
		this.evaluateAll();
	}
	addElement(frameIdx,cardId){
		if(!this.framesState[frameIdx]) return;
		const frame=this.framesState[frameIdx];
		const card=STORY_CARDS[cardId];
		if(!card) return;
		if(card.type==='setting'){
			this.setSetting(frameIdx,cardId);
			return;
		}
		if(frame.elements.includes(cardId)) return;
		if(frame.elements.length>=4){
			frame.elements.shift();
		}
		frame.elements.push(cardId);
		this.syncElements(frame);
		this.evaluateAll();
	}
	removeElement(frameIdx,cardId){
		if(!this.framesState[frameIdx]) return;
		const frame=this.framesState[frameIdx];
		frame.elements=frame.elements.filter(id=>id!==cardId);
		this.syncElements(frame);
		this.evaluateAll();
	}
	syncElements(frame){
		frame.characters=frame.elements.filter(id=>STORY_CARDS[id]?.type==='character');
		frame.items=frame.elements.filter(id=>STORY_CARDS[id]?.type==='item');
	}
	clearFrame(frameIdx){
		if(!this.framesState[frameIdx]) return;
		this.framesState[frameIdx]={setting:null,elements:[],characters:[],items:[],result:null,isCorrect:false};
		this.evaluateAll();
	}
	resetAct(){
		const act=this.getCurrentAct();
		this.framesState=Array.from({length:act.framesCount},()=>({setting:null,elements:[],characters:[],items:[],result:null,isCorrect:false}));
		this.isActSolved=false;
		this.evaluateAll();
		this.emit('actReset',act);
	}
	autoSolveNearestFrame(){
		const act=this.getCurrentAct();
		const idx=this.framesState.findIndex(f=>!f.isCorrect);
		if(idx===-1) return null;
		const rule=act.frames[idx];
		if(!rule||!rule.solution) return null;
		const frame=this.framesState[idx];
		frame.setting=rule.solution.setting;
		frame.elements=[...(rule.solution.characters||[]),...(rule.solution.items||[])];
		this.syncElements(frame);
		this.evaluateAll();
		this.emit('frameAutoSolved',{frameIndex:idx});
		return idx;
	}
	evaluateFrame(frameIdx){
		const act=this.getCurrentAct();
		const frame=this.framesState[frameIdx];
		const s=frame.setting;
		const chars=frame.characters;
		const items=frame.items;
		frame.result=null;
		frame.isCorrect=false;
		if(!s&&chars.length===0&&items.length===0) return;
		if(act.fails){
			for(let i=0;i<act.fails.length;++i){
				const f=act.fails[i];
				if(f.check(s,chars,items)){
					frame.result={type:'fail',text:f.text,anim:f.anim||null,sound:f.sound||'fail_thud'};
					return;
				}
			}
		}
		const targetRule=act.frames[frameIdx];
		if(targetRule&&targetRule.check(s,chars,items)){
			frame.result={type:'success',text:targetRule.title,anim:targetRule.anim||null,sound:targetRule.sound||null};
			frame.isCorrect=true;
			if(targetRule.triggerGasLab&&!frame.gasLabFired){
				frame.gasLabFired=true;
				this.emit('gasLabTriggered',{frameIndex:frameIdx});
			}
			return;
		}
		for(let i=0;i<act.frames.length;++i){
			const r=act.frames[i];
			if(r.check(s,chars,items)){
				frame.result={type:'match_other',text:r.title,anim:r.anim||null,sound:r.sound||null};
				return;
			}
		}
		const parts=[];
		if(chars.length>0) parts.push(chars.map(c=>STORY_CARDS[c]?.name||c).join(' and '));
		if(items.length>0) parts.push(items.map(it=>STORY_CARDS[it]?.name||it).join(', '));
		if(s) parts.push(`at ${STORY_CARDS[s]?.name||s}`);
		frame.result={type:'neutral',text:parts.length>0?parts.join(' ')+'.':'...'};
	}
	evaluateAll(){
		const act=this.getCurrentAct();
		let allCorrect=true;
		for(let i=0;i<this.framesState.length;++i){
			this.evaluateFrame(i);
			if(!this.framesState[i].isCorrect) allCorrect=false;
		}
		const wasSolved=this.isActSolved;
		this.isActSolved=allCorrect;
		if(!wasSolved&&allCorrect){
			this.unlockedActs.add(act.id);
			this.unlockNextAct();
			this.saveProgress();
			this.emit('actSolved',act);
		}
		this.emit('stateUpdated',{frames:this.framesState,isSolved:this.isActSolved});
	}
	unlockNextAct(){
		const ch=this.getCurrentChapter();
		if(this.currentActIndex+1<ch.acts.length){
			this.unlockedActs.add(ch.acts[this.currentActIndex+1].id);
		}else if(this.currentChapterIndex+1<CHAPTERS_DATA.length){
			const nextCh=CHAPTERS_DATA[this.currentChapterIndex+1];
			if(nextCh.acts.length>0) this.unlockedActs.add(nextCh.acts[0].id);
		}
	}
	goToAct(chIdx,actIdx){
		if(chIdx>=0&&chIdx<CHAPTERS_DATA.length){
			const ch=CHAPTERS_DATA[chIdx];
			if(actIdx>=0&&actIdx<ch.acts.length){
				this.currentChapterIndex=chIdx;
				this.currentActIndex=actIdx;
				this.initAct();
			}
		}
	}
	nextAct(){
		const ch=this.getCurrentChapter();
		if(this.currentActIndex+1<ch.acts.length){
			this.goToAct(this.currentChapterIndex,this.currentActIndex+1);
		}else if(this.currentChapterIndex+1<CHAPTERS_DATA.length){
			this.goToAct(this.currentChapterIndex+1,0);
		}
	}
	prevAct(){
		if(this.currentActIndex>0){
			this.goToAct(this.currentChapterIndex,this.currentActIndex-1);
		}else if(this.currentChapterIndex>0){
			const prevCh=CHAPTERS_DATA[this.currentChapterIndex-1];
			this.goToAct(this.currentChapterIndex-1,prevCh.acts.length-1);
		}
	}
	saveProgress(){
		try{
			const data={unlocked:Array.from(this.unlockedActs),ch:this.currentChapterIndex,act:this.currentActIndex};
			localStorage.setItem('fakestoryteller_progress',JSON.stringify(data));
		}catch(e){}
	}
	loadProgress(){
		try{
			const raw=localStorage.getItem('fakestoryteller_progress');
			if(raw){
				const data=JSON.parse(raw);
				if(data.unlocked) this.unlockedActs=new Set(data.unlocked);
				if(typeof data.ch==='number') this.currentChapterIndex=data.ch;
				if(typeof data.act==='number') this.currentActIndex=data.act;
			}
		}catch(e){}
	}
}
window.storyEngine=new StoryEngine();
