# 🏥 Arquitectura Técnica: Agente IA para Centro Médico

Documento técnico complementario a `investigacion-centros-medicos.md`. Aquí detallamos la arquitectura recomendada, stack tecnológico, comparativas y ejemplos de implementación.

---

## 1. 🏗️ ARQUITECTURA RECOMENDADA: Agente Único con RAG

### ❌ Por qué NO multi-agente

| Problema | Impacto |
|----------|---------|
| **Latencia** | 1 consulta vs 4-5 llamadas en cascada |
| **Costo** | 5x más caro (cada agente = llamada al LLM) |
| **UX confusa** | El usuario no entiende por qué tarda tanto |
| **Debugging complejo** | ¿Dónde falló? ¿En el agente A, B o C? |

> **La verdad:** Los frameworks multi-agente son *demos impresionantes* que no escalan a producción real. Para un centro médico necesitás algo que funcione, no que se vea cool en una demo.

### ✅ Arquitectura Correcta: Agente Único con RAG

```
┌─────────────────────────────────────────────────────────────────┐
│                         FLUJO DE DATOS                          │
└─────────────────────────────────────────────────────────────────┘

Usuario
   ↓
Consulta en lenguaje natural
   ↓
┌─────────────────┐
│  PostgreSQL     │  ← Base Vectorial (pgvector)
│  + pgvector     │    - Horarios médicos
│                 │    - Servicios disponibles
│                 │    - Especialidades
│                 │    - FAQ del centro
└─────────────────┘
   ↓
Contexto recuperado + Prompt del sistema
   ↓
┌─────────────────┐
│   MiniMax M2.5  │  ← LLM Cloud vía OpenCode Go API
│   (vía API)     │    Modelo: MiniMax-Text-01
└─────────────────┘
   ↓
Respuesta natural y contextualizada
   ↓
Usuario recibe información precisa
```

**¿Por qué funciona?**
- Una sola llamada al LLM = latencia mínima
- El contexto relevante viene de TU base de datos
- El LLM solo "razona" sobre datos que le proporcionás

---

## 2. 🛠️ STACK TECNOLÓGICO COMPLETO

### Capa por Capa

| Capa | Tecnología | Rol |
|------|------------|-----|
| **Frontend** | Astro o Next.js | Landing page y chat widget |
| **Backend** | Bun/Node + TypeScript + Elysia/Fastify | API REST/WebSocket |
| **Base de Datos** | PostgreSQL 15+ + pgvector | Datos + embeddings |
| **Embeddings** | OpenAI API o Xenova (@xenova/transformers) | Vectorización de texto |
| **LLM** | MiniMax M2.5 | Generación de respuestas |
| **Infra** | Docker + Docker Compose | Orquestación local |

### Diagrama del Stack

```
┌────────────────────────────────────────────────────────────────┐
│                         STACK COMPLETO                         │
└────────────────────────────────────────────────────────────────┘

  ┌──────────────┐
  │   Astro/     │  ← Landing page del centro médico
  │   Next.js    │
  └──────┬───────┘
         │ HTTP/WebSocket
         ↓
  ┌──────────────┐
  │    Bun/      │  ← API TypeScript
  │    Node.js   │     - Elysia (recomendado) o Fastify
  │   + Elysia   │     - Endpoints: /chat, /embed, /health
  └──────┬───────┘
         │ SQL + Vector Search
         ↓
  ┌──────────────┐
  │  PostgreSQL  │  ← Base de datos principal
  │   + pgvector │     - Tablas: schedules, services, doctors
  │              │     - Tabla: embeddings (vector(1536))
  └──────────────┘
         ↑
         │ Embeddings API (una sola vez, en ingest)
  ┌──────────────┐
  │   OpenAI     │  ← text-embedding-3-small
  │ Embeddings   │    o Xenova (local, sin costo)
  └──────────────┘
         ↑
         │ LLM API (cada consulta del usuario)
  ┌──────────────┐
  │   MiniMax    │  ← MiniMax-Text-01 vía OpenCode Go
  │    M2.5      │     Suscripción: $10/mes
  └──────────────┘
```

---

## 3. 📊 COMPARATIVA: ChromaDB vs pgvector

### Tabla Comparativa

| Característica | ChromaDB | pgvector | Ganador |
|----------------|----------|----------|---------|
| **Transacciones ACID** | ❌ No | ✅ Sí | pgvector |
| **SQL nativo** | ❌ No | ✅ Sí | pgvector |
| **Búsqueda híbrida** | ⚠️ Limitada | ✅ SQL + vectorial | pgvector |
| **Backup/restore** | ❌ Propio | ✅ pg_dump estándar | pgvector |
| **Conocimiento del equipo** | ⚠️ Nuevo | ✅ Probablemente ya saben | pgvector |
| **Escalabilidad** | ⚠️ Solo vectores | ✅ PostgreSQL estándar | pgvector |
| **Latencia** | ⚠️ Red adicional | ✅ Misma conexión | pgvector |

### ¿Por qué pgvector gana para producción?

1. **Transacciones ACID**: Si falla la inserción de un horario médico, se hace rollback completo. Con ChromaDB tenés que manejar la consistencia vos.

2. **SQL + búsqueda semántica combinada**: Podés hacer queries como:
   ```sql
   SELECT * FROM schedules 
   WHERE specialty = 'Cardiología' 
   ORDER BY embedding <-> query_embedding 
   LIMIT 5;
   ```

3. **Backup/restore estándar**: `pg_dump` y `pg_restore` que ya conocés. ChromaDB tiene su propio formato.

4. **Equipo ya conoce PostgreSQL**: No hay curva de aprendizaje. ChromaDB es una base nueva que hay que aprender.

> **La regla:** Si ya tenés PostgreSQL, no agregues otra base solo para vectores. Usá pgvector.

---

## 4. 💰 COSTOS Y SUSCRIPCIÓN OPENCODE GO

### Suscripción OpenCode Go

| Plan | Precio | Incluye |
|------|--------|---------|
| **OpenCode Go** | $10 USD/mes | 20,000 peticiones MiniMax M2.5 |

### ¿Qué significa esto?

```
20,000 peticiones / mes ≈ 650 consultas por día

Para un centro médico pequeño/mediano:
- ~50 consultas al chatbot por día
- = 1,500 consultas/mes
- = 7.5% del límite incluido

Tenes MARGEN para crecer 10x sin cambiar de plan.
```

### Comparativa de Costos

| Opción | Costo mensual | Complejidad | Potencia |
|--------|---------------|-------------|----------|
| **OpenCode Go** | $10 | ⭐ Baja | ⭐⭐⭐⭐⭐ Alta |
| Ollama local | $0 (hardware) | ⭐⭐⭐⭐⭐ Alta | ⭐⭐⭐ Media |
| OpenAI GPT-4 | ~$50-100 | ⭐⭐⭐ Media | ⭐⭐⭐⭐⭐ Alta |
| AWS Bedrock | ~$30-80 | ⭐⭐⭐⭐ Alta | ⭐⭐⭐⭐ Alta |

### Análisis de Ollama local

**¿Por qué NO recomendado para este caso?**

```
Problemas de Ollama local:
├── Hardware: Necesitás GPU decente ($$$)
├── Mantenimiento: Vos actualizás modelos
├── Latencia: Tu servidor vs CDN global
├── Escalabilidad: Un solo nodo
└── DevOps: Vos sos SRE + ML Engineer

Costo real:
- GPU cloud: $100-300/mes
- Tu tiempo: 20-40hs/mes
- Stress: Incalculable

vs OpenCode Go:
- $10/mes
- 0 mantenimiento
- API simple
```

---

## 5. 🔒 PRIVACIDAD Y SEGURIDAD

### Flujo de Datos

```
DATOS SENSIBLES (nunca salen del servidor)
├── Horarios médicos
├── Especialidades disponibles
├── Precios de servicios
├── Datos de doctores
└── FAQ interna
         ↓
    [PostgreSQL local]
         ↓
    Embedding + Prompt
         ↓
    [MiniMax Cloud]
         ↓
    Respuesta generada
         ↓
    [Usuario]
```

### Cumplimiento Normativo

| Aspecto | Implementación |
|---------|----------------|
| **Datos médicos** | PostgreSQL local, encriptado |
| **Comunicación** | HTTPS/TLS 1.3 |
| **Auditoría** | Logs de PostgreSQL |
| **Backup** | Encriptado en repos |
| **Acceso** | Auth JWT + roles |

> **Punto clave:** Los datos del centro médico (horarios, servicios, etc.) **nunca** llegan a MiniMax. Solo llega el prompt con el contexto necesario para responder.

### Ejemplo de Prompt que viaja a MiniMax

```typescript
// Esto es lo ÚNICO que viaja a la nube
const prompt = `
Eres un asistente virtual del Centro Médico SaludTotal.

CONTEXTO RELEVANTE:
- Horario de atención: Lunes a Viernes 8:00-20:00
- Dr. García atiende cardiología los martes 14:00-18:00
- Estudio de ecografía cuesta $15,000 ARS

CONSULTA DEL USUARIO:
${userQuestion}

Responde de forma clara, profesional y breve.
`;
```

---

## 6. 💻 EJEMPLOS DE CÓDIGO

### 6.1 Configuración de pgvector

```sql
-- 1. Instalar extensión
CREATE EXTENSION IF NOT EXISTS vector;

-- 2. Tabla para documentos vectorizados
CREATE TABLE medical_docs (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,           -- Texto original
    embedding VECTOR(1536),          -- Dimensión de OpenAI embeddings
    doc_type VARCHAR(50),            -- 'schedule', 'service', 'faq', etc.
    metadata JSONB,                  -- Datos adicionales flexibles
    created_at TIMESTAMP DEFAULT NOW()
);

-- 3. Índice para búsqueda eficiente
CREATE INDEX ON medical_docs 
USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- 4. Tabla de horarios médicos (ejemplo)
CREATE TABLE doctor_schedules (
    id SERIAL PRIMARY KEY,
    doctor_name VARCHAR(100),
    specialty VARCHAR(100),
    available_days TEXT[],
    time_range VARCHAR(50),
    embedding VECTOR(1536),
    is_active BOOLEAN DEFAULT true
);
```

### 6.2 Búsqueda con Filtros SQL + Semántica

```typescript
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

/**
 * Búsqueda híbrida: SQL + Vectorial
 * Ejemplo: "quiero cardiología por la tarde"
 */
async function searchSchedules(
  query: string, 
  queryEmbedding: number[]
) {
  const sql = `
    SELECT 
      doctor_name,
      specialty,
      available_days,
      time_range,
      1 - (embedding <=> $1::vector) as similarity
    FROM doctor_schedules
    WHERE 
      is_active = true
      AND specialty ILIKE '%cardio%'  -- Filtro SQL tradicional
    ORDER BY embedding <-> $1::vector  -- Búsqueda semántica
    LIMIT 5;
  `;
  
  const result = await pool.query(sql, [
    JSON.stringify(queryEmbedding)
  ]);
  
  return result.rows;
}

/**
 * Búsqueda puramente semántica (RAG)
 */
async function semanticSearch(
  queryEmbedding: number[],
  docType?: string
) {
  const sql = `
    SELECT 
      content,
      metadata,
      1 - (embedding <=> $1::vector) as similarity
    FROM medical_docs
    WHERE 
      ($2::varchar IS NULL OR doc_type = $2)
      AND 1 - (embedding <=> $1::vector) > 0.7
    ORDER BY embedding <-> $1::vector
    LIMIT 3;
  `;
  
  const result = await pool.query(sql, [
    JSON.stringify(queryEmbedding),
    docType || null
  ]);
  
  return result.rows;
}
```

### 6.3 Integración con MiniMax API

```typescript
// src/services/minimax.ts
import { OpenCodeGoClient } from 'opencode-go';

const client = new OpenCodeGoClient({
  apiKey: process.env.OPENCODE_API_KEY,
  baseURL: 'https://api.opencode.ai/v1'
});

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

/**
 * Genera respuesta usando MiniMax M2.5
 */
export async function generateResponse(
  context: string[],
  userMessage: string
): Promise<string> {
  const messages: ChatMessage[] = [
    {
      role: 'system',
      content: `Eres un asistente virtual del Centro Médico SaludTotal.
      
Contexto relevante:
${context.join('\n---\n')}

Instrucciones:
- Responde de forma clara y profesional
- Usa solo la información del contexto
- Si no sabés algo, decí "No tengo esa información"
- Sé breve (máximo 3 oraciones)`
    },
    {
      role: 'user',
      content: userMessage
    }
  ];
  
  try {
    const response = await client.chat.completions.create({
      model: 'MiniMax-Text-01',
      messages,
      temperature: 0.7,
      max_tokens: 500
    });
    
    return response.choices[0]?.message?.content || 
           'Lo siento, no pude procesar tu consulta.';
  } catch (error) {
    console.error('Error llamando a MiniMax:', error);
    throw new Error('Error al generar respuesta');
  }
}
```

### 6.4 Servicio de Embeddings

```typescript
// src/services/embeddings.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

/**
 * Genera embeddings usando OpenAI
 * Costo: ~$0.02 por 1M tokens (muy barato)
 */
export async function createEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
    dimensions: 1536
  });
  
  return response.data[0].embedding;
}

/**
 * Alternativa: Xenova (local, sin costo)
 * Más lento pero gratuito
 */
export async function createEmbeddingLocal(text: string): Promise<number[]> {
  const { pipeline } = await import('@xenova/transformers');
  const embedder = await pipeline(
    'feature-extraction',
    'Xenova/all-MiniLM-L6-v2'
  );
  
  const output = await embedder(text, { pooling: 'mean', normalize: true });
  return Array.from(output.data);
}
```

### 6.5 Endpoint Completo del Chatbot

```typescript
// src/routes/chat.ts
import { Elysia } from 'elysia';
import { createEmbedding } from '../services/embeddings';
import { semanticSearch } from '../db/search';
import { generateResponse } from '../services/minimax';

export const chatRoutes = new Elysia({ prefix: '/api/chat' })
  .post('/', async ({ body, set }) => {
    try {
      const { message } = body as { message: string };
      
      // 1. Vectorizar la consulta del usuario
      console.time('embedding');
      const queryEmbedding = await createEmbedding(message);
      console.timeEnd('embedding');
      
      // 2. Buscar contexto relevante en PostgreSQL
      console.time('search');
      const relevantDocs = await semanticSearch(queryEmbedding);
      console.timeEnd('search');
      
      // 3. Generar respuesta con MiniMax
      console.time('llm');
      const context = relevantDocs.map(doc => doc.content);
      const response = await generateResponse(context, message);
      console.timeEnd('llm');
      
      return {
        success: true,
        response,
        sources: relevantDocs.map(d => ({
          content: d.content.substring(0, 100) + '...',
          similarity: d.similarity
        }))
      };
      
    } catch (error) {
      console.error('Error en chat:', error);
      set.status = 500;
      return {
        success: false,
        error: 'Error procesando tu consulta'
      };
    }
  });
```

### 6.6 Estructura del Proyecto

```
medical-chatbot/
├── docker-compose.yml          # PostgreSQL + pgvector
├── .env.example                # Variables de entorno
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts                # Entry point
    ├── config/
    │   └── database.ts         # Config de PostgreSQL
    ├── routes/
    │   ├── chat.ts             # POST /api/chat
    │   ├── health.ts           # GET /health
    │   └── ingest.ts           # POST /api/ingest (carga docs)
    ├── services/
    │   ├── embeddings.ts       # OpenAI/Xenova embeddings
    │   └── minimax.ts          # Integración LLM
    ├── db/
    │   ├── schema.sql          # DDL de tablas
    │   ├── search.ts           # Queries vectoriales
    │   └── ingest.ts           # Carga de documentos
    └── types/
        └── index.ts            # TypeScript types
```

### 6.7 Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  postgres:
    image: ankane/pgvector:latest
    container_name: medical-db
    environment:
      POSTGRES_USER: medical_user
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: medical_chatbot
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./src/db/schema.sql:/docker-entrypoint-initdb.d/01-schema.sql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U medical_user"]
      interval: 5s
      timeout: 5s
      retries: 5

  backend:
    build: .
    container_name: medical-api
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://medical_user:${DB_PASSWORD}@postgres:5432/medical_chatbot
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - OPENCODE_API_KEY=${OPENCODE_API_KEY}
    depends_on:
      postgres:
        condition: service_healthy
    volumes:
      - ./src:/app/src
    command: bun run src/index.ts

volumes:
  postgres_data:
```

---

## 7. ⚡ VENTAJAS DE ESTA ARQUITECTURA

### Resumen Ejecutivo

| Ventaja | Descripción |
|---------|-------------|
| **🎯 Un solo agente** | Sin complejidad multi-agente. Una llamada, una respuesta. |
| **🔷 TypeScript full-stack** | Un solo lenguaje para todo. Backend, frontend, embeddings. |
| **🔒 Datos locales** | PostgreSQL en tu servidor. Privacidad total de datos médicos. |
| **🧠 LLM cloud potente** | MiniMax M2.5 es comparable a GPT-4 en benchmarks. |
| **💰 Costo controlado** | $10/mes fijos. Predecible y escalable. |
| **🔧 Fácil de mantener** | Equipo médico conoce PostgreSQL. Documentación madura. |

### Comparativa con Alternativas

```
Nuestra arquitectura vs otras opciones:

┌─────────────────────────────────────────────────────────────┐
│                NUESTRA ARQUITECTURA                          │
├─────────────────────────────────────────────────────────────┤
│ ✅ TypeScript full-stack                                     │
│ ✅ PostgreSQL (conocido por el equipo)                       │
│ ✅ Single agent (simple)                                     │
│ ✅ Costo predecible ($10/mes)                                │
│ ✅ Datos locales (privacidad)                                │
│ ✅ LLM potente (MiniMax)                                     │
└─────────────────────────────────────────────────────────────┘

vs

┌─────────────────────────────────────────────────────────────┐
│              MULTI-AGENTE (LangChain, etc.)                  │
├─────────────────────────────────────────────────────────────┤
❌ Python (nueva curva de aprendizaje)
❌ ChromaDB/Pinecone (nueva base de datos)
❌ 4-5 llamadas al LLM por consulta
❌ Costo 5x mayor
❌ Debugging complejo
❌ Over-engineering para el caso de uso
└─────────────────────────────────────────────────────────────┘

vs

┌─────────────────────────────────────────────────────────────┐
│              OLLAMA LOCAL                                    │
├─────────────────────────────────────────────────────────────┤
❌ Hardware costoso (GPU)
❌ Mantenimiento constante
❌ Latencia alta
❌ Escalabilidad limitada
❌ Vos sos el DevOps/SRE
└─────────────────────────────────────────────────────────────┘
```

---

## 8. 🚀 IMPLEMENTACIÓN PRODUCCIÓN

### Checklist de Deploy

```
PRE-DEPLOY
├── [ ] Variables de entorno configuradas
├── [ ] PostgreSQL + pgvector instalado
├── [ ] Esquema de base de datos creado
├── [ ] Documentos iniciales cargados (embeddings)
├── [ ] API de MiniMax testeada
└── [ ] Health checks configurados

DEPLOY
├── [ ] Docker Compose ejecutado
├── [ ] Base de datos inicializada
├── [ ] Endpoints testeados
├── [ ] Logs configurados
└── [ ] Monitoreo básico

POST-DEPLOY
├── [ ] Primeras consultas testeadas
├── [ ] Tiempos de respuesta < 2s
├── [ ] Fallback configurado (si el bot no entiende)
└── [ ] Feedback loop para mejorar contexto
```

### Métricas a Monitorear

| Métrica | Target | Alerta |
|---------|--------|--------|
| Latencia (embedding) | < 500ms | > 1s |
| Latencia (búsqueda) | < 200ms | > 500ms |
| Latencia (LLM) | < 1.5s | > 3s |
| Total end-to-end | < 2.5s | > 5s |
| Errores API | < 1% | > 5% |
| Uso MiniMax | < 15k/mes | > 18k/mes |

### Escalabilidad Futura

```
Fase 1 (Ahora):
- 1 servidor con Docker Compose
- PostgreSQL + pgvector local
- MiniMax via API

Fase 2 (Crecimiento):
- PostgreSQL en RDS/Cloud SQL
- Backend en múltiples instancias
- Load balancer

Fase 3 (Escala):
- PostgreSQL con read replicas
- Redis para caché de embeddings frecuentes
- Cola de mensajes para ingestión masiva
```

---

## 9. 📚 ¿QUÉ ES RAG?

### Explicación Simple

**RAG = Retrieval Augmented Generation**

>No es una característica del LLM. Es una **arquitectura** que vos construís alrededor del LLM.

### Diagrama Conceptual

```
┌─────────────────────────────────────────────────────────────────┐
│                         ARQUITECTURA RAG                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   TU BASE   │     │   CONSULTA      │     │    LLM CLOUD    │
│  VECTORIAL  │────→│   DEL USUARIO   │────→│   (MiniMax)     │
│  (Datos     │     │   + CONTEXTO    │     │                 │
│   propios)  │     │   recuperado    │     │  Genera la      │
└─────────────┘     └─────────────────┘     │  respuesta      │
                                            │  basada en TU   │
                                            │  contexto       │
                                            └─────────────────┘

Sin RAG:
Usuario: "¿Cuándo atiende el Dr. García?"
LLM: "No tengo información sobre el Dr. García"

Con RAG:
Usuario: "¿Cuándo atiende el Dr. García?"
Base vectorial: → "Dr. García, Cardiología, Martes 14:00-18:00"
Prompt al LLM: "El Dr. García atiende los martes de 14:00 a 18:00"
LLM: "El Dr. García atiende cardiología los martes de 14:00 a 18:00."
```

### ¿Cómo funciona?

1. **Ingesta (una sola vez)**: Convertís tus documentos en vectores numéricos (embeddings) y los guardás en PostgreSQL.

2. **Consulta (cada vez que habla un usuario)**:
   - Vectorizás la pregunta del usuario
   - Buscás los vectores más similares en tu base
   - Recuperás el texto original de esos documentos
   - Se lo agregás al prompt del LLM como "contexto"

3. **Generación**: El LLM usa ese contexto para responder con información precisa.

### Funciona con CUALQUIER LLM

| LLM | Compatible RAG | Notas |
|-----|----------------|-------|
| **MiniMax M2.5** | ✅ Sí | Recomendado, costo efectivo |
| **GPT-4** | ✅ Sí | Más caro, igual calidad |
| **Llama 3** | ✅ Sí | Open source, auto-hosteable |
| **Claude** | ✅ Sí | Buena opción alternativa |
| **Gemini** | ✅ Sí | Google, buena latencia |

> **El secreto:** El LLM es una commodity. Lo que te diferencia es la **calidad de tu base vectorial** y los **prompts** que diseñás.

### Analogía Simple

```
El LLM es como un profesor muy inteligente pero que:
- No sabe nada de tu centro médico específico
- Puede razonar sobre cualquier tema general

RAG es darle al profesor:
- Un cuaderno con la información de TU centro médico
- Antes de responder, lee el cuaderno
- Responde basándose en el cuaderno + su inteligencia

Sin el cuaderno (RAG): "No sé, no trabajo ahí"
Con el cuaderno (RAG): "Según la información del centro..."
```

---

## 10. ❌ ERRORES COMUNES EVITADOS

### Lista de Errores y Soluciones

| Error | Por qué está mal | Solución correcta |
|-------|------------------|-------------------|
| **Multi-agente innecesario** | Latencia 5x, costo 5x, debugging imposible | **Agente único con RAG** |
| **ChromaDB para producción** | Sin ACID, backup propio, nueva tecnología | **pgvector en PostgreSQL existente** |
| **Ollama local** | Hardware costoso, mantenimiento, complejidad | **MiniMax via API ($10/mes)** |
| **Pensar que RAG es de Python** | RAG es una arquitectura, no un lenguaje | **TypeScript/Bun full-stack** |
| **No vectorizar datos propios** | El LLM no conoce tu centro médico | **Ingesta inicial de documentos** |
| **Prompts genéricos** | Respuestas vagas, información incorrecta | **Prompts con contexto específico** |
| **Sin fallback** | Usuario frustrado cuando el bot no entiende | **Mensaje: "Te conecto con un humano"** |
| **No monitorear costos** | Sorpresa en la factura del mes | **Alertas a los 15k peticiones** |
| **Ignorar privacidad** | Datos médicos en servicios cloud | **PostgreSQL local, solo prompts a la nube** |
| **Over-engineering desde día 1** | Sistema complejo que nunca se termina | **MVP simple que funcione** |

### Anti-Patrones a Evitar

```typescript
// ❌ MAL: Multi-agente con LangChain
const chain = new SequentialChain([
  new LLMChain({ llm, prompt: extractIntent }),
  new LLMChain({ llm, prompt: routeToSpecialist }),
  new LLMChain({ llm, prompt: generateResponse }),
]);
// Resultado: 3 llamadas al LLM, 3x latencia, 3x costo

// ✅ BIEN: Agente único con RAG
const context = await searchVectorDB(query);
const response = await llm.generate(promptWithContext(context, query));
// Resultado: 1 llamada al LLM, mínima latencia, costo controlado
```

```typescript
// ❌ MAL: Enviar datos médicos a OpenAI
const prompt = `
  Paciente: ${patientName}
  Historial: ${medicalHistory}
  Consulta: ${question}
`;
// VIOLACIÓN DE PRIVACIDAD

// ✅ BIEN: Solo contexto necesario, nunca datos sensibles
const prompt = `
  Contexto del centro: ${generalInfo}
  Horarios disponibles: ${schedules}
  Consulta: ${question}
`;
// DATOS SENSIBLES NUNCA SALEN DEL SERVIDOR
```

---

## 📋 CONCLUSIÓN

### Resumen de la Arquitectura Recomendada

```
┌────────────────────────────────────────────────────────────────┐
│              ARQUITECTURA ÓPTIMA: AGENTE ÚNICO RAG            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Frontend          Backend           Datos           LLM      │
│   ─────────         ───────           ─────           ───      │
│   Astro/Next.js  →  Bun/Node  →   PostgreSQL  →   MiniMax      │
│                     + Elysia        + pgvector      M2.5       │
│                                                                │
│   Costo: $10/mes                                               │
│   Latencia: < 2s                                               │
│   Privacidad: Datos locales                                    │
│   Complejidad: Media-baja                                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Próximos Pasos

1. **Setup inicial** (1 día)
   - Docker Compose con PostgreSQL + pgvector
   - Estructura básica del proyecto

2. **Ingesta de datos** (1-2 días)
   - Cargar horarios, servicios, FAQ
   - Generar embeddings

3. **Integración LLM** (1 día)
   - Conectar MiniMax vía OpenCode Go
   - Testear prompts

4. **Frontend** (2-3 días)
   - Widget de chat
   - Landing page

5. **Deploy y testing** (1 día)
   - Producción
   - Monitoreo

**Tiempo total estimado: 1 semana para MVP funcional.**

---

## 📎 REFERENCIAS

- [Documento de negocio: `investigacion-centros-medicos.md`]
- [pgvector documentation](https://github.com/pgvector/pgvector)
- [OpenCode Go](https://opencode.ai)
- [MiniMax M2.5](https://www.minimaxi.com)
- [Elysia Framework](https://elysiajs.com)

---

*Documento técnico creado para arquitectura de agente IA en centro médico.*
*Fecha: 2026-04-11*
