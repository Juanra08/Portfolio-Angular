@echo off
REM Script para subir proyecto a GitHub automáticamente en Windows

echo.
echo 🐙 Script de GitHub - Portfolio Angular
echo =======================================
echo.

REM Verificar que Git está instalado
where git >nul 2>nul
if errorlevel 1 (
    echo ❌ Git no está instalado
    echo Ve a: https://git-scm.com
    pause
    exit /b 1
)

echo ✅ Git está instalado
echo.

REM Verificar configuración de Git
echo 📋 Verificando configuración de Git...
git config --global user.name >nul 2>nul
if errorlevel 1 (
    echo ❌ Git no está configurado
    echo.
    echo Ejecuta primero:
    echo   git config --global user.name "Tu Nombre"
    echo   git config --global user.email "tu@email.com"
    echo.
    pause
    exit /b 1
)

echo ✅ Git está configurado
echo.

REM Inicializar repositorio
echo 📁 Inicializando repositorio Git...
git init
if errorlevel 1 goto error

echo.
echo 📝 Agregando archivos...
git add .
if errorlevel 1 goto error

echo.
echo 💾 Haciendo commit...
git commit -m "Initial commit: Portfolio Angular con Firebase"
if errorlevel 1 (
    echo ℹ️ Repositorio ya inicializado
)

echo.
echo 🌐 Configurando GitHub remote...
set /p github_url="Ingresa tu URL de GitHub (ej: https://github.com/usuario/portfolio-angular.git): "

git remote add origin %github_url% 2>nul
if errorlevel 1 (
    echo 📝 Actualizando remote existente...
    git remote set-url origin %github_url%
)

echo.
echo 📤 Subiendo a GitHub...
echo ℹ️ (Ingresa tu usuario y contraseña/token si te pide)
echo.

git branch -M main
git push -u origin main

if errorlevel 1 goto error

echo.
echo ✅ ¡Éxito!
echo 🌐 Tu repositorio está en: %github_url%
echo.
pause
exit /b 0

:error
echo.
echo ❌ Error en el proceso
pause
exit /b 1
