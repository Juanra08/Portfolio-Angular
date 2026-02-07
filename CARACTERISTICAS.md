# 📊 Guía de Características - Portfolio Angular

## 🎯 Rutas Disponibles

### Sitio Público (Portfolio)
```
/
├── home              → Página de inicio con presentación
├── projects          → Galería de todos los proyectos
├── experience        → Historial laboral completo
└── contact           → Formulario de contacto
```

### Panel Administrativo
```
/admin
├── dashboard         → Vista general con estadísticas
├── profile           → Editar información personal
├── projects          → Gestión CRUD de proyectos
└── experience        → Gestión CRUD de experiencia
```

---

## 🏠 Página Principal (Home)

### Secciones:
1. **Hero Section**
   - Nombre y título profesional
   - Biografía corta
   - Botones: "Contactarme" y "GitHub"
   - Imagen de perfil (opcional)

2. **Habilidades**
   - Grid de tecnologías y skills
   - Datos desde perfil

3. **Proyectos Destacados**
   - Máximo 3 proyectos con featured = true
   - Tarjetas con imagen, descripción, tecnologías
   - Enlaces a demo y GitHub

---

## 🚀 Proyectos

### Página de Visualización
- Grid de 3 columnas
- Todas los proyectos
- Tarjetas con hover effect
- Acceso a demo y GitHub

### Campos Disponibles
- **title**: Nombre del proyecto
- **description**: Descripción detallada
- **technologies**: Array de tecnologías usadas
- **imageUrl**: URL de imagen (placeholder o local)
- **demoUrl**: Enlace a demo en vivo
- **githubUrl**: Enlace al repositorio
- **featured**: Boolean para proyectos destacados

---

## 💼 Experiencia Laboral

### Página de Visualización
- Timeline vertical
- Ordenado por fecha más reciente
- Tarjetas con información completa
- Indicador de empleo actual

### Campos Disponibles
- **company**: Nombre de la empresa
- **position**: Cargo/posición
- **description**: Descripción de responsabilidades
- **location**: Ubicación
- **startDate**: Fecha de inicio
- **endDate**: Fecha de fin (null si actual)
- **isCurrent**: Boolean para marcar actual

---

## 📧 Formulario de Contacto

### Campos:
- Nombre (required)
- Email (required)
- Asunto (required)
- Mensaje (required)

### Funcionalidad:
- Validación básica
- Mensaje de éxito
- Limpieza automática del formulario

---

## 🔐 Panel de Administración

### 📊 Dashboard
**Tarjetas de Estadísticas:**
- Total de proyectos
- Total de experiencias
- Proyectos destacados
- Botones de acceso rápido

---

### 👤 Edición de Perfil

**Campos Editables:**
- Nombre completo
- Título profesional
- Biografía
- Email
- Teléfono
- Ubicación
- URL de imagen de perfil
- Habilidades (lista separada por comas)

**Enlaces Sociales:**
- GitHub
- LinkedIn
- Twitter

**Validación:**
- Campos requeridos
- Mensajes de éxito

---

### 🚀 Gestión de Proyectos

**Funcionalidades:**
- ✅ Crear nuevo proyecto
- ✅ Editar proyecto existente
- ✅ Eliminar proyecto
- ✅ Marcar como destacado
- ✅ Toggle del formulario

**Campos del Formulario:**
- Título (required)
- Descripción (required)
- URL Imagen (required)
- Tecnologías (required, separadas por comas)
- URL Demo (opcional)
- URL GitHub (opcional)
- Destacado (checkbox)

**Tabla de Listado:**
- Todas los proyectos
- Tecnologías como tags
- Estado destacado
- Botones: Editar / Eliminar

---

### 💼 Gestión de Experiencia

**Funcionalidades:**
- ✅ Añadir experiencia
- ✅ Editar experiencia
- ✅ Eliminar experiencia
- ✅ Toggle del formulario

**Campos del Formulario:**
- Empresa (required)
- Posición (required)
- Descripción (required)
- Ubicación (required)
- Fecha de inicio (required)
- Fecha de fin (opcional, disabled si actual)
- Actualmente trabajando aquí (checkbox)

**Tabla de Listado:**
- Empresa
- Posición
- Ubicación
- Período (calculado automáticamente)
- Botones: Editar / Eliminar

---

## 🎨 Estilos y Colores

### Paleta de Colores (Tailwind)
```
Primary:   #3B82F6 (Azul)       - Botones principales, enlaces
Secondary: #1F2937 (Gris oscuro) - Fondo, textos
Accent:    #10B981 (Verde)      - Destacados, success
```

### Tipografía
- Font: Sistema de fuentes del navegador
- Títulos: Bold
- Textos: Regular/Medium
- Código: Monospace (si aplica)

### Componentes
- Botones: Con hover effects
- Tarjetas: Sombra y hover scale
- Inputs: Con focus rings
- Tablas: Striped con hover

---

## 🔌 Integración API

### Endpoints (JSON Server)

**Profile:**
```
GET    /profile           → Obtener perfil
PUT    /profile           → Actualizar perfil
```

**Projects:**
```
GET    /projects          → Obtener todos
GET    /projects/:id      → Obtener por ID
POST   /projects          → Crear nuevo
PUT    /projects/:id      → Actualizar
DELETE /projects/:id      → Eliminar
```

**Experience:**
```
GET    /experience        → Obtener todos
GET    /experience/:id    → Obtener por ID
POST   /experience        → Crear nuevo
PUT    /experience/:id    → Actualizar
DELETE /experience/:id    → Eliminar
```

---

## 📦 Estructura de Datos

### Perfil
```typescript
{
  id: number,
  name: string,
  title: string,
  bio: string,
  email: string,
  phone?: string,
  location: string,
  profileImage?: string,
  socialLinks: {
    github?: string,
    linkedin?: string,
    twitter?: string,
    portfolio?: string
  },
  skills: string[]
}
```

### Proyecto
```typescript
{
  id: number,
  title: string,
  description: string,
  technologies: string[],
  imageUrl: string,
  demoUrl?: string,
  githubUrl?: string,
  featured: boolean,
  createdAt: Date
}
```

### Experiencia
```typescript
{
  id: number,
  company: string,
  position: string,
  description: string,
  startDate: Date,
  endDate?: Date,
  isCurrent: boolean,
  location: string,
  createdAt: Date
}
```

---

## 🎯 Flujos de Usuario

### Visitante
1. Entra en home
2. Lee presentación
3. Navega a proyectos
4. Revisa experiencia
5. Envía contacto (si necesario)

### Administrador
1. Entra en /admin
2. Ve dashboard con estadísticas
3. Edita perfil personal
4. Gestiona proyectos (CRUD)
5. Gestiona experiencia (CRUD)
6. Previsualiza en sitio público

---

## 🚀 Tips de Uso

### Personalización Rápida
1. Edita `db.json` directamente
2. Los cambios se reflejan automáticamente
3. No necesitas recompilar

### Mejores Prácticas
- Mantén descripciones cortas y concisas
- Usa URLs de imágenes de alta calidad
- Completa todos los campos requeridos
- Ordena proyectos por importancia

### Optimización
- Comprime imágenes antes de subir URLs
- Usa URLs HTTPS cuando sea posible
- Valida links de redes sociales
- Prueba en diferentes dispositivos

---

## 📱 Responsive Design

El portfolio está optimizado para:
- 📱 Móvil (320px+)
- 📱 Tablet (768px+)
- 🖥️ Desktop (1024px+)
- 🖥️ Large (1280px+)

Todos los componentes se adaptan automáticamente con Tailwind CSS.

---

**¡Listo para personalizar tu portfolio! 🎨**
