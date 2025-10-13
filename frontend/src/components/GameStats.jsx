import React from 'react'
import { Trophy, Zap, BarChart } from 'lucide-react'

const GameStats = ({ score, lines, level }) => {
  return (
    <div className="space-y-4">
      <div className="stat-card bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
        <div className="flex items-center gap-3">
          <Trophy className="w-8 h-8 text-yellow-400" />
          <div>
            <p className="text-sm text-white/70">Score</p>
            <p className="text-3xl font-bold text-white neon-text">{score.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="stat-card bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
        <div className="flex items-center gap-3">
          <BarChart className="w-8 h-8 text-cyan-400" />
          <div>
            <p className="text-sm text-white/70">Lines</p>
            <p className="text-3xl font-bold text-white neon-text">{lines}</p>
          </div>
        </div>
      </div>

      <div className="stat-card bg-gradient-to-br from-purple-500/20 to-pink-500/20">
        <div className="flex items-center gap-3">
          <Zap className="w-8 h-8 text-purple-400" />
          <div>
            <p className="text-sm text-white/70">Level</p>
            <p className="text-3xl font-bold text-white neon-text">{level}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameStats

