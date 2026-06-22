@echo off
title Heal India Website Launcher

echo Starting Heal India backend on http://localhost:5000
start "Heal India Backend" cmd /k "cd /d %~dp0backend && npm install && npm run dev"

echo Starting Heal India frontend on http://localhost:5173
start "Heal India Frontend" cmd /k "cd /d %~dp0frontend && npm install && npm run dev -- --host 127.0.0.1"

echo.
echo Website URL: http://localhost:5173
echo Backend API:  http://localhost:5000
echo.
echo Keep both opened terminal windows running while using the website.
pause
