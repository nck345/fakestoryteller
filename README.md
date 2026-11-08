# The Rosalind Franklin Story (FakeStoryteller)

A storytelling puzzle game inspired by *Storyteller*, putting players in the role of physical chemist and crystallographer **Rosalind Franklin** (1920-1958) to recreate her discoveries, scientific methodology, and historical contributions.

Based on the Game Design Document and research assets produced by team **"The girls behind her"** (Le Nguyen Nguyen Thao, Lee Yoona, Lee Seoyun, Zhang Yulin, Greta Schmedes).

---

## 1. Gameplay Mechanics

- **Comic Panel Assembly**: Arrange locations, characters, and scientific items inside comic panel strips to construct narrative milestones.
- **Dynamic Story Reaction**: Panels immediately react to combinations. Proper elements trigger accurate historical actions, while incorrect combinations trigger authentic fail reactions and custom animations directly from the game design document.
- **Chronological Act Validation**: When all panels in an Act satisfy the sequential narrative criteria, the Act is cleared with a celebratory wax stamp (`CROWN CLEAR`), unlocking subsequent chapters.
- **Interactive Minigames**:
  - **BCURA Coal Gas Flow (Act 3.1)**: Adjust valve pressure to guide helium gas particles through microscopic coal pore tunnels.
  - **X-Ray Rotary Dial Calibration (Act 3.3 & 4.2)**: Rotate the vernier collimator knob to resolve sharp diffraction spots from blurry halos.
  - **Photo 51 Darkroom Chemical Bath (Act 4.4)**: Agitate developer solution to lift and reveal Photograph 51.
- **Lab Notebook & Historical Codex**: In-game archive containing Franklin's biography, timeline, and scientific breakdowns of coal molecular sieves, graphitizing carbon, Form A/B DNA, and Photograph 51.
- **Atmospheric Audio**: Authentic period BGM (Wartime London, Paris Laboratory, Cavendish Tension, Somber Epilogue) and tactile SFX (film projector loop, camera shutter, paper slide, wire model collapse).

---

## 2. Story Chapters & Acts

### Chapter 1: The Spark of Curiosity (1920-1938)
- **Act 1.1: Rosalind Is Frightfully Smart** - Young Rosalind demonstrates exceptional mathematical talent at St Paul's Girls' School.

### Chapter 3: The Coal Masks and the X-ray (1947-1950)
- **Act 3.1: Rosalind Creates Gas Mask Filters** - Rosalind joins BCURA, investigates coal micropores using helium gas, and engineers active carbon filters for soldiers during the Blitz.
- **Act 3.2: Rosalind Moves to Paris** - With a recommendation from Adrienne Weill to Jacques Mering, Rosalind arrives in France and masters X-ray crystallography at the Laboratoire Central.
- **Act 3.3: Rosalind Classifies Carbon** - Rosalind resolves disordered carbon into two distinct structural families: graphitizing and non-graphitizing carbon.
- **Act 3.4: Rosalind's Belief** - Amid egalitarian lab lunches and Alpine hikes, Rosalind articulates her personal creed on faith and scientific dedication.

### Chapter 4: DNA & Photo 51 (1951-1953)
- **Act 4.1: Rosalind Begins DNA Research and Isolation** - Appointed by Director John Randall to head DNA X-ray research at King's College London, Rosalind faces bureaucratic ambiguity and the male-only Senior Common Room barrier.
- **Act 4.2: Rosalind Separates Two DNA States** - Franklin isolates crystalline Form A (dry) and helical Form B (humid), resolving decades of blurry and contradictory X-ray data.
- **Act 4.3: Watson and Crick Are Stopped from Building Their Model** - Franklin demonstrates that phosphate backbones must remain on the outside with water. Watson and Crick's inside-out model fails, prompting Sir Lawrence Bragg to ban their model building.
- **Act 4.4: Rosalind Produces Photo 51 and Decodes It** - Alongside PhD student Raymond Gosling, Franklin captures Photograph 51 after a continuous 62-hour exposure and records its exact helical parameters in her notebook.
- **Act 4.5: Rosalind's Double Helix Model Is Completed with Noble Scientific Grace** - Photo 51 and Franklin's MRC report reach Watson and Crick. *Nature* publishes the discovery, while Rosalind gracefully transitions to virus research at Birkbeck College.

---

## 3. Repository Structure

```
fakestoryteller/
├── index.html                           # Game entry point
├── package.json                         # Node metadata and scripts
├── README.md                            # Documentation
├── docs/                                # Cleaned design documents
│   ├── GDD_Final.docx                   # Game Design Document
│   ├── Project_Proposal.docx            # Project Proposal
│   ├── Cutscene_Narration_Scripts.docx  # Full narration scripts
│   ├── Audio_Asset_Production_List.docx # Sound mapping
│   ├── Animation_Checklist.docx         # Animation checklist
│   └── The_Brief_Story_Plots_v2.docx    # Story plot outlines
├── assets/
│   ├── audio/
│   │   ├── bgm/                         # 6 Background music tracks
│   │   └── sfx/                         # 23 Sound effects
│   ├── images/
│   │   ├── backgrounds/                 # High-resolution setting artwork
│   │   ├── characters/                  # Character portrait cards
│   │   ├── items/                       # Scientific equipment and items
│   │   └── animations/                  # Transparent action & fail GIFs
├── src/
│   ├── css/
│   │   ├── styles.css                   # Main responsive layout and book UI
│   │   ├── book.css                     # Vintage filigree & cutscene styling
│   │   ├── minigames.css                # Minigame canvas & rotary widgets
│   │   └── codex.css                    # Lab notebook & scientific encyclopedia
│   └── js/
│       ├── audio.js                     # Sound manager (BGM, SFX, Web Audio)
│       ├── storyData.js                 # Complete act schemas, cards, and fail rules
│       ├── engine.js                    # Puzzle logic and state evaluation engine
│       ├── ui.js                        # Drag-and-drop, card tray, and frame rendering
│       ├── cutscenes.js                 # 16mm film cutscenes and narration player
│       ├── minigames.js                 # Interactive science minigames
│       ├── codex.js                     # Educational lab notebook
│       └── app.js                       # Game bootstrap
└── Final/                               # Preserved original assets
```

---

## 4. How to Run Locally

You can launch the game using any standard static file server or directly in any modern browser:

### Option A: Python Built-in Server
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

### Option B: Node.js (Serve)
```bash
npm start
# or: npx serve .
```

### Option C: Direct Browser
Open `index.html` directly in your browser. (Note: Audio features and canvas operations work best when served through a local HTTP server due to browser security restrictions on `file://`).

---

## 5. Deployment (GitHub Pages)

The project is structured with `index.html` at the repository root. To publish online:
1. In your GitHub repository settings, navigate to **Pages**.
2. Select **Branch: main** and folder **/(root)**.
3. Click **Save**. The game will be live at `https://<username>.github.io/fakestoryteller/`.

