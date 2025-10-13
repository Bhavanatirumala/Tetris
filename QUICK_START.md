# ⚡ Quick Start Guide

Get your Tetris game running in 3 simple steps!

## 📋 Prerequisites

✅ **Node.js** (v16+) - [Download here](https://nodejs.org/)  
⚠️ MongoDB is optional (app works without it)

## 🚀 Installation

### Windows Users (Easy Mode!)

**Step 1:** Double-click `setup.bat`
- This will install all dependencies automatically

**Step 2:** Double-click `start.bat`
- This will start both servers and open the game

**Step 3:** Play!
- Game opens at http://localhost:3000

### Mac/Linux Users

```bash
# Step 1: Install dependencies
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..

# Step 2: Start the game
npm run dev

# Step 3: Open browser
# Visit http://localhost:3000
```

## 🎮 How to Play

1. **Enter Your Name** in the welcome screen
2. **Click "Start Game"**
3. **Use Arrow Keys**:
   - `←` `→` to move
   - `↑` to rotate
   - `↓` to drop faster
   - `Space` for instant drop
   - `P` to pause

4. **Score Points** by clearing lines
5. **Check Dashboard** to see leaderboard

## 🎯 Game Rules

- Clear lines to score points
- More lines at once = more points
- Speed increases every 10 lines
- Game over when pieces reach the top

## 📊 Scoring

| Lines Cleared | Base Points |
|---------------|-------------|
| 1 line        | 100 × level |
| 2 lines       | 300 × level |
| 3 lines       | 500 × level |
| 4 lines (Tetris!) | 800 × level |

## 🐛 Troubleshooting

**Problem: npm not found**
→ Install Node.js from https://nodejs.org/

**Problem: Port already in use**
→ Change ports in config files or close other apps

**Problem: Can't save scores**
→ Install MongoDB or scores will be temporary

**Problem: Game not loading**
→ Make sure both frontend (3000) and backend (5000) are running

## 📁 Project Structure

```
Tetris/
├── frontend/          # React game UI
├── backend/           # Node.js API
├── setup.bat         # Windows setup script
├── start.bat         # Windows start script
└── README.md         # Full documentation
```

## 🔗 Useful Links

- **Game**: http://localhost:3000
- **Dashboard**: http://localhost:3000/dashboard
- **API**: http://localhost:5000/api/health

## 💡 Tips

- Use `Space` for instant drop (hard drop)
- Press `P` to pause when you need a break
- Check the dashboard to see your ranking
- Practice rotating pieces in advance

## 🆘 Need Help?

1. Read the full [README.md](README.md)
2. Check [SETUP.md](SETUP.md) for detailed setup
3. See [FEATURES.md](FEATURES.md) for all features

---

**Ready? Let's play! 🎮**

Run: `npm run dev` or double-click `start.bat`

