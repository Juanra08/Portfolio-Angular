# 🐙 GitHub + Vercel: Guía Completa de Despliegue Automático

## 🎯 El Gran Flujo

```
┌─────────────────────────────────┐
│  1. Local: Editas tu código    │
└──────────────┬──────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│  2. Git: git push               │
└──────────────┬──────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│  3. GitHub: Tu código en la nube│
└──────────────┬──────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│  4. Vercel: Detecta cambios     │
└──────────────┬──────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│  5. Vercel: Compila la app      │
└──────────────┬──────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│  6. Vercel: Despliega a producción
└──────────────┬──────────────────┘
               │
               ↓
┌─────────────────────────────────┐
│  7. Internet: Sitio actualizado │
└─────────────────────────────────┘
```

---

## 📋 Checklist: Antes de Empezar

- ✅ Git instalado en tu PC
- ✅ GitHub account creado ([github.com](https://github.com))
- ✅ Vercel account creado ([vercel.com](https://vercel.com))
- ✅ Tu proyecto Angular compilado

---

## 🚀 El Proceso en 4 Pasos

### PASO 1: Instalar Git (5 minutos)

```powershell
# Verifica que Git está instalado
git --version

# Si no está, descarga e instala:
# https://git-scm.com/download/win
```

Después de instalar, reinicia PowerShell.

---

### PASO 2: Configurar Git (1 minuto)

```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

---

### PASO 3: Crear Repo en GitHub (2 minutos)

1. Ve a [github.com/new](https://github.com/new)
2. Nombre: `portfolio-angular`
3. Descripción: `Mi portfolio con Angular y Firebase`
4. Public (visible al mundo)
5. NO inicializar con README
6. **Create repository**

---

### PASO 4: Subir Código (3 minutos)

```powershell
# Navega a tu proyecto
cd "c:\Users\juanr\Documents\Portfolio con angular"

# Inicializar Git
git init

# Agregar archivos
git add .

# Commit
git commit -m "Initial commit: Portfolio Angular con Firebase"

# Conectar a GitHub (REEMPLAZA TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/portfolio-angular.git

# Cambiar rama a main
git branch -M main

# ¡Subir!
git push -u origin main
```

**Ingresa tu usuario/contraseña o token cuando pida**

---

## ✨ Bonus: Conectar a Vercel (Automático Después)

1. [vercel.com/dashboard](https://vercel.com/dashboard)
2. **New Project**
3. **Import Git Repository**
4. Selecciona `portfolio-angular`
5. **Deploy**

¡Ahora cada `git push` automáticamente despliega! 🚀

---

## 🔄 Después: El Ciclo de Trabajo

```powershell
# 1. Editas tu código en VS Code
#    (cambias archivos, ves los cambios en http://localhost:4200)

# 2. Cuando estés listo, subes a GitHub:
git add .
git commit -m "Agregué nuevos proyectos"
git push

# 3. GitHub recibe los cambios ✅

# 4. Vercel detecta cambios automáticamente 🔔

# 5. Vercel compila tu app ⚙️

# 6. Vercel despliega a producción 🌍

# 7. Tu sitio se actualiza en vivo ✨
#    (sin hacer nada, automático!)
```

---

## 📊 Estadísticas Después

| Métrica | Valor |
|---------|-------|
| **Repositorio** | GitHub (gratis) |
| **Despliegue** | Vercel (gratis) |
| **Actualizaciones** | Automáticas |
| **Tiempo despliegue** | ~2 minutos |
| **Downtime** | Cero |
| **HTTPS** | Gratis |
| **CDN Global** | Gratis |

---

## 🆘 Problemas Comunes

| Problema | Solución |
|----------|----------|
| Git no instalado | Descargar e instalar desde [git-scm.com](https://git-scm.com) |
| "fatal: not a git repository" | Estás en carpeta equivocada. `cd` al proyecto |
| "Please tell me who you are" | `git config --global user.name "Nombre"` |
| "Permission denied (publickey)" | Usa HTTPS en lugar de SSH |
| Vercel no detecta cambios | Espera 5 minutos o redeploy manualmente |

---

## 🎓 Comandos Git Útiles

```bash
# Ver cambios pendientes
git status

# Ver historial
git log --oneline

# Ver qué cambió en un archivo
git diff archivo.ts

# Deshacer último commit (sin borrar archivos)
git reset --soft HEAD~1

# Deshacer último commit (borrando cambios)
git reset --hard HEAD~1

# Bajar cambios de GitHub
git pull

# Ver ramas
git branch

# Crear rama nueva
git checkout -b mi-rama

# Ver remoto
git remote -v
```

---

## 🎯 URLs Finales

Después de configurar todo:

```
GitHub: https://github.com/TU_USUARIO/portfolio-angular
Vercel: https://portfolio-angular-xxx.vercel.app
```

---

## ✅ Resumen

- ✅ Git instalado y configurado
- ✅ Código en GitHub
- ✅ GitHub conectado a Vercel
- ✅ Despliegues automáticos configurados
- ✅ ¡Tu portfolio en vivo! 🎉

---

**Próximo paso:** Sigue la guía paso a paso en `GITHUB_INSTRUCCIONES.md` para implementarlo.
