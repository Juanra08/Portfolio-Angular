@echo off
REM Script para desplegar en Vercel desde Windows

echo 🚀 Iniciando despliegue en Vercel...
echo.

REM Verificar que vercel está instalado
where vercel >nul 2>nul
if errorlevel 1 (
    echo ❌ Vercel CLI no está instalado
    echo Instálalo con: npm install -g vercel
    pause
    exit /b 1
)

REM Compilar primero
echo 📦 Compilando la aplicación...
call npm run build

if errorlevel 1 (
    echo ❌ Error en la compilación
    pause
    exit /b 1
)

echo ✅ Compilación exitosa
echo.

REM Desplegar
echo ☁️ Desplegando a Vercel...
call vercel --prod

echo.
echo 🎉 ¡Despliegue completado!
pause
