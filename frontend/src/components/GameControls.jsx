import React from 'react'
import { ArrowLeft, ArrowRight, ArrowDown, RotateCw, ArrowBigDown, Pause, Play } from 'lucide-react'

const GameControls = ({ onLeft, onRight, onDown, onRotate, onDrop, onPause, isPaused, disabled }) => {
  return (
    <div className="stat-card">
      <h3 className="text-xl font-bold text-white mb-4">Touch Controls</h3>
      
      <div className="space-y-4">
        {/* Rotate */}
        <button
          onClick={onRotate}
          disabled={disabled}
          className="game-button bg-gradient-to-r from-purple-500 to-pink-500 w-full disabled:opacity-50"
        >
          <RotateCw className="w-5 h-5 inline mr-2" />
          Rotate
        </button>

        {/* Direction Controls */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={onLeft}
            disabled={disabled}
            className="game-button bg-gradient-to-r from-blue-500 to-cyan-500 disabled:opacity-50"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={onDown}
            disabled={disabled}
            className="game-button bg-gradient-to-r from-green-500 to-emerald-500 disabled:opacity-50"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
          
          <button
            onClick={onRight}
            disabled={disabled}
            className="game-button bg-gradient-to-r from-blue-500 to-cyan-500 disabled:opacity-50"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Hard Drop */}
        <button
          onClick={onDrop}
          disabled={disabled}
          className="game-button bg-gradient-to-r from-red-500 to-orange-500 w-full disabled:opacity-50"
        >
          <ArrowBigDown className="w-5 h-5 inline mr-2" />
          Hard Drop
        </button>

        {/* Pause */}
        <button
          onClick={onPause}
          disabled={disabled}
          className="game-button bg-gradient-to-r from-yellow-500 to-amber-500 w-full disabled:opacity-50"
        >
          {isPaused ? <Play className="w-5 h-5 inline mr-2" /> : <Pause className="w-5 h-5 inline mr-2" />}
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>
    </div>
  )
}

export default GameControls

