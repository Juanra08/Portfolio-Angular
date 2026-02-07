# 🌐 Alternativas de Base de Datos

Tu portfolio puede conectarse a cualquiera de estas opciones:

## 1. 🔥 Firebase (Recomendado para Principiantes)

**Ventajas:**
- ✅ Fácil de configurar
- ✅ Hosting gratuito
- ✅ Base de datos en tiempo real
- ✅ Autenticación incorporada

**Desventajas:**
- ❌ Puede ser caro a escala
- ❌ Menos control sobre la infraestructura

**Costo:** Gratis hasta cierto uso

---

## 2. 📊 Supabase (PostgreSQL en la nube)

**Ventajas:**
- ✅ Open source (alternativa a Firebase)
- ✅ PostgreSQL completo
- ✅ Buena documentación
- ✅ Gratis hasta cierto uso

**Instalación:**
```bash
npm install @supabase/supabase-js
```

**Ejemplo:**
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://your-project.supabase.co',
  'your-anon-key'
);

// Obtener proyectos
const { data, error } = await supabase
  .from('projects')
  .select('*');
```

**Costo:** Gratis hasta 500 MB

---

## 3. 🗄️ MongoDB + Vercel/Heroku

**Ventajas:**
- ✅ Base de datos flexible (NoSQL)
- ✅ Buena para aplicaciones grandes
- ✅ Escalable

**Instalación:**
```bash
npm install mongoose
```

**Ejemplo:**
```typescript
// En tu backend (Node.js/Express)
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  featured: Boolean
});

const Project = mongoose.model('Project', projectSchema);
```

**Costo:** MongoDB Atlas gratis (512 MB)

---

## 4. ☁️ AWS (DynamoDB, RDS, etc.)

**Ventajas:**
- ✅ Muy escalable
- ✅ Múltiples opciones
- ✅ Profesional

**Instalación:**
```bash
npm install aws-sdk
```

**Ejemplo:**
```typescript
import AWS from 'aws-sdk';

const dynamodb = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'projects',
  Item: {
    id: '123',
    title: 'Mi Proyecto'
  }
};

dynamodb.put(params).promise();
```

**Costo:** Capa gratuita disponible

---

## 5. 🐘 PostgreSQL/MySQL + tu propio servidor

**Ventajas:**
- ✅ Control total
- ✅ Más económico a largo plazo
- ✅ Sin restricciones

**Desventajas:**
- ❌ Más configuración
- ❌ Debes mantener el servidor

**Instalación:**
```bash
npm install pg  # Para PostgreSQL
```

**Ejemplo:**
```typescript
import { Pool } from 'pg';

const pool = new Pool({
  user: 'user',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'portfolio'
});

const result = await pool.query('SELECT * FROM projects');
```

**Costo:** Desde 5-10€/mes

---

## 6. ☑️ Fauna DB

**Ventajas:**
- ✅ Serverless
- ✅ GraphQL nativo
- ✅ Distribuida globalmente

**Instalación:**
```bash
npm install fauna
```

**Costo:** Gratis hasta cierto uso

---

## 🎯 Comparativa Rápida

| BD | Facilidad | Costo | Escalabilidad | Ideal Para |
|----|-----------|-------|--------------|-----------|
| Firebase | ⭐⭐⭐⭐⭐ | Gratis-$$ | ⭐⭐⭐⭐ | Principiantes |
| Supabase | ⭐⭐⭐⭐ | Gratis-$ | ⭐⭐⭐ | PostgreSQL |
| MongoDB | ⭐⭐⭐⭐ | Gratis-$$ | ⭐⭐⭐⭐ | NoSQL |
| AWS | ⭐⭐⭐ | Gratis-$$$ | ⭐⭐⭐⭐⭐ | Grandes apps |
| PG/MySQL | ⭐⭐ | $-$$ | ⭐⭐⭐⭐ | Control total |
| Fauna | ⭐⭐⭐ | Gratis-$$ | ⭐⭐⭐⭐ | GraphQL |

---

## 📝 Cómo Migrar tu Código

El patrón es simple. En cada servicio:

```typescript
// 1. Añade flag
private useDatabase = 'firebase'; // 'json', 'firebase', 'supabase', etc.

// 2. En cada método, chequea
if (this.useDatabase === 'firebase') {
  return this.getFromFirebase();
} else if (this.useDatabase === 'supabase') {
  return this.getFromSupabase();
} else {
  return this.http.get(this.apiUrl);
}

// 3. Implementa métodos específicos
private async getFromFirebase() { ... }
private async getFromSupabase() { ... }
```

---

## 🚀 Mi Recomendación

Para tu portfolio:

1. **Empezar:** Firebase (lo más fácil)
2. **Crecer:** Supabase (PostgreSQL con control)
3. **Escalar:** AWS o tu propio servidor

Todos funcionan perfectamente con Angular. ¡Elige el que prefieras!

---

¿Cuál te interesa implementar?
