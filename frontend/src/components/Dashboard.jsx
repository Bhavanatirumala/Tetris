import { useState, useEffect } from 'react'
import axios from 'axios'
import { Trophy, Users, TrendingUp, Clock, Medal, Star } from 'lucide-react'

const Dashboard = () => {
  const [scores, setScores] = useState([])
  const [stats, setStats] = useState({
    totalGames: 0,
    totalPlayers: 0,
    highestScore: 0,
    averageScore: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchScores()
    fetchStats()
  }, [])

  const fetchScores = async () => {
    try {
      const response = await axios.get('/api/scores')
      setScores(response.data)
    } catch (error) {
      console.error('Failed to fetch scores:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      const response = await axios.get('/api/stats')
      setStats(response.data)
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    }
  }

  const getMedalColor = (index) => {
    switch (index) {
      case 0:
        return 'from-yellow-400 to-yellow-600'
      case 1:
        return 'from-gray-300 to-gray-500'
      case 2:
        return 'from-orange-400 to-orange-600'
      default:
        return 'from-blue-400 to-blue-600'
    }
  }

  const getMedalIcon = (index) => {
    if (index < 3) {
      return <Medal className="w-6 h-6" />
    }
    return <Star className="w-5 h-5" />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold neon-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
            Dashboard
          </h1>
          <p className="text-white/70 text-lg">Track your progress and compete with others</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="stat-card bg-gradient-to-br from-purple-500/20 to-pink-500/20">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-500/30">
                <Trophy className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-white/70">Total Games</p>
                <p className="text-3xl font-bold text-white">{stats.totalGames}</p>
              </div>
            </div>
          </div>

          <div className="stat-card bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-cyan-500/30">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-white/70">Total Players</p>
                <p className="text-3xl font-bold text-white">{stats.totalPlayers}</p>
              </div>
            </div>
          </div>

          <div className="stat-card bg-gradient-to-br from-green-500/20 to-emerald-500/20">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-500/30">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-white/70">Highest Score</p>
                <p className="text-3xl font-bold text-white">{stats.highestScore.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="stat-card bg-gradient-to-br from-orange-500/20 to-red-500/20">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-orange-500/30">
                <Clock className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-white/70">Average Score</p>
                <p className="text-3xl font-bold text-white">{Math.round(stats.averageScore).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="glass-effect rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white">Leaderboard</h2>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
              <p className="text-white/70 mt-4">Loading scores...</p>
            </div>
          ) : scores.length === 0 ? (
            <div className="text-center py-12">
              <Trophy className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <p className="text-white/70">No scores yet. Be the first to play!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {scores.map((score, index) => (
                <div
                  key={score._id}
                  className={`glass-effect rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                    index < 3 ? 'bg-gradient-to-r ' + getMedalColor(index) + '/20' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${getMedalColor(index)} text-white font-bold`}>
                        {index < 3 ? getMedalIcon(index) : index + 1}
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-white">{score.playerName}</h3>
                        <div className="flex gap-4 mt-1 text-sm text-white/70">
                          <span>Lines: {score.lines}</span>
                          <span>Level: {score.level}</span>
                          <span>{new Date(score.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-3xl font-bold text-white neon-text">
                        {score.score.toLocaleString()}
                      </p>
                      <p className="text-sm text-white/70">points</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard

