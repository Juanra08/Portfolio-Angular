# 🐙 Guía: Subir tu Portfolio a GitHub

## 📋 Pasos Rápidos

### 1️⃣ Verificar que Git está instalado

Abre PowerShell y ejecuta:
```bash
git --version
```

Si no está instalado, descarga desde [git-scm.com](https://git-scm.com) e instala.

### 2️⃣ Configurar Git (Primera vez)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

Ejemplo:
```bash
git config --global user.name "Juan Rodriguez"
git config --global user.email "juan@example.com"
```

### 3️⃣ Crear Repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. **Repository name:** `portfolio-angular`
3. **Description:** `Mi portfolio personal con Angular y Firebase`
4. Elige **Public** (público) o **Private** (privado)
5. NO marques "Initialize with README" (vamos a subir el nuestro)
6. Haz clic en **"Create repository"**

GitHub te mostrará instrucciones. Sigue las que están abajo.

### 4️⃣ Subir tu Código a GitHub

En PowerShell, navega al proyecto:

```bash
cd "c:\Users\juanr\Documents\Portfolio con angular"
```

Luego ejecuta (reemplaza `TU_USUARIO` por tu usuario de GitHub):

```bash
# Inicializar repositorio local
git init

# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Initial commit: Portfolio Angular con Firebase"

# Agregar remote (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/portfolio-angular.git

# Cambiar rama a main (si es necesario)
git branch -M main

# Subir a GitHub
git push -u origin main
```

### 5️⃣ ¡Listo!

Tu código está en GitHub. Verás una URL como:
```
https://github.com/TU_USUARIO/portfolio-angular
```

---

## 🔐 Autenticación (Importante)

Al hacer `git push`, Git pedirá autenticación. **Hay 2 opciones:**

### Opción A: HTTPS (Más Fácil)
- Git pedirá usuario y contraseña de GitHub
- Ingresa tu usuario y contraseña

### Opción B: SSH (Más Seguro)
Si GitHub pide "personal access token":
1. Ve a [github.com/settings/tokens](https://github.com/settings/tokens)
2. Haz clic en **"Generate new token"** → **"Generate new token (classic)"**
3. Nombre: `portfolio-deploy`
4. Permisos: Marca **"repo"**
5. Genera el token
6. Copia el token
7. En Git, usa el token como contraseña cuando te lo pida

---

## 📝 Commit Después de Cambios

Cada vez que hagas cambios:

```bash
# Ver qué cambió
git status

# Agregar cambios
git add .

# Commit
git commit -m "Descripción de lo que cambió"

# Subir a GitHub
git push
```

### Ejemplos de buenos mensajes de commit:
```bash
git commit -m "Agregué 3 nuevos proyectos"
git commit -m "Actualicé perfil y skills"
git commit -m "Mejoré responsive design en mobile"
git commit -m "Integración con Firebase completada"
```

---

## 🎯 Archivos que NO Subir a GitHub

⚠️ **NO incluyas estos archivos** (por seguridad):

- `.env` (variables sensibles)
- `node_modules/` (se ignora automáticamente)
- `dist/` (se compila en Vercel)

Vemos que ya tienes un `.gitignore`, así que está bien.

---

## ✅ Verificar .gitignore

El archivo `.gitignore` ya existe en tu proyecto y debe incluir:

```
node_modules/
dist/
.env
.env.local
.env.production
```

Para verificar:
```bash
cd "c:\Users\juanr\Documents\Portfolio con angular"
type .gitignore
```

---

## 🚀 Después de Subir a GitHub

### Conectar Vercel a GitHub

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Haz clic en **"New Project"**
3. Haz clic en **"Import Git Repository"**
4. Busca y selecciona **`portfolio-angular`**
5. Haz clic en **"Import"**
6. Deja las configuraciones por defecto
7. Haz clic en **"Deploy"**

¡Vercel automáticamente desplegará tu app!

---

## 🔄 Flujo de Trabajo Automático

Con GitHub + Vercel, el flujo es así:

```
Editas código localmente
        ↓
git add .
git commit -m "..."
git push origin main
        ↓
GitHub recibe los cambios
        ↓
Vercel detecta automáticamente
        ↓
Vercel compila tu app
        ↓
Vercel despliega a producción
        ↓
¡Tu sitio se actualiza automáticamente! ✨
```

---

## 💡 Tips

1. **Commit frecuentemente**
   - No esperes a terminar todo
   - Pequeños commits = más fácil de arreglar si algo falla

2. **Mensajes claros**
   - ❌ `git commit -m "cambios"`
   - ✅ `git commit -m "Agregué formulario de contacto"`

3. **Antes de push, verifica**
   ```bash
   git status          # Ver qué va a subir
   git log --oneline   # Ver historial
   ```

4. **Si metes la pata**
   ```bash
   git revert HEAD     # Deshacer último commit (sin borrarlo)
   git reset --hard HEAD~1  # Deshacer último commit (borrar)
   ```

---

## 📚 Comandos Útiles

```bash
# Ver estado
git status

# Ver commits
git log --oneline

# Ver cambios
git diff

# Ver diferencias de un archivo
git diff src/app/features/home/home.component.ts

# Descargar cambios del remoto
git pull

# Ver ramas
git branch

# Crear rama nueva
git checkout -b nombre-rama

# Cambiar de rama
git checkout main
```

---

## 🎉 ¡Listo!

Tu portfolio estará en:
```
GitHub: https://github.com/TU_USUARIO/portfolio-angular
Vercel: https://portfolio-angular-xxx.vercel.app
```

¿Necesitas ayuda con algún paso?
