# 📸 Guía Visual: GitHub Paso a Paso

## 🎬 Paso 1: Verificar Git

**En PowerShell:**
```
PS C:\Users\juanr\Documents\Portfolio con angular> git --version
```

**Si ves:**
```
git version 2.44.0.windows.1
```
✅ Git está instalado. Ve al Paso 2.

**Si ves un error:**
❌ Instala Git desde [git-scm.com](https://git-scm.com)

---

## ⚙️ Paso 2: Configurar Git

**Ejecuta en PowerShell:**
```bash
git config --global user.name "Juan Rodriguez"
git config --global user.email "juan@example.com"
```

**Verifica:**
```bash
git config --global user.name
git config --global user.email
```

**Deberías ver:**
```
Juan Rodriguez
juan@example.com
```

---

## 🌐 Paso 3: Crear Repositorio en GitHub

### 3A: Ve a GitHub
[github.com/new](https://github.com/new)

### 3B: Completa el Formulario

```
Repository name:        portfolio-angular
Description:           Mi portfolio personal con Angular y Firebase
Public:                ✅ (marcar)
Initialize:            ❌ (NO marcar)
Add .gitignore:        ❌ (NO - ya tienes uno)
Choose a license:      No license (deja en blanco)
```

### 3C: Haz Clic en "Create repository"

**GitHub te mostrará una pantalla como esta:**
```
…or create a new repository on the command line
echo "# portfolio-angular" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portfolio-angular.git
git push -u origin main
```

**Ignora eso. Usa los comandos de abajo.**

---

## 📤 Paso 4: Subir tu Código

### 4A: Navega a tu Proyecto

```powershell
cd "c:\Users\juanr\Documents\Portfolio con angular"
```

### 4B: Inicializar Git

```bash
git init
```

**Output esperado:**
```
Initialized empty Git repository in C:/Users/juanr/Documents/Portfolio con angular/.git/
```

### 4C: Agregar Archivos

```bash
git add .
```

(Sin output = está bien)

### 4D: Primer Commit

```bash
git commit -m "Initial commit: Portfolio Angular con Firebase"
```

**Output esperado:**
```
[main (root-commit) abc1234] Initial commit: Portfolio Angular con Firebase
 150 files changed, 5000 insertions(+)
```

### 4E: Conectar a GitHub

**IMPORTANTE: Reemplaza `TU_USUARIO` con tu usuario real:**

```bash
git remote add origin https://github.com/TU_USUARIO/portfolio-angular.git
```

Ejemplo:
```bash
git remote add origin https://github.com/juanrodriguez/portfolio-angular.git
```

### 4F: Cambiar Rama

```bash
git branch -M main
```

### 4G: ¡Subir!

```bash
git push -u origin main
```

**Durante esto, te pedirá autenticación:**

```
Username for 'https://github.com': juanrodriguez
Password for 'https://juanrodriguez@github.com': 
```

**Opciones:**
- **Username:** Tu usuario de GitHub
- **Password:** Tu contraseña OR un "Personal Access Token"

**Si es tu primera vez, elige:**
1. Ve a [github.com/settings/tokens](https://github.com/settings/tokens)
2. **Generate new token** → **classic**
3. Nombre: `portfolio-deploy`
4. Marcar: **repo**
5. **Generate token**
6. Copiar el token (nunca lo verás de nuevo)
7. En PowerShell, usa el token como "password"

---

## ✅ ¡Éxito!

Si ves:
```
Enumerating objects: 150, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (120/120), done.
Writing objects: 100% (150/150), 5.23 MiB | 2.45 MiB/s, done.
Total 150 (delta 0), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (0/0), done.
remote:
remote: Create a pull request for 'main' on GitHub by visiting:
remote:      https://github.com/juanrodriguez/portfolio-angular/new/main
remote:
To https://github.com/juanrodriguez/portfolio-angular.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ **¡Tu código está en GitHub!**

Ve a:
```
https://github.com/TU_USUARIO/portfolio-angular
```

Deberías ver todos tus archivos ahí.

---

## 🔗 Paso 5: Conectar a Vercel (Opcional pero Recomendado)

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Haz clic en **"New Project"**
3. Haz clic en **"Import Git Repository"**
4. Busca `portfolio-angular`
5. Selecciona
6. Las config automáticamente están bien
7. Haz clic en **"Deploy"**

**En 2 minutos:**
```
✅ Deployment complete!
Your site is live at: https://portfolio-angular-abc123.vercel.app
```

¡Ya está en vivo! 🚀

---

## 🔄 Paso 6: Próximos Cambios

Cada vez que modifiques algo:

```bash
# Ver cambios
git status

# Agregar cambios
git add .

# Commit
git commit -m "Agregué nuevos proyectos"

# Subir
git push
```

Vercel automáticamente lo detecta y redeploya. ✨

---

## 🎉 Resumen Visual

```
GitHub             Vercel              Tu Sitio
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│ Tu código    │ ← │ Detecta      │ → │ En vivo      │
│ en la nube   │   │ cambios      │   │ en internet  │
└──────────────┘   │ & compila    │   └──────────────┘
                   └──────────────┘
     (git push)      (automático)      (URL pública)
```

---

## 📱 URLs de Referencia

| Servicio | URL |
|----------|-----|
| GitHub New Repo | https://github.com/new |
| GitHub Settings | https://github.com/settings/tokens |
| Vercel Dashboard | https://vercel.com/dashboard |
| Tu Repositorio | https://github.com/TU_USUARIO/portfolio-angular |
| Tu Sitio Vercel | https://portfolio-angular-xxx.vercel.app |

---

**¡Listo! Si algo no funciona, revisa los pasos atrás.** 🐙
