# Raffay's World - Game Website Vision Document

## Overview

A fully explorable, Pokémon Ruby/Sapphire-style personal website where visitors control an avatar and explore "Raffay Town" - a pixel-art world representing different aspects of your life, work, and interests.

---

## Visual Reference

**Target Aesthetic:** Pokémon Ruby/Sapphire (GBA, 2002)
- 240x160 native resolution (scaled up)
- 15-bit color palette (32,768 colors)
- Top-down perspective with pseudo-3D elements
- Tile-based world (16x16 pixel tiles)
- Animated character sprites (4 directions, walk cycles)

---

## World Design: "Raffay Town"

```
    ┌─────────────────────────────────────────────────────────┐
    │                    RAFFAY TOWN                          │
    │                                                         │
    │    ┌─────────┐                      ┌─────────┐        │
    │    │ STADIUM │                      │  LAB    │        │
    │    │ Skills  │                      │ Projects│        │
    │    └────┬────┘                      └────┬────┘        │
    │         │                                │              │
    │    ═════╧════════════════════════════════╧═════        │
    │                    MAIN STREET                          │
    │    ═════╤════════════════════════════════╤═════        │
    │         │            │                   │              │
    │    ┌────┴────┐  ┌────┴────┐        ┌────┴────┐        │
    │    │  HOME   │  │ OFFICE  │        │ LIBRARY │        │
    │    │ About   │  │  Work   │        │  Blog   │        │
    │    └─────────┘  └─────────┘        └─────────┘        │
    │                                                         │
    │              ┌─────────┐                                │
    │              │  START  │  ← Spawn Point                │
    │              │  POINT  │                                │
    │              └─────────┘                                │
    │                                                         │
    │    Route to Safari Zone (Hobbies) →→→                  │
    │                                                         │
    └─────────────────────────────────────────────────────────┘
```

### Buildings & Their Purposes

| Building | Theme | Content |
|----------|-------|---------|
| **Home** | Personal/About | Origin story, family, values, personal interests |
| **Office Tower** | Career | EY experience, ML engineering work, professional journey |
| **Research Lab** | Projects | Interactive portfolio with live GitHub integration |
| **Stadium/Gym** | Skills | Technology badges, skill trees, certifications |
| **Library** | Writing | Medium articles, book reviews, thoughts |
| **Safari Zone** | Hobbies | F1, Basketball, Cricket, Soccer - mini-games? |
| **Secret Cave** | Easter Eggs | Hidden projects, fun facts, surprises |

---

## Technical Architecture

### Recommended Stack

```
┌─────────────────────────────────────────────────────────┐
│                    PRESENTATION                          │
├─────────────────────────────────────────────────────────┤
│  Phaser 3          │  React 18         │  Tailwind CSS  │
│  (Game World)      │  (UI/Content)     │  (Styling)     │
├─────────────────────────────────────────────────────────┤
│                    GAME LAYER                            │
├─────────────────────────────────────────────────────────┤
│  Tiled Map Editor  │  Sprite Sheets    │  Collision     │
│  (World Design)    │  (Characters)     │  (Physics)     │
├─────────────────────────────────────────────────────────┤
│                    DATA LAYER                            │
├─────────────────────────────────────────────────────────┤
│  Local Storage     │  GitHub API       │  Content JSON  │
│  (Save State)      │  (Live Data)      │  (Static)      │
└─────────────────────────────────────────────────────────┘
```

### Why Phaser 3?

1. **Mature & Well-Documented** - Large community, tons of tutorials
2. **Tilemap Support** - Native support for Tiled map editor exports
3. **Sprite Animation** - Built-in animation system
4. **Input Handling** - Keyboard, touch, gamepad support
5. **Scene Management** - Perfect for building interiors
6. **React Integration** - Can embed Phaser in React components

### Hybrid Approach

```
Game World (Phaser)          Building Interiors (React)
┌──────────────────┐         ┌──────────────────────────┐
│                  │         │                          │
│   Explore town   │ ──────► │   Rich interactive UI    │
│   Walk around    │ ENTER   │   Forms, animations      │
│   Talk to NPCs   │ DOOR    │   API integrations       │
│                  │         │   Full React power       │
│                  │ ◄────── │                          │
└──────────────────┘  EXIT   └──────────────────────────┘
```

---

## Asset Resources

### Tilesets (Pokémon Ruby Style)

1. **Free Options:**
   - [OpenGameArt - GBA Style Tiles](https://opengameart.org)
   - [itch.io - Pixel Art Packs](https://itch.io/game-assets/tag-tileset)
   - Community-made Pokémon-style tilesets (check licensing)

2. **Paid Options (Higher Quality):**
   - [itch.io Premium Packs](https://itch.io/game-assets) - $5-20
   - [GameDev Market](https://www.gamedevmarket.net)

3. **Recommended Specific Assets:**
   - "Serene Village" tileset (GBA aesthetic)
   - "Modern Interiors" for building content
   - Generic RPG character sprites (customizable)

### Character Sprites

- Create custom sprite using [Piskel](https://www.piskelapp.com) (free)
- Commission a pixel artist on Fiverr ($20-50)
- Use/modify existing sprites (check licenses)

### Tools

| Tool | Purpose | Cost |
|------|---------|------|
| **Tiled** | Map editor for creating worlds | Free |
| **Piskel** | Sprite creation/animation | Free |
| **Aseprite** | Professional pixel art | $20 |
| **TexturePacker** | Sprite sheet generation | Free tier |

---

## Feature Specifications

### Phase 1: Core World (MVP)

#### Player Movement
```javascript
// Core mechanics needed:
- 4-directional movement (up, down, left, right)
- Grid-based movement (tile snapping)
- Walk animation (4 frames per direction)
- Collision detection with obstacles
- Camera following player
```

#### World Map
- Single outdoor area (Raffay Town)
- 5 accessible buildings
- Basic NPCs with dialogue
- Door interactions (enter/exit)

#### Building Interiors
- Transition animation (fade to black)
- React component renders inside
- Exit trigger to return to world

### Phase 2: Rich Interiors

#### Home (About Me)
- Photo frames on walls (click to enlarge)
- Bookshelf (interactive reading list)
- Computer desk (links to socials)
- NPC: "Past Raffay" explains journey

#### Research Lab (Projects)
```
┌────────────────────────────────────────┐
│  RESEARCH LAB                          │
│  ═══════════════                       │
│                                        │
│  ┌──────┐  ┌──────┐  ┌──────┐        │
│  │ PC 1 │  │ PC 2 │  │ PC 3 │        │
│  │Proj A│  │Proj B│  │Proj C│        │
│  └──────┘  └──────┘  └──────┘        │
│                                        │
│     🧑‍🔬 Lab Assistant NPC              │
│     "Want to see what I'm working on?" │
│                                        │
│  Live GitHub commits on screen         │
│  ════════════════════════════          │
└────────────────────────────────────────┘
```

Each "PC" opens a detailed project view:
- Description
- Tech stack (shown as items/badges)
- Screenshots/demo
- GitHub link
- Live demo link

#### Stadium (Skills)
- Gym badge display (8 badges for 8 skill areas)
- Click badge for detailed skill breakdown
- "Battle" mini-game: typing test or quiz

#### Office (Career)
- Timeline wall showing career progression
- Desk with resume (downloadable PDF)
- Meeting room with "testimonial NPCs"

#### Library (Blog)
- Bookshelves organized by topic
- Click book → shows article preview
- Link to full Medium article

### Phase 3: Advanced Features

#### Save System
```javascript
// LocalStorage save state
{
  playerPosition: { x: 120, y: 80 },
  visitedBuildings: ["home", "lab"],
  foundEasterEggs: ["secret1"],
  achievements: ["explorer", "reader"],
  lastVisit: "2024-01-15T10:30:00Z"
}
```

#### NPC Dialogue System
- Typewriter text effect
- Multiple dialogue pages
- Choice-based responses
- NPC memory ("Welcome back!")

#### Day/Night Cycle
- Check visitor's local time
- Adjust color palette/lighting
- Different NPC dialogue at night

#### Sound & Music
- 8-bit background music (optional toggle)
- Sound effects for:
  - Walking
  - Door opening
  - Menu selection
  - Dialogue text

#### Mini-Games
- **Typing Test** - How fast can you type?
- **Quiz** - Test knowledge about you
- **Easter Egg Hunt** - Find all hidden items

### Phase 4: Polish & Extras

#### Achievements System
```
🏆 First Steps      - Move for the first time
🏆 Home Sweet Home  - Visit the house
🏆 Lab Rat          - View all projects
🏆 Bookworm         - Read 3 articles
🏆 Completionist    - Visit every building
🏆 Secret Hunter    - Find a hidden area
🏆 Speed Demon      - Win the typing test
```

#### Mobile Support
- Virtual D-pad overlay
- Touch-to-walk option
- Responsive building interiors

#### Accessibility
- Keyboard-only navigation
- Screen reader support for content
- High contrast mode option
- Skip game option (direct links)

---

## File Structure (Proposed)

```
src/
├── game/
│   ├── scenes/
│   │   ├── BootScene.js        # Asset loading
│   │   ├── WorldScene.js       # Main overworld
│   │   ├── HomeScene.js        # Home interior
│   │   ├── LabScene.js         # Lab interior
│   │   └── ...
│   ├── entities/
│   │   ├── Player.js           # Player sprite & controls
│   │   ├── NPC.js              # NPC base class
│   │   └── Door.js             # Door interaction
│   ├── systems/
│   │   ├── DialogueSystem.js   # Text boxes & choices
│   │   ├── SaveSystem.js       # LocalStorage management
│   │   └── AudioSystem.js      # Sound management
│   ├── config/
│   │   └── gameConfig.js       # Phaser configuration
│   └── assets/
│       ├── tilesets/
│       ├── sprites/
│       ├── maps/               # Tiled JSON exports
│       └── audio/
├── components/
│   ├── GameContainer.jsx       # Phaser wrapper
│   ├── BuildingContent/
│   │   ├── HomeContent.jsx
│   │   ├── LabContent.jsx
│   │   ├── OfficeContent.jsx
│   │   └── ...
│   ├── UI/
│   │   ├── DialogueBox.jsx
│   │   ├── MenuOverlay.jsx
│   │   └── AchievementPopup.jsx
│   └── shared/
│       └── ...
├── data/
│   ├── projects.json
│   ├── npcs.json
│   └── achievements.json
└── hooks/
    ├── useGameBridge.js        # Phaser ↔ React communication
    └── useSaveState.js
```

---

## Development Phases & Milestones

### 🎯 Phase 1: Foundation (Core MVP)
- [ ] Set up Phaser 3 in React project
- [ ] Create basic tilemap in Tiled
- [ ] Implement player movement & collision
- [ ] Add camera following
- [ ] Create one building entrance/exit
- [ ] Basic React content for one building

### 🎯 Phase 2: World Building
- [ ] Design full town layout in Tiled
- [ ] Add all 5 main buildings
- [ ] Implement all building interiors (basic)
- [ ] Add NPC sprites (static)
- [ ] Basic dialogue system

### 🎯 Phase 3: Content & Polish
- [ ] Rich content for each building
- [ ] NPC dialogue trees
- [ ] Save system
- [ ] Day/night cycle
- [ ] Sound effects & music

### 🎯 Phase 4: Advanced Features
- [ ] Mini-games
- [ ] Achievement system
- [ ] Easter eggs & secrets
- [ ] Mobile controls
- [ ] Accessibility features

### 🎯 Phase 5: Launch
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Analytics integration
- [ ] Social sharing features
- [ ] "Skip to content" fallback

---

## Inspiration & References

### Similar Projects
- [Bruno Simon's Portfolio](https://bruno-simon.com) - 3D car driving website
- [Robby Leonardi's Interactive Resume](http://www.rleonardi.com/interactive-resume/) - Side-scroller resume
- [Matthew Williams' Pokemon-style Portfolio](https://github.com/example) - Direct inspiration

### Tutorials to Study
- "Making a Pokémon-style game in Phaser 3" - YouTube
- Phaser 3 Tilemap tutorial series
- "React + Phaser integration" guides

### Color Palette (Pokémon Ruby)
```
Primary:    #88C070 (grass green)
Secondary:  #F8D878 (sand/path)
Buildings:  #A85858 (roof red), #F8F8F8 (walls)
Water:      #6090F8 (light blue)
UI:         #F8F8F8 (white), #383838 (dark text)
```

---

## Questions to Resolve

1. **Custom Character Design**
   - Design a character that looks like you?
   - Generic adventurer sprite?
   - Multiple outfit options?

2. **Sound**
   - Include background music? (some find it annoying)
   - Sound effects only?
   - Start muted with toggle?

3. **Fallback Experience**
   - What if JavaScript disabled?
   - Quick "skip game" option for accessibility?
   - Static version of content?

4. **Scope of Interiors**
   - Full Phaser scenes for interiors too?
   - Or just React components overlaid?
   - Mix depending on building?

---

## Next Steps

1. **Immediate:** Set up Phaser 3 in the project
2. **This Week:** Create a basic walking demo
3. **Asset Gathering:** Find/create tileset and character sprite
4. **Design:** Sketch out town layout in detail
5. **Iterate:** Build one complete building flow end-to-end

---

*This is a living document. Update as the project evolves.*
