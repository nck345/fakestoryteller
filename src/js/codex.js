class CodexController{
	constructor(){
		this.container=null;
	}
	init(containerEl){
		this.container=containerEl;
	}
	open(){
		if(!this.container) return;
		this.container.classList.remove('hidden');
		this.container.innerHTML=`
			<div class="modal-card codex-card">
				<div class="modal-header">
					<h3>Rosalind Franklin's Lab Notebook & Historical Archive</h3>
					<button class="close-btn" id="codexClose">&times;</button>
				</div>
				<div class="codex-nav">
					<button class="tab-btn active" data-tab="bio">Biography & Timeline</button>
					<button class="tab-btn" data-tab="discoveries">Scientific Contributions</button>
					<button class="tab-btn" data-tab="photo51">Photograph 51 Deep Dive</button>
					<button class="tab-btn" data-tab="instruments">Apparatus & Methods</button>
				</div>
				<div class="codex-body" id="codexBody"></div>
			</div>
		`;
		document.getElementById('codexClose').onclick=()=>this.close();
		const tabs=this.container.querySelectorAll('.tab-btn');
		tabs.forEach(btn=>{
			btn.onclick=()=>{
				tabs.forEach(b=>b.classList.remove('active'));
				btn.classList.add('active');
				this.renderTab(btn.dataset.tab);
			};
		});
		this.renderTab('bio');
		if(window.audioMgr) window.audioMgr.playSFX('button_click');
	}
	close(){
		if(this.container){
			this.container.classList.add('hidden');
			this.container.innerHTML='';
		}
	}
	renderTab(tab){
		const body=document.getElementById('codexBody');
		if(!body) return;
		if(tab==='bio'){
			body.innerHTML=`
				<div class="codex-section">
					<div class="bio-hero">
						<img src="assets/images/characters/rosalindfranklin.png" alt="Rosalind Franklin" class="bio-avatar">
						<div>
							<h4>Rosalind Elsie Franklin (1920 - 1958)</h4>
							<p>Physical chemist, crystallographer, and pioneer whose unmatched experimental rigor produced the decisive empirical evidence for the structure of DNA, carbon microstructures, and RNA viruses.</p>
						</div>
					</div>
					<div class="timeline">
						<div class="tl-item">
							<span class="tl-year">1920</span>
							<p>Born July 25 in Notting Hill, London, into an influential British Jewish family devoted to scholarship and civic responsibility.</p>
						</div>
						<div class="tl-item">
							<span class="tl-year">1938-1941</span>
							<p>Attends Newnham College, Cambridge, passing natural sciences with Second Class Honors in physical chemistry.</p>
						</div>
						<div class="tl-item">
							<span class="tl-year">1942-1946</span>
							<p>Investigates coal porosity at BCURA, discovering molecular sieve properties critical to wartime gas masks.</p>
						</div>
						<div class="tl-item">
							<span class="tl-year">1947-1950</span>
							<p>Works at Laboratoire Central in Paris under Jacques Mering, mastering X-ray diffraction and classifying graphitizing carbons.</p>
						</div>
						<div class="tl-item">
							<span class="tl-year">1951-1953</span>
							<p>Fellowship at King’s College London; isolates Form A and Form B DNA and captures Photograph 51 with Raymond Gosling.</p>
						</div>
						<div class="tl-item">
							<span class="tl-year">1953-1958</span>
							<p>Heads research team at Birkbeck College, decoding Tobacco Mosaic Virus (TMV) and Poliovirus crystals before her untimely death at 37.</p>
						</div>
					</div>
				</div>
			`;
		}else if(tab==='discoveries'){
			body.innerHTML=`
				<div class="codex-section">
					<div class="card-grid">
						<div class="info-box">
							<h5>1. Coal Porosity & Molecular Sieves (1942-1946)</h5>
							<p>Franklin determined true density of coals using helium gas displacement, proving coals contain microscopic pores acting as selective molecular sieves. Her work earned her Cambridge PhD and directly modernized military respirators.</p>
						</div>
						<div class="info-box">
							<h5>2. Graphitizing vs. Non-graphitizing Carbons (1951)</h5>
							<p>Using X-ray diffraction, she established the fundamental distinction between carbons that graphitize upon heating (>3000°C) and those with cross-linked polymer matrices that cannot, a benchmark still vital to carbon fiber industry.</p>
						</div>
						<div class="info-box">
							<h5>3. Two Reversible Forms of DNA (1951)</h5>
							<p>Franklin resolved decades of blurry crystallography by showing DNA alters structure based on relative humidity: crystalline Form A (dry) and helical Form B (wet).</p>
						</div>
						<div class="info-box">
							<h5>4. Tobacco Mosaic Virus & Polio Structure (1953-1958)</h5>
							<p>At Birkbeck, she demonstrated TMV is a hollow cylindrical protein shell with a single RNA strand embedded internally, revolutionizing modern structural virology.</p>
						</div>
					</div>
				</div>
			`;
		}else if(tab==='photo51'){
			body.innerHTML=`
				<div class="codex-section">
					<div class="photo51-breakdown">
						<img src="assets/images/items/Form B.png" alt="Photograph 51" class="photo51-img">
						<div>
							<h4>Photograph 51 (May 1952)</h4>
							<p>Taken by Rosalind Franklin and Raymond Gosling at King’s College London, Photograph 51 is celebrated as one of the most consequential photographs in the history of science.</p>
							<ul>
								<li><strong>The "X" Shape:</strong> Characteristic mathematical signature of a helical diffraction pattern according to Cochran-Crick-Vand theory.</li>
								<li><strong>Missing 4th Layer Line:</strong> Indicated that the two intertwining helical backbones were offset, producing the distinct major and minor grooves.</li>
								<li><strong>Layer Line Spacing:</strong> 34 Ångströms (3.4 nm) repeat per complete turn of 10 base pairs.</li>
								<li><strong>Phosphates on Outside:</strong> Franklin firmly established that hydrophilic phosphate groups must interact with surrounding water molecules on the exterior.</li>
							</ul>
						</div>
					</div>
				</div>
			`;
		}else if(tab==='instruments'){
			body.innerHTML=`
				<div class="codex-section">
					<div class="card-grid">
						<div class="info-box">
							<h5>Fine-Focus Pinhole Collimator</h5>
							<p>Franklin designed micro-collimators with apertures under 100 micrometers, directing monochromatic Cu K-alpha X-rays without parasitic background scattering.</p>
						</div>
						<div class="info-box">
							<h5>Atmospheric Salt Humidity Chamber</h5>
							<p>By suspending fibers over saturated salt solutions (ammonium sulfate, sodium chloride) in airtight vessels, Franklin achieved precise relative humidity control (75%-92%).</p>
						</div>
						<div class="info-box">
							<h5>Fourier Transform Patterson Synthesis</h5>
							<p>Before electronic computers, Franklin computed 2D Patterson cylindrical vector distribution functions by hand using Lipson-Beevers strips.</p>
						</div>
						<div class="info-box">
							<h5>Monoclinic C2 Space Group Analysis</h5>
							<p>Franklin identified the space group symmetry of crystalline Form A DNA as C2, requiring a twofold dyad axis, proving the two strands must run antiparallel.</p>
						</div>
					</div>
				</div>
			`;
		}
	}
}
window.codexCtrl=new CodexController();
