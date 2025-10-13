# 🚀 Tetris Game - Setup Instructions

## Prerequisites Installation

### Step 1: Install Node.js
1. Download Node.js from: https://nodejs.org/
2. Choose the **LTS version** (Long Term Support)
3. Run the installer
4. Verify installation by opening a new terminal and running:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install MongoDB (Optional)
MongoDB is optional. The app will work without it using in-memory storage.

**Option A: MongoDB Compass (Recommended for Windows)**
1. Download from: https://www.mongodb.com/try/download/community
2. Install MongoDB Community Server
3. Install MongoDB Compass (GUI tool)

**Option B: Use MongoDB Atlas (Cloud - Free)**
1. Create account at: https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get your connection string
4. Update `backend/.env` with your connection string

## 🎮 Setup Instructions

### Step 1: Install Dependencies

Open a terminal/PowerShell in the Tetris folder and run:

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

### Step 2: Configure Environment (Optional)

If using MongoDB:

1. Create a `.env` file in the `backend` folder:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/tetris
   ```

2. If using MongoDB Atlas:
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tetris
   ```

### Step 3: Start the Application

**Option A: Start Both Servers at Once**
```bash
npm run dev
```

**Option B: Start Servers Separately**

Terminal 1 (Frontend):
```bash
cd frontend
npm run dev
```

Terminal 2 (Backend):
```bash
cd backend
npm run dev
```

### Step 4: Open the Game

Open your browser and go to:
- **Game**: http://localhost:3000
- **API**: http://localhost:5000/api/health

## 🎯 Quick Test

1. Enter your name
2. Click "Start Game"
3. Use arrow keys to play:
   - ← → : Move left/right
   - ↓ : Move down
   - ↑ : Rotate
   - Space : Hard drop
   - P : Pause

4. Check the Dashboard to see your score!

## 🐛 Troubleshooting

### Issue: Port Already in Use
**Solution**: Change ports in config files:
- Frontend: `frontend/vite.config.js` (change port 3000)
- Backend: `backend/.env` or `backend/server.js` (change port 5000)

### Issue: MongoDB Connection Failed
**Solution**: 
- App will automatically use in-memory storage
- Scores will work but won't persist after restart
- To fix: Install MongoDB or use MongoDB Atlas

### Issue: npm command not found
**Solution**: 
- Install Node.js from https://nodejs.org/
- Restart your terminal after installation
- Verify with: `npm --version`

### Issue: Module not found errors
**Solution**: 
```bash
# Delete node_modules and reinstall
rm -rf node_modules frontend/node_modules backend/node_modules
npm run install:all
```

### Issue: CORS errors
**Solution**: 
- Make sure backend is running on port 5000
- Check `frontend/vite.config.js` proxy settings

## 📦 Build for Production

### Frontend
```bash
cd frontend
npm run build
```
Output will be in `frontend/dist/`

### Backend
The backend is production-ready. Just set environment variables:
```bash
NODE_ENV=production
PORT=5000
MONGODB_URI=your-production-mongodb-uri
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `cd frontend && npm run build`
2. Deploy the `dist` folder
3. Set environment variable: `VITE_API_URL=your-backend-url`

### Backend (Heroku/Railway/Render)
1. Deploy the backend folder
2. Set environment variables (PORT, MONGODB_URI)
3. Update frontend API URL

## 📝 Default Configuration

- **Frontend Port**: 3000
- **Backend Port**: 5000
- **Database**: MongoDB (optional, falls back to in-memory)

## 🎨 Customization

### Change Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  'tetris-cyan': '#00f0f0',
  'tetris-blue': '#0000f0',
  // ... add your colors
}
```

### Change Game Speed
Edit `frontend/src/utils/tetrisLogic.js`:
```javascript
export const getDropSpeed = (level) => {
  return Math.max(100, 1000 - (level - 1) * 100); // Adjust these values
}
```

### Change Board Size
Edit `frontend/src/utils/tetrisLogic.js`:
```javascript
export const BOARD_WIDTH = 10;  // Change width
export const BOARD_HEIGHT = 20; // Change height
```

## 🆘 Need Help?

1. Check this setup guide
2. Read the main README.md
3. Check browser console for errors (F12)
4. Check terminal for server errors

---

**Happy Gaming! 🎮✨**

