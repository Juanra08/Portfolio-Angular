# 🚀 Guía de Deployment - Portfolio Angular

## Antes de Deployar

1. ✅ Edita `db.json` con tu información completa
2. ✅ Prueba el proyecto localmente: `npm run dev`
3. ✅ Verifica que todas las URLs funcionen
4. ✅ Comprueba en diferentes dispositivos/navegadores
5. ✅ Realiza `npm run build` sin errores

---

## 🌐 Opción 1: Vercel (Recomendado para Angular)

### Pasos:
1. **Instala Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Loguéate en Vercel:**
   ```bash
   vercel login
   ```

3. **Deploya el proyecto:**
   ```bash
   vercel
   ```

4. **Configuración Automática:**
   - Framework: Angular
   - Build Command: `npm run build`
   - Output Directory: `dist/portfolio`

5. **Resultado:**
   - Tu portfolio disponible en: `https://tuportfolio.vercel.app`

### Notas:
- Vercel detecta automáticamente Angular
- El deployment es automático con cada push a Git
- Puedes usar tu propio dominio

---

## 🌐 Opción 2: Netlify

### Pasos:
1. **Compila el proyecto:**
   ```bash
   npm run build
   ```

2. **Ve a [netlify.com](https://netlify.com)**

3. **Drag & Drop:**
   - Sube la carpeta `dist/portfolio`

4. **Configuración Manual:**
   - Build command: `npm run build`
   - Publish directory: `dist/portfolio`

5. **Resultado:**
   - Tu portfolio en: `https://tuportfolio.netlify.app`

### Deploy Automático (Git):
```bash
# En Netlify: conecta tu repositorio GitHub
# Cada push automáticamente deploya
```

---

## 🌐 Opción 3: GitHub Pages

### Pasos:
1. **Prepara Angular:**
   ```bash
   npm run build -- --base-href=/nombre-repo/
   ```

2. **Copia los archivos:**
   ```bash
   copy dist/portfolio/* ./docs/
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. **En GitHub Settings:**
   - Repository → Settings → Pages
   - Source: Branch `main` o `main`, folder `/docs`
   - Guardas cambios

4. **Resultado:**
   - Tu portfolio en: `https://tuusuario.github.io/portfolio`

### Ventajas:
- Gratuito
- Vinculado a tu código
- Control total

---

## 🌐 Opción 4: Firebase Hosting

### Pasos:
1. **Instala Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Loguéate:**
   ```bash
   firebase login
   ```

3. **Inicializa el proyecto:**
   ```bash
   firebase init
   ```
   - Selecciona: Hosting
   - Public directory: `dist/portfolio`
   - Configure single-page app: `Yes`

4. **Compila y deploya:**
   ```bash
   npm run build
   firebase deploy
   ```

5. **Resultado:**
   - Tu portfolio en: `https://tu-proyecto.web.app`

---

## 🌐 Opción 5: Heroku + Custom Domain

### Pasos:
1. **Crea archivo `Procfile`:**
   ```
   web: npm run build && npm start
   ```

2. **Instala Heroku CLI** y loguéate

3. **Deploya:**
   ```bash
   heroku create tu-portfolio
   heroku buildpacks:add heroku/nodejs
   git push heroku main
   ```

---

## 🌐 Opción 6: Servidor VPS/Hosting Tradicional

### Pasos:
1. **Compila:**
   ```bash
   npm run build
   ```

2. **Sube `dist/portfolio` a tu hosting:**
   - Via FTP/SFTP
   - Via cPanel
   - Via SSH

3. **Configura el servidor:**
   ```nginx
   # En Nginx
   server {
     listen 80;
     server_name tuportfolio.com;
     
     root /home/user/portfolio/dist/portfolio;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

4. **Apache:**
   ```apache
   # En .htaccess
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## ⚙️ Configuración Post-Deploy

### 1. Dominio Personalizado

**Vercel:**
- Settings → Domains → Agregar dominio
- Sigue las instrucciones de DNS

**Netlify:**
- Domain management → Custom domain
- Configura DNS

**GitHub Pages:**
- En repo settings → Pages
- Agregar dominio personalizado

### 2. SSL/HTTPS

- Vercel: Automático ✅
- Netlify: Automático ✅
- GitHub Pages: Automático ✅
- Heroku: Automático ✅
- VPS: Let's Encrypt (certbot)

### 3. Redirecciones

**Si cambias rutas**, agrega redirecciones:

**Vercel (vercel.json):**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Netlify (_redirects):**
```
/* /index.html 200
```

---

## 📝 Checklist Pre-Deploy

### Contenido
- [ ] Nombre actualizado en db.json
- [ ] Bio/descripción completa
- [ ] Email válido
- [ ] Redes sociales correctas
- [ ] Foto de perfil de calidad
- [ ] Al menos 3 proyectos
- [ ] Experiencia laboral actualizada

### Técnico
- [ ] `npm run build` sin errores
- [ ] Testing en localhost funciona
- [ ] Sin errores en consola
- [ ] Responsive en móvil
- [ ] Imágenes cargadas correctamente
- [ ] Enlaces externos funcionan
- [ ] Contacto funciona

### SEO
- [ ] Título descriptivo en index.html
- [ ] Meta description
- [ ] Favicon configurado
- [ ] Open Graph tags (opcional)

---

## 🔧 Solución de Problemas Post-Deploy

### "Ruta 404 al refrescar"
**Solución:** Configura reescritura de URL a index.html
```bash
# Vercel: Automático
# Netlify: Usa _redirects
# GitHub Pages: Necesita configuración
```

### "Estilos Tailwind no cargan"
- Verifica que `dist/portfolio` incluye `styles.css`
- Revisa las rutas en `angular.json`

### "API devuelve 404"
- En producción necesitas reemplazar JSON Server
- Usa una API real (Node.js, Firebase, etc)
- O configura CORS correctamente

---

## 📊 Monitoreo Post-Deploy

### Vercel
- Analytics automáticos en dashboard
- Performance metrics incluidos

### Netlify
- Analytics básicos
- Deploy logs disponibles

### Personalizado
```bash
# Ver logs
npm run build:debug
```

---

## 🎯 Siguiente Paso: API Real

Para producción, reemplaza JSON Server:

### Firebase Realtime Database
```typescript
// Reemplaza HttpClient calls
import { Database } from '@angular/fire/database';
```

### Backend Node.js + MongoDB
```bash
npm install express mongoose cors
# Crea API en puerto 3001
```

### Supabase (PostgreSQL)
```bash
npm install @supabase/supabase-js
# Usa cliente oficial
```

---

## 🚀 Mejoras Futuras

1. **Backend Propio:**
   - Node.js + Express + MongoDB
   - Autenticación JWT
   - Validación de formularios

2. **Autenticación Admin:**
   - Protege rutas /admin
   - Login seguro

3. **Base de Datos Real:**
   - Firebase o Supabase
   - Mejor escalabilidad

4. **Analytics:**
   - Google Analytics
   - Seguimiento de visitantes

5. **CMS:**
   - Contentful o Strapi
   - Mejor manejo de contenido

---

## 📚 Referencias

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://pages.github.com)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Angular Production Build](https://angular.io/guide/build)

---

**¡Tu portfolio está listo para publicarse! 🎉**

Elige la opción que mejor se adapte a tus necesidades.
