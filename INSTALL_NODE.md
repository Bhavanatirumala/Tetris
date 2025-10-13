# 📥 How to Install Node.js and npm

## What is npm?

**npm** (Node Package Manager) comes bundled with **Node.js**. When you install Node.js, npm is automatically installed too!

---

## 🪟 **Windows Installation (Step-by-Step)**

### Step 1: Download Node.js

1. **Open your web browser**
2. **Go to:** https://nodejs.org/
3. You'll see two download buttons:
   - **LTS (Long Term Support)** - Recommended ✅
   - **Current** - Latest features

4. **Click the LTS button** (recommended for most users)
   - Example: "20.x.x LTS" or similar version
   - This is the stable, tested version

### Step 2: Run the Installer

1. **Find the downloaded file** (usually in your Downloads folder)
   - File name: `node-v20.x.x-x64.msi` (or similar)

2. **Double-click** the installer file

3. **Follow the installation wizard:**
   - Click **"Next"**
   - Accept the license agreement ✅
   - Click **"Next"**
   - Choose installation location (default is fine)
   - Click **"Next"**
   - **Important:** Make sure "Add to PATH" is checked ✅
   - Click **"Next"**
   - Click **"Install"**
   - Wait for installation to complete
   - Click **"Finish"**

### Step 3: Verify Installation

1. **Close ALL open terminals/command prompts** (important!)

2. **Open a NEW terminal:**
   - Press `Windows + R`
   - Type: `cmd` or `powershell`
   - Press Enter

3. **Check Node.js version:**
   ```bash
   node --version
   ```
   You should see: `v20.x.x` (or similar)

4. **Check npm version:**
   ```bash
   npm --version
   ```
   You should see: `10.x.x` (or similar)

### ✅ Success!
If you see version numbers, npm is installed and ready to use! 🎉

---

## 🍎 **macOS Installation**

### Option 1: Download from Website (Easiest)

1. **Visit:** https://nodejs.org/
2. **Download** the LTS version for macOS
3. **Open** the downloaded `.pkg` file
4. **Follow** the installer instructions
5. **Verify** in Terminal:
   ```bash
   node --version
   npm --version
   ```

### Option 2: Using Homebrew

If you have Homebrew installed:
```bash
brew install node
```

---

## 🐧 **Linux Installation**

### Ubuntu/Debian:
```bash
# Update package list
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
```

### Using Node Version Manager (nvm) - Recommended:
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal, then install Node.js
nvm install --lts

# Verify
node --version
npm --version
```

---

## 🔧 **After Installation**

### Test npm is Working:

1. **Check npm version:**
   ```bash
   npm --version
   ```

2. **Check where npm is installed:**
   ```bash
   npm config get prefix
   ```

3. **Test npm by installing a package globally:**
   ```bash
   npm install -g npm@latest
   ```
   This updates npm to the latest version

---

## 🐛 **Common Issues & Solutions**

### Issue 1: "npm is not recognized" (Windows)

**Solution:**
1. **Restart your computer** (yes, really!)
2. **Open a NEW terminal** (close old ones)
3. **Try again:** `npm --version`

If still not working:
4. **Check Environment Variables:**
   - Press `Windows + R`
   - Type: `sysdm.cpl`
   - Go to **"Advanced"** tab
   - Click **"Environment Variables"**
   - In "System variables", find **"Path"**
   - Make sure these paths exist:
     - `C:\Program Files\nodejs\`
     - `C:\Users\YourUsername\AppData\Roaming\npm`

### Issue 2: Permission Errors (Mac/Linux)

**Solution:**
Don't use `sudo` with npm. Instead, configure npm to use a different directory:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Issue 3: Old Version Installed

**Update npm:**
```bash
npm install -g npm@latest
```

**Update Node.js:**
- Windows/Mac: Download latest from https://nodejs.org/
- Linux: Use your package manager or nvm

---

## ✅ **Verify Everything is Ready**

Run these commands to check your installation:

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check npm is working
npm --help
```

**Expected output:**
```
v20.x.x  (or v18.x.x, v16.x.x)
10.x.x   (or 9.x.x, 8.x.x)
[npm help text]
```

---

## 🚀 **Now Install Tetris Dependencies!**

Once npm is installed, you can install the Tetris game dependencies:

### Windows (Easiest):
1. **Double-click** `setup.bat` in the Tetris folder
2. Wait for installation to complete
3. **Double-click** `start.bat` to play!

### Manual Installation:
```bash
# Navigate to Tetris folder
cd c:\Users\bhava\OneDrive\Desktop\Tetris

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

# Start the game
npm run dev
```

---

## 📚 **Useful npm Commands**

Once npm is installed, here are some helpful commands:

```bash
# Check npm version
npm --version

# Update npm
npm install -g npm@latest

# Install a package
npm install package-name

# Install packages from package.json
npm install

# Run a script defined in package.json
npm run script-name

# List installed packages
npm list

# Get help
npm help
```

---

## 🔗 **Helpful Resources**

- **Node.js Official Site:** https://nodejs.org/
- **npm Documentation:** https://docs.npmjs.com/
- **Check Node.js/npm versions:** https://nodejs.org/en/download/
- **npm Package Search:** https://www.npmjs.com/

---

## 🎯 **Quick Summary**

### For Windows Users:
1. ✅ Download Node.js LTS from https://nodejs.org/
2. ✅ Run the installer (keep all default options)
3. ✅ Restart your computer (or at least terminal)
4. ✅ Verify: `node --version` and `npm --version`
5. ✅ Run `setup.bat` in Tetris folder
6. ✅ Run `start.bat` to play!

### What You Get:
- ✅ **Node.js** - JavaScript runtime
- ✅ **npm** - Package manager (automatic)
- ✅ **npx** - Package runner (automatic)

---

## 🆘 **Still Having Issues?**

### Check These:
1. Did you close and reopen your terminal?
2. Did you restart your computer?
3. Is Node.js in your PATH environment variable?
4. Did you download from the official site (nodejs.org)?

### Get More Help:
1. Check: https://nodejs.org/en/download/
2. Check: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
3. Search: "How to install Node.js on [your OS]"

---

## ✨ **You're Ready!**

Once you see version numbers from `node --version` and `npm --version`, you're all set! 

### Next Steps:
1. ✅ npm is installed
2. ✅ Go to Tetris folder
3. ✅ Run `setup.bat` (Windows) or `npm install` (all platforms)
4. ✅ Start playing with `start.bat` or `npm run dev`

---

**Happy Coding! 🎮**

