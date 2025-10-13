# 🚀 Get Started with Tetris

## Welcome to Your Tetris Game! 🎮

This guide will get you up and running in just a few minutes.

---

## 📥 Step 1: Install Node.js (If Not Already Installed)

### Check if Node.js is installed:
Open a terminal/command prompt and run:
```bash
node --version
npm --version
```

If you see version numbers, you're good to go! ✅

If not, install Node.js:
1. Visit: https://nodejs.org/
2. Download the **LTS version** (recommended)
3. Run the installer (default settings are fine)
4. Restart your terminal

---

## 🔧 Step 2: Install Project Dependencies

### Option A: Windows (Easiest!)
1. **Double-click** `setup.bat` in the Tetris folder
2. Wait for installation to complete
3. Done! ✅

### Option B: Manual Installation
Open terminal in the Tetris folder and run:

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..

# Install backend dependencies  
cd backend
npm install
cd ..
```

---

## 🎮 Step 3: Start the Game

### Option A: Windows (Easiest!)
**Double-click** `start.bat`
- This opens both servers and your browser automatically!

### Option B: Single Command
```bash
npm run dev
```

### Option C: Separate Terminals
**Terminal 1 (Frontend):**
```bash
cd frontend
npm run dev
```

**Terminal 2 (Backend):**
```bash
cd backend
npm run dev
```

---

## 🌐 Step 4: Open the Game

The game should open automatically, but if not:

1. Open your browser
2. Go to: **http://localhost:3000**
3. Start playing! 🎉

---

## ✅ Step 5: Verify Everything Works

### Option 1: Use Test Page
1. Open `test.html` in your browser
2. Check all statuses are green

### Option 2: Manual Check
- ✅ Frontend: http://localhost:3000
- ✅ Backend: http://localhost:5000/api/health
- ✅ Dashboard: http://localhost:3000/dashboard

---

## 🎯 How to Play

### Game Controls:
- **←** : Move left
- **→** : Move right
- **↓** : Move down faster
- **↑** : Rotate piece
- **Space** : Hard drop (instant)
- **P** : Pause/Resume

### Gameplay:
1. Enter your name
2. Click "Start Game"
3. Arrange falling pieces
4. Clear lines to score
5. Beat your high score!

---

## 🏆 Dashboard

Visit: **http://localhost:3000/dashboard**

- View your scores
- Check leaderboard
- See global statistics
- Track your progress

---

## 💾 Database Setup (Optional)

The game works perfectly without MongoDB using in-memory storage.

### Want persistent scores?

**Option A: MongoDB Compass (Local)**
1. Download: https://www.mongodb.com/try/download/community
2. Install MongoDB Community Edition
3. Scores will be saved permanently

**Option B: MongoDB Atlas (Cloud - Free)**
1. Create account: https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Create `backend/.env` file:
   ```
   PORT=5000
   MONGODB_URI=your-connection-string-here
   ```
5. Restart backend server

---

## 🐛 Common Issues & Solutions

### Issue: "npm is not recognized"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: "Port 3000 already in use"
**Solution:** Close other apps using port 3000, or change port in `frontend/vite.config.js`

### Issue: "Port 5000 already in use"  
**Solution:** Close other apps using port 5000, or change port in `backend/server.js`

### Issue: "Cannot connect to backend"
**Solution:** Make sure backend is running on port 5000

### Issue: "Scores not saving"
**Solution:** 
- Works without DB (scores reset on restart)
- Install MongoDB for permanent storage

### Issue: Windows Firewall blocking
**Solution:** Allow Node.js through firewall when prompted

---

## 📚 Additional Resources

- **Full Documentation**: [README.md](README.md)
- **Setup Guide**: [SETUP.md](SETUP.md)
- **Features List**: [FEATURES.md](FEATURES.md)
- **Project Structure**: [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
- **Quick Reference**: [QUICK_START.md](QUICK_START.md)

---

## 🎨 Customization

### Change Colors
Edit `frontend/tailwind.config.js`

### Change Game Speed
Edit `frontend/src/utils/tetrisLogic.js`

### Change Board Size
Edit `frontend/src/utils/tetrisLogic.js`

---

## 🌟 Tips for Best Experience

1. **Use keyboard** for best control (arrow keys + space)
2. **Practice rotating** pieces before they land
3. **Use hard drop** (space) for quick placement
4. **Check dashboard** to see your ranking
5. **Compete with friends** on the leaderboard!

---

## 🔄 Updating the Game

If you make changes:

```bash
# Restart frontend (if you changed frontend code)
cd frontend
npm run dev

# Restart backend (if you changed backend code)
cd backend
npm run dev
```

---

## 🎉 You're Ready!

### Quick Checklist:
- ✅ Node.js installed
- ✅ Dependencies installed
- ✅ Servers running
- ✅ Browser open at localhost:3000
- ✅ Having fun!

### Now What?
1. **Play the game** and set a high score
2. **Share with friends** for leaderboard competition
3. **Customize** colors and settings
4. **Check dashboard** for statistics

---

## 🆘 Still Need Help?

1. Check `test.html` - test all systems
2. Read `SETUP.md` - detailed setup guide
3. Review `README.md` - full documentation
4. Check browser console (F12) for errors
5. Check terminal for error messages

---

## 🚀 What's Next?

- Beat your high score
- Get on the leaderboard
- Challenge your friends
- Customize the game
- Have fun! 🎮

---

**Happy Gaming! 🎉**

*Built with React, Node.js, Express, MongoDB, and Tailwind CSS*

