// Tetris Game Logic

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

// Tetromino shapes
export const TETROMINOES = {
  I: {
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    color: '#00f0f0' // Cyan
  },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    color: '#0000f0' // Blue
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0]
    ],
    color: '#f0a000' // Orange
  },
  O: {
    shape: [
      [1, 1],
      [1, 1]
    ],
    color: '#f0f000' // Yellow
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    color: '#00f000' // Green
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    color: '#a000f0' // Purple
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    color: '#f00000' // Red
  }
};

// Create empty board
export const createEmptyBoard = () => {
  return Array.from({ length: BOARD_HEIGHT }, () =>
    Array.from({ length: BOARD_WIDTH }, () => ({ filled: false, color: null }))
  );
};

// Get random tetromino
export const getRandomTetromino = () => {
  const tetrominoKeys = Object.keys(TETROMINOES);
  const randomKey = tetrominoKeys[Math.floor(Math.random() * tetrominoKeys.length)];
  return {
    type: randomKey,
    shape: TETROMINOES[randomKey].shape,
    color: TETROMINOES[randomKey].color,
    position: { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 }
  };
};

// Rotate tetromino
export const rotateTetromino = (shape) => {
  const rotated = shape[0].map((_, i) =>
    shape.map(row => row[i]).reverse()
  );
  return rotated;
};

// Check collision
export const checkCollision = (board, tetromino, position) => {
  for (let y = 0; y < tetromino.shape.length; y++) {
    for (let x = 0; x < tetromino.shape[y].length; x++) {
      if (tetromino.shape[y][x]) {
        const newX = position.x + x;
        const newY = position.y + y;

        if (
          newX < 0 ||
          newX >= BOARD_WIDTH ||
          newY >= BOARD_HEIGHT ||
          (newY >= 0 && board[newY][newX].filled)
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

// Merge tetromino to board
export const mergeTetromino = (board, tetromino) => {
  const newBoard = board.map(row => [...row]);
  
  for (let y = 0; y < tetromino.shape.length; y++) {
    for (let x = 0; x < tetromino.shape[y].length; x++) {
      if (tetromino.shape[y][x]) {
        const boardY = tetromino.position.y + y;
        const boardX = tetromino.position.x + x;
        if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
          newBoard[boardY][boardX] = {
            filled: true,
            color: tetromino.color
          };
        }
      }
    }
  }
  
  return newBoard;
};

// Clear completed lines
export const clearLines = (board) => {
  let linesCleared = 0;
  const newBoard = board.filter(row => {
    const isComplete = row.every(cell => cell.filled);
    if (isComplete) linesCleared++;
    return !isComplete;
  });

  // Add new empty lines at the top
  while (newBoard.length < BOARD_HEIGHT) {
    newBoard.unshift(Array.from({ length: BOARD_WIDTH }, () => ({ filled: false, color: null })));
  }

  return { board: newBoard, linesCleared };
};

// Calculate score
export const calculateScore = (linesCleared, level) => {
  const baseScores = {
    1: 100,
    2: 300,
    3: 500,
    4: 800
  };
  return (baseScores[linesCleared] || 0) * level;
};

// Calculate level
export const calculateLevel = (totalLines) => {
  return Math.floor(totalLines / 10) + 1;
};

// Calculate drop speed
export const getDropSpeed = (level) => {
  return Math.max(100, 1000 - (level - 1) * 100);
};

