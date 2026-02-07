#!/bin/bash
# Script para desplegar en Vercel rápidamente

echo "🚀 Iniciando despliegue en Vercel..."
echo ""

# Verificar que vercel está instalado
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI no está instalado"
    echo "Instálalo con: npm install -g vercel"
    exit 1
fi

# Compilar primero
echo "📦 Compilando la aplicación..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error en la compilación"
    exit 1
fi

echo "✅ Compilación exitosa"
echo ""

# Desplegar
echo "☁️ Desplegando a Vercel..."
vercel --prod

echo ""
echo "🎉 ¡Despliegue completado!"
