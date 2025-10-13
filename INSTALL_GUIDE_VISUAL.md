# 📥 Node.js & npm Installation - Visual Guide

## 🎯 **Quick Answer: How to Download npm?**

**npm comes with Node.js!** Just install Node.js and you'll automatically get npm.

---

## 🪟 **Windows - Step by Step with Details**

### 📍 **Step 1: Go to Node.js Website**

1. Open your web browser (Chrome, Edge, Firefox, etc.)
2. Type in the address bar: **https://nodejs.org/**
3. Press Enter

**What you'll see:**
- A green website with two big download buttons
- One says "LTS" (this is what you want!)
- One says "Current" (skip this one)

### 📍 **Step 2: Download Node.js**

1. **Click the green "LTS" button**
   - LTS = Long Term Support (stable and reliable)
   - Example: "20.10.0 LTS" or similar

2. **File will start downloading**
   - Look for it in your Downloads folder
   - File name: `node-v20.x.x-x64.msi`
   - Size: About 30 MB

### 📍 **Step 3: Install Node.js**

1. **Find the downloaded file:**
   - Open your Downloads folder
   - Look for `node-v20.x.x-x64.msi`
   
2. **Double-click the file** to start installation

3. **Installation Wizard Steps:**

   **Screen 1 - Welcome**
   - Click **"Next"** ➡️

   **Screen 2 - License Agreement**
   - Check ✅ "I accept the terms in the License Agreement"
   - Click **"Next"** ➡️

   **Screen 3 - Destination Folder**
   - Default location is fine: `C:\Program Files\nodejs\`
   - Click **"Next"** ➡️

   **Screen 4 - Custom Setup**
   - ⚠️ **IMPORTANT:** Leave everything checked!
   - Make sure "Add to PATH" has a checkmark ✅
   - Click **"Next"** ➡️

   **Screen 5 - Tools for Native Modules** (optional)
   - You can skip this (uncheck the box)
   - Click **"Next"** ➡️

   **Screen 6 - Ready to Install**
   - Click **"Install"** 🚀
   - If Windows asks for permission, click **"Yes"**

   **Screen 7 - Installation Progress**
   - Wait 30-60 seconds
   - Progress bar will fill up

   **Screen 8 - Completed**
   - Click **"Finish"** ✅

### 📍 **Step 4: Verify Installation**

**IMPORTANT: Restart your computer first!** (or at least close all terminals)

1. **Open Command Prompt or PowerShell:**
   
   **Method 1:**
   - Press `Windows Key + R`
   - Type: `cmd`
   - Press Enter
   
   **Method 2:**
   - Press `Windows Key`
   - Type: `powershell`
   - Press Enter
   
   **Method 3:**
   - Right-click on Start menu
   - Click "Windows PowerShell" or "Terminal"

2. **Type this command and press Enter:**
   ```
   node --version
   ```
   
   **Expected Result:**
   ```
   v20.10.0
   ```
   (version number may vary)

3. **Type this command and press Enter:**
   ```
   npm --version
   ```
   
   **Expected Result:**
   ```
   10.2.3
   ```
   (version number may vary)

### ✅ **Success! If you see version numbers, you're done!**

---

## 🍎 **macOS - Step by Step**

### 📍 **Step 1: Download**

1. Go to: **https://nodejs.org/**
2. Click the **"LTS"** button (green button on left)
3. File downloads: `node-v20.x.x.pkg` (about 50 MB)

### 📍 **Step 2: Install**

1. **Open the downloaded .pkg file**
2. **Follow the installer:**
   - Click **"Continue"** several times
   - Accept license
   - Click **"Install"**
   - Enter your Mac password
   - Click **"Close"** when done

### 📍 **Step 3: Verify**

1. **Open Terminal:**
   - Press `Cmd + Space`
   - Type: `terminal`
   - Press Enter

2. **Check installation:**
   ```bash
   node --version
   npm --version
   ```

---

## 🐧 **Linux (Ubuntu/Debian) - Step by Step**

### 📍 **Method 1: Using apt (Simple)**

1. **Open Terminal** (Ctrl + Alt + T)

2. **Run these commands:**
   ```bash
   # Update package list
   sudo apt update
   
   # Install Node.js and npm
   sudo apt install nodejs npm
   
   # Verify
   node --version
   npm --version
   ```

### 📍 **Method 2: Using NodeSource (Latest Version)**

1. **Open Terminal**

2. **Run these commands:**
   ```bash
   # Download and run NodeSource setup script
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   
   # Install Node.js and npm
   sudo apt-get install -y nodejs
   
   # Verify
   node --version
   npm --version
   ```

---

## 🎯 **What Happens After Installation?**

### You Now Have:

1. **✅ Node.js** - JavaScript runtime
   - Allows you to run JavaScript outside the browser
   - Required to run the Tetris game backend

2. **✅ npm** - Node Package Manager
   - Automatically installed with Node.js
   - Downloads and manages project dependencies
   - Required to install Tetris game packages

3. **✅ npx** - Node Package Execute
   - Also automatically installed
   - Runs packages without installing them globally

---

## 🚀 **Next Steps: Install Tetris Game**

### Windows Users (Easiest Way):

Now that npm is installed:

1. **Navigate to your Tetris folder:**
   - Open File Explorer
   - Go to: `C:\Users\bhava\OneDrive\Desktop\Tetris`

2. **Double-click `setup.bat`**
   - A black window will open
   - You'll see text scrolling (packages being installed)
   - Wait until it says "Setup Complete!"
   - Press any key to close

3. **Double-click `start.bat`**
   - Two black windows will open (backend & frontend)
   - Your browser will open automatically
   - Game loads at http://localhost:3000
   - 🎮 Start playing!

### All Users (Manual Way):

```bash
# 1. Open terminal/command prompt
# 2. Navigate to Tetris folder
cd c:\Users\bhava\OneDrive\Desktop\Tetris

# 3. Install all dependencies
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..

# 4. Start the game
npm run dev

# 5. Open browser at http://localhost:3000
```

---

## 🐛 **Troubleshooting**

### Problem: "npm is not recognized"

**Solution Checklist:**
- [ ] Did you install Node.js from https://nodejs.org/ ?
- [ ] Did you close and reopen your terminal?
- [ ] Did you restart your computer?
- [ ] Was "Add to PATH" checked during installation?

**Fix on Windows:**
1. Uninstall Node.js (Control Panel > Programs)
2. Restart computer
3. Reinstall Node.js (make sure to check "Add to PATH")
4. Restart computer again
5. Open NEW terminal and try again

### Problem: "Permission denied" (Mac/Linux)

**Solution:**
```bash
# Don't use sudo with npm!
# Instead, change npm's default directory:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Problem: Old version showing

**Update npm:**
```bash
npm install -g npm@latest
```

**Update Node.js:**
- Download latest from https://nodejs.org/ and reinstall

---

## ✅ **Verification Checklist**

Run these commands. All should work:

```bash
# Should show version number (e.g., v20.10.0)
node --version

# Should show version number (e.g., 10.2.3)
npm --version

# Should show help text
npm --help

# Should show current directory
npm config get prefix
```

---

## 📊 **Installation Summary**

| Step | Action | Time |
|------|--------|------|
| 1 | Download Node.js | 1-2 min |
| 2 | Install Node.js | 2-3 min |
| 3 | Restart computer | 1-2 min |
| 4 | Verify installation | 30 sec |
| 5 | Install Tetris deps | 2-3 min |
| **Total** | **Complete setup** | **~10 min** |

---

## 🎮 **You're Ready for Tetris!**

### Quick Start:
1. ✅ Node.js installed → `node --version` works
2. ✅ npm installed → `npm --version` works
3. ✅ Go to Tetris folder
4. ✅ Double-click `setup.bat` (Windows) or run `npm install`
5. ✅ Double-click `start.bat` or run `npm run dev`
6. ✅ Play at http://localhost:3000

---

## 🔗 **Helpful Links**

- **Download Node.js:** https://nodejs.org/
- **npm Documentation:** https://docs.npmjs.com/
- **Node.js Documentation:** https://nodejs.org/docs/
- **Check if installed:** Open terminal and run `node --version`

---

## 💡 **Pro Tips**

1. **Always download from official site:** https://nodejs.org/
2. **Choose LTS version** for stability
3. **Restart your computer** after installation
4. **Use NEW terminal** after installation
5. **Check PATH** is set correctly (automatic if using installer)

---

**That's it! You're ready to code! 🚀**

