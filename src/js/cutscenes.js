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
		const text="Khám phá câu chuyện của Rosalind Franklin bằng cách sắp xếp bối cảnh, nhân vật và đồ vật vào các ô tranh truyện. Hãy đọc kỹ mục tiêu của mỗi màn chơi, sau đó xây dựng chuỗi sự kiện theo đúng trình tự lịch sử. Bạn có thể kéo thả thẻ bài vào khung, hoặc nhấp chọn thẻ bài rồi nhấp vào khung. Nhấp vào nhân vật hoặc đồ vật bên trong khung để gỡ bỏ. Khi tất cả các khung hình đều chính xác, màn chơi tiếp theo sẽ được mở khóa!";
		this.renderCutscene({
			title:"Hướng Dẫn Cách Chơi: Storyteller",
			subtitle:"The Rosalind Franklin Story",
			image:"assets/images/characters/rosalindfranklin.png",
			narration:text,
			sound:'projector_loop',
			btnText:'Tiếp tục →',
			onComplete:()=>{
				const act=window.storyEngine.getCurrentAct();
				this.playActIntro(act,onComplete);
			}
		});
	}
	playActIntro(act,onComplete){
		if(!this.container) return;
		this.container.classList.remove('hidden');
		const intro=act.introText||`Chào mừng bạn đến với Act ${act.actNumber}: ${act.title}. Mục tiêu của màn chơi: ${act.goal}`;
		this.renderCutscene({
			title:`Act ${act.actNumber}: ${act.title}`,
			subtitle:act.goal,
			image:null,
			narration:intro,
			sound:'projector_loop',
			btnText:'Bắt đầu màn chơi →',
			onComplete:()=>{
				this.close();
				if(onComplete) onComplete();
			}
		});
	}
	playEnding(onComplete){
		if(!this.container) return;
		this.container.classList.remove('hidden');
		const epilogueText="Từ than đá cho đến DNA, Rosalind Franklin đã kiên định khám phá những cấu trúc bí ẩn nằm sâu bên trong vật chất. Những thí nghiệm cẩn trọng và chuẩn xác của bà đã đặt nền móng vững chắc cho các khám phá sinh học vĩ đại nhất của nhân loại. Di sản khoa học của bà vượt xa khỏi một tấm ảnh duy nhất - nhắc nhở chúng ta hãy luôn tôn vinh con người, kỷ luật nghiên cứu và sự thật thực nghiệm đằng sau mỗi phát minh.";
		if(window.audioMgr){
			window.audioMgr.playBGM('dreamy');
			window.audioMgr.playSFX('applause');
		}
		this.renderCutscene({
			title:"Vĩ Thanh: Đứng Trên Vai Những Người Khổng Lồ",
			subtitle:"Tưởng nhớ Rosalind Franklin (1920 - 1958)",
			image:"assets/images/characters/rosalindfranklin.png",
			narration:epilogueText,
			sound:null,
			btnText:'Quay lại bàn chơi',
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
					<button class="primary-btn" id="skipCutsceneBtn">${opts.btnText||'Bắt đầu màn chơi →'}</button>
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
