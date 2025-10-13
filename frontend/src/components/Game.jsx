import { useState, useEffect, useCallback, useRef } from 'react'
import axios from 'axios'
import {
  createEmptyBoard,
  getRandomTetromino,
  rotateTetromino,
  checkCollision,
  mergeTetromino,
  clearLines,
  calculateScore,
  calculateLevel,
  getDropSpeed,
  BOARD_WIDTH,
  BOARD_HEIGHT
} from '../utils/tetrisLogic'
import Board from './Board'
import NextPiece from './NextPiece'
import GameStats from './GameStats'
import GameControls from './GameControls'
import { Play, Pause, RotateCw, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react'

const Game = () => {
  const [board, setBoard] = useState(createEmptyBoard())
  const [currentTetromino, setCurrentTetromino] = useState(null)
  const [nextTetromino, setNextTetromino] = useState(getRandomTetromino())
  const [score, setScore] = useState(0)
  const [lines, setLines] = useState(0)
  const [level, setLevel] = useState(1)
  const [gameOver, setGameOver] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playerName, setPlayerName] = useState('')

  const gameLoopRef = useRef(null)

  // Start new game
  const startGame = useCallback(() => {
    setBoard(createEmptyBoard())
    setCurrentTetromino(getRandomTetromino())
    setNextTetromino(getRandomTetromino())
    setScore(0)
    setLines(0)
    setLevel(1)
    setGameOver(false)
    setIsPaused(false)
    setIsPlaying(true)
  }, [])

  // Move tetromino
  const moveTetromino = useCallback((direction) => {
    if (!currentTetromino || gameOver || isPaused) return

    const newPosition = { ...currentTetromino.position }
    
    switch (direction) {
      case 'left':
        newPosition.x -= 1
        break
      case 'right':
        newPosition.x += 1
        break
      case 'down':
        newPosition.y += 1
        break
      default:
        break
    }

    if (!checkCollision(board, currentTetromino, newPosition)) {
      setCurrentTetromino({ ...currentTetromino, position: newPosition })
    } else if (direction === 'down') {
      // Lock piece
      lockTetromino()
    }
  }, [currentTetromino, board, gameOver, isPaused])

  // Rotate tetromino
  const rotate = useCallback(() => {
    if (!currentTetromino || gameOver || isPaused) return

    const rotatedShape = rotateTetromino(currentTetromino.shape)
    const rotatedTetromino = { ...currentTetromino, shape: rotatedShape }

    if (!checkCollision(board, rotatedTetromino, currentTetromino.position)) {
      setCurrentTetromino(rotatedTetromino)
    }
  }, [currentTetromino, board, gameOver, isPaused])

  // Hard drop
  const hardDrop = useCallback(() => {
    if (!currentTetromino || gameOver || isPaused) return

    let newY = currentTetromino.position.y
    while (!checkCollision(board, currentTetromino, { ...currentTetromino.position, y: newY + 1 })) {
      newY++
    }
    
    setCurrentTetromino({ ...currentTetromino, position: { ...currentTetromino.position, y: newY } })
    setTimeout(() => lockTetromino(), 50)
  }, [currentTetromino, board, gameOver, isPaused])

  // Lock tetromino
  const lockTetromino = useCallback(() => {
    if (!currentTetromino) return

    const newBoard = mergeTetromino(board, currentTetromino)
    const { board: clearedBoard, linesCleared } = clearLines(newBoard)
    
    setBoard(clearedBoard)
    
    if (linesCleared > 0) {
      const newLines = lines + linesCleared
      const newLevel = calculateLevel(newLines)
      const points = calculateScore(linesCleared, level)
      
      setLines(newLines)
      setLevel(newLevel)
      setScore(score + points)
    }

    // Spawn new tetromino
    const newTetromino = nextTetromino
    setCurrentTetromino(newTetromino)
    setNextTetromino(getRandomTetromino())

    // Check game over
    if (checkCollision(clearedBoard, newTetromino, newTetromino.position)) {
      setGameOver(true)
      setIsPlaying(false)
      saveScore()
    }
  }, [currentTetromino, board, nextTetromino, lines, level, score])

  // Save score to backend
  const saveScore = async () => {
    if (score > 0 && playerName) {
      try {
        await axios.post('/api/scores', {
          playerName,
          score,
          lines,
          level
        })
      } catch (error) {
        console.error('Failed to save score:', error)
      }
    }
  }

  // Game loop
  useEffect(() => {
    if (!isPlaying || isPaused || gameOver) {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current)
      }
      return
    }

    const dropSpeed = getDropSpeed(level)
    gameLoopRef.current = setInterval(() => {
      moveTetromino('down')
    }, dropSpeed)

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current)
      }
    }
  }, [isPlaying, isPaused, gameOver, level, moveTetromino])

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver || !isPlaying) return

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          moveTetromino('left')
          break
        case 'ArrowRight':
          e.preventDefault()
          moveTetromino('right')
          break
        case 'ArrowDown':
          e.preventDefault()
          moveTetromino('down')
          break
        case 'ArrowUp':
          e.preventDefault()
          rotate()
          break
        case ' ':
          e.preventDefault()
          hardDrop()
          break
        case 'p':
        case 'P':
          e.preventDefault()
          setIsPaused(!isPaused)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [moveTetromino, rotate, hardDrop, gameOver, isPlaying, isPaused])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Game Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Stats */}
          <div className="space-y-6">
            <GameStats score={score} lines={lines} level={level} />
            <NextPiece tetromino={nextTetromino} />
            
            {/* Controls Guide */}
            <div className="stat-card">
              <h3 className="text-xl font-bold text-white mb-4">Controls</h3>
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>← Move Left</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>→ Move Right</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowDown className="w-4 h-4" />
                  <span>↓ Move Down</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCw className="w-4 h-4" />
                  <span>↑ Rotate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center border rounded">⎵</span>
                  <span>Space - Hard Drop</span>
                </div>
                <div className="flex items-center gap-2">
                  <Pause className="w-4 h-4" />
                  <span>P - Pause</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Game Board */}
          <div className="flex flex-col items-center space-y-6">
            <Board board={board} currentTetromino={currentTetromino} />
            
            {/* Game Status */}
            {!isPlaying && !gameOver && (
              <div className="glass-effect rounded-xl p-8 text-center space-y-4 w-full">
                <h2 className="text-2xl font-bold text-white mb-4">Welcome to Tetris!</h2>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                  onClick={startGame}
                  disabled={!playerName}
                  className="game-button bg-gradient-to-r from-green-500 to-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed w-full"
                >
                  <Play className="w-5 h-5 inline mr-2" />
                  Start Game
                </button>
              </div>
            )}

            {gameOver && (
              <div className="glass-effect rounded-xl p-8 text-center space-y-4 w-full animate-pulse">
                <h2 className="text-3xl font-bold text-red-400">Game Over!</h2>
                <p className="text-xl text-white">Final Score: {score}</p>
                <p className="text-lg text-white/80">Lines: {lines}</p>
                <button
                  onClick={startGame}
                  className="game-button bg-gradient-to-r from-green-500 to-emerald-500 w-full"
                >
                  <Play className="w-5 h-5 inline mr-2" />
                  Play Again
                </button>
              </div>
            )}

            {isPaused && isPlaying && (
              <div className="glass-effect rounded-xl p-6 text-center">
                <Pause className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                <p className="text-xl font-bold text-white">Paused</p>
                <p className="text-sm text-white/70">Press P to resume</p>
              </div>
            )}
          </div>

          {/* Right Panel - Touch Controls */}
          <div className="lg:block hidden">
            <GameControls
              onLeft={() => moveTetromino('left')}
              onRight={() => moveTetromino('right')}
              onDown={() => moveTetromino('down')}
              onRotate={rotate}
              onDrop={hardDrop}
              onPause={() => setIsPaused(!isPaused)}
              isPaused={isPaused}
              disabled={gameOver || !isPlaying}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game

