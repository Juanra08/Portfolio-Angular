# 🎨 Guía de Personalización - Portfolio Angular

## 📝 Personalización Básica (Sin Coding)

### 1. Editar Información Personal

Abre `db.json` y edita la sección `profile`:

```json
{
  "profile": {
    "id": 1,
    "name": "Tu Nombre Completo",
    "title": "Tu Título Profesional",
    "bio": "Una descripción interesante sobre ti",
    "email": "tu@email.com",
    "phone": "+34 666 777 888",
    "location": "Madrid, España",
    "profileImage": "https://tu-url-imagen.com/foto.jpg",
    "socialLinks": {
      "github": "https://github.com/tu-usuario",
      "linkedin": "https://linkedin.com/in/tu-usuario",
      "twitter": "https://twitter.com/tu-usuario",
      "portfolio": "https://tuportfolio.com"
    },
    "skills": ["Angular", "TypeScript", "Node.js", "React", "Python"]
  }
}
```

### 2. Agregar Proyectos

En la sección `projects`, agrega nuevos proyectos:

```json
{
  "id": 5,
  "title": "Mi Nuevo Proyecto",
  "description": "Una descripción detallada de qué hace este proyecto",
  "technologies": ["Angular", "Tailwind CSS", "Firebase"],
  "imageUrl": "https://tu-url-imagen.com/proyecto.jpg",
  "demoUrl": "https://demo-proyecto.com",
  "githubUrl": "https://github.com/tu-usuario/mi-proyecto",
  "featured": true,
  "createdAt": "2024-02-20"
}
```

### 3. Agregar Experiencia Laboral

En la sección `experience`, agrega nuevas posiciones:

```json
{
  "id": 4,
  "company": "Nueva Empresa",
  "position": "Tu Puesto",
  "description": "Descripción de tus responsabilidades y logros",
  "startDate": "2024-01-01",
  "endDate": null,
  "isCurrent": true,
  "location": "Madrid, España",
  "createdAt": "2024-02-20"
}
```

**Nota:** Si `isCurrent` es `true`, `endDate` debe ser `null`

---

## 🎨 Personalización de Estilos

### Cambiar Colores Principales

Edita `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#YOUR_PRIMARY',      // Color principal (botones, enlaces)
        secondary: '#YOUR_SECONDARY',  // Color secundario (fondos, textos)
        accent: '#YOUR_ACCENT',        // Color de acento (destacados, success)
      },
    },
  },
  plugins: [],
}
```

### Ejemplos de Paletas de Color

**Azul Profesional:**
```javascript
primary: '#2563EB',    // Azul vibrante
secondary: '#1E293B',  // Gris casi negro
accent: '#10B981'      // Verde menta
```

**Naranja Creativo:**
```javascript
primary: '#F97316',    // Naranja
secondary: '#1F2937',  // Gris oscuro
accent: '#EC4899'      // Rosa
```

**Púrpura Elegante:**
```javascript
primary: '#A855F7',    // Púrpura
secondary: '#0F172A',  // Negro azulado
accent: '#06B6D4'      // Cyan
```

**Verde Moderno:**
```javascript
primary: '#16A34A',    // Verde
secondary: '#1F2937',  // Gris oscuro
accent: '#3B82F6'      // Azul
```

---

## 🖼️ Agregar Imágenes

### Opción 1: URLs Externas

En `db.json`, usa URLs completas:

```json
"profileImage": "https://images.unsplash.com/photo-xxxxx",
"imageUrl": "https://via.placeholder.com/400x250"
```

**Sitios para obtener imágenes:**
- [Unsplash](https://unsplash.com) - Gratis, de calidad
- [Pexels](https://pexels.com) - Gratis, royalty-free
- [Placeholder](https://placeholder.com) - Placeholders rápidos
- [Imgur](https://imgur.com) - Hosting de imágenes

### Opción 2: Imágenes Locales

1. Coloca las imágenes en `src/assets/`
2. En `db.json`, usa rutas relativas:

```json
"profileImage": "/assets/mi-foto.jpg",
"imageUrl": "/assets/proyecto-1.jpg"
```

### Recomendaciones:
- Tamaño mínimo: 400x300px para proyectos
- Tamaño para perfil: 400x400px (cuadrado)
- Formato: JPG o PNG
- Comprime: Usa [TinyPNG](https://tinypng.com) o similar

---

## ✏️ Personalización Avanzada (Con Código)

### Cambiar Tipografía

En `src/styles.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
```

**Fuentes Recomendadas:**
- [Google Fonts](https://fonts.google.com)
- Poppins (moderna)
- Inter (minimalista)
- JetBrains Mono (código)

### Agregar Secciones Nuevas

En `src/app/features/portfolio/pages/`, crea un nuevo componente:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-white">
      <h2 class="text-4xl font-bold text-center mb-12">Habilidades</h2>
      <!-- Tu contenido aquí -->
    </section>
  `
})
export class SkillsComponent {}
```

Luego agrega en `app.routes.ts`:

```typescript
{
  path: 'skills',
  loadComponent: () => import('./features/portfolio/pages/skills/skills.component')
    .then(m => m.SkillsComponent)
}
```

### Personalizar Servicio de API

En `src/app/core/services/project.service.ts`:

```typescript
// Cambiar URL base
private apiUrl = 'https://tu-api-real.com/api/projects';

// Agregar headers personalizados
getAll(): Observable<Project[]> {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer tu-token'
  });
  return this.http.get<Project[]>(this.apiUrl, { headers });
}
```

---

## 🔐 Seguridad en Admin

### Agregar Autenticación Básica

En `src/app/core/services/auth.service.ts` (crear nuevo):

```typescript
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  
  login(password: string): boolean {
    // Validación simple (NO usar en producción)
    if (password === 'tu-contraseña') {
      this.isAuthenticated = true;
      localStorage.setItem('auth', 'true');
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('auth');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth');
  }
}
```

En `admin-layout.component.ts`:

```typescript
export class AdminLayoutComponent {
  constructor(private authService: AuthService) {
    if (!this.authService.isLoggedIn()) {
      // Redirigir a login
    }
  }
}
```

---

## 📧 Formulario de Contacto Real

### Opción 1: EmailJS

```typescript
import emailjs from '@emailjs/browser';

// En component
onSubmit() {
  emailjs.send('service_id', 'template_id', {
    from_name: this.formData.name,
    from_email: this.formData.email,
    subject: this.formData.subject,
    message: this.formData.message
  });
}
```

### Opción 2: Backend Node.js

```typescript
// Servicio
sendEmail(data: any): Observable<any> {
  return this.http.post('https://tu-api.com/send-email', data);
}
```

---

## 🌐 Cambiar Dominio

### En Vercel:
1. Settings → Domains
2. Agregar dominio personalizado
3. Configurar DNS (CNAME)

### En Netlify:
1. Domain management
2. Custom domain
3. Cambiar nameservers

### Crear archivo `CNAME` (GitHub Pages):
```
tudominio.com
www.tudominio.com
```

---

## 📊 Agregar Analytics

### Google Analytics

En `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🎯 Ejemplos de Proyectos

### Ejemplo 1: App de Todo
```json
{
  "id": 1,
  "title": "App de Tareas",
  "description": "Aplicación para gestionar tareas diarias con sincronización",
  "technologies": ["Angular", "Firebase", "Tailwind"],
  "imageUrl": "https://via.placeholder.com/400x250?text=Todo+App",
  "demoUrl": "https://my-todo-app.vercel.app",
  "githubUrl": "https://github.com/usuario/todo-app",
  "featured": true,
  "createdAt": "2024-01-15"
}
```

### Ejemplo 2: Dashboard
```json
{
  "id": 2,
  "title": "Dashboard Analíticas",
  "description": "Dashboard con gráficos y análisis de datos en tiempo real",
  "technologies": ["React", "Chart.js", "Node.js"],
  "imageUrl": "https://via.placeholder.com/400x250?text=Dashboard",
  "demoUrl": "https://analytics-dashboard.app",
  "githubUrl": "https://github.com/usuario/dashboard",
  "featured": true,
  "createdAt": "2024-02-01"
}
```

---

## 🚀 Checklist de Personalización

- [ ] Nombre y título actualizados
- [ ] Bio y descripción personal
- [ ] Email y teléfono
- [ ] Foto de perfil
- [ ] Redes sociales vinculadas
- [ ] Habilidades listadas
- [ ] Al menos 3 proyectos
- [ ] Experiencia laboral actualizada
- [ ] Colores personalizados
- [ ] Pruebas en diferentes navegadores
- [ ] Links verificados
- [ ] Responsive en móvil

---

**¡Tu portfolio personalizado está listo! 🎨**

Cualquier duda, revisa los componentes en `src/app/` para entender la estructura.
