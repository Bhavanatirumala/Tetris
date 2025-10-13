import React from 'react'

const NextPiece = ({ tetromino }) => {
  if (!tetromino) return null

  return (
    <div className="stat-card">
      <h3 className="text-xl font-bold text-white mb-4">Next Piece</h3>
      <div className="flex justify-center items-center p-4 bg-black/30 rounded-lg">
        <div
          className="grid gap-[2px]"
          style={{
            gridTemplateColumns: `repeat(${tetromino.shape[0].length}, minmax(0, 1fr))`,
          }}
        >
          {tetromino.shape.map((row, y) =>
            row.map((cell, x) => (
              <div
                key={`${y}-${x}`}
                className="w-6 h-6 rounded-sm transition-all duration-200"
                style={{
                  backgroundColor: cell ? tetromino.color : 'transparent',
                  borderColor: cell ? tetromino.color : 'transparent',
                  borderWidth: cell ? '2px' : '0',
                  boxShadow: cell ? `0 0 10px ${tetromino.color}50` : 'none',
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default NextPiece

