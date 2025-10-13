@echo off
echo ====================================
echo    TETRIS GAME - Windows Setup
echo ====================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js from: https://nodejs.org/
    echo After installation, run this script again.
    pause
    exit /b 1
)

echo [OK] Node.js is installed
node --version
npm --version
echo.

echo Installing dependencies...
echo.

echo [1/3] Installing root dependencies...
call npm install
echo.

echo [2/3] Installing frontend dependencies...
cd frontend
call npm install
cd ..
echo.

echo [3/3] Installing backend dependencies...
cd backend
call npm install
cd ..
echo.

echo ====================================
echo    Setup Complete! 
echo ====================================
echo.
echo Next steps:
echo 1. To start the game, run: npm run dev
echo 2. Open browser at: http://localhost:3000
echo 3. Have fun playing Tetris!
echo.
echo For MongoDB setup (optional), see SETUP.md
echo.
pause

