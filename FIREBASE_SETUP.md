# 🔥 Integración con Firebase

Tu portfolio está ahora listo para conectarse a **Firebase** (o cualquier otra base de datos). Te muestro cómo hacerlo:

## 📋 Pasos para Conectar Firebase

### 1. Crear un Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Haz clic en "Crear un proyecto"
3. Sigue los pasos (nombre del proyecto, ubicación, etc.)
4. Espera a que se cree el proyecto

### 2. Obtener las Credenciales

1. En la consola de Firebase, ve a **Configuración del proyecto** (⚙️ arriba a la izquierda)
2. Ve a la pestaña **"General"**
3. Desplázate hasta **"Tus aplicaciones"**
4. Haz clic en **"</> Web"** para agregar una app web
5. Copia la configuración (apiKey, projectId, etc.)

### 3. Actualizar el Archivo de Configuración

Edita el archivo `src/app/core/config/firebase.config.ts` y reemplaza los valores:

```typescript
export const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',                    // ← Reemplaza
  authDomain: 'your-project.firebaseapp.com', // ← Reemplaza
  projectId: 'your-project-id',               // ← Reemplaza
  storageBucket: 'your-project.appspot.com',  // ← Reemplaza
  messagingSenderId: 'your-messaging-sender-id', // ← Reemplaza
  appId: 'your-app-id'                        // ← Reemplaza
};
```

### 4. Habilitar Firestore en Firebase

1. En la consola de Firebase, ve a **"Firestore Database"**
2. Haz clic en **"Crear base de datos"**
3. Elige **"Iniciar en modo de prueba"** (para desarrollo)
4. Elige tu región
5. Espera a que se cree

### 5. Habilitar Cloud Storage (Opcional - para imágenes)

1. Ve a **"Storage"** en Firebase
2. Haz clic en **"Comenzar"**
3. Elige modo de prueba
4. Elige tu región

### 6. Activar Firebase en tu Servicio

En `src/app/core/services/project.service.ts`, cambia:

```typescript
private useFirebase = false; // Cambiar a true
```

Por:

```typescript
private useFirebase = true; // Ahora usa Firebase
```

## 🔄 Estructura de Datos en Firestore

Tu Firestore debe tener estas colecciones:

### Colección: `projects`
```json
{
  "id": "auto-generated",
  "title": "Mi Proyecto",
  "description": "Descripción del proyecto",
  "technologies": ["Angular", "Firebase"],
  "imageUrl": "https://...",
  "demoUrl": "https://...",
  "githubUrl": "https://...",
  "featured": true,
  "createdAt": "2026-02-07T..."
}
```

### Colección: `experience`
```json
{
  "id": "auto-generated",
  "company": "Mi Empresa",
  "position": "Desarrollador",
  "startDate": "2024-01-01",
  "endDate": "2025-01-01",
  "location": "Madrid, España",
  "description": "Descripción del trabajo",
  "isCurrent": false,
  "createdAt": "2026-02-07T..."
}
```

### Documento: `profile`
```json
{
  "name": "Tu Nombre",
  "title": "Tu Título Profesional",
  "bio": "Tu biografía",
  "email": "tu@email.com",
  "location": "Tu Ciudad",
  "profileImage": "https://...",
  "skills": ["Skill 1", "Skill 2"],
  "socialLinks": {
    "linkedin": "https://...",
    "github": "https://...",
    "twitter": "https://..."
  }
}
```

## 🔒 Configurar Reglas de Seguridad

⚠️ **IMPORTANTE**: En la consola de Firebase, ve a **Firestore Database → Reglas** y actualiza:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Para desarrollo (permite lectura/escritura a todos)
    match /{document=**} {
      allow read, write: if true;
    }
    
    // Para producción (recomendado):
    // match /projects/{document=**} {
    //   allow read: if true;
    //   allow write: if request.auth != null;
    // }
    // match /experience/{document=**} {
    //   allow read: if true;
    //   allow write: if request.auth != null;
    // }
    // match /profile/{document=**} {
    //   allow read: if true;
    //   allow write: if request.auth.uid == resource.data.userId;
    // }
  }
}
```

## 🚀 Alternativas a Firebase

Si prefieres otra base de datos, el patrón es el mismo:

### MongoDB + Express
```typescript
private apiUrl = 'https://tu-backend.com/api/projects';
```

### Supabase (PostgreSQL)
```typescript
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(url, key);
```

### AWS DynamoDB
```typescript
import AWS from 'aws-sdk';
const dynamodb = new AWS.DynamoDB();
```

## 📝 Actualizar Otros Servicios

El servicio `ProjectService` ya está actualizado. Para `ExperienceService` y `ProfileService`, aplica el mismo patrón:

1. Importa Firestore
2. Añade métodos Firebase (getAllFirebase, etc.)
3. Añade flag `useFirebase`
4. Envuelve llamadas HTTP en condiciones `if (this.useFirebase)`

## ⚡ Ventajas de Firebase

✅ Base de datos en tiempo real  
✅ Autenticación incorporada  
✅ Almacenamiento de archivos (Cloud Storage)  
✅ Hosting gratuito  
✅ Sin servidor (Serverless)  
✅ Escalable automáticamente  

## 📱 Ejemplo: Subir Imágenes a Firebase Storage

```typescript
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../config/firebase.config';

async uploadImage(file: File): Promise<string> {
  const fileRef = ref(storage, `projects/${file.name}`);
  await uploadBytes(fileRef, file);
  // Obtener URL de descarga
  const url = await getDownloadURL(fileRef);
  return url;
}
```

---

¿Necesitas ayuda para migrar los otros servicios a Firebase?
