# 🔐 Seguridad: Ocultar Credenciales de Firebase

## ⚠️ Problema Actual

Tus credenciales de Firebase están **visibles en el código** (`firebase.config.ts`):

```typescript
export const firebaseConfig = {
  apiKey: "AIzaSyCDOj9BHA...",  // ❌ Visible en GitHub
  authDomain: "portfolio-c5399.firebaseapp.com",  // ❌ Visible
  projectId: "portfolio-c5399",  // ❌ Visible
  // ... más credenciales
};
```

**Problema:** Cualquiera que vea tu GitHub puede usar tus credenciales.

**Solución:** Usar variables de entorno (`.env`)

---

## ✅ Solución: Variables de Entorno

### Paso 1: Crear archivo `.env.local`

En la **raíz de tu proyecto**, crea un archivo llamado `.env.local`:

```bash
# En Windows, crea el archivo manualmente en:
# c:\Users\juanr\Documents\Portfolio con angular\.env.local
```

**Contenido del archivo `.env.local`:**

```
FIREBASE_API_KEY=AIzaSyCDOj9BHA076cLFRD2wUf4NLZujHtq_7EI
FIREBASE_AUTH_DOMAIN=portfolio-c5399.firebaseapp.com
FIREBASE_PROJECT_ID=portfolio-c5399
FIREBASE_STORAGE_BUCKET=portfolio-c5399.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=698291542160
FIREBASE_APP_ID=1:698291542160:web:63550b1643156d5e7ba015
FIREBASE_MEASUREMENT_ID=G-L6GV07P1ZY
```

### Paso 2: Actualizar `.gitignore`

Asegúrate de que `.gitignore` incluya:

```
.env
.env.local
.env.*.local
.env.production
```

**Verifica tu archivo `.gitignore` actual:**

Si ya contiene estos archivos, está bien. Si no, agrega esas líneas.

### Paso 3: Actualizar `firebase.config.ts`

Cambia tu archivo de configuración para usar variables de entorno:

**Antes (Inseguro):**
```typescript
export const firebaseConfig = {
  apiKey: "AIzaSyCDOj9BHA076cLFRD2wUf4NLZujHtq_7EI",
  authDomain: "portfolio-c5399.firebaseapp.com",
  // ...
};
```

**Después (Seguro):**
```typescript
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
```

### Paso 4: Actualizar `vite.config.ts` (Si no existe, crear)

Angular usa Vite. Necesitas un archivo `vite.config.ts` en la raíz:

```typescript
import { defineConfig } from 'vite';
import angular from '@vitejs/plugin-angular';

export default defineConfig({
  plugins: [angular()],
  server: {
    port: 4200
  }
});
```

---

## 🔑 Para Desarrollo Local

`.env.local` **solo existe en tu PC**:

```
Tu PC:
├── .env.local ✅ (Local, no se sube a GitHub)
└── firebase.config.ts (Lee de .env.local)

GitHub:
└── firebase.config.ts (Solo el código, sin valores)
```

---

## 🌍 Para Producción (Vercel)

En Vercel configuras variables de entorno en el dashboard:

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecciona tu proyecto `Portfolio-Angular`
3. Ve a **Settings** → **Environment Variables**
4. Agrega cada variable:
   ```
   VITE_FIREBASE_API_KEY = AIzaSyCDOj9BHA...
   VITE_FIREBASE_AUTH_DOMAIN = portfolio-c5399.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID = portfolio-c5399
   VITE_FIREBASE_STORAGE_BUCKET = portfolio-c5399.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID = 698291542160
   VITE_FIREBASE_APP_ID = 1:698291542160:web:63550b1643156d5e7ba015
   VITE_FIREBASE_MEASUREMENT_ID = G-L6GV07P1ZY
   ```
5. Haz clic en **Save**
6. Redeploy tu app

---

## 📋 Resumen: 3 Formas de Manejar Credenciales

### 1. **Desarrollo Local** (Tu PC)
```
.env.local (en tu PC, nunca en GitHub)
├── FIREBASE_API_KEY=...
├── FIREBASE_AUTH_DOMAIN=...
└── ...
```

**No comitear:** Está en `.gitignore`

### 2. **Producción en Vercel**
```
Vercel Dashboard → Settings → Environment Variables
├── VITE_FIREBASE_API_KEY=...
├── VITE_FIREBASE_AUTH_DOMAIN=...
└── ...
```

**No en GitHub:** Está en Vercel securely

### 3. **Código (GitHub)**
```typescript
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // ...
};
```

**Solo variables:** Sin valores hardcodeados

---

## ⚠️ Si Ya Subiste Credenciales a GitHub

Si ya está en tu repositorio público, **debes regenerar las claves:**

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Proyecto → Settings → Service Accounts
3. Regenera la clave API
4. Usa la nueva clave en `.env.local` y Vercel

**Esto invalida la clave vieja** (no la puede usar nadie más)

---

## 🔒 Mejores Prácticas

✅ **Siempre hacer:**
- Variables de entorno para credenciales
- `.gitignore` con `.env*`
- Diferentes claves para desarrollo/producción
- Regenerar claves si se exponen

❌ **Nunca hacer:**
- Hardcodear credenciales
- Subir `.env` a GitHub
- Usar misma clave para dev y prod
- Compartir claves por email/chat

---

## 🧪 Probar Variables de Entorno

Para verificar que funciona:

1. Crea `.env.local` con tus credenciales
2. Ejecuta: `npm start`
3. Abre la consola del navegador (F12)
4. Si no hay errores de Firebase, ¡está bien!

---

## 📚 Archivos Relevantes

| Archivo | Función |
|---------|---------|
| `.env.local` | Variables locales (no en GitHub) |
| `.env.example` | Template de variables (para documentación) |
| `.gitignore` | Archivos a ignorar en Git |
| `firebase.config.ts` | Lee las variables de entorno |
| `vite.config.ts` | Configuración de Vite |

---

## 🎯 Checklist de Seguridad

- ✅ `.env.local` creado
- ✅ `.gitignore` incluye `.env*`
- ✅ `firebase.config.ts` usa `import.meta.env`
- ✅ Vercel tiene las variables configuradas
- ✅ `.env.local` NO está en GitHub

---

## 💡 Próximos Pasos

1. Crea `.env.local` localmente
2. Actualiza `firebase.config.ts`
3. Prueba localmente (`npm start`)
4. Configura Vercel (Settings → Environment Variables)
5. Haz push a GitHub (`.env.local` NO se incluye)

---

**¿Necesitas ayuda con algún paso?**
