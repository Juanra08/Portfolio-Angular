# 🚀 INICIO RÁPIDO - Portfolio Angular

## ✅ Estado del Proyecto

Tu proyecto **Portfolio Web con Angular** está completamente creado y listo para ejecutarse.

## 📦 Lo que incluye

✨ **Frontend Portfolio**
- Página de inicio con presentación
- Galería de proyectos
- Historial laboral
- Formulario de contacto
- Diseño responsivo con Tailwind CSS

🔐 **Panel Administrativo**
- Dashboard con estadísticas
- Gestión completa de proyectos (CRUD)
- Gestión de experiencia laboral
- Editor de perfil personal
- Interfaz intuitiva y moderna

⚙️ **Backend Simulado**
- JSON Server para API REST
- Base de datos mock en `db.json`
- Sincronización automática

## 🎯 Primeros Pasos

### 1. Iniciar el Proyecto
```bash
npm run dev
```

Esto iniciará:
- **Frontend**: http://localhost:4200
- **Backend**: http://localhost:3000

### 2. Personalizar tu Información

Edita el archivo `db.json` con tu información:

```json
{
  "profile": {
    "name": "Tu Nombre",
    "title": "Tu Título",
    "email": "tu@email.com",
    "bio": "Tu biografía",
    ...
  }
}
```

### 3. Acceder al Admin

Entra en: **http://localhost:4200/admin**

Aquí puedes:
- Ver dashboard con estadísticas
- Añadir/editar/eliminar proyectos
- Gestionar tu experiencia laboral
- Editar tu perfil

## 📁 Estructura del Proyecto

```
Portfolio con Angular/
├── src/
│   ├── app/
│   │   ├── core/services/        # Servicios HTTP
│   │   ├── features/
│   │   │   ├── portfolio/        # Sitio público
│   │   │   └── admin/            # Panel administrativo
│   │   ├── app.component.ts      # Componente raíz
│   │   └── app.routes.ts         # Rutas
│   ├── assets/                   # Imágenes y recursos
│   ├── styles.css                # Estilos globales
│   └── index.html                # HTML principal
├── db.json                        # Base de datos (editar aquí)
├── package.json                   # Dependencias
├── angular.json                   # Configuración Angular
├── tailwind.config.js             # Configuración Tailwind
└── README.md                      # Documentación completa
```

## 🛠️ Comandos Disponibles

```bash
# Ejecutar todo (dev + servidor)
npm run dev

# Solo Angular
npm start

# Solo JSON Server
npm run server

# Compilar para producción
npm run build

# Ejecutar linter
npm run lint

# Ejecutar tests
npm run test
```

## 🎨 Personalización

### Cambiar Colores
Edita `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#TU_COLOR',
      secondary: '#TU_COLOR',
      accent: '#TU_COLOR',
    }
  }
}
```

### Cambiar Datos
Edita `db.json` directamente. Los cambios se reflejan automáticamente.

## 📱 Características Principales

### Página Pública
- Home con presentación personal
- Proyectos destacados
- Experiencia laboral
- Formulario de contacto
- Totalmente responsiva

### Panel Admin
- **Dashboard**: Estadísticas generales
- **Perfil**: Editar datos personales, bio, skills, redes sociales
- **Proyectos**: CRUD completo con campos para tecnologías, links, etc
- **Experiencia**: Gestionar historial laboral con fechas

## 🔄 Flujo de Trabajo

1. **Desarrolla**: Modifica componentes en `src/app/`
2. **Visualiza**: El navegador se actualiza automáticamente
3. **Admin**: Añade contenido desde el panel administrativo
4. **Compila**: `npm run build` para producción

## 📚 Tecnologías

- **Angular 17**: Framework frontend
- **TypeScript**: Lenguaje tipado
- **Tailwind CSS**: Estilos utility-first
- **RxJS**: Programación reactiva
- **JSON Server**: API REST simulada
- **Node.js**: Runtime

## 🆘 Solución de Problemas

### "Puertos en uso"
Si los puertos 4200 o 3000 están ocupados:
```bash
ng serve --port 4300
json-server --watch db.json --port 3001
```

### "Imágenes no cargan"
Las URLs placeholder funcionan, pero puedes:
1. Reemplazar URLs en `db.json`
2. Usar URLs de tus propias imágenes
3. Colocar imágenes locales en `src/assets/`

### "Errores de CORS"
JSON Server está configurado para aceptar cualquier origen. Debería funcionar.

## 📝 Próximos Pasos

1. ✅ Instalar dependencias (hecho)
2. 📝 Editar `db.json` con tu información
3. 🚀 Ejecutar `npm run dev`
4. 🎨 Personalizar colores en `tailwind.config.js`
5. 📦 Construir para producción: `npm run build`
6. 🌐 Deployar a hosting (Vercel, Netlify, etc)

## 🚀 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta 'dist/portfolio' a Netlify
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Pages en los settings del repo
```

## 📞 Soporte

Para más información, consulta:
- 📖 `README.md` - Documentación completa
- 📁 Estructura del código comentada
- 🔗 URLs de documentación oficial

---

**¡Tu portfolio está listo para brillar! 🌟**

Cualquier duda, no dudes en explorar los archivos y la estructura del proyecto.
