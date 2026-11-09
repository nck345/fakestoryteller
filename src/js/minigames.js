class MinigameController{
	constructor(){
		this.activeGame=null;
		this.container=null;
		this.isManual=false;
	}
	init(containerEl){
		this.container=containerEl;
	}
	close(){
		if(this.container){
			this.container.classList.add('hidden');
			this.container.innerHTML='';
		}
		this.activeGame=null;
	}
	openGasMaze(opts={}){
		if(!this.container) return;
		this.activeGame='gas_maze';
		this.isManual=Boolean(opts&&opts.isManual);
		this.container.classList.remove('hidden');
		this.container.innerHTML=`
			<div class="modal-card">
				<div class="modal-header">
					<h3>BCURA Lab: Helium Gas Micropore Flow</h3>
					<button class="close-btn" id="mgClose" style="${this.isManual?'':'display:none;'}">&times;</button>
				</div>
				<p class="modal-desc">Adjust the pressure valve between 45% - 65% to guide helium gas particles through the microscopic coal tunnels without clogging.</p>
				<div class="canvas-wrap">
					<canvas id="gasCanvas" width="560" height="260"></canvas>
				</div>
				<div class="mg-controls">
					<label>Valve Pressure: <span id="pressureVal">50</span>%</label>
					<input type="range" id="valveSlider" min="10" max="100" value="50">
					<button class="primary-btn" id="startGasTest">Release Helium Gas</button>
				</div>
				<div class="mg-status" id="mgStatus">Status: Awaiting gas release.</div>
			</div>
		`;
		const closeBtn=document.getElementById('mgClose');
		if(closeBtn) closeBtn.onclick=()=>this.close();
		this.setupGasCanvas();
	}
	setupGasCanvas(){
		const canvas=document.getElementById('gasCanvas');
		if(!canvas) return;
		const ctx=canvas.getContext('2d');
		let running=false;
		let particles=[];
		let pressure=50;
		const slider=document.getElementById('valveSlider');
		const pVal=document.getElementById('pressureVal');
		const btn=document.getElementById('startGasTest');
		const status=document.getElementById('mgStatus');
		slider.oninput=()=>{
			pressure=parseInt(slider.value,10);
			pVal.textContent=pressure;
			if(window.audioMgr) window.audioMgr.playSFX('rotary_notch');
		};
		const drawTunnels=()=>{
			ctx.fillStyle='#1e293b';
			ctx.fillRect(0,0,canvas.width,canvas.height);
			ctx.fillStyle='#334155';
			ctx.fillRect(0,0,canvas.width,70);
			ctx.fillRect(0,190,canvas.width,70);
			ctx.fillStyle='#475569';
			ctx.fillRect(150,70,40,75);
			ctx.fillRect(270,115,40,75);
			ctx.fillRect(390,70,40,75);
			ctx.fillStyle='#10b981';
			ctx.fillRect(canvas.width-20,70,20,120);
			ctx.fillStyle='#ffffff';
			ctx.font='12px sans-serif';
			ctx.fillText('INLET',10,135);
			ctx.fillText('FILTER EXIT',canvas.width-90,135);
		};
		drawTunnels();
		btn.onclick=()=>{
			if(running) return;
			running=true;
			particles=[];
			for(let i=0;i<45;++i){
				particles.push({x:15+Math.random()*20,y:80+Math.random()*100,vx:(pressure/14)+Math.random()*2,vy:(Math.random()-0.5)*2.5,stuck:false});
			}
			if(window.audioMgr) window.audioMgr.playSFX('bubbling');
			status.textContent='Gas expanding through coal micropores...';
			let reached=0;
			const loop=()=>{
				ctx.clearRect(0,0,canvas.width,canvas.height);
				drawTunnels();
				let active=0;
				for(let i=0;i<particles.length;++i){
					const p=particles[i];
					if(!p.stuck){
						++active;
						p.x+=p.vx;
						p.y+=p.vy;
						if(p.y<75||p.y>185) p.vy*=-1;
						if((p.x>150&&p.x<190&&p.y<145)||(p.x>270&&p.x<310&&p.y>115)||(p.x>390&&p.x<430&&p.y<145)){
							if(pressure<35||pressure>75){
								p.stuck=true;
							}else{
								p.vy+=p.y<130?1.2:-1.2;
							}
						}
						if(p.x>=canvas.width-25){
							p.stuck=true;
							++reached;
						}
					}
					ctx.beginPath();
					ctx.arc(p.x,p.y,4,0,Math.PI*2);
					ctx.fillStyle=p.stuck&&p.x<canvas.width-25?'#ef4444':p.x>=canvas.width-25?'#10b981':'#38bdf8';
					ctx.fill();
				}
				if(active>0){
					requestAnimationFrame(loop);
				}else{
					running=false;
					if(reached>=25){
						status.innerHTML='<span style="color:#10b981;font-weight:bold;">Success! Active micropores verified: 100% molecular sieve absorption!</span><br><button class="primary-btn" id="mgContinueBtn" style="margin-top:10px;">Continue Story →</button>';
						if(window.audioMgr) window.audioMgr.playSFX('goal_success');
						window.storyEngine.unlockedMinigames.add('gas_lab');
						window.storyEngine.saveProgress();
						if(window.storyEngine.framesState[1]){
							window.storyEngine.framesState[1].gasLabSolved=true;
							window.storyEngine.evaluateAll();
						}
						if(window.uiCtrl) window.uiCtrl.updateMinigamesHub();
						const contBtn=document.getElementById('mgContinueBtn');
						if(contBtn) contBtn.onclick=()=>this.close();
						setTimeout(()=>{if(this.activeGame==='gas_maze') this.close();},2200);
					}else{
						status.innerHTML='<span style="color:#ef4444;font-weight:bold;">Flow clogged! Hint: Adjust valve pressure between 45% - 65% for steady molecular flow.</span>';
						if(window.audioMgr) window.audioMgr.playSFX('fail_thud');
						if(window.storyEngine.framesState[1]){
							window.storyEngine.framesState[1].gasLabSolved=false;
							window.storyEngine.framesState[1].result={type:'fail',text:'Flow clogged! Hint: Adjust valve pressure between 45% - 65% for steady molecular flow.',anim:null,sound:'fail_thud',showQuestion:true};
							window.storyEngine.emit('stateUpdated',{frames:window.storyEngine.framesState,isSolved:false});
						}
					}
				}
			};
			requestAnimationFrame(loop);
		};
	}
	openXrayFocus(opts={}){
		if(!this.container) return;
		this.activeGame='xray_focus';
		this.isManual=Boolean(opts&&opts.isManual);
		this.container.classList.remove('hidden');
		this.container.innerHTML=`
			<div class="modal-card">
				<div class="modal-header">
					<h3>Laboratoire Central: Collimator Rotary Calibration</h3>
					<button class="close-btn" id="mgClose" style="${this.isManual?'':'display:none;'}">&times;</button>
				</div>
				<p class="modal-desc">Rotate the precision vernier collimator to align the X-ray beam and resolve sharp diffraction coordinates.</p>
				<div class="focus-wrap">
					<div class="diffraction-view" id="diffView">
						<div class="diff-ring r1"></div>
						<div class="diff-ring r2"></div>
						<div class="diff-ring r3"></div>
						<div class="diff-cross" id="diffCross"></div>
					</div>
					<div class="dial-container">
						<div class="rotary-knob" id="rotaryKnob">
							<div class="knob-indicator"></div>
						</div>
						<span class="angle-text" id="angleText">Angle: 0°</span>
					</div>
				</div>
				<div class="mg-status" id="mgFocusStatus">Status: Blurry concentric halos. Rotate dial towards 180°.</div>
			</div>
		`;
		const closeBtn=document.getElementById('mgClose');
		if(closeBtn) closeBtn.onclick=()=>this.close();
		this.setupDial();
	}
	setupDial(){
		const knob=document.getElementById('rotaryKnob');
		const diffView=document.getElementById('diffView');
		const diffCross=document.getElementById('diffCross');
		const angleText=document.getElementById('angleText');
		const status=document.getElementById('mgFocusStatus');
		let angle=0;
		let dragging=false;
		let locked=false;
		const updateAngle=deg=>{
			angle=(deg%360+360)%360;
			knob.style.transform=`rotate(${angle}deg)`;
			angleText.textContent=`Angle: ${Math.round(angle)}°`;
			const dist=Math.abs(angle-180);
			const blurVal=Math.min(18,dist/8);
			const opacity=Math.max(0.2,1-(dist/120));
			diffView.style.filter=`blur(${blurVal}px)`;
			diffCross.style.opacity=opacity;
			if(dist<=4&&!locked){
				locked=true;
				if(window.audioMgr) window.audioMgr.playSFX('focus_lock');
				diffView.style.filter='blur(0px)';
				diffCross.style.opacity='1';
				status.innerHTML='<span style="color:#10b981;font-weight:bold;">Focus Locked (180°)! High-order diffraction spots clearly resolved!</span><br><button class="primary-btn" id="mgContinueBtn" style="margin-top:10px;">Continue Story →</button>';
				window.storyEngine.unlockedMinigames.add('xray_dial');
				window.storyEngine.saveProgress();
				if(window.uiCtrl) window.uiCtrl.updateMinigamesHub();
				const contBtn=document.getElementById('mgContinueBtn');
				if(contBtn) contBtn.onclick=()=>this.close();
				setTimeout(()=>{if(this.activeGame==='xray_focus') this.close();},2200);
			}else if(dist>8&&locked){
				locked=false;
				status.textContent='Blurry concentric halos. Rotate dial towards 180°.';
			}
		};
		const onMove=e=>{
			if(!dragging) return;
			const rect=knob.getBoundingClientRect();
			const cx=rect.left+rect.width/2;
			const cy=rect.top+rect.height/2;
			const clientX=e.touches?e.touches[0].clientX:e.clientX;
			const clientY=e.touches?e.touches[0].clientY:e.clientY;
			const rad=Math.atan2(clientY-cy,clientX-cx);
			const deg=rad*(180/Math.PI)+90;
			updateAngle(deg);
			if(window.audioMgr) window.audioMgr.playSFX('rotary_notch');
		};
		knob.onmousedown=e=>{dragging=true;onMove(e);};
		window.onmousemove=onMove;
		window.onmouseup=()=>{dragging=false;};
		knob.ontouchstart=e=>{dragging=true;onMove(e);};
		window.ontouchmove=onMove;
		window.ontouchend=()=>{dragging=false;};
	}
	openDarkroom(opts={}){
		if(!this.container) return;
		this.activeGame='darkroom';
		this.isManual=Boolean(opts&&opts.isManual);
		this.container.classList.remove('hidden');
		this.container.innerHTML=`
			<div class="modal-card">
				<div class="modal-header">
					<h3>Darkroom: Photo 51 Development</h3>
					<button class="close-btn" id="mgClose" style="${this.isManual?'':'display:none;'}">&times;</button>
				</div>
				<p class="modal-desc">Agitate the chemical developer tray for 6-8 seconds to properly emerge the crystalline helical pattern.</p>
				<div class="darkroom-wrap">
					<div class="tray-box" id="trayBox">
						<div class="liquid-layer" id="liquidLayer"></div>
						<div class="film-plate" id="filmPlate">
							<img src="assets/images/items/Form B.png" alt="Photo 51" id="photo51Img">
						</div>
					</div>
				</div>
				<div class="mg-controls">
					<button class="secondary-btn" id="agitateBtn">Agitate Tray</button>
					<button class="primary-btn" id="liftBtn" disabled>Lift Film Plate</button>
					<span class="timer-badge" id="timerBadge">Bath Time: 0.0s</span>
				</div>
				<div class="mg-status" id="mgDarkStatus">Status: Film submerged in chemical developer. Keep agitating.</div>
			</div>
		`;
		const closeBtn=document.getElementById('mgClose');
		if(closeBtn) closeBtn.onclick=()=>this.close();
		this.setupDarkroom();
	}
	setupDarkroom(){
		const tray=document.getElementById('trayBox');
		const img=document.getElementById('photo51Img');
		const agitateBtn=document.getElementById('agitateBtn');
		const liftBtn=document.getElementById('liftBtn');
		const timerBadge=document.getElementById('timerBadge');
		const status=document.getElementById('mgDarkStatus');
		let bathSeconds=0;
		let interval=null;
		agitateBtn.onclick=()=>{
			tray.classList.add('rocking');
			setTimeout(()=>tray.classList.remove('rocking'),400);
			if(window.audioMgr) window.audioMgr.playSFX('bubbling');
			if(!interval){
				interval=setInterval(()=>{
					bathSeconds+=0.5;
					timerBadge.textContent=`Bath Time: ${bathSeconds.toFixed(1)}s`;
					const op=Math.min(1,bathSeconds/6);
					img.style.opacity=op;
					if(bathSeconds>=5.5&&bathSeconds<=9.5){
						liftBtn.disabled=false;
						status.innerHTML='<span style="color:#10b981;font-weight:bold;">Optimal development reached! Lift film immediately.</span>';
					}else if(bathSeconds>9.5){
						status.innerHTML='<span style="color:#ef4444;font-weight:bold;">Overdeveloping! Contrast fogging occurs.</span>';
					}
				},500);
			}
		};
		liftBtn.onclick=()=>{
			if(interval) clearInterval(interval);
			interval=null;
			if(window.audioMgr) window.audioMgr.playSFX('camera_shutter');
			if(bathSeconds>=5.5&&bathSeconds<=9.5){
				status.innerHTML='<span style="color:#10b981;font-weight:bold;">Photograph 51 developed with pristine clarity! The helical cross is indisputable.</span><br><button class="primary-btn" id="mgContinueBtn" style="margin-top:10px;">Continue Story →</button>';
				if(window.audioMgr) window.audioMgr.playSFX('goal_success');
				window.storyEngine.unlockedMinigames.add('darkroom');
				window.storyEngine.saveProgress();
				if(window.uiCtrl) window.uiCtrl.updateMinigamesHub();
				const contBtn=document.getElementById('mgContinueBtn');
				if(contBtn) contBtn.onclick=()=>this.close();
				setTimeout(()=>{if(this.activeGame==='darkroom') this.close();},2200);
			}else{
				status.innerHTML='<span style="color:#ef4444;font-weight:bold;">Plate spoiled by improper timing. Click Agitate to restart chemical bath for 6-8 seconds.</span>';
				if(window.audioMgr) window.audioMgr.playSFX('fail_thud');
				bathSeconds=0;
				img.style.opacity=0;
				timerBadge.textContent='Bath Time: 0.0s';
				agitateBtn.disabled=false;
				liftBtn.disabled=true;
			}
		};
	}
}
window.minigameCtrl=new MinigameController();