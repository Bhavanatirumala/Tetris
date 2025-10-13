# ✅ Tetris Setup Checklist

Use this checklist to ensure everything is set up correctly!

---

## 📋 Pre-Installation Checklist

- [ ] **Node.js Installed** (v16 or higher)
  - Run: `node --version`
  - If not installed: https://nodejs.org/

- [ ] **npm Available**
  - Run: `npm --version`
  - Should be included with Node.js

- [ ] **Terminal/Command Prompt** access
  - Windows: PowerShell or CMD
  - Mac/Linux: Terminal

---

## 🔧 Installation Checklist

- [ ] **Root Dependencies Installed**
  - Run: `npm install` in Tetris folder

- [ ] **Frontend Dependencies Installed**
  - Run: `cd frontend && npm install`

- [ ] **Backend Dependencies Installed**
  - Run: `cd backend && npm install`

**OR (Windows Users):**
- [ ] **Auto-Install Complete**
  - Double-click: `setup.bat`

---

## 🚀 Startup Checklist

### Option A: Automated (Windows)
- [ ] **Double-click** `start.bat`
- [ ] **Browser opens** automatically
- [ ] **Game loads** at http://localhost:3000

### Option B: Manual
- [ ] **Frontend Server Running**
  - Terminal 1: `cd frontend && npm run dev`
  - Should show: "Local: http://localhost:3000"

- [ ] **Backend Server Running**
  - Terminal 2: `cd backend && npm run dev`
  - Should show: "Server running on port 5000"

- [ ] **Browser Open**
  - Visit: http://localhost:3000

---

## 🧪 Testing Checklist

### Basic Tests
- [ ] **Frontend Loads**
  - Visit: http://localhost:3000
  - Should see Tetris game interface

- [ ] **Backend Responds**
  - Visit: http://localhost:5000/api/health
  - Should see: `{"status":"OK",...}`

- [ ] **Routing Works**
  - Click "Dashboard" button
  - Should navigate to dashboard page

### Functionality Tests
- [ ] **Name Entry Works**
  - Enter your name
  - "Start Game" button enables

- [ ] **Game Starts**
  - Click "Start Game"
  - Pieces begin falling

- [ ] **Controls Work**
  - Test arrow keys (←→↑↓)
  - Test spacebar (hard drop)
  - Test 'P' (pause)

- [ ] **Scoring Works**
  - Clear a line
  - Score increases
  - Level progresses

- [ ] **Game Over Works**
  - Let pieces reach top
  - Game over screen shows
  - Can restart game

- [ ] **Dashboard Shows Data**
  - Navigate to dashboard
  - See statistics
  - See leaderboard (with your score)

### Optional: Database Tests
- [ ] **MongoDB Installed** (optional)
  - Local: MongoDB Compass
  - Cloud: MongoDB Atlas

- [ ] **Environment Configured**
  - File: `backend/.env` exists
  - Contains: `MONGODB_URI=...`

- [ ] **Database Connected**
  - Check: http://localhost:5000/api/health
  - Should show: `"database":"connected"`

- [ ] **Scores Persist**
  - Play game, get score
  - Restart servers
  - Score still visible in dashboard

---

## 🎮 Gameplay Checklist

### First Game
- [ ] Enter your name
- [ ] Start the game
- [ ] Play for at least 1 minute
- [ ] Clear at least one line
- [ ] Reach game over
- [ ] See your score saved

### Controls Verification
- [ ] ← (left arrow) - moves piece left
- [ ] → (right arrow) - moves piece right
- [ ] ↓ (down arrow) - moves piece down
- [ ] ↑ (up arrow) - rotates piece
- [ ] Space - hard drop (instant)
- [ ] P - pause/resume

### Features Verification
- [ ] Next piece preview shows
- [ ] Score updates when clearing lines
- [ ] Level increases every 10 lines
- [ ] Game speeds up with levels
- [ ] Pause works correctly
- [ ] Can resume after pause

---

## 📊 Dashboard Checklist

- [ ] **Navigate to Dashboard**
  - Click "Dashboard" in nav
  - Page loads correctly

- [ ] **Statistics Display**
  - Total Games shows count
  - Total Players shows count
  - Highest Score shows
  - Average Score shows

- [ ] **Leaderboard Works**
  - Your score appears
  - Scores sorted (highest first)
  - Top 3 have medals
  - Shows player names, scores, dates

- [ ] **Navigate Back to Game**
  - Click "Play" button
  - Returns to game page

---

## 🎨 Visual Checklist

- [ ] **Colors Display Correctly**
  - 7 different colored pieces
  - Gradient backgrounds
  - Neon text effects

- [ ] **Animations Work**
  - Smooth piece movement
  - Hover effects on buttons
  - Card animations on dashboard

- [ ] **Responsive Design**
  - Works on full screen
  - Works on smaller windows
  - Mobile controls visible (if applicable)

- [ ] **UI Elements Visible**
  - All buttons readable
  - All text clear
  - All icons showing

---

## 🔧 Configuration Checklist (Optional)

### Ports
- [ ] Frontend port is 3000 (or custom)
- [ ] Backend port is 5000 (or custom)
- [ ] No port conflicts

### Environment Variables
- [ ] `backend/.env` exists (if using MongoDB)
- [ ] PORT set correctly
- [ ] MONGODB_URI set correctly

### Customization
- [ ] Review `tailwind.config.js` for colors
- [ ] Review `tetrisLogic.js` for game rules
- [ ] Review `vite.config.js` for frontend settings

---

## 📝 Documentation Checklist

Have you read:
- [ ] **README.md** - Main documentation
- [ ] **GET_STARTED.md** - Getting started guide
- [ ] **SETUP.md** - Detailed setup instructions
- [ ] **QUICK_START.md** - Quick reference
- [ ] **FEATURES.md** - Features overview
- [ ] **PROJECT_STRUCTURE.md** - Code organization

---

## 🐛 Troubleshooting Checklist

If something doesn't work:

- [ ] **Check Node.js/npm installed**
  - `node --version` works
  - `npm --version` works

- [ ] **Check dependencies installed**
  - `node_modules` folders exist
  - In root, frontend, and backend

- [ ] **Check servers running**
  - Frontend on 3000
  - Backend on 5000
  - No errors in terminal

- [ ] **Check browser console**
  - Press F12
  - Look for errors in Console tab

- [ ] **Check network requests**
  - F12 > Network tab
  - API calls to /api/* working

- [ ] **Restart if needed**
  - Stop all servers (Ctrl+C)
  - Close all terminals
  - Re-run `start.bat` or `npm run dev`

---

## ✨ Final Checklist

- [ ] **Game Fully Functional** ✅
- [ ] **Dashboard Working** ✅
- [ ] **Scores Saving** ✅
- [ ] **Having Fun!** ✅

---

## 🎯 Success Criteria

Your setup is complete when:

✅ Game loads without errors  
✅ Can play full game  
✅ Scores appear on dashboard  
✅ All controls respond  
✅ Navigation works  
✅ Visual effects display correctly  

---

## 🎉 Congratulations!

If you've checked everything off, you're ready to play!

### Next Steps:
1. 🎮 Play and improve your skills
2. 🏆 Beat your high score
3. 👥 Challenge friends
4. 🎨 Customize the game
5. 🚀 Deploy online (optional)

---

**Happy Gaming! 🎮✨**

