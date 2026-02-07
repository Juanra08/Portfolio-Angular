# 🚀 GitHub en 5 Minutos

## ⚡ Pasos Rápidos

### 1️⃣ Crear Repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. **Repository name:** `portfolio-angular`
3. **Description:** `Mi portfolio con Angular y Firebase`
4. Elige **Public** o **Private**
5. NO marques "Initialize repository"
6. Haz clic en **"Create repository"**

### 2️⃣ Subir Código (Copia y Pega)

Abre PowerShell en tu carpeta del proyecto:

```bash
cd "c:\Users\juanr\Documents\Portfolio con angular"
```

Ejecuta estos comandos (reemplaza `TU_USUARIO`):

```bash
git init
git add .
git commit -m "Initial commit: Portfolio Angular con Firebase"
git remote add origin https://github.com/TU_USUARIO/portfolio-angular.git
git branch -M main
git push -u origin main
```

### 3️⃣ ¡Listo!

Tu código está en:
```
https://github.com/TU_USUARIO/portfolio-angular
```

---

## 🎯 Después: Conectar a Vercel

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. **New Project** → **Import Git Repository**
3. Selecciona **portfolio-angular**
4. Haz clic en **Deploy**

¡Cada `git push` desplegará automáticamente! ✨

---

## 💡 Próximos Cambios

```bash
# Haces cambios locales
# ...editas código...

# Subes a GitHub
git add .
git commit -m "Descripción del cambio"
git push

# ✨ Vercel automáticamente redespliega
```

---

¿Necesitas ayuda? Lee `GITHUB_SETUP.md` para la guía completa.
