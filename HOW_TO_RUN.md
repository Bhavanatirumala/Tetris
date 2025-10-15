# 🚀 How to Run the Tetris Project

## ⚠️ **IMPORTANT: You Need Node.js First!**

I checked your system and **Node.js is not installed yet**. You need to install it before running this project.

---

## 📥 **STEP 1: Install Node.js & npm (Required!)**

### 🪟 **Windows - Quick Installation:**

1. **Download Node.js:**
   - Open your browser
   - Go to: **https://nodejs.org/**
   - Click the big green **"LTS"** button (on the left)
   - File downloads: `node-v20.x.x-x64.msi`

2. **Install Node.js:**
   - Open your Downloads folder
   - Double-click the downloaded file
   - Click **"Next"** → **"Next"** → **"Next"**
   - ✅ Make sure "Add to PATH" is checked
   - Click **"Install"**
   - Wait for installation to complete
   - Click **"Finish"**

3. **Restart Your Computer** (important!)

4. **Verify Installation:**
   - Open a NEW terminal (PowerShell or CMD)
   - Type: `node --version`
   - You should see: `v20.x.x` ✅
   - Type: `npm --version`
   - You should see: `10.x.x` ✅

**📘 Need detailed help?** Read: [INSTALL_NODE.md](INSTALL_NODE.md) or [INSTALL_GUIDE_VISUAL.md](INSTALL_GUIDE_VISUAL.md)

---

## 🎮 **STEP 2: Run the Tetris Project**

Once Node.js is installed, follow these steps:

### 🪟 **Windows Users (Easiest Method):**

#### **First Time Setup:**
1. Open the Tetris folder
2. **Double-click `setup.bat`**
3. A black window will open
4. Wait 2-3 minutes (installing packages)
5. When it says "Setup Complete!", press any key

#### **Start Playing:**
1. **Double-click `start.bat`**
2. Two black windows will open (backend and frontend servers)
3. Your browser will automatically open
4. Game loads at: **http://localhost:3000**
5. 🎮 **Start playing!**

**Keep those black windows open while playing!**

---

### 💻 **All Users (Manual Method):**

If the .bat files don't work, use these commands:

#### **First Time Setup:**
```bash
# 1. Open terminal in the Tetris folder
cd c:\Users\bhava\OneDrive\Desktop\Tetris

# 2. Install root dependencies
npm install

# 3. Install frontend dependencies
cd frontend
npm install
cd ..

# 4. Install backend dependencies
cd backend
npm install
cd ..
```

#### **Start the Game:**
```bash
# Start both servers at once
npm run dev
```

This will start:
- ✅ Frontend server on http://localhost:3000
- ✅ Backend server on http://localhost:5000

#### **Or Start Separately:**

**Terminal 1 (Frontend):**
```bash
cd c:\Users\bhava\OneDrive\Desktop\Tetris\frontend
npm run dev
```

**Terminal 2 (Backend):**
```bash
cd c:\Users\bhava\OneDrive\Desktop\Tetris\backend
npm run dev
```

---

## 🎯 **Quick Summary:**

### If Node.js is NOT installed:
```
1. Go to https://nodejs.org/
2. Download LTS version
3. Install it
4. Restart computer
5. Continue to next step
```

### If Node.js IS installed:
```
1. Double-click setup.bat (first time only)
2. Double-click start.bat
3. Play at http://localhost:3000
```

---

## 🌐 **Access Points:**

Once running, you can access:
- 🎮 **Game:** http://localhost:3000
- 📊 **Dashboard:** http://localhost:3000/dashboard
- 🔧 **API Health:** http://localhost:5000/api/health

---

## 🎮 **How to Play:**

1. **Enter your name** in the welcome screen
2. **Click "Start Game"**
3. **Use keyboard controls:**
   - `←` `→` : Move left/right
   - `↓` : Move down faster
   - `↑` : Rotate piece
   - `Space` : Hard drop (instant)
   - `P` : Pause/Resume

---

## 🛑 **How to Stop:**

### If using start.bat:
- Close both black windows (frontend & backend)

### If using terminal:
- Press `Ctrl + C` in each terminal
- Or just close the terminal windows

---

## 🐛 **Troubleshooting:**

### Problem: "node is not recognized"
**Solution:** Node.js is not installed. Follow STEP 1 above.

### Problem: "npm is not recognized"
**Solution:** 
1. Install Node.js (npm comes with it)
2. Restart your computer
3. Open a NEW terminal

### Problem: "Port 3000 already in use"
**Solution:**
1. Close any other apps using port 3000
2. Or change port in `frontend/vite.config.js`

### Problem: "Port 5000 already in use"
**Solution:**
1. Close any other apps using port 5000
2. Or change port in `backend/server.js`

### Problem: "Cannot find module"
**Solution:**
```bash
# Delete node_modules and reinstall
cd c:\Users\bhava\OneDrive\Desktop\Tetris
Remove-Item -Recurse -Force node_modules, frontend\node_modules, backend\node_modules
npm run install:all
```

### Problem: setup.bat doesn't work
**Solution:** Use manual method (see above)

### Problem: Browser doesn't open automatically
**Solution:** Manually open browser and go to http://localhost:3000

---

## ✅ **Verification Checklist:**

Before running, make sure:
- [ ] Node.js is installed (`node --version` works)
- [ ] npm is installed (`npm --version` works)
- [ ] You're in the Tetris folder
- [ ] Dependencies are installed (run setup.bat or npm install)

To run:
- [ ] Double-click start.bat (or run `npm run dev`)
- [ ] Two servers start successfully
- [ ] Browser opens at http://localhost:3000
- [ ] Game loads and you can play

---

## 📚 **Additional Resources:**

- **Install Node.js:** [INSTALL_NODE.md](INSTALL_NODE.md)
- **Visual Guide:** [INSTALL_GUIDE_VISUAL.md](INSTALL_GUIDE_VISUAL.md)
- **Getting Started:** [GET_STARTED.md](GET_STARTED.md)
- **Quick Start:** [QUICK_START.md](QUICK_START.md)
- **Full Documentation:** [README.md](README.md)

---

## 🎯 **Complete Flow:**

```
Install Node.js (from nodejs.org)
    ↓
Restart Computer
    ↓
Open Tetris Folder
    ↓
Double-click setup.bat (first time)
    ↓
Double-click start.bat
    ↓
Browser opens automatically
    ↓
Play Tetris! 🎮
```

---

## 💡 **Pro Tips:**

1. **Keep terminal windows open** while playing
2. **Use keyboard controls** for best experience
3. **Check dashboard** to see your scores
4. **Press P** to pause anytime
5. **Use Space** for hard drop (instant placement)

---

## 🆘 **Still Need Help?**

1. **For Node.js installation:** Read [INSTALL_NODE.md](INSTALL_NODE.md)
2. **For detailed setup:** Read [SETUP.md](SETUP.md)
3. **For troubleshooting:** Read [GET_STARTED.md](GET_STARTED.md)
4. **Test your setup:** Open `test.html` in browser

---

## 🎉 **You're Ready!**

### Right Now, You Need To:
1. ✅ **Install Node.js** from https://nodejs.org/
2. ✅ **Restart your computer**
3. ✅ **Double-click setup.bat**
4. ✅ **Double-click start.bat**
5. ✅ **Play!** 🎮

---

**Happy Gaming! 🎉**


