const STORY_CARDS={
	bombed_london:{id:'bombed_london',type:'setting',name:'Bombed London',image:'assets/images/backgrounds/Bombed London.png',desc:'London during the Blitz. The air is fraught with smoke and danger.'},
	bcura_lab:{id:'bcura_lab',type:'setting',name:'BCURA Lab',image:'assets/images/backgrounds/BCURA Lab.png',desc:'British Coal Utilisation Research Association laboratory.'},
	paris_station:{id:'paris_station',type:'setting',name:'Paris Station',image:'assets/images/backgrounds/Paris train station.png',desc:'Gare de Paris. Arrival hub of steam trains and fresh beginnings.'},
	paris_lab:{id:'paris_lab',type:'setting',name:'Paris Lab',image:'assets/images/backgrounds/Paris Lab (Laboratoire Central).png',desc:'Laboratoire Central des Services Chimiques de l’État in Paris.'},
	snow_mountains:{id:'snow_mountains',type:'setting',name:'Snow Mountains',image:'assets/images/backgrounds/Snow mountains.png',desc:'The French Alps where Rosalind revitalizes her spirits hiking.'},
	randall_office:{id:'randall_office',type:'setting',name:"Randall's Office",image:'assets/images/backgrounds/Randall_s Office.png',desc:'Director John Randall’s office at King’s College London.'},
	common_room:{id:'common_room',type:'setting',name:'Common Room',image:'assets/images/backgrounds/Common room (Male-only).png',desc:'King’s College Senior Common Room, restricted to male staff.'},
	basement_room:{id:'basement_room',type:'setting',name:'Basement Room',image:'assets/images/backgrounds/Basement room.png',desc:'The dim underground research room where Rosalind worked.'},
	basement_lab:{id:'basement_lab',type:'setting',name:'Basement Lab',image:'assets/images/backgrounds/Basement lab.png',desc:'The subterranean X-ray biophysics laboratory at King’s College.'},
	lecture_hall:{id:'lecture_hall',type:'setting',name:'Lecture Hall',image:'assets/images/backgrounds/Lecture Hall.png',desc:'Academic hall where Rosalind delivered her seminar on DNA hydration.'},
	cambridge_lab:{id:'cambridge_lab',type:'setting',name:'Cambridge Lab',image:'assets/images/backgrounds/Cambridge Lab.png',desc:'Cavendish lab workspace occupied by Watson and Crick in Cambridge.'},
	darkroom:{id:'darkroom',type:'setting',name:'Darkroom',image:'assets/images/backgrounds/Darkroom Basement Lab.png',desc:'Chemical darkroom used to develop high-resolution X-ray films.'},
	kings_college:{id:'kings_college',type:'setting',name:"King's College",image:'assets/images/backgrounds/King_s College.png',desc:'Main quadrangle and corridors of King’s College London.'},
	cavendish_lab:{id:'cavendish_lab',type:'setting',name:'Cavendish Lab',image:'assets/images/backgrounds/Cavendish Lab.png',desc:'The historic physics laboratory at Cambridge University.'},
	rosalind:{id:'rosalind',type:'character',name:'Rosalind Franklin',image:'assets/images/characters/rosalindfranklin.png',desc:'Brilliant physical chemist and crystallographer.'},
	rosalind_chemist:{id:'rosalind_chemist',type:'character',name:'Rosalind Franklin',image:'assets/images/characters/rosalindfranklin_chemist.png',desc:'Rosalind in her laboratory coat at King’s College.'},
	soldiers:{id:'soldiers',type:'character',name:'Soldiers',image:'assets/images/characters/soldiers.png',desc:'Wartime personnel needing reliable protection against poison gas.'},
	adrienne_weill:{id:'adrienne_weill',type:'character',name:'Adrienne Weill',image:'assets/images/characters/Adrienne Weill.png',desc:'French physicist, student of Marie Curie, and mentor to Rosalind.'},
	jacques_mering:{id:'jacques_mering',type:'character',name:'Jacques Mering',image:'assets/images/characters/Jacques Mering.png',desc:'X-ray diffraction expert who trained Rosalind in Paris.'},
	male_scientists:{id:'male_scientists',type:'character',name:'Colleagues',image:'assets/images/characters/malescientist.png',desc:'Fellow scientists and researchers in the Paris and King’s labs.'},
	john_randall:{id:'john_randall',type:'character',name:'John Randall',image:'assets/images/characters/John Randall.png',desc:'Director of the biophysics unit at King’s College London.'},
	maurice_wilkins:{id:'maurice_wilkins',type:'character',name:'Maurice Wilkins',image:'assets/images/characters/Maurice Wikins.png',desc:'Deputy director at King’s studying nucleic acids.'},
	raymond_gosling:{id:'raymond_gosling',type:'character',name:'Raymond Gosling',image:'assets/images/characters/Raymond Gosling.png',desc:'PhD research student who collaborated closely with Franklin.'},
	james_watson:{id:'james_watson',type:'character',name:'James Watson',image:'assets/images/characters/James Watson.png',desc:'American biologist working at Cavendish Laboratory.'},
	francis_crick:{id:'francis_crick',type:'character',name:'Francis Crick',image:'assets/images/characters/Francis Crick.png',desc:'British physicist turned molecular biologist at Cambridge.'},
	lawrence_bragg:{id:'lawrence_bragg',type:'character',name:'Lawrence Bragg',image:'assets/images/characters/Lawrence Bragg.png',desc:'Nobel laureate director of Cavendish Laboratory.'},
	max_perutz:{id:'max_perutz',type:'character',name:'Max Perutz',image:'assets/images/characters/Max Perutz.png',desc:'MRC unit member who shared Franklin’s report.'},
	nature_publisher:{id:'nature_publisher',type:'character',name:'Nature Journal',image:'assets/images/characters/chemistryteacher.png',desc:'Publisher of the historic April 25, 1953 DNA papers.'},
	helium_cylinder:{id:'helium_cylinder',type:'item',name:'Helium Tank',image:'assets/images/items/helium gas.png',desc:'Gas cylinder used to measure micropore volume in coal.'},
	coal_sample:{id:'coal_sample',type:'item',name:'Coal Sample',image:'assets/images/items/coal sample.png',desc:'Various carbon specimens tested for density and porosity.'},
	pore_structure:{id:'pore_structure',type:'item',name:'Pore Structure',image:'assets/images/items/carbon pore structure.png',desc:'Microscopic molecular sieves discovered inside coal.'},
	gas_mask:{id:'gas_mask',type:'item',name:'Gas Mask',image:'assets/images/items/gas mask.png',desc:'Military respirator needing high-performance carbon filters.'},
	sealed_letter:{id:'sealed_letter',type:'item',name:'Sealed Letter',image:'assets/images/items/sealed letter.png',desc:'Recommendation letter securing Rosalind’s Paris position.'},
	baggage:{id:'baggage',type:'item',name:'Suitcase',image:'assets/images/items/lunch tin.png',desc:'Luggage packed for travels between London, Paris, and Birkbeck.'},
	xray_beam:{id:'xray_beam',type:'item',name:'X-Ray Beam',image:'assets/images/items/x-ray souorce.png',desc:'Finely collimated beam of X-rays for diffraction study.'},
	amorphous_carbon:{id:'amorphous_carbon',type:'item',name:'Disordered Carbon',image:'assets/images/items/amorphous carbon.png',desc:'Non-crystalline carbon whose structure baffled chemists.'},
	film:{id:'film',type:'item',name:'X-Ray Film',image:'assets/images/items/x-ray diffraction film.png',desc:'Photographic emulsion recording scattered X-ray patterns.'},
	math_models:{id:'math_models',type:'item',name:'Math Models',image:'assets/images/items/mathematical models.png',desc:'Fourier transform calculations mapping electron density.'},
	carbon_chart:{id:'carbon_chart',type:'item',name:'Carbon Chart',image:'assets/images/items/carbon type chart.png',desc:'Chart proving graphitizing vs non-graphitizing carbon.'},
	lunch:{id:'lunch',type:'item',name:'Lunch',image:'assets/images/items/Lunch.png',desc:'Meal tin or lunch plate representing daily laboratory life.'},
	desk:{id:'desk',type:'item',name:'Work Desk',image:'assets/images/items/lab workstation desk.png',desc:'Rosalind’s wooden laboratory and writing workstation.'},
	assignment_letter:{id:'assignment_letter',type:'item',name:'Assignment Paper',image:'assets/images/items/Assignment Letter.png',desc:'Director Randall’s letter giving Franklin charge of DNA work.'},
	dna_fibers:{id:'dna_fibers',type:'item',name:'DNA Fibers',image:'assets/images/items/DNA Fibers.png',desc:'Fine sodium thymonucleate DNA specimen fibers.'},
	xray_camera:{id:'xray_camera',type:'item',name:'X-Ray Camera',image:'assets/images/items/x-ray camera.png',desc:'Micro-focus X-ray camera equipped with collimator.'},
	dry_chamber:{id:'dry_chamber',type:'item',name:'Dry Chamber',image:'assets/images/items/Humidity Chamber.png',desc:'Chamber with low humidity producing crystalline Form A DNA.'},
	humid_chamber:{id:'humid_chamber',type:'item',name:'Humid Chamber',image:'assets/images/items/Humidity Chamber.png',desc:'Chamber maintaining saturated salt vapor for Form B DNA.'},
	form_a:{id:'form_a',type:'item',name:'Form A Film',image:'assets/images/items/Form A.png',desc:'Diffraction pattern of crystalline, unhydrated DNA.'},
	form_b:{id:'form_b',type:'item',name:'Form B Film',image:'assets/images/items/Form B.png',desc:'Diffraction pattern showing hydrated paracrystalline helix.'},
	wire_model:{id:'wire_model',type:'item',name:'Wire DNA Model',image:'assets/images/items/3-chain helix.png',desc:'Watson & Crick’s early 3-chain model with inside phosphates.'},
	water:{id:'water',type:'item',name:'Water',image:'assets/images/items/Water.png',desc:'Essential water molecules stabilizing the helical exterior.'},
	stopwatch:{id:'stopwatch',type:'item',name:'Stopwatch',image:'assets/images/items/Stopwatch.png',desc:'Precision timer timing the 62-hour continuous exposure.'},
	photo_51:{id:'photo_51',type:'item',name:'Photograph 51',image:'assets/images/items/Form B.png',desc:'The celebrated X-ray diffraction photo proving double helix.'},
	notebook:{id:'notebook',type:'item',name:'Lab Notebook',image:'assets/images/items/Notebook.png',desc:'Franklin’s experimental notebook with measurements and proofs.'},
	research_report:{id:'research_report',type:'item',name:'Research Report',image:'assets/images/items/Assignment Letter.png',desc:'MRC report detailing Franklin’s monoclinic C2 symmetry data.'},
	double_helix_model:{id:'double_helix_model',type:'item',name:'Double Helix',image:'assets/images/items/3-chain helix.png',desc:'The completed antiparallel double helical DNA structure.'},
	papers:{id:'papers',type:'item',name:'Research Papers',image:'assets/images/items/Paper.png',desc:'Published scientific articles in Nature, April 1953.'}
};

const exactMatch=(s,chars,items,reqSetting,reqChars,reqItems)=>{
	if(reqSetting&&s!==reqSetting) return false;
	if(!reqSetting&&s) return false;
	if(chars.length!==reqChars.length) return false;
	for(let i=0;i<reqChars.length;++i) if(!chars.includes(reqChars[i])) return false;
	if(items.length!==reqItems.length) return false;
	for(let i=0;i<reqItems.length;++i) if(!items.includes(reqItems[i])) return false;
	return true;
};

const CHAPTERS_DATA=[
	{
		id:'ch3',
		chapterNum:3,
		title:'Chapter 3: The Coal Masks and the X-ray (1947-1950)',
		bgm:'wartime',
		acts:[
			{
				id:'act3_1',
				chapterId:'ch3',
				actNumber:'3.1',
				title:'Rosalind Creates Gas Mask Filters',
				goal:'Protective filters are an important wartime concern. At BCURA, Rosalind investigates how coal porosity affects gas absorption.',
				bgm:'wartime',
				framesCount:3,
				availableCards:['bombed_london','bcura_lab','rosalind','soldiers','helium_cylinder','coal_sample','pore_structure','gas_mask'],
				hint:'London needs protection. At BCURA, use helium to investigate coal, then equip soldiers with active pore filters.',
				fullIntroText:"Protective filters are an important wartime concern. At BCURA, Rosalind investigates how the hidden structure of coal affects the way gases enter it.",
				introText:'Protective filters are an important wartime concern. At BCURA, Rosalind investigates how the hidden structure of coal affects the way gases enter it.',
				frames:[
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'bombed_london',['soldiers'],['gas_mask']),
						solution:{setting:'bombed_london',characters:['soldiers'],items:['gas_mask']},
						shortOutcome:'Wartime filter demand',
						title:'During the war, protective filters are urgently needed. "We need filters we can rely on," a soldier says.',
						anim:'assets/images/animations/C3_1_Fail_01_Soldiers_Filterless_Mask_Coughing.gif',
						sound:'bomb_explosion'
					},
					{
						check:(s,chars,items,frame)=>exactMatch(s,chars,items,'bcura_lab',['rosalind'],['coal_sample','helium_cylinder'])&&(frame?.gasLabSolved||false),
						solution:{setting:'bcura_lab',characters:['rosalind'],items:['coal_sample','helium_cylinder']},
						shortOutcome:'Helium micropore testing',
						title:'By measuring helium gas displacement inside coal, Rosalind discovers tiny pores acting as molecular sieves.',
						sound:'bubbling',
						triggerGasLab:true
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'bombed_london',['soldiers'],['gas_mask','pore_structure']),
						solution:{setting:'bombed_london',characters:['soldiers'],items:['gas_mask','pore_structure']},
						shortOutcome:'Pore-filtered gas mask',
						title:'Rosalind connects her coal pore data to gas mask filters. Soldiers put them on and breathe safely!',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars)=>s==='bombed_london'&&chars.includes('rosalind'),
						text:'Rosalind seeks cover! Precision lab tests cannot be conducted on a bombed street.',
						anim:'assets/images/animations/C3_1_Fail_02_Rosalind_Ducking_Air_Raid.gif',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='bcura_lab'&&chars.includes('soldiers')&&items.includes('helium_cylinder'),
						text:'Soldiers look at the helium tank with question marks. They do not know lab gas methods.',
						anim:'assets/images/animations/C3_1_Fail_03_Soldiers_Confused_Helium_Tank.gif',
						sound:'wood_thud'
					},
					{
						check:(s,chars,items)=>s==='bcura_lab'&&chars.includes('rosalind')&&items.includes('coal_sample')&&!items.includes('helium_cylinder'),
						text:'Rosalind inspects the plain coal. Without helium gas flow, micropores cannot be measured.',
						anim:'assets/images/animations/C3_1_Fail_04_Rosalind_Wrong_Coal_Inspection.gif',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='bombed_london'&&chars.includes('soldiers')&&items.includes('coal_sample'),
						text:'Soldiers hold raw black coal to their faces. They get smeared with soot while toxic fumes still enter!',
						anim:'assets/images/animations/C3_1_Fail_05_Soldiers_Coal_On_Face_Coughing.gif',
						sound:'fail_thud'
					}
				]
			},
			{
				id:'act3_2',
				chapterId:'ch3',
				actNumber:'3.2',
				title:'Rosalind Moves to Paris',
				goal:'After her coal research, Rosalind turns to mentor Adrienne Weill to find research connections and opportunities in France.',
				bgm:'paris',
				framesCount:4,
				availableCards:['paris_station','paris_lab','rosalind','adrienne_weill','jacques_mering','sealed_letter','baggage'],
				hint:'Rosalind needs a connection before she travels. Begin with her letter to Adrienne, then the introduction to Mering.',
				fullIntroText:"After her coal research, Rosalind begins looking for a new opportunity.\r\nRosalind turns to Adrienne Weill, a scientist who can help her find research connections in France.",
				introText:'After her coal research, Rosalind begins looking for a new opportunity. She turns to Adrienne Weill, who can help her find research connections in France.',
				frames:[
					{
						check:(s,chars,items)=>exactMatch(null,chars,items,null,['rosalind','adrienne_weill'],['sealed_letter']),
						solution:{setting:null,characters:['rosalind','adrienne_weill'],items:['sealed_letter']},
						shortOutcome:'Letter to Adrienne',
						title:'Rosalind writes to mentor Adrienne Weill: "Find a job for someone who knows very little chemistry but a lot about holes in coal."',
						anim:'assets/images/animations/C3_2_Rosalind_Writes_Letter_ACTION_TRANSPARENT.gif',
						sound:'pencil_writing'
					},
					{
						check:(s,chars,items)=>exactMatch(null,chars,items,null,['adrienne_weill','jacques_mering'],['sealed_letter']),
						solution:{setting:null,characters:['adrienne_weill','jacques_mering'],items:['sealed_letter']},
						shortOutcome:'Recommendation to Mering',
						title:'Adrienne Weill stamps her recommendation and introduces Rosalind to Jacques Mering in Paris.',
						anim:'assets/images/animations/C3_2_Document_Stamp_Preview_Rosalind_ACTION_TRANSPARENT.gif',
						sound:'paper_slide'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'paris_station',['rosalind'],['baggage'])||exactMatch(s,chars,items,'paris_station',['rosalind'],[]),
						solution:{setting:'paris_station',characters:['rosalind'],items:['baggage']},
						shortOutcome:'Arrival in Paris',
						title:'Rosalind arrives at the Paris train station with her suitcase, stepping into a new scientific world.',
						sound:'train_whistle'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'paris_lab',['rosalind','jacques_mering'],[]),
						solution:{setting:'paris_lab',characters:['rosalind','jacques_mering'],items:[]},
						shortOutcome:'Paris laboratory entry',
						title:'Jacques Mering welcomes Rosalind into the laboratory and introduces her to X-ray crystallography equipment.',
						anim:'assets/images/animations/C3_2_Rosalind_Handshake_Colleague_ACTION_TRANSPARENT.gif',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars)=>s==='paris_station'&&chars.includes('rosalind')&&chars.includes('jacques_mering'),
						text:'Rosalind and Mering walk past each other as complete strangers on the station platform.',
						sound:'wood_thud'
					},
					{
						check:(s,chars)=>s==='paris_station'&&chars.includes('adrienne_weill'),
						text:'Adrienne Weill stands on the train platform alone, checking her watch.',
						sound:'wood_thud'
					},
					{
						check:(s,chars,items)=>chars.includes('jacques_mering')&&items.includes('sealed_letter')&&!chars.includes('adrienne_weill'),
						text:'Mering stares at a blank paper because he does not know who Rosalind is.',
						sound:'fail_thud'
					}
				]
			},
			{
				id:'act3_3',
				chapterId:'ch3',
				actNumber:'3.3',
				title:'Rosalind Classifies Carbon',
				goal:'Rosalind explores hidden carbon structures by capturing and analyzing how X-rays scatter onto photographic film.',
				bgm:'tension',
				framesCount:3,
				availableCards:['paris_lab','rosalind','male_scientists','xray_beam','amorphous_carbon','film','math_models','carbon_chart'],
				hint:'Colleagues struggle with disordered carbon. Rosalind shines an X-ray beam onto film, then applies math models.',
				fullIntroText:"Rosalind now has a new way to explore the structures hidden inside materials.\r\nX-rays leave patterns on photographic film. By studying these patterns, Rosalind can investigate how carbon is arranged inside.",
				introText:'Rosalind now has a new way to explore structures hidden inside materials: X-rays leave patterns on photographic film, revealing internal order.',
				frames:[
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'paris_lab',['male_scientists'],['amorphous_carbon']),
						solution:{setting:'paris_lab',characters:['male_scientists'],items:['amorphous_carbon']},
						shortOutcome:'Disordered carbon challenge',
						title:'Other scientists cannot understand the structural pattern of disordered carbon samples.',
						anim:'assets/images/animations/C3_3_Scientists_Confused_Discussion_ACTION_TRANSPARENT.gif',
						sound:'wood_thud'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'paris_lab',['rosalind'],['xray_beam','amorphous_carbon','film']),
						solution:{setting:'paris_lab',characters:['rosalind'],items:['xray_beam','amorphous_carbon','film']},
						shortOutcome:'X-ray beam scattering',
						title:'Rosalind aligns a fine X-ray beam through the carbon sample, recording diffraction rings on film.',
						anim:'assets/images/animations/C3_3_Rosalind_Adjusts_Xray_Equipment_ACTION_TRANSPARENT.gif',
						sound:'xray_machine'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'paris_lab',['rosalind'],['film','math_models','carbon_chart']),
						solution:{setting:'paris_lab',characters:['rosalind'],items:['film','math_models','carbon_chart']},
						shortOutcome:'Fourier mathematical proof',
						title:'Using mathematical Fourier models, Rosalind proves carbon splits into graphitizing and non-graphitizing forms!',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('rosalind')&&items.includes('film')&&items.includes('carbon_chart')&&!items.includes('math_models'),
						text:'Rosalind looks at blurry film spots. Without math calculations, she cannot prove the atomic pattern.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('male_scientists')&&items.includes('xray_beam')&&items.includes('amorphous_carbon'),
						text:'Scientists crank the voltage dial carelessly. A blinding flash pops and ruins the film!',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('rosalind')&&items.includes('math_models')&&items.includes('amorphous_carbon')&&!items.includes('film'),
						text:'Rosalind holds a pen ready to calculate, but has no diffraction data to work with.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('male_scientists')&&items.includes('film')&&items.includes('math_models'),
						text:'The scientists look at complicated formulas with swirling question marks over their heads.',
						sound:'wood_thud'
					}
				]
			},
			{
				id:'act3_4',
				chapterId:'ch3',
				actNumber:'3.4',
				title:"Rosalind's Belief",
				goal:'Amid Parisian lab debates and alpine hikes, Rosalind articulates her personal creed on scientific dedication and faith.',
				bgm:'paris',
				framesCount:3,
				availableCards:['paris_lab','snow_mountains','rosalind','male_scientists','lunch','desk','sealed_letter'],
				hint:'Rosalind debates over lunch with colleagues, recharges hiking in the Alps, and writes a letter of faith at her desk.',
				fullIntroText:"Paris gives Rosalind new scientific skills-and a life beyond the laboratory.\r\nBetween experiments, Rosalind enjoys discussions with colleagues, walks in the mountains, and moments of reflection.",
				introText:'In France, Rosalind enjoyed camaraderie and equality. Answering her father’s questions on faith and science, she articulated her noble philosophy.',
				frames:[
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'paris_lab',['rosalind','male_scientists'],['lunch']),
						solution:{setting:'paris_lab',characters:['rosalind','male_scientists'],items:['lunch']},
						shortOutcome:'Lab lunch discussion',
						title:'Rosalind and French colleagues debate scientific ideas around the lab bench over lunch.',
						anim:'assets/images/animations/C3_4_French_Colleagues_Lunch_Debate_GameReady.gif',
						sound:'children_laugh'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'snow_mountains',['rosalind'],[]),
						solution:{setting:'snow_mountains',characters:['rosalind'],items:[]},
						shortOutcome:'Alpine mountain hike',
						title:'Rosalind hikes through alpine snowy ridges, drawing renewed energy from the mountain air.',
						anim:'assets/images/animations/C3_4_Rosalind_Alpine_Hiking_GameReady.gif',
						sound:'chime'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'paris_lab',['rosalind'],['desk','sealed_letter']),
						solution:{setting:'paris_lab',characters:['rosalind'],items:['desk','sealed_letter']},
						shortOutcome:'Letter writing home',
						title:'At her desk, Rosalind writes: "All that is necessary for faith is the belief that by doing our best we shall come nearer to success."',
						anim:'assets/images/animations/C3_4_Rosalind_Reflective_Writing_Preview.gif',
						sound:'pencil_writing'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>s==='snow_mountains'&&chars.includes('rosalind')&&items.includes('sealed_letter'),
						text:'A ferocious gust of mountain wind rips loose papers from her hands, scattering them down the peak!',
						anim:'assets/images/animations/C3_4_Fail_01_Flying_Papers_GameReady.gif',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>chars.includes('male_scientists')&&items.includes('sealed_letter'),
						text:'Colleagues politely turn away to preserve Franklin’s personal privacy.',
						anim:'assets/images/animations/C3_4_Fail_02_Colleagues_Turn_Away_GameReady.gif',
						sound:'wood_thud'
					},
					{
						check:(s,chars,items)=>s==='snow_mountains'&&chars.includes('rosalind')&&items.includes('lunch'),
						text:'Unwrapping a sandwich on a freezing mountain peak, Rosalind shivers violently and packs it away!',
						anim:'assets/images/animations/C3_4_Fail_03_Freezing_On_Mountain_GameReady.gif',
						sound:'fail_thud'
					}
				]
			}
		]
	},
	{
		id:'ch4',
		chapterNum:4,
		title:'Chapter 4: DNA & Photo 51 (1951-1953)',
		bgm:'mysterious',
		acts:[
			{
				id:'act4_1',
				chapterId:'ch4',
				actNumber:'4.1',
				title:'Rosalind Begins DNA Research and Isolation',
				goal:'Rosalind joins King’s College London to lead DNA research, facing institutional barriers and administrative ambiguity.',
				bgm:'mysterious',
				framesCount:4,
				availableCards:['randall_office','common_room','basement_room','rosalind_chemist','john_randall','maurice_wilkins','assignment_letter','lunch'],
				hint:'Director Randall gives Rosalind the assignment letter. Wilkins treats her as an assistant. Wilkins enjoys the common room, but Rosalind is excluded.',
				fullIntroText:"Rosalind arrives with expertise and a research assignment. But unclear expectations and unequal access to academic spaces make her new workplace difficult.",
				introText:'In 1951, Rosalind accepted a fellowship at King’s College London. Administrative ambiguity and patriarchal customs created deep friction from day one.',
				frames:[
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'randall_office',['john_randall','rosalind_chemist'],['assignment_letter']),
						solution:{setting:'randall_office',characters:['john_randall','rosalind_chemist'],items:['assignment_letter']},
						shortOutcome:"Director Randall's assignment",
						title:'Director John Randall issues an official letter appointing Rosalind to lead DNA X-ray research.',
						sound:'paper_slide'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'basement_room',['maurice_wilkins','rosalind_chemist'],[]),
						solution:{setting:'basement_room',characters:['maurice_wilkins','rosalind_chemist'],items:[]},
						shortOutcome:'Wilkins role misunderstanding',
						title:'Maurice Wilkins misinterprets her appointment and assumes Rosalind was hired as his assistant.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'common_room',['maurice_wilkins'],['lunch']),
						solution:{setting:'common_room',characters:['maurice_wilkins'],items:['lunch']},
						shortOutcome:'Senior common room lunch',
						title:'Wilkins and male academics enjoy lunch in King’s Senior Common Room.',
						sound:'card_pickup'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'basement_room',['rosalind_chemist'],['lunch']),
						solution:{setting:'basement_room',characters:['rosalind_chemist'],items:['lunch']},
						shortOutcome:'Basement laboratory focus',
						title:'Barred from the male-only room, Rosalind eats lunch alone in her basement lab, resolute and focused.',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars)=>s==='common_room'&&chars.includes('rosalind_chemist'),
						text:'The oak door slams shut! King’s College Common Room strictly enforces its male-only rule.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='basement_room'&&chars.includes('rosalind_chemist')&&chars.includes('maurice_wilkins')&&items.includes('lunch'),
						text:'An awkward silence descends over the basement. Wilkins sweats nervously and scurries upstairs.',
						sound:'fail_thud'
					}
				]
			},
			{
				id:'act4_2',
				chapterId:'ch4',
				actNumber:'4.2',
				title:'Rosalind Separates Two DNA States',
				goal:'Rosalind investigates whether DNA structure depends on moisture, setting up controlled humidity experiments.',
				bgm:'mysterious',
				framesCount:4,
				availableCards:['basement_lab','rosalind_chemist','dna_fibers','xray_camera','dry_chamber','humid_chamber','form_a','form_b'],
				hint:'Random humidity causes blurry films. Rosalind isolates Form A in dry air, Form B in humid air, and compares both.',
				fullIntroText:"At the experiment table, Rosalind turns to a question she can investigate: why do DNA’s patterns change?\r\nDifferent moisture conditions produce different DNA patterns. Rosalind needs to separate the conditions before she can compare the results.",
				introText:'Before Franklin, researchers struggled with contradictory X-ray pictures of DNA because fibers randomly gained and lost ambient moisture.',
				frames:[
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'basement_lab',[],['dna_fibers','xray_camera']),
						solution:{setting:'basement_lab',characters:[],items:['dna_fibers','xray_camera']},
						shortOutcome:'Blurry mixed patterns',
						title:'Without humidity control, random moisture produces blurry, unreadable diffraction smears.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'basement_lab',['rosalind_chemist'],['dna_fibers','dry_chamber']),
						solution:{setting:'basement_lab',characters:['rosalind_chemist'],items:['dna_fibers','dry_chamber']},
						shortOutcome:'Dry Form A isolation',
						title:'Under dry conditions (<50% humidity), Rosalind isolates Form A: crystalline diffraction spots.',
						sound:'camera_shutter'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'basement_lab',['rosalind_chemist'],['dna_fibers','humid_chamber']),
						solution:{setting:'basement_lab',characters:['rosalind_chemist'],items:['dna_fibers','humid_chamber']},
						shortOutcome:'Humid Form B isolation',
						title:'Under humid conditions (>75% humidity), Rosalind isolates Form B: a distinct helical cross pattern.',
						sound:'camera_shutter'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'basement_lab',['rosalind_chemist'],['form_a','form_b']),
						solution:{setting:'basement_lab',characters:['rosalind_chemist'],items:['form_a','form_b']},
						shortOutcome:'Two-state comparison',
						title:'Comparing both films against the light table, Rosalind proves DNA reversibly transitions between two shapes!',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>s==='basement_lab'&&chars.includes('rosalind_chemist')&&items.includes('dna_fibers')&&!items.includes('xray_camera')&&!items.includes('dry_chamber')&&!items.includes('humid_chamber'),
						text:'Rosalind holds the fiber up to the ceiling lamp. To the naked eye, it looks like plain thread.',
						sound:'fail_thud'
					}
				]
			},
			{
				id:'act4_3',
				chapterId:'ch4',
				actNumber:'4.3',
				title:'Watson and Crick Are Stopped from Building Their Model',
				goal:'Watson and Crick build an early DNA model, but a convincing arrangement must agree with experimental findings.',
				bgm:'tension',
				framesCount:4,
				availableCards:['lecture_hall','cambridge_lab','rosalind_chemist','james_watson','francis_crick','lawrence_bragg','wire_model','water'],
				hint:'Rosalind lectures on the necessity of water. Watson and Crick build an inside-out model. Rosalind tests it, and Bragg halts them.',
				fullIntroText:"These findings give Rosalind evidence against which proposed DNA models can be tested.\r\nWatson and Crick are building a model of DNA. But a convincing arrangement must agree with experimental findings.",
				introText:'In 1951, Watson attended Rosalind’s lecture at King’s. Ignoring her findings on water, Watson and Crick built an inside-out model.',
				frames:[
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'lecture_hall',['rosalind_chemist','james_watson'],[]),
						solution:{setting:'lecture_hall',characters:['rosalind_chemist','james_watson'],items:[]},
						shortOutcome:"Rosalind's lecture on water",
						title:'Rosalind stresses water must coat DNA exterior. Watson listens casually without taking notes.',
						sound:'card_pickup'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'cambridge_lab',['james_watson','francis_crick'],['wire_model']),
						solution:{setting:'cambridge_lab',characters:['james_watson','francis_crick'],items:['wire_model']},
						shortOutcome:'Inside-out three-chain model',
						title:'Watson and Crick assemble a brass model with phosphates erroneously placed on the inside.',
						sound:'wire_collapse'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'cambridge_lab',['rosalind_chemist'],['wire_model','water']),
						solution:{setting:'cambridge_lab',characters:['rosalind_chemist'],items:['wire_model','water']},
						shortOutcome:'Experimental critique',
						title:'Rosalind tests their model with water, proving an inside-out structure cannot survive in water.',
						sound:'model_collapse'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'cambridge_lab',['lawrence_bragg','james_watson','francis_crick'],[]),
						solution:{setting:'cambridge_lab',characters:['lawrence_bragg','james_watson','francis_crick'],items:[]},
						shortOutcome:"Bragg's model halt order",
						title:'Director Lawrence Bragg strictly orders Watson and Crick to halt all DNA model-building.',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>chars.includes('james_watson')&&items.includes('water')&&!chars.includes('rosalind_chemist'),
						text:'Watson comically gulps down the demo glass of water!',
						sound:'bubbling'
					},
					{
						check:(s,chars)=>s==='lecture_hall'&&chars.includes('james_watson')&&chars.includes('francis_crick'),
						text:'Watson and Crick try to lecture without empirical data. The audience stares with question marks.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>chars.includes('lawrence_bragg')&&chars.includes('james_watson')&&items.includes('wire_model')&&!items.includes('water'),
						text:'Bragg admires the shiny metal model before discovering its chemical failure.',
						sound:'wood_thud'
					}
				]
			},
			{
				id:'act4_4',
				chapterId:'ch4',
				actNumber:'4.4',
				title:'Rosalind Produces Photo 51 and Decodes It',
				goal:'A clear photograph requires a carefully prepared sample, controlled conditions, and a continuous 62-hour X-ray exposure.',
				bgm:'mysterious',
				framesCount:5,
				availableCards:['basement_lab','darkroom','rosalind_chemist','raymond_gosling','humid_chamber','xray_camera','stopwatch','film','photo_51','notebook'],
				hint:'Mount fiber in humidity chamber, run 62-hour exposure with stopwatch, develop film in darkroom, examine Photo 51, and calculate in notebook.',
				fullIntroText:"More evidence is needed. At King’s, Rosalind and Gosling continue their experiments.\r\nA clear photograph requires a carefully prepared sample, controlled conditions, and a long X-ray exposure.",
				introText:'In May 1952, Franklin and student Raymond Gosling set up a fine-focus camera. After 62 hours of continuous exposure, they extracted Photograph 51.',
				frames:[
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'basement_lab',['rosalind_chemist','raymond_gosling'],['humid_chamber']),
						solution:{setting:'basement_lab',characters:['rosalind_chemist','raymond_gosling'],items:['humid_chamber']},
						shortOutcome:'Fiber mounting in chamber',
						title:'Rosalind and Gosling carefully mount a DNA fiber inside the precision humidity chamber.',
						sound:'card_pickup'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'basement_lab',['rosalind_chemist','raymond_gosling'],['xray_camera','stopwatch']),
						solution:{setting:'basement_lab',characters:['rosalind_chemist','raymond_gosling'],items:['xray_camera','stopwatch']},
						shortOutcome:'62-hour X-ray exposure',
						title:'They begin an unbroken 62-hour X-ray exposure, maintaining constant hydration parameters.',
						sound:'xray_machine'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'darkroom',['raymond_gosling'],['film','photo_51']),
						solution:{setting:'darkroom',characters:['raymond_gosling'],items:['film','photo_51']},
						shortOutcome:'Darkroom plate development',
						title:'In the darkroom chemical bath, Gosling develops the plate, unveiling the historic Photograph 51.',
						sound:'camera_shutter'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'basement_lab',['rosalind_chemist'],['photo_51']),
						solution:{setting:'basement_lab',characters:['rosalind_chemist'],items:['photo_51']},
						shortOutcome:'Photograph 51 helical analysis',
						title:'Rosalind studies the distinctive X-shaped cross on Photograph 51: direct physical proof of a helix.',
						sound:'chime'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'basement_lab',['rosalind_chemist'],['photo_51','notebook']),
						solution:{setting:'basement_lab',characters:['rosalind_chemist'],items:['photo_51','notebook']},
						shortOutcome:'Notebook measurements',
						title:'In her notebook, Rosalind calculates helical dimensions: 34Å repeat and two intertwined strands.',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>s==='darkroom'&&chars.includes('raymond_gosling')&&items.includes('film')&&!items.includes('photo_51'),
						text:'Gosling develops the film too early. It turns out completely blank with no image.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='basement_lab'&&chars.includes('raymond_gosling')&&items.includes('xray_camera')&&!chars.includes('rosalind_chemist'),
						text:'Without Rosalind’s guidance, Gosling fumbles camera alignment and misses the fiber.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>chars.includes('rosalind_chemist')&&items.includes('notebook')&&!items.includes('photo_51'),
						text:'Rosalind holds her pen over an empty page. She refuses to hypothesize without empirical data.',
						sound:'fail_thud'
					}
				]
			},
			{
				id:'act4_5',
				chapterId:'ch4',
				actNumber:'4.5',
				title:"Rosalind's Double Helix Model Is Completed with Noble Scientific Grace",
				goal:'Photograph 51 and Franklin’s report reach Watson and Crick, helping them complete their double-helix model.',
				bgm:'sad',
				framesCount:5,
				availableCards:['kings_college','cavendish_lab','rosalind_chemist','maurice_wilkins','james_watson','francis_crick','max_perutz','nature_publisher','photo_51','research_report','double_helix_model','papers','baggage'],
				hint:'Wilkins shows Photo 51 to Watson. Perutz shares the MRC report with Crick. Crick finishes the model. Nature publishes.',
				fullIntroText:"Rosalind continues her own analysis. By March 1953, her findings point toward a two-chain helical structure with the phosphates on the outside.\r\nEvidence moves between laboratories. Photograph 51 and a report containing Franklin’s results reach Watson and Crick, helping them develop their double-helix model.",
				introText:'In early 1953, Photograph 51 and Franklin’s MRC report reached Watson and Crick. Using her space-group data, they deduced the antiparallel double helix.',
				frames:[
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'kings_college',['maurice_wilkins','james_watson'],['photo_51']),
						solution:{setting:'kings_college',characters:['maurice_wilkins','james_watson'],items:['photo_51']},
						shortOutcome:'Photograph 51 shown to Watson',
						title:'Wilkins retrieves Photograph 51 and reveals it to Watson without Franklin’s knowledge.',
						sound:'paper_slide'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'cavendish_lab',['max_perutz','francis_crick'],['research_report']),
						solution:{setting:'cavendish_lab',characters:['max_perutz','francis_crick'],items:['research_report']},
						shortOutcome:"Franklin's report shared",
						title:'Max Perutz shares Franklin’s unpublished MRC report and measurements with Crick.',
						sound:'paper_slide'
					},
					{
						check:(s,chars,items)=>exactMatch(s,chars,items,'cavendish_lab',['francis_crick'],['research_report','double_helix_model']),
						solution:{setting:'cavendish_lab',characters:['francis_crick'],items:['research_report','double_helix_model']},
						shortOutcome:'Antiparallel model assembly',
						title:'Using Franklin’s space-group symmetry, Crick deduces the two strands run antiparallel.',
						sound:'wire_collapse'
					},
					{
						check:(s,chars,items)=>exactMatch(null,chars,items,null,['nature_publisher'],['papers']),
						solution:{setting:null,characters:['nature_publisher'],items:['papers']},
						shortOutcome:'Nature April 1953 publication',
						title:'Nature publishes Watson and Crick’s model alongside Franklin and Gosling’s foundational paper in April 1953.',
						sound:'applause'
					},
					{
						check:(s,chars,items)=>exactMatch(null,chars,items,null,['rosalind_chemist'],['double_helix_model','baggage']),
						solution:{setting:null,characters:['rosalind_chemist'],items:['double_helix_model','baggage']},
						shortOutcome:'Birkbeck virus research',
						title:'With scientific dignity, Rosalind acknowledges the completed model and departs for Birkbeck to study viruses.',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>chars.includes('james_watson')&&chars.includes('francis_crick')&&items.includes('double_helix_model')&&!items.includes('research_report'),
						text:'Watson and Crick attempt to build without Franklin’s crystallographic data; the strands fail to align!',
						sound:'model_collapse'
					},
					{
						check:(s,chars,items)=>chars.includes('rosalind_chemist')&&items.includes('baggage')&&s==='kings_college'&&!items.includes('double_helix_model'),
						text:'Rosalind refuses to leave King’s College before completing her scientific mission.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>chars.includes('maurice_wilkins')&&chars.includes('james_watson')&&chars.includes('rosalind_chemist')&&items.includes('photo_51'),
						text:'Hearing Rosalind’s footsteps, Wilkins and Watson panic and hide Photo 51 behind their backs!',
						sound:'fail_thud'
					}
				]
			}
		]
	}
];
