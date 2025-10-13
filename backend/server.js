import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tetris';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => {
    console.log('⚠️  MongoDB connection failed, using in-memory storage');
    console.log('To use database, install MongoDB and update MONGODB_URI in .env');
  });

// Score Schema
const scoreSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
    trim: true
  },
  score: {
    type: Number,
    required: true,
    min: 0
  },
  lines: {
    type: Number,
    required: true,
    min: 0
  },
  level: {
    type: Number,
    required: true,
    min: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Score = mongoose.model('Score', scoreSchema);

// In-memory storage fallback
let inMemoryScores = [];

// Routes

// Get all scores (sorted by score, descending)
app.get('/api/scores', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const scores = await Score.find()
        .sort({ score: -1 })
        .limit(50);
      res.json(scores);
    } else {
      const sortedScores = [...inMemoryScores]
        .sort((a, b) => b.score - a.score)
        .slice(0, 50);
      res.json(sortedScores);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get top 10 scores
app.get('/api/scores/top', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const topScores = await Score.find()
        .sort({ score: -1 })
        .limit(10);
      res.json(topScores);
    } else {
      const topScores = [...inMemoryScores]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
      res.json(topScores);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new score
app.post('/api/scores', async (req, res) => {
  try {
    const { playerName, score, lines, level } = req.body;
    
    if (!playerName || score === undefined || lines === undefined || level === undefined) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (mongoose.connection.readyState === 1) {
      const newScore = new Score({
        playerName,
        score,
        lines,
        level
      });

      const savedScore = await newScore.save();
      res.status(201).json(savedScore);
    } else {
      const newScore = {
        _id: Date.now().toString(),
        playerName,
        score,
        lines,
        level,
        createdAt: new Date()
      };
      inMemoryScores.push(newScore);
      res.status(201).json(newScore);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get player's best score
app.get('/api/scores/player/:playerName', async (req, res) => {
  try {
    const { playerName } = req.params;
    
    if (mongoose.connection.readyState === 1) {
      const playerScores = await Score.find({ playerName })
        .sort({ score: -1 })
        .limit(10);
      res.json(playerScores);
    } else {
      const playerScores = inMemoryScores
        .filter(s => s.playerName === playerName)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
      res.json(playerScores);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get statistics
app.get('/api/stats', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const totalGames = await Score.countDocuments();
      const uniquePlayers = await Score.distinct('playerName');
      const allScores = await Score.find();
      
      const highestScore = allScores.length > 0 
        ? Math.max(...allScores.map(s => s.score))
        : 0;
      
      const totalScore = allScores.reduce((sum, s) => sum + s.score, 0);
      const averageScore = allScores.length > 0 ? totalScore / allScores.length : 0;

      res.json({
        totalGames,
        totalPlayers: uniquePlayers.length,
        highestScore,
        averageScore
      });
    } else {
      const totalGames = inMemoryScores.length;
      const uniquePlayers = [...new Set(inMemoryScores.map(s => s.playerName))];
      const highestScore = inMemoryScores.length > 0
        ? Math.max(...inMemoryScores.map(s => s.score))
        : 0;
      const totalScore = inMemoryScores.reduce((sum, s) => sum + s.score, 0);
      const averageScore = inMemoryScores.length > 0 ? totalScore / inMemoryScores.length : 0;

      res.json({
        totalGames,
        totalPlayers: uniquePlayers.length,
        highestScore,
        averageScore
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete score (admin only - add authentication in production)
app.delete('/api/scores/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (mongoose.connection.readyState === 1) {
      await Score.findByIdAndDelete(id);
      res.json({ message: 'Score deleted successfully' });
    } else {
      inMemoryScores = inMemoryScores.filter(s => s._id !== id);
      res.json({ message: 'Score deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 API available at http://localhost:${PORT}/api`);
});

export default app;

