# 🎮 Tetris Full-Stack Game

A modern, colorful Tetris game built with React, Node.js, and MongoDB. Features a beautiful UI with neon effects, a dashboard with statistics, and a global leaderboard.

## ✨ Features

- 🎨 **Colorful UI** with gradient backgrounds and neon effects
- 🎮 **Classic Tetris Gameplay** with smooth controls
- 📊 **Dashboard** with statistics and leaderboard
- 🏆 **Global Leaderboard** to compete with other players
- 💾 **Persistent Storage** using MongoDB
- 📱 **Responsive Design** works on desktop and mobile
- ⌨️ **Keyboard & Touch Controls**

## 🎯 Game Controls

- **Arrow Left** (←) - Move piece left
- **Arrow Right** (→) - Move piece right  
- **Arrow Down** (↓) - Move piece down faster
- **Arrow Up** (↑) - Rotate piece
- **Space** - Hard drop (instant drop)
- **P** - Pause/Resume game

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (optional - will use in-memory storage if not available)

### Installation

1. **Clone the repository**
   ```bash
   cd Tetris
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables** (optional)
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your MongoDB URI if using database
   ```

4. **Start the development servers**
   ```bash
   # From the root directory
   npm run dev
   ```

   This will start:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Alternative: Start servers separately

```bash
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - Backend
cd backend
npm run dev
```

## 🏗️ Project Structure

```
Tetris/
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Game.jsx           # Main game component
│   │   │   ├── Board.jsx          # Game board
│   │   │   ├── Dashboard.jsx      # Statistics dashboard
│   │   │   ├── GameStats.jsx      # Stats display
│   │   │   ├── NextPiece.jsx      # Next piece preview
│   │   │   └── GameControls.jsx   # Touch controls
│   │   ├── utils/          # Game logic
│   │   │   └── tetrisLogic.js    # Tetris game engine
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/                 # Node.js backend
│   ├── server.js           # Express server & API
│   ├── package.json
│   └── .env.example
│
├── package.json            # Root package.json
└── README.md
```

## 🎨 Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database (optional)
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing

## 📡 API Endpoints

- `GET /api/scores` - Get all scores (top 50)
- `GET /api/scores/top` - Get top 10 scores
- `GET /api/scores/player/:playerName` - Get player's scores
- `POST /api/scores` - Create new score
- `GET /api/stats` - Get game statistics
- `GET /api/health` - Health check
- `DELETE /api/scores/:id` - Delete score (admin)

## 🎮 How to Play

1. **Start Game**
   - Enter your name
   - Click "Start Game"

2. **Play**
   - Use arrow keys or touch controls to move and rotate pieces
   - Clear lines to score points
   - Game speeds up as you level up

3. **View Dashboard**
   - Check your ranking on the leaderboard
   - View global statistics
   - See total games played, players, and average scores

## 🔧 Configuration

### MongoDB Setup (Optional)

If you want to use MongoDB for persistent storage:

1. Install MongoDB locally or use MongoDB Atlas
2. Update `backend/.env` with your MongoDB URI
3. Restart the backend server

Without MongoDB, scores will be stored in-memory (lost on server restart).

### Port Configuration

- Frontend port: Change in `frontend/vite.config.js`
- Backend port: Change in `backend/.env` or `backend/server.js`

## 🎨 Customization

### Colors
Edit `frontend/tailwind.config.js` to customize the tetromino colors and theme.

### Game Difficulty
Edit `frontend/src/utils/tetrisLogic.js` to adjust:
- Board size
- Drop speed
- Scoring system
- Level progression

## 📝 License

MIT License - feel free to use this project for learning or personal use.

## 🙏 Acknowledgments

- Inspired by the classic Tetris game
- Built with modern web technologies
- Designed with love for retro gaming

## 🐛 Troubleshooting

**Issue: Port already in use**
- Solution: Change ports in config files or kill the process using the port

**Issue: MongoDB connection failed**
- Solution: App will work with in-memory storage. Install MongoDB for persistence.

**Issue: Cannot save scores**
- Solution: Check backend is running and CORS is enabled

## 📧 Support

For issues and questions, please open an issue on the repository.

---

**Happy Gaming! 🎮✨**

