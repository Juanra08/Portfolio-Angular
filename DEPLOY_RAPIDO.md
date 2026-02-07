# 🚀 Guía Rápida: Desplegar en Vercel en 5 Minutos

## ⚡ Pasos Rápidos

### 1️⃣ Login en Vercel (Terminal)
```bash
vercel login
```
Te pedirá email y contraseña. Si no tienes cuenta, ve a [vercel.com](https://vercel.com) y crea una (es gratis).

### 2️⃣ Desplegar
```bash
cd "c:\Users\juanr\Documents\Portfolio con angular"
npm run deploy
```

O si quieres hacer un test primero (sin desplegar a producción):
```bash
npm run deploy:preview
```

### 3️⃣ Vercel te dará una URL
```
✅ Your app is live at: https://portfolio-angular-xxx.vercel.app
```

¡Listo! Tu portfolio está en internet.

---

## 📱 Alternativa: Desplegar desde Web

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Haz clic en **"New Project"**
3. Conecta tu GitHub
4. Selecciona el repositorio `portfolio-angular`
5. Haz clic en **"Deploy"**

---

## 🎉 Después

- **URL pública:** https://portfolio-angular-xxx.vercel.app
- **Actualizaciones automáticas:** Cada `git push` redespliega
- **Dominio personalizado:** Vercel → Settings → Domains

---

## 💻 Scripts Disponibles

```bash
npm run build          # Compilar para desarrollo
npm run build:prod     # Compilar para producción
npm run deploy         # Desplegar a producción en Vercel
npm run deploy:preview # Vista previa (sin producción)
npm start             # Ejecutar en local
npm run dev           # Ejecutar con API mock local
```

---

## 📚 Documentación Completa

Para más detalles, ve a `DESPLIEGUE_VERCEL.md`

¿Necesitas ayuda?
