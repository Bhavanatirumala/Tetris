# 📁 Project Structure

## Directory Tree

```
Tetris/
│
├── 📦 Root Configuration
│   ├── package.json              # Root package manager
│   ├── .gitignore               # Git ignore rules
│   ├── README.md                # Main documentation
│   ├── SETUP.md                 # Detailed setup guide
│   ├── QUICK_START.md           # Quick start guide
│   ├── FEATURES.md              # Features documentation
│   ├── PROJECT_STRUCTURE.md     # This file
│   ├── setup.bat                # Windows setup script
│   └── start.bat                # Windows start script
│
├── 🎨 Frontend (React Application)
│   ├── public/
│   │   └── tetris-icon.svg      # App icon
│   │
│   ├── src/
│   │   ├── components/          # React Components
│   │   │   ├── Game.jsx         # Main game component
│   │   │   ├── Board.jsx        # Tetris game board
│   │   │   ├── Dashboard.jsx    # Statistics dashboard
│   │   │   ├── GameStats.jsx    # Score/Lines/Level display
│   │   │   ├── NextPiece.jsx    # Next piece preview
│   │   │   └── GameControls.jsx # Touch/button controls
│   │   │
│   │   ├── utils/
│   │   │   └── tetrisLogic.js   # Core game engine
│   │   │
│   │   ├── App.jsx              # Root component & routing
│   │   ├── main.jsx             # Application entry point
│   │   └── index.css            # Global styles & Tailwind
│   │
│   ├── index.html               # HTML template
│   ├── package.json             # Frontend dependencies
│   ├── vite.config.js           # Vite configuration
│   ├── tailwind.config.js       # Tailwind CSS config
│   └── postcss.config.js        # PostCSS config
│
└── 🔧 Backend (Node.js API)
    ├── server.js                # Express server & API routes
    ├── package.json             # Backend dependencies
    └── .env                     # Environment variables (create this)
```

## 🎯 Component Hierarchy

```
App.jsx (Root)
│
├── Navigation Bar
│   ├── Logo
│   ├── Play Button → /
│   └── Dashboard Button → /dashboard
│
├── Route: / (Game Page)
│   ├── GameStats Panel (Left)
│   │   ├── Score Card
│   │   ├── Lines Card
│   │   ├── Level Card
│   │   ├── NextPiece Preview
│   │   └── Controls Guide
│   │
│   ├── Game Board (Center)
│   │   ├── Welcome Screen (pre-game)
│   │   ├── Board Component (playing)
│   │   ├── Pause Overlay (paused)
│   │   └── Game Over Screen (finished)
│   │
│   └── GameControls Panel (Right)
│       ├── Rotate Button
│       ├── Direction Buttons
│       ├── Hard Drop Button
│       └── Pause Button
│
└── Route: /dashboard (Dashboard Page)
    ├── Page Header
    ├── Statistics Cards
    │   ├── Total Games
    │   ├── Total Players
    │   ├── Highest Score
    │   └── Average Score
    └── Leaderboard
        └── Score Entries (Top 50)
```

## 📊 Data Flow

```
User Input
    ↓
Game Component (React State)
    ↓
tetrisLogic.js (Game Engine)
    ↓
Board Component (Visual Display)
    ↓
Game Over → API Call
    ↓
Backend Server (Express)
    ↓
MongoDB / In-Memory Storage
    ↓
Dashboard Component
```

## 🔄 API Endpoints

```
Backend Server (localhost:5000)
│
├── GET  /api/health
│   └── Returns server status
│
├── GET  /api/scores
│   └── Returns top 50 scores
│
├── GET  /api/scores/top
│   └── Returns top 10 scores
│
├── GET  /api/scores/player/:name
│   └── Returns player's scores
│
├── POST /api/scores
│   └── Creates new score entry
│
├── GET  /api/stats
│   └── Returns game statistics
│
└── DELETE /api/scores/:id
    └── Deletes score (admin)
```

## 🎮 Game State Flow

```
[Start]
   ↓
[Enter Name] → Enable Start Button
   ↓
[Click Start] → Initialize Game
   ↓
[Playing] ←→ [Paused]
   ↓
[Game Over] → Save Score
   ↓
[Show Results] → Option to Play Again
   ↓
[Back to Enter Name]
```

## 📦 Key Dependencies

### Frontend
- **react** (^18.2.0) - UI library
- **react-dom** (^18.2.0) - DOM rendering
- **react-router-dom** (^6.20.1) - Routing
- **axios** (^1.6.2) - HTTP client
- **lucide-react** (^0.294.0) - Icons
- **vite** (^5.0.8) - Build tool
- **tailwindcss** (^3.3.6) - CSS framework

### Backend
- **express** (^4.18.2) - Web framework
- **mongoose** (^8.0.3) - MongoDB ODM
- **cors** (^2.8.5) - CORS middleware
- **dotenv** (^16.3.1) - Environment variables
- **nodemon** (^3.0.2) - Development tool

## 🎨 Styling Architecture

```
Tailwind CSS
│
├── Base Styles (index.css)
│   ├── Background gradients
│   └── Font imports
│
├── Components (@layer components)
│   ├── .glass-effect
│   ├── .tetris-block
│   ├── .game-button
│   ├── .neon-text
│   └── .stat-card
│
├── Utilities (@layer utilities)
│   └── Custom animations
│
└── Theme Extensions (tailwind.config.js)
    ├── Custom colors (tetris-*)
    └── Custom animations
```

## 🔐 Environment Variables

### Backend (.env)
```
PORT=5000                              # Server port
MONGODB_URI=mongodb://localhost:27017/tetris  # Database connection
```

### Frontend (Vite)
Proxy configured in `vite.config.js`:
- `/api/*` → `http://localhost:5000`

## 🚀 Build Process

### Development
1. Vite dev server (frontend) - Hot reload
2. Nodemon (backend) - Auto restart
3. No build step needed

### Production
1. Frontend: `npm run build` → static files in `dist/`
2. Backend: Ready as-is, just set environment variables

## 📝 File Responsibilities

| File | Purpose |
|------|---------|
| `App.jsx` | Main component, routing, navigation |
| `Game.jsx` | Game state, controls, logic coordination |
| `Board.jsx` | Visual display of game board |
| `Dashboard.jsx` | Leaderboard and statistics |
| `tetrisLogic.js` | Pure game logic (no React) |
| `server.js` | API routes, database, business logic |
| `index.css` | Global styles, Tailwind config |

## 🎯 Key Features Location

| Feature | File(s) |
|---------|---------|
| Tetris Rules | `frontend/src/utils/tetrisLogic.js` |
| Scoring System | `frontend/src/utils/tetrisLogic.js` |
| Keyboard Controls | `frontend/src/components/Game.jsx` |
| Touch Controls | `frontend/src/components/GameControls.jsx` |
| Leaderboard | `frontend/src/components/Dashboard.jsx` |
| API Endpoints | `backend/server.js` |
| Database Schema | `backend/server.js` |
| Visual Styles | `frontend/src/index.css` |
| Color Scheme | `frontend/tailwind.config.js` |

---

**This structure is designed for:**
- ✅ Easy navigation
- ✅ Clear separation of concerns
- ✅ Maintainability
- ✅ Scalability
- ✅ Best practices

