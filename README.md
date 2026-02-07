# Portfolio Web con Angular

Un portfolio profesional moderno construido con **Angular 17**, **Tailwind CSS** y un panel administrativo completo para gestionar contenido.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante y responsiva con Tailwind CSS
- 📱 **Responsive**: Funciona perfectamente en todos los dispositivos
- 🔐 **Panel Admin**: Gestiona proyectos, experiencia laboral y perfil
- 💾 **Backend Local**: JSON Server para desarrollo rápido
- ⚡ **Standalone Components**: Arquitectura moderna de Angular
- 🎯 **Routing**: Navegación optimizada con lazy loading

## 🚀 Tecnologías Utilizadas

### Frontend
- **Angular 17**: Framework principal
- **TypeScript**: Lenguaje de programación
- **Tailwind CSS**: Utilidad-first CSS framework
- **RxJS**: Programación reactiva

### Backend
- **JSON Server**: API REST mock para desarrollo
- **Node.js**: Runtime

## 📋 Requisitos Previos

- Node.js v18 o superior
- npm v9 o superior

## 🔧 Instalación

1. **Clona el repositorio**:
```bash
cd "c:\Users\juanr\Documents\Portfolio con angular"
```

2. **Instala las dependencias**:
```bash
npm install
```

## ▶️ Ejecución

### Modo Desarrollo
Para ejecutar tanto el servidor Angular como JSON Server simultáneamente:

```bash
npm run dev
```

Esto abrirá:
- **Frontend**: http://localhost:4200
- **Backend**: http://localhost:3000

### Solo Angular
```bash
npm start
```

### Solo JSON Server
```bash
npm run server
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/
│   │   └── services/           # Servicios (Profile, Project, Experience)
│   ├── features/
│   │   ├── portfolio/          # Sitio público
│   │   │   ├── layout/
│   │   │   └── pages/          # Home, Projects, Experience, Contact
│   │   └── admin/              # Panel administrativo
│   │       ├── layout/
│   │       └── pages/          # Dashboard, Manage Projects/Experience/Profile
│   ├── shared/                 # Componentes compartidos
│   ├── app.component.ts        # Componente raíz
│   └── app.routes.ts           # Rutas
├── assets/                     # Recursos estáticos
├── styles.css                  # Estilos globales
└── index.html                  # HTML principal
```

## 🛠️ Configuración

### Tailwind CSS
El archivo `tailwind.config.js` define los colores personalizados:
- **primary**: #3B82F6 (Azul)
- **secondary**: #1F2937 (Gris oscuro)
- **accent**: #10B981 (Verde)

### Base de Datos
El archivo `db.json` contiene:
- **profile**: Información personal y habilidades
- **projects**: Lista de proyectos
- **experience**: Historial laboral

## 🎯 Rutas Disponibles

### Sitio Público
- `/` - Página de inicio
- `/projects` - Galería de proyectos
- `/experience` - Historial laboral
- `/contact` - Formulario de contacto

### Panel Administrativo
- `/admin` - Dashboard
- `/admin/profile` - Editar perfil
- `/admin/projects` - Gestionar proyectos
- `/admin/experience` - Gestionar experiencia

## 📝 Funcionalidades del Admin

### Gestión de Proyectos
- ✅ Crear nuevos proyectos
- ✅ Editar proyectos existentes
- ✅ Eliminar proyectos
- ✅ Marcar como destacados
- ✅ Agregar tecnologías, URLs de demo y GitHub

### Gestión de Experiencia
- ✅ Añadir experiencia laboral
- ✅ Editar experiencias
- ✅ Eliminar experiencias
- ✅ Marcar como posición actual
- ✅ Gestionar fechas

### Gestión de Perfil
- ✅ Editar nombre, título y biografía
- ✅ Actualizar información de contacto
- ✅ Agregar habilidades
- ✅ Configurar enlaces sociales
- ✅ Cargar imagen de perfil

## 🎨 Personalización

Para cambiar los datos del portfolio, edita el archivo `db.json`:

```json
{
  "profile": {
    "name": "Tu Nombre",
    "title": "Tu Título",
    "email": "tu@email.com",
    ...
  }
}
```

## 📦 Build para Producción

```bash
npm run build
```

Los archivos compilados se generarán en `dist/portfolio/`

## 🐛 Solución de Problemas

### El puerto 3000 o 4200 está en uso
```bash
# Cambiar puerto de Angular
ng serve --port 4300

# Cambiar puerto de JSON Server
json-server --watch db.json --port 3001
```

### Las imágenes no cargan
Asegúrate de que las URLs en `db.json` sean accesibles o utiliza imágenes locales en la carpeta `src/assets/`

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Tu Nombre** - Full Stack Developer

- GitHub: [@tuusuario](https://github.com)
- LinkedIn: [tu-linkedin](https://linkedin.com)
- Portfolio: [tuportfolio.com](https://tuportfolio.com)

---

**¡Hecho con ❤️ usando Angular y Tailwind CSS!**
