@echo off
echo ====================================
echo    Starting TETRIS Game
echo ====================================
echo.

echo Starting backend server...
start "Tetris Backend" cmd /k "cd backend && npm run dev"

timeout /t 3 /nobreak > nul

echo Starting frontend...
start "Tetris Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ====================================
echo Servers starting...
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo The game will open automatically in ~5 seconds
echo Close this window to keep servers running
echo ====================================
echo.

timeout /t 5 /nobreak > nul
start http://localhost:3000

