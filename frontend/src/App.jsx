import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Game from './components/Game'
import Dashboard from './components/Dashboard'
import { Gamepad2, BarChart3 } from 'lucide-react'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="glass-effect sticky top-0 z-50 border-b border-white/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Gamepad2 className="w-8 h-8 text-cyan-400" />
                <h1 className="text-3xl font-bold neon-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  TETRIS
                </h1>
              </div>
              <div className="flex space-x-4">
                <Link to="/" className="game-button bg-gradient-to-r from-cyan-500 to-blue-500">
                  <Gamepad2 className="w-5 h-5 inline mr-2" />
                  Play
                </Link>
                <Link to="/dashboard" className="game-button bg-gradient-to-r from-purple-500 to-pink-500">
                  <BarChart3 className="w-5 h-5 inline mr-2" />
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

