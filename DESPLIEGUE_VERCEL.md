# 🚀 Despliegue en Vercel

Tu portfolio Angular está listo para desplegarse en Vercel en minutos.

## 📋 Prerrequisitos

- ✅ Vercel CLI instalado (ya hecho)
- ✅ Cuenta en [vercel.com](https://vercel.com) (crea una gratis)
- ✅ Git instalado
- ✅ Tu repositorio en GitHub (recomendado)

---

## 🎯 Opción 1: Despliegue Rápido (Recomendado)

### Paso 1: Crear Repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre: `portfolio-angular`
3. Descripción: "Mi portfolio personal con Angular y Firebase"
4. Elige **Private** (privado) o **Public**
5. Haz clic en "Create repository"

### Paso 2: Subir tu código a GitHub

```bash
cd "c:\Users\juanr\Documents\Portfolio con angular"

# Inicializar git (si no está hecho)
git init

# Agregar archivos
git add .

# Commit inicial
git commit -m "Initial commit: Portfolio Angular con Firebase"

# Agregar remote (reemplaza USERNAME/REPO)
git remote add origin https://github.com/TU_USUARIO/portfolio-angular.git

# Subir a GitHub
git branch -M main
git push -u origin main
```

### Paso 3: Conectar a Vercel

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Haz clic en **"New Project"**
3. Importa tu repositorio desde GitHub
4. Configura lo siguiente:

**Build Settings:**
- Framework: **Angular**
- Build Command: `npm run build`
- Output Directory: `dist/portfolio-angular`
- Install Command: `npm install`

**Environment Variables:**

Agrega estas variables (son las credenciales de Firebase):

```
FIREBASE_API_KEY=AIzaSyCDOj9BHA076cLFRD2wUf4NLZujHtq_7EI
FIREBASE_AUTH_DOMAIN=portfolio-c5399.firebaseapp.com
FIREBASE_PROJECT_ID=portfolio-c5399
FIREBASE_STORAGE_BUCKET=portfolio-c5399.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=698291542160
FIREBASE_APP_ID=1:698291542160:web:63550b1643156d5e7ba015
```

5. Haz clic en **"Deploy"**
6. ¡Espera a que termine! (~2-3 minutos)

---

## 🎯 Opción 2: Despliegue desde Terminal

Si prefieres usar la terminal:

```bash
# Login en Vercel
vercel login

# Desplegar (en el directorio del proyecto)
vercel --prod

# Te pedirá algunas preguntas:
# - "Set up and deploy...?" → y (sí)
# - "Which scope?" → Tu cuenta/equipo
# - "Link to existing project?" → n (no, nuevo)
# - "What's your project's name?" → portfolio-angular
# - "In which directory is your code?" → ./ (punto)
```

El despliegue comenzará automáticamente.

---

## ✅ Después del Despliegue

Vercel te dará una URL como:
```
https://portfolio-angular-xxx.vercel.app
```

### Pasos post-despliegue:

1. **Verificar que funciona:**
   - Abre la URL en el navegador
   - Prueba la página de inicio
   - Accede a `/admin`

2. **Configurar dominio personalizado (Opcional):**
   - En Vercel Dashboard → Settings → Domains
   - Agrega tu dominio (ej: mituportfolio.com)
   - Configura los DNS según Vercel te indique

3. **Conectar actualizaciones automáticas:**
   - Cada push a GitHub desplegará automáticamente
   - Solo necesitas hacer `git push`

---

## 🔄 Despliegues Automáticos

Con Vercel + GitHub, cada vez que hagas push a tu repositorio:

```bash
# Haces cambios locales
git add .
git commit -m "Actualicé proyectos"
git push

# ✨ Vercel automáticamente:
# 1. Detecta el cambio
# 2. Compila tu app
# 3. Despliega en producción
```

---

## 🚨 Troubleshooting

### Error: "Build failed"

**Solución:** Verifica que la app compila localmente:
```bash
npm run build
```

Si da error, arréglalo localmente primero.

### Error: Firebase no funciona en producción

**Solución:** Asegúrate de que las variables de entorno están configuradas en Vercel:
1. Dashboard → Settings → Environment Variables
2. Verifica que todas las claves estén presentes
3. Redeploy: Haz clic en el último deployment → "Redeploy"

### Sitio es muy lento

**Solución:**
1. Vercel tiene CDN gratis, debería ser rápido
2. Si no, compila optimizado:
   ```bash
   npm run build --prod
   ```

---

## 📊 Monitoreo

En Vercel Dashboard puedes ver:
- ✅ Despliegues anteriores
- ⏱️ Velocidad de carga
- 📈 Analytics
- 🔴 Errores en tiempo real

---

## 💡 Tips

1. **Revisar antes de desplegar:**
   ```bash
   npm run build
   npx http-server dist/portfolio-angular
   ```

2. **Crear preview antes de producción:**
   - Vercel automáticamente crea una URL preview para cada PR de GitHub

3. **Rollback rápido:**
   - En Vercel Dashboard, puedes desplegar cualquier versión anterior con 1 clic

4. **Dominio gratuito:**
   - Tu app tendrá un dominio `.vercel.app` gratis
   - Puedes agregar tu propio dominio después

---

## 🎉 ¡Listo!

Tu portfolio está ahora en el mundo. Comparte tu URL:
```
https://portfolio-angular-xxx.vercel.app
```

¿Necesitas ayuda con algún paso?
