# 📋 Pasos para Subir tu Proyecto a GitHub

## 🔍 Verificación Inicial

Parece que Git no está instalado o no está en el PATH. Aquí está la solución completa:

---

## 📥 Paso 1: Instalar Git (Si no está instalado)

### Windows:

1. Ve a [git-scm.com](https://git-scm.com/download/win)
2. Descarga la versión para Windows (64-bit o 32-bit según tu sistema)
3. Ejecuta el instalador
4. En las opciones de instalación:
   - Marca **"Add Git Bash Here"**
   - Marca **"Add Git GUI Here"**
   - En Path, elige **"Git from the command line and also from 3rd-party software"**
5. Termina la instalación
6. Reinicia PowerShell

### Mac:

```bash
brew install git
```

### Linux:

```bash
sudo apt-get install git
```

---

## ⚙️ Paso 2: Configurar Git

Abre PowerShell y ejecuta:

```bash
git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu@email.com"
```

Ejemplo:
```bash
git config --global user.name "Juan Rodriguez"
git config --global user.email "juan.rodriguez@email.com"
```

Verifica que funcionó:
```bash
git config --global user.name
git config --global user.email
```

---

## 🌐 Paso 3: Crear Repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Completa:
   - **Repository name:** `portfolio-angular`
   - **Description:** `Mi portfolio personal con Angular y Firebase`
   - **Public:** Así otros pueden verlo (o Private si prefieres)
3. **NO marques** "Initialize this repository with a README"
4. Haz clic en **"Create repository"**

GitHub te mostrará instrucciones. Ignóralas y sigue los pasos abajo.

---

## 📤 Paso 4: Subir tu Código

Abre PowerShell y navega a tu proyecto:

```bash
cd "c:\Users\juanr\Documents\Portfolio con angular"
```

Luego ejecuta estos comandos (reemplaza `TU_USUARIO` por tu usuario de GitHub):

```bash
# Inicializar git local
git init

# Agregar todos los archivos
git add .

# Crear primer commit
git commit -m "Initial commit: Portfolio Angular con Firebase"

# Conectar a GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/portfolio-angular.git

# Cambiar rama principal a main
git branch -M main

# Subir a GitHub
git push -u origin main
```

**Durante `git push`**, Git te pedirá autenticación:

### Opción A: Si pide Usuario y Contraseña
- Usuario: Tu usuario de GitHub
- Contraseña: Tu contraseña de GitHub

### Opción B: Si pide "Personal Access Token" (Más Seguro)
1. Ve a [github.com/settings/tokens](https://github.com/settings/tokens)
2. Haz clic en **"Generate new token"** → **"Generate new token (classic)"**
3. Nombre: `portfolio-deploy`
4. Permisos: Marca **"repo"** (acceso a repositorios)
5. Haz clic en **"Generate token"**
6. **Copia el token** (no podrás verlo de nuevo)
7. En PowerShell, cuando pida "Password", pega el token

---

## ✅ Si Todo Funcionó

Verás algo como:
```
Enumerating objects: 150, done.
...
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

Tu repositorio está en:
```
https://github.com/TU_USUARIO/portfolio-angular
```

---

## 🔄 Paso 5: Conectar a Vercel (Automático)

Ahora que tu código está en GitHub, Vercel puede actualizarse automáticamente:

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Haz clic en **"New Project"**
3. Haz clic en **"Import Git Repository"**
4. Busca `portfolio-angular`
5. Selecciona y haz clic en **"Import"**
6. Vercel detectará Angular automáticamente
7. Haz clic en **"Deploy"**

¡Listo! Ahora:
- Cada `git push` a GitHub
- Automáticamente Vercel compila y despliega
- Tu sitio se actualiza en segundos ✨

---

## 📝 Hacer Cambios Después

Cada vez que modifiques tu código:

```bash
# Ver qué cambió
git status

# Agregar cambios
git add .

# Guardar cambios (commit)
git commit -m "Descripción clara de qué cambió"

# Subir a GitHub
git push
```

Ejemplos de buenos mensajes:
```bash
git commit -m "Agregué 3 nuevos proyectos"
git commit -m "Actualicé información de perfil"
git commit -m "Mejoré diseño responsivo en móvil"
git commit -m "Integré Firebase Firestore"
```

---

## 🚨 Si Hay Errores

### Error: "fatal: not a git repository"
**Solución:** Estás en la carpeta equivocada. Navega a:
```bash
cd "c:\Users\juanr\Documents\Portfolio con angular"
```

### Error: "Please tell me who you are"
**Solución:** Configura Git:
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Error: "fatal: remote origin already exists"
**Solución:** Si ya existe, actualiza:
```bash
git remote set-url origin https://github.com/TU_USUARIO/portfolio-angular.git
```

### Error: "Authentication failed"
**Solución:** Usa un Personal Access Token en lugar de contraseña (ver Paso 4, Opción B)

---

## 🎉 ¡Listo!

Tu portfolio estará en:
- **GitHub:** https://github.com/TU_USUARIO/portfolio-angular
- **Vercel:** https://portfolio-angular-xxx.vercel.app

Cada cambio que hagas:
1. Editas código localmente
2. `git push` a GitHub
3. ✨ Vercel automáticamente despliega

¿Necesitas ayuda adicional? Lee `GITHUB_SETUP.md` para más detalles.
