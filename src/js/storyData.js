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
	classroom:{id:'classroom',type:'setting',name:'Classroom',image:'assets/images/backgrounds/BCURA Lab.png',desc:'School classroom where young Rosalind showed early brilliance.'},
	rosalind:{id:'rosalind',type:'character',name:'Rosalind Franklin',image:'assets/images/characters/rosalindfranklin.png',desc:'Brilliant physical chemist and crystallographer.'},
	rosalind_chemist:{id:'rosalind_chemist',type:'character',name:'Rosalind Franklin',image:'assets/images/characters/rosalindfranklin_chemist.png',desc:'Rosalind in her laboratory coat at King’s College.'},
	young_rosalind:{id:'young_rosalind',type:'character',name:'Young Rosalind',image:'assets/images/characters/youngrosalind.png',desc:'Rosalind during her early school years at St Paul’s.'},
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
	chemistry_teacher:{id:'chemistry_teacher',type:'character',name:'Teacher',image:'assets/images/characters/chemistryteacher.png',desc:'Science teacher recognizing Rosalind’s early gifts.'},
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
	papers:{id:'papers',type:'item',name:'Research Papers',image:'assets/images/items/Paper.png',desc:'Published scientific articles in Nature, April 1953.'},
	math_books:{id:'math_books',type:'item',name:'Math Books',image:'assets/images/items/Notebook.png',desc:'Advanced school mathematics texts.'}
};

const CHAPTERS_DATA=[
	{
		id:'ch1',
		chapterNum:1,
		title:'Chapter 1: The Spark of Curiosity (1920-1938)',
		bgm:'dreamy',
		acts:[
			{
				id:'act1_1',
				chapterId:'ch1',
				actNumber:'1.1',
				title:'Rosalind Is Frightfully Smart',
				goal:'Rosalind demonstrates her sharp intellect!',
				bgm:'dreamy',
				framesCount:2,
				availableCards:['classroom','young_rosalind','chemistry_teacher','math_books'],
				hint:'Place Young Rosalind with her Math Books first, then let her teacher witness her brilliant solutions.',
				introText:'At St Paul’s Girls’ School, Rosalind Franklin immediately stood out for her analytical sharpness. Long before unraveling DNA, she found beauty in the precision of mathematics and the physical sciences.',
				frames:[
					{
						check:(s,chars,items)=>s==='classroom'&&chars.includes('young_rosalind')&&items.includes('math_books'),
						title:'Young Rosalind solves advanced mathematics with natural ease and clarity.',
						sound:'pencil_writing'
					},
					{
						check:(s,chars,items)=>s==='classroom'&&chars.includes('young_rosalind')&&chars.includes('chemistry_teacher'),
						title:'Her teacher is deeply impressed by her analytical rigor: "Frightfully smart!"',
						sound:'applause'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>chars.includes('young_rosalind')&&items.includes('math_books')&&chars.includes('chemistry_teacher'),
						text:'The teacher looks on as Rosalind silently finishes every single problem ahead of time.',
						sound:'card_pickup'
					}
				]
			}
		]
	},
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
				goal:'Rosalind creates gas mask filters!',
				bgm:'wartime',
				framesCount:3,
				availableCards:['bombed_london','bcura_lab','rosalind','soldiers','helium_cylinder','coal_sample','pore_structure','gas_mask'],
				hint:'London needs protection. Rosalind tests coal with helium at BCURA, then equips soldiers with active pore filters.',
				introText:'During the dark days of the Blitz, London suffered relentless bombardment. British soldiers urgently needed gas masks capable of filtering toxic air. At the BCURA lab, Rosalind began investigating the hidden microscopic openings in coal.',
				frames:[
					{
						check:(s,chars,items)=>s==='bombed_london'&&chars.includes('soldiers')&&items.includes('gas_mask'),
						title:'London is bombed during wartime. Soldiers urgently need working gas masks to survive toxic air.',
						anim:'assets/images/animations/C3_1_Fail_01_Soldiers_Filterless_Mask_Coughing.gif',
						sound:'bomb_explosion'
					},
					{
						check:(s,chars,items)=>s==='bcura_lab'&&chars.includes('rosalind')&&items.includes('coal_sample')&&items.includes('helium_cylinder'),
						title:'Rosalind joins BCURA and measures coal porosity with helium gas, discovering micro-openings that trap toxic particles.',
						sound:'bubbling'
					},
					{
						check:(s,chars,items)=>s==='bombed_london'&&chars.includes('soldiers')&&items.includes('gas_mask')&&items.includes('pore_structure'),
						title:'Rosalind implements her pore structure data into active carbon filters. Soldiers breathe safely!',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>s==='bombed_london'&&chars.includes('rosalind'),
						text:'Rosalind ducks for cover! She cannot perform delicate lab measurements out on a bombed street.',
						anim:'assets/images/animations/C3_1_Fail_02_Rosalind_Ducking_Air_Raid.gif',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='bcura_lab'&&chars.includes('soldiers')&&items.includes('helium_cylinder'),
						text:'Soldiers stare at the helium cylinder in bewilderment. They do not know laboratory gas protocols.',
						anim:'assets/images/animations/C3_1_Fail_03_Soldiers_Confused_Helium_Tank.gif',
						sound:'wood_thud'
					},
					{
						check:(s,chars,items)=>s==='bcura_lab'&&chars.includes('rosalind')&&items.includes('coal_sample')&&!items.includes('helium_cylinder'),
						text:'Rosalind looks at the plain coal sample. Without helium gas flow, micropores cannot be measured.',
						anim:'assets/images/animations/C3_1_Fail_04_Rosalind_Wrong_Coal_Inspection.gif',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='bombed_london'&&chars.includes('soldiers')&&items.includes('coal_sample'),
						text:'Soldiers press raw black coal directly against their mouths. Soot covers their faces while smoke still enters!',
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
				goal:'Rosalind moves to Paris!',
				bgm:'paris',
				framesCount:4,
				availableCards:['paris_station','paris_lab','rosalind','adrienne_weill','jacques_mering','sealed_letter','baggage'],
				hint:'Rosalind sends a witty letter to Weill, who recommends her to Mering. Rosalind arrives at the station, then enters the lab.',
				introText:'Eager to expand her expertise into X-ray crystallography, Rosalind sought training in France. Through her mentor Adrienne Weill, she connected with Jacques Mering in Paris, entering a collaborative and egalitarian scientific community.',
				frames:[
					{
						check:(s,chars,items)=>chars.includes('rosalind')&&chars.includes('adrienne_weill')&&items.includes('sealed_letter'),
						title:'Rosalind writes to Adrienne Weill: "Find a job for someone who knows very little about physics but a lot about holes in coal."',
						anim:'assets/images/animations/C3_2_Rosalind_Writes_Letter_ACTION_TRANSPARENT.gif',
						sound:'pencil_writing'
					},
					{
						check:(s,chars,items)=>chars.includes('adrienne_weill')&&chars.includes('jacques_mering')&&items.includes('sealed_letter'),
						title:'Adrienne Weill stamps her recommendation and forwards the letter to scientist Jacques Mering in Paris.',
						anim:'assets/images/animations/C3_2_Document_Stamp_Preview_Rosalind_ACTION_TRANSPARENT.gif',
						sound:'paper_slide'
					},
					{
						check:(s,chars,items)=>s==='paris_station'&&chars.includes('rosalind'),
						title:'Rosalind steps off the steam train in Paris with her suitcase, ready to embrace life and science in France.',
						sound:'train_whistle'
					},
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('rosalind')&&chars.includes('jacques_mering'),
						title:'Jacques Mering warmly welcomes Rosalind into the laboratory and introduces her to state-of-the-art X-ray equipment.',
						anim:'assets/images/animations/C3_2_Rosalind_Handshake_Colleague_ACTION_TRANSPARENT.gif',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>chars.includes('rosalind')&&chars.includes('jacques_mering')&&s==='paris_station',
						text:'Rosalind and Mering walk past each other as complete strangers on the platform.',
						sound:'wood_thud'
					},
					{
						check:(s,chars,items)=>s==='paris_station'&&chars.includes('adrienne_weill'),
						text:'Adrienne Weill stands alone on the station platform, repeatedly checking her wristwatch.',
						sound:'wood_thud'
					},
					{
						check:(s,chars,items)=>chars.includes('jacques_mering')&&items.includes('sealed_letter')&&!chars.includes('adrienne_weill'),
						text:'Mering stares at a blank paper. Without Weill’s recommendation, he does not know who Rosalind is.',
						sound:'fail_thud'
					}
				]
			},
			{
				id:'act3_3',
				chapterId:'ch3',
				actNumber:'3.3',
				title:'Rosalind Classifies Carbon',
				goal:'Rosalind classifies carbon into Graphitizing and Non-graphitizing carbon!',
				bgm:'tension',
				framesCount:3,
				availableCards:['paris_lab','rosalind','male_scientists','xray_beam','amorphous_carbon','film','math_models','carbon_chart'],
				hint:'Scientists cannot solve disordered carbon. Rosalind shines a collimated X-ray beam onto film, then decodes it using math models.',
				introText:'In post-war Paris, amorphous carbon posed a major puzzle: why did some carbons turn into graphite when heated while others resisted? Other scientists struggled with messy data, but Franklin brought unmatched experimental precision.',
				frames:[
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('male_scientists')&&items.includes('amorphous_carbon'),
						title:'Other scientists cannot understand the structural disorder inside amorphous carbon samples.',
						anim:'assets/images/animations/C3_3_Scientists_Confused_Discussion_ACTION_TRANSPARENT.gif',
						sound:'wood_thud'
					},
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('rosalind')&&items.includes('xray_beam')&&items.includes('amorphous_carbon')&&items.includes('film'),
						title:'Rosalind aligns a fine X-ray beam through the carbon sample, capturing subtle diffraction rings on film.',
						anim:'assets/images/animations/C3_3_Rosalind_Adjusts_Xray_Equipment_ACTION_TRANSPARENT.gif',
						sound:'xray_machine'
					},
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('rosalind')&&items.includes('film')&&items.includes('math_models')&&items.includes('carbon_chart'),
						title:'Applying rigorous mathematical Fourier models to the diffraction spots, Rosalind proves the two carbon categories!',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('rosalind')&&items.includes('film')&&items.includes('carbon_chart')&&!items.includes('math_models'),
						text:'Rosalind squints at the blurry film. Without mathematical models, she cannot prove the atomic coordinates.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('male_scientists')&&items.includes('xray_beam')&&items.includes('amorphous_carbon'),
						text:'Scientists adjust the beam haphazardly. The film is completely overexposed by a blinding flash!',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('rosalind')&&items.includes('math_models')&&items.includes('amorphous_carbon')&&!items.includes('film'),
						text:'Rosalind holds a pen poised to calculate, but has no diffraction data to work with.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('male_scientists')&&items.includes('film')&&items.includes('math_models'),
						text:'The scientists look at the complex formulas as dizzy question marks spin overhead.',
						sound:'wood_thud'
					}
				]
			},
			{
				id:'act3_4',
				chapterId:'ch3',
				actNumber:'3.4',
				title:"Rosalind's Belief",
				goal:"Rosalind's belief!",
				bgm:'paris',
				framesCount:3,
				availableCards:['paris_lab','snow_mountains','rosalind','male_scientists','lunch','desk','sealed_letter'],
				hint:'Rosalind debates over lunch with colleagues, recharges hiking in the Alps, and pens her personal creed to her father.',
				introText:'In France, Rosalind enjoyed camaraderie and equality among colleagues. Her father often challenged her scientific devotion, asking about faith and purpose. In response, Rosalind articulated a noble humanistic philosophy.',
				frames:[
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('rosalind')&&chars.includes('male_scientists')&&items.includes('lunch'),
						title:'Rosalind and her French colleagues debate scientific ideas freely while enjoying lunch baguettes.',
						anim:'assets/images/animations/C3_4_French_Colleagues_Lunch_Debate_GameReady.gif',
						sound:'children_laugh'
					},
					{
						check:(s,chars,items)=>s==='snow_mountains'&&chars.includes('rosalind'),
						title:'Rosalind hikes through alpine snowy ridges, drawing renewed energy and perspective from the great outdoors.',
						anim:'assets/images/animations/C3_4_Rosalind_Alpine_Hiking_GameReady.gif',
						sound:'chime'
					},
					{
						check:(s,chars,items)=>s==='paris_lab'&&chars.includes('rosalind')&&items.includes('desk')&&items.includes('sealed_letter'),
						title:'At her desk, Rosalind writes to her father: "All that is necessary for faith is the belief that by doing our best we shall come nearer to success."',
						anim:'assets/images/animations/C3_4_Rosalind_Reflective_Writing_Preview.gif',
						sound:'pencil_writing'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>s==='snow_mountains'&&chars.includes('rosalind')&&items.includes('sealed_letter'),
						text:'A ferocious gust of mountain wind rips loose papers from her hands, scattering them down the snowy peak!',
						anim:'assets/images/animations/C3_4_Fail_01_Flying_Papers_GameReady.gif',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>chars.includes('male_scientists')&&items.includes('sealed_letter'),
						text:'Her colleagues politely avert their gaze and turn away to respect Rosalind’s privacy.',
						anim:'assets/images/animations/C3_4_Fail_02_Colleagues_Turn_Away_GameReady.gif',
						sound:'wood_thud'
					},
					{
						check:(s,chars,items)=>s==='snow_mountains'&&chars.includes('rosalind')&&items.includes('lunch'),
						text:'Unwrapping lunch in subzero winds, Rosalind shivers violently and rapidly packs her food away!',
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
				goal:'Rosalind begins DNA research and isolation!',
				bgm:'mysterious',
				framesCount:4,
				availableCards:['randall_office','common_room','basement_room','rosalind_chemist','john_randall','maurice_wilkins','assignment_letter','lunch'],
				hint:'Director Randall gives Rosalind the assignment letter. Wilkins treats her as an assistant. Wilkins enjoys the common room, but Rosalind is excluded.',
				introText:'In 1951, Rosalind accepted a fellowship at King’s College London to upgrade their X-ray capabilities on biological fibers. However, patriarchal customs and administrative ambiguity created deep tension from her very first day.',
				frames:[
					{
						check:(s,chars,items)=>s==='randall_office'&&chars.includes('john_randall')&&chars.includes('rosalind_chemist')&&items.includes('assignment_letter'),
						title:'Director John Randall issues an official letter appointing Rosalind to lead the laboratory’s DNA X-ray investigation.',
						sound:'paper_slide'
					},
					{
						check:(s,chars,items)=>s==='basement_room'&&chars.includes('maurice_wilkins')&&chars.includes('rosalind_chemist'),
						title:'Maurice Wilkins misinterprets Randall’s letters and mistakenly assumes Rosalind was hired as his assistant.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='common_room'&&chars.includes('maurice_wilkins')&&items.includes('lunch'),
						title:'Wilkins and male faculty enjoy warm lunch and pipe tobacco inside King’s Senior Common Room.',
						sound:'card_pickup'
					},
					{
						check:(s,chars,items)=>s==='basement_room'&&chars.includes('rosalind_chemist')&&items.includes('lunch'),
						title:'Barred from the male-only common room, Rosalind eats lunch alone at her basement desk, resolute and focused.',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>s==='common_room'&&chars.includes('rosalind_chemist'),
						text:'The oak door slams shut! King’s College Senior Common Room strictly enforces its male-only rule.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='basement_room'&&chars.includes('rosalind_chemist')&&chars.includes('maurice_wilkins')&&items.includes('lunch'),
						text:'An agonizing awkward silence falls over the basement. Wilkins sweats uncomfortably and scurries upstairs.',
						sound:'fail_thud'
					}
				]
			},
			{
				id:'act4_2',
				chapterId:'ch4',
				actNumber:'4.2',
				title:'Rosalind Separates Two DNA States',
				goal:'Rosalind separates two DNA states!',
				bgm:'mysterious',
				framesCount:4,
				availableCards:['basement_lab','rosalind_chemist','dna_fibers','xray_camera','dry_chamber','humid_chamber','form_a','form_b'],
				hint:'Random humidity causes blurry films. Rosalind isolates Form A in dry air, Form B in humid air, and compares both.',
				introText:'Before Franklin, researchers struggled with contradictory X-ray pictures of DNA because fibers randomly gained and lost moisture. Rosalind realized DNA possessed two fundamentally distinct structural states governed by water.',
				frames:[
					{
						check:(s,chars,items)=>s==='basement_lab'&&items.includes('dna_fibers')&&items.includes('xray_camera')&&!chars.includes('rosalind_chemist'),
						title:'Uncontrolled room humidity produces blurry, overlapping diffraction smears on the X-ray plate.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='basement_lab'&&chars.includes('rosalind_chemist')&&items.includes('dna_fibers')&&items.includes('dry_chamber'),
						title:'Under dry conditions (<50% humidity), Rosalind isolates Form A: crystalline geometric diffraction spots.',
						sound:'camera_shutter'
					},
					{
						check:(s,chars,items)=>s==='basement_lab'&&chars.includes('rosalind_chemist')&&items.includes('dna_fibers')&&items.includes('humid_chamber'),
						title:'Under humid conditions (>75% humidity), Rosalind isolates Form B: a striking helical diffraction cross.',
						sound:'camera_shutter'
					},
					{
						check:(s,chars,items)=>s==='basement_lab'&&chars.includes('rosalind_chemist')&&items.includes('form_a')&&items.includes('form_b'),
						title:'Comparing both films against the light table, Rosalind proves that DNA reversibly transitions between two forms!',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>s==='basement_lab'&&chars.includes('rosalind_chemist')&&items.includes('dna_fibers')&&!items.includes('xray_camera')&&!items.includes('dry_chamber')&&!items.includes('humid_chamber'),
						text:'Rosalind holds the fiber up to the ceiling lamp. To the naked eye, it looks like an ordinary thread.',
						sound:'fail_thud'
					}
				]
			},
			{
				id:'act4_3',
				chapterId:'ch4',
				actNumber:'4.3',
				title:'Watson and Crick Are Stopped from Building Their Model',
				goal:'Watson and Crick are stopped from building their model!',
				bgm:'tension',
				framesCount:4,
				availableCards:['lecture_hall','cambridge_lab','rosalind_chemist','james_watson','francis_crick','lawrence_bragg','wire_model','water'],
				hint:'Rosalind lectures on the necessity of water. Watson and Crick build an inside-out model. Rosalind pours water over it, and Bragg halts them.',
				introText:'In late 1951, Watson attended Rosalind’s colloquium at King’s. Mistaking or ignoring her measurements on water content, Watson and Crick rushed to build a physical model with phosphate backbones on the inside.',
				frames:[
					{
						check:(s,chars,items)=>s==='lecture_hall'&&chars.includes('rosalind_chemist')&&chars.includes('james_watson'),
						title:'Rosalind lectures on DNA hydration, stressing water must coat the exterior. Watson listens casually without taking notes.',
						sound:'card_pickup'
					},
					{
						check:(s,chars,items)=>s==='cambridge_lab'&&chars.includes('james_watson')&&chars.includes('francis_crick')&&items.includes('wire_model'),
						title:'Relying on Watson’s faulty memory, Watson and Crick assemble a brass model with phosphates crammed on the inside.',
						sound:'wire_collapse'
					},
					{
						check:(s,chars,items)=>s==='cambridge_lab'&&chars.includes('rosalind_chemist')&&items.includes('wire_model')&&items.includes('water'),
						title:'Rosalind inspects the model and tests it with water, proving an inside-out structure is chemically unviable in water.',
						sound:'model_collapse'
					},
					{
						check:(s,chars,items)=>s==='cambridge_lab'&&chars.includes('lawrence_bragg')&&chars.includes('james_watson')&&chars.includes('francis_crick'),
						title:'Lab director Sir Lawrence Bragg strictly orders Watson and Crick to stop their DNA model-building immediately.',
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
						check:(s,chars,items)=>s==='lecture_hall'&&chars.includes('james_watson')&&chars.includes('francis_crick'),
						text:'Watson and Crick try to lecture without empirical data. The audience stares with question marks.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>chars.includes('lawrence_bragg')&&chars.includes('james_watson')&&items.includes('wire_model')&&!items.includes('water'),
						text:'Bragg admires the shiny brass model before learning of its structural errors.',
						sound:'wood_thud'
					}
				]
			},
			{
				id:'act4_4',
				chapterId:'ch4',
				actNumber:'4.4',
				title:'Rosalind Produces Photo 51 and Decodes It',
				goal:'Rosalind produces Photo 51 and decodes it!',
				bgm:'mysterious',
				framesCount:5,
				availableCards:['basement_lab','darkroom','rosalind_chemist','raymond_gosling','humid_chamber','xray_camera','stopwatch','film','photo_51','notebook'],
				hint:'Mount fiber in humidity chamber, run 62-hour exposure with stopwatch, develop film in darkroom, examine Photo 51, and calculate in notebook.',
				introText:'In May 1952, Franklin and her student Raymond Gosling set up a fine-focus collimator with controlled hydrogen hydration. After an unbroken 62-hour exposure, they extracted the sharpest diffraction pattern ever obtained: Photograph 51.',
				frames:[
					{
						check:(s,chars,items)=>s==='basement_lab'&&chars.includes('rosalind_chemist')&&chars.includes('raymond_gosling')&&items.includes('humid_chamber'),
						title:'Rosalind and Gosling carefully mount a pristine DNA fiber inside the precision humidity chamber.',
						sound:'card_pickup'
					},
					{
						check:(s,chars,items)=>s==='basement_lab'&&chars.includes('rosalind_chemist')&&chars.includes('raymond_gosling')&&items.includes('xray_camera')&&items.includes('stopwatch'),
						title:'They begin a continuous 62-hour X-ray exposure, maintaining exact temperature and humidity parameters.',
						sound:'xray_machine'
					},
					{
						check:(s,chars,items)=>s==='darkroom'&&chars.includes('raymond_gosling')&&items.includes('film')&&items.includes('photo_51'),
						title:'In the chemical darkroom bath, Gosling develops the plate, unveiling the iconic Photograph 51.',
						sound:'camera_shutter'
					},
					{
						check:(s,chars,items)=>s==='basement_lab'&&chars.includes('rosalind_chemist')&&items.includes('photo_51')&&!items.includes('notebook'),
						title:'Rosalind studies the distinctive X-shaped cross on Photograph 51: direct physical proof of a helical geometry.',
						sound:'chime'
					},
					{
						check:(s,chars,items)=>s==='basement_lab'&&chars.includes('rosalind_chemist')&&items.includes('photo_51')&&items.includes('notebook'),
						title:'In her notebook, Rosalind calculates the dimensions: a 34Å repeat, 10 layers per turn, and two intertwined chains.',
						sound:'goal_success'
					}
				],
				fails:[
					{
						check:(s,chars,items)=>s==='darkroom'&&chars.includes('raymond_gosling')&&items.includes('film')&&!items.includes('photo_51'),
						text:'Gosling develops the film prematurely. The plate comes out completely blank without an image.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>s==='basement_lab'&&chars.includes('raymond_gosling')&&items.includes('xray_camera')&&!chars.includes('rosalind_chemist'),
						text:'Without Rosalind’s guidance, Gosling fumbles the pinhole collimator alignment and misses the fiber.',
						sound:'fail_thud'
					},
					{
						check:(s,chars,items)=>chars.includes('rosalind_chemist')&&items.includes('notebook')&&!items.includes('photo_51'),
						text:'Rosalind holds her pen over an empty page. She refuses to hypothesize without solid empirical data.',
						sound:'fail_thud'
					}
				]
			},
			{
				id:'act4_5',
				chapterId:'ch4',
				actNumber:'4.5',
				title:"Rosalind's Double Helix Model Is Completed with Noble Scientific Grace",
				goal:"Rosalind's double helix model is completed with noble scientific grace!",
				bgm:'sad',
				framesCount:5,
				availableCards:['kings_college','cavendish_lab','rosalind_chemist','maurice_wilkins','james_watson','francis_crick','max_perutz','nature_publisher','photo_51','research_report','double_helix_model','papers','baggage'],
				hint:'Wilkins shows Photo 51 to Watson. Perutz gives the MRC report to Crick. Crick finishes the model. Nature publishes the papers, and Rosalind moves forward.',
				introText:'In early 1953, Photograph 51 and Franklin’s unpublished MRC report reached Watson and Crick without her knowledge. Armed with her data on C2 monoclinic space group symmetry, they deduced the antiparallel double helix.',
				frames:[
					{
						check:(s,chars,items)=>s==='kings_college'&&chars.includes('maurice_wilkins')&&chars.includes('james_watson')&&items.includes('photo_51'),
						title:'Wilkins retrieves Photograph 51 from King’s and reveals it to Watson without Franklin’s knowledge.',
						sound:'paper_slide'
					},
					{
						check:(s,chars,items)=>s==='cavendish_lab'&&chars.includes('max_perutz')&&chars.includes('francis_crick')&&items.includes('research_report'),
						title:'Max Perutz shares Franklin’s unpublished MRC report and quantitative measurements with Crick.',
						sound:'paper_slide'
					},
					{
						check:(s,chars,items)=>s==='cavendish_lab'&&chars.includes('francis_crick')&&items.includes('research_report')&&items.includes('double_helix_model'),
						title:'Using Franklin’s space-group symmetry, Crick deduces that the two DNA strands run antiparallel.',
						sound:'wire_collapse'
					},
					{
						check:(s,chars,items)=>items.includes('papers')&&chars.includes('nature_publisher'),
						title:'Nature publishes Watson and Crick’s model alongside Franklin and Gosling’s foundational paper in April 1953.',
						sound:'applause'
					},
					{
						check:(s,chars,items)=>chars.includes('rosalind_chemist')&&items.includes('double_helix_model')&&items.includes('baggage'),
						title:'With scientific dignity and grace, Rosalind welcomes the confirmed model and departs for Birkbeck to pioneer virus research.',
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
						text:'Hearing Rosalind’s footsteps, Wilkins and Watson panic and hurriedly hide Photo 51 behind their backs!',
						sound:'fail_thud'
					}
				]
			}
		]
	}
];
