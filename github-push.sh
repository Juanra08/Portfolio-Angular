#!/bin/bash
# Script para subir proyecto a GitHub automáticamente en Mac/Linux

echo ""
echo "🐙 Script de GitHub - Portfolio Angular"
echo "======================================="
echo ""

# Verificar que Git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git no está instalado"
    echo "Instálalo con: brew install git (Mac) o apt-get install git (Linux)"
    exit 1
fi

echo "✅ Git está instalado"
echo ""

# Verificar configuración de Git
echo "📋 Verificando configuración de Git..."
if ! git config --global user.name &> /dev/null; then
    echo "❌ Git no está configurado"
    echo ""
    echo "Ejecuta primero:"
    echo "  git config --global user.name \"Tu Nombre\""
    echo "  git config --global user.email \"tu@email.com\""
    echo ""
    exit 1
fi

echo "✅ Git está configurado"
echo ""

# Inicializar repositorio
echo "📁 Inicializando repositorio Git..."
git init

echo ""
echo "📝 Agregando archivos..."
git add .

echo ""
echo "💾 Haciendo commit..."
git commit -m "Initial commit: Portfolio Angular con Firebase" || echo "ℹ️ Repositorio ya inicializado"

echo ""
echo "🌐 Configurando GitHub remote..."
read -p "Ingresa tu URL de GitHub (ej: https://github.com/usuario/portfolio-angular.git): " github_url

git remote add origin "$github_url" 2>/dev/null || git remote set-url origin "$github_url"

echo ""
echo "📤 Subiendo a GitHub..."
echo "ℹ️ (Ingresa tu usuario y contraseña/token si te pide)"
echo ""

git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Éxito!"
    echo "🌐 Tu repositorio está en: $github_url"
    echo ""
else
    echo ""
    echo "❌ Error en el proceso"
    exit 1
fi
