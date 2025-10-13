import React from 'react'
import { BOARD_WIDTH, BOARD_HEIGHT } from '../utils/tetrisLogic'

const Board = ({ board, currentTetromino }) => {
  // Create display board with current tetromino
  const displayBoard = board.map(row => row.map(cell => ({ ...cell })))

  if (currentTetromino) {
    for (let y = 0; y < currentTetromino.shape.length; y++) {
      for (let x = 0; x < currentTetromino.shape[y].length; x++) {
        if (currentTetromino.shape[y][x]) {
          const boardY = currentTetromino.position.y + y
          const boardX = currentTetromino.position.x + x
          if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
            displayBoard[boardY][boardX] = {
              filled: true,
              color: currentTetromino.color
            }
          }
        }
      }
    }
  }

  return (
    <div className="glass-effect rounded-xl p-4 inline-block">
      <div 
        className="grid gap-[1px] bg-black/30 p-1 rounded-lg"
        style={{
          gridTemplateColumns: `repeat(${BOARD_WIDTH}, minmax(0, 1fr))`,
        }}
      >
        {displayBoard.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${y}-${x}`}
              className="tetris-block w-7 h-7 sm:w-8 sm:h-8 rounded-sm transition-all duration-100"
              style={{
                backgroundColor: cell.filled ? cell.color : 'rgba(255, 255, 255, 0.05)',
                borderColor: cell.filled ? cell.color : 'rgba(255, 255, 255, 0.1)',
                boxShadow: cell.filled ? `0 0 10px ${cell.color}50, inset 0 0 10px rgba(255, 255, 255, 0.3)` : 'none',
              }}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Board

