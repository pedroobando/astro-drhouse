Arquitectura de Sistemas Digitales para Profesionales de la Salud

Soluciones de presencia web e inteligencia artificial para medicos, clinicas y centros medicos

---

RESUMEN EJECUTIVO

| Aspecto | Detalle |
|---------|---------|
| **Documento** | Especificacion tecnica y comercial de sistemas digitales para profesionales medicos |
| **Enfoque** | Tres niveles de solucion escalables segun necesidades y presupuesto |
| **Tecnologia Base** | Astro, TypeScript, PostgreSQL, MiniMax M2.5, pgvector |
| **Modelo de Negocio** | Setup inicial + suscripcion mensual por nivel |
| **Target** | Medicos individuales, clinicas pequenas, centros medicos |

---

FUNDAMENTOS TEORICOS

Diferenciacion de Conceptos

El mercado confunde frecuentemente terminos que tienen significados tecnicos distintos. Es fundamental establecer definiciones precisas antes de analizar soluciones.

| Termino | Definicion Tecnica | Analogia | Uso Apropiado |
|---------|-------------------|----------|---------------|
| **Landing Page** | Documento HTML unico, disenado para un objetivo de conversion especifico | Folleto digital de una sola hoja | Campanas publicitarias, captacion de leads, promocion de servicio puntual |
| **Pagina Web** | Unidad individual dentro de un sitio web | Una habitacion dentro de una casa | Contenido especifico dentro de una estructura mayor |
| **Sitio Web** | Conjunto de paginas interconectadas bajo un dominio comun | Casa completa con multiples habitaciones | Presencia institutional completa, SEO, multiples servicios |

Implicaciones para el Sector Medico

La eleccion entre estas opciones no es meramente estetica ni tecnica. Tiene consecuencias directas en:

- Captacion de pacientes nuevos (SEO y visibilidad)
- Percepcion de profesionalismo y credibilidad
- Capacidad de escalar servicios
- Costos de desarrollo y mantenimiento
- Tiempo de implementacion

---

ANALISIS COMPARATIVO DE OPCIONES

Opcion 1: Landing Page

Definicion
Documento unico que concentra toda la informacion esencial del profesional medico en una sola vista, optimizado para una accion especifica (generalmente reserva de turno o contacto).

Ventajas Competitivas

| Ventaja | Descripcion | Impacto |
|---------|-------------|---------|
| **Costo reducido** | Inversion inicial de 300 a 800 USD | Accesible para medicos recien recibidos |
| **Tiempo de implementacion** | 3 a 7 dias habiles | Rapida puesta en marcha |
| **Enfoque en conversion** | Diseno orientado a una accion unica | Mayor tasa de conversion por visita |
| **Mantenimiento minimo** | Actualizaciones esporadicas | Bajo costo operativo |
| **Facilidad de medicion** | Metricas claras y aisladas | Optimizacion basada en datos |

Limitaciones Estructurales

| Limitacion | Consecuencia | Escenarios Criticos |
|------------|--------------|---------------------|
| **SEO limitado** | Google indexa una sola URL | Imposible rankear para multiples especialidades o sintomas |
| **Escalabilidad nula** | No admite crecimiento de servicios | Medico agrega especialidad = rehacer desde cero |
| **Percepcion de baja credibilidad** | Pacientes esperan mas informacion sobre un medico | Perdida de pacientes que buscan CV, publicaciones, obras sociales |
| **Informacion comprimida** | Scroll excesivo o contenido omitido | Frustracion del usuario por no encontrar datos especificos |

Casos de Uso Recomendados

- Medico recien recibido necesitando pacientes urgentes
- Especialista con servicio unico altamente especifico (ejemplo: cirugia laser refractiva)
- Campana publicitaria de duracion definida
- Jornada de prevencion o evento medico puntual

---

Opcion 2: Sitio Web Multipagina

Definicion
Estructura de multiples documentos HTML interconectados que permite distribuir la informacion del profesional medico en secciones tematicas diferenciadas.

Ventajas Competitivas

| Ventaja | Descripcion | Impacto en Negocio Medico |
|---------|-------------|---------------------------|
| **SEO potenciado** | Cada pagina es una oportunidad de posicionamiento | Rankeo para "cardiologo en [ciudad]", "ecocardiograma precio", etc. |
| **Experiencia completa** | El paciente encuentra toda la informacion necesaria | Reduccion de consultas telefonicas repetitivas |
| **Credibilidad profesional** | Estructura que transmite seriedad | Mayor confianza del paciente potencial |
| **Escalabilidad** | Adicion de servicios sin reestructuracion | Crecimiento del consultorio sin costos de redisenio |
| **Contenido por especialidad** | Paginas dedicadas a cada servicio | SEO especifico por procedimiento medico |

Limitaciones Estructurales

| Limitacion | Consecuencia | Consideracion |
|------------|--------------|---------------|
| **Mayor inversion inicial** | 1,500 a 5,000 USD | Requiere evaluacion de retorno de inversion |
| **Tiempo de desarrollo extendido** | 2 a 6 semanas | Planificacion anticipada necesaria |
| **Mantenimiento continuo** | Actualizaciones periodicas | Costo anual estimado de 200 a 500 USD |
| **Complejidad de decisiones** | Arquitectura de informacion | Requiere definir navegacion y jerarquia de contenidos |

Estructura Recomendada para Sitio Web Medico

| Pagina | Contenido Esencial | Funcion SEO |
|--------|-------------------|-------------|
| **Home** | Quien es el medico, diferencial, llamado a la accion principal | Branding + captacion general |
| **Sobre Mi** | CV completo, formacion, certificaciones, membresias | Palabras clave de credibilidad |
| **Servicios** | Una subpagina por especialidad con descripcion detallada | Long-tail keywords medicas |
| **Obras Sociales** | Listado de prepagas y obras sociales aceptadas | Busquedas muy frecuentes |
| **Preguntas Frecuentes** | Respuestas a consultas repetitivas | Voice search optimization |
| **Contacto** | Formulario, mapa, telefonos, WhatsApp | Local SEO |
| **Blog (opcional)** | Articulos medicos periodicos | Authority building |

Casos de Uso Recomendados

- Medico establecido con 3 o mas anos de ejercicio
- Profesional con multiples especialidades o servicios
- Especialista buscando posicionamiento a largo plazo
- Medico necesitando transmitir autoridad academica

---

NIVELES DE SOLUCION DRHOUSE

Fundamento del Modelo Escalonado

El modelo de tres niveles responde a la diversidad de necesidades y capacidades de inversion del sector medico. No todos los profesionales requieren la misma solucion, pero todos pueden beneficiarse de una presencia digital optimizada.

---

NIVEL 1: START

Definicion del Producto
Landing page premium con agente de inteligencia artificial basico para respuesta de consultas frecuentes y orientacion al paciente.

Componentes Tecnicos

| Componente | Tecnologia | Funcion |
|------------|------------|---------|
| **Frontend** | Astro Framework | Landing page estatica, rapida, SEO-friendly |
| **Chat Widget** | React embebido | Interfaz de conversacion con el agente |
| **Backend** | Cloud Function (Vercel/Netlify) | Endpoint unico para comunicacion con LLM |
| **Inteligencia** | MiniMax M2.5 via OpenCode Go API | Generacion de respuestas naturales |
| **Configuracion** | Archivo AGENTS.md | Prompt del sistema con informacion del medico |

Arquitectura Tecnica

```
Usuario
    ↓
Landing Page (Astro)
    ↓
Chat Widget (React embed)
    ↓
API Route (Serverless Function)
    ↓
OpenCode Go API
    ↓
MiniMax M2.5
    ↓
Respuesta contextual basada en AGENTS.md
```

Funcionalidades del Agente Nivel 1

| Capacidad | Descripcion | Ejemplo de Interaccion |
|-----------|-------------|------------------------|
| **Informacion basica** | Responder sobre horarios, ubicacion, precios | "Atiendo de lunes a viernes de 9 a 18 horas" |
| **Obras sociales** | Confirmar coberturas aceptadas | "Acepto OSDE, Swiss Medical y Galeno" |
| **Servicios generales** | Describir especialidades disponibles | "Me especializo en cardiologia clinica y ecocardiografia" |
| **Derivacion a contacto** | Redirigir cuando no puede responder | "Para agendar un turno, comunicate al 011-1234-5678" |

Limitaciones del Nivel 1

| Limitacion | Explicacion Tecnica | Mitigacion |
|------------|---------------------|------------|
| **Sin memoria conversacional** | Cada mensaje es independiente | AGENTS.md debe ser redundante en informacion clave |
| **Sin aprendizaje** | No mejora con el uso | Actualizacion manual periodica del AGENTS.md |
| **Sin acciones** | Solo informa, no ejecuta | Botones claros de "Llamar" o "Enviar email" |
| **Contexto estatico** | No conoce cambios en tiempo real | Versionado del AGENTS.md con fechas de actualizacion |

Contenido del AGENTS.md (Ejemplo Estructura)

- Informacion general del medico (nombre, especialidad, anos de experiencia)
- Horarios de atencion por sede
- Precios de consultas y procedimientos basicos
- Obras sociales y prepagas aceptadas
- Ubicacion y datos de contacto
- Instrucciones eticas y restricciones (no diagnosticar, no prescribir)
- Tonos de comunicacion deseados (formal, cercano, academico)

Inversion y Costos

| Concepto | Monto | Periodicidad |
|----------|-------|--------------|
| **Setup inicial** | 500 a 800 USD | Unico |
| **Suscripcion mensual** | 20 a 30 USD | Mensual |
| **Mantenimiento** | 0 USD | Incluido en suscripcion |
| **Costo por conversacion** | Variable (API MiniMax) | Incluido en suscripcion |

Tiempo de Implementacion

| Fase | Duracion | Entregable |
|------|----------|------------|
| **Diseno y aprobacion** | 2 dias | Mockup de landing page |
| **Desarrollo** | 3 dias | Landing funcional en staging |
| **Configuracion agente** | 1 dia | AGENTS.md completo y testeado |
| **Deploy y entrega** | 1 dia | Sitio en produccion |

---

NIVEL 2: PRO

Definicion del Producto
Sitio web multipagina con agente de inteligencia artificial avanzado mediante arquitectura RAG (Retrieval Augmented Generation) que permite al agente consultar en tiempo real todo el contenido del sitio web.

Componentes Tecnicos

| Componente | Tecnologia | Funcion |
|------------|------------|---------|
| **Frontend** | Astro Framework | Sitio multipagina estatico |
| **Chat Widget** | React con historial | Interfaz de conversacion con contexto |
| **Backend** | Bun + Elysia | API REST completa |
| **Base de Datos** | PostgreSQL + pgvector | Almacenamiento y busqueda vectorial |
| **Embeddings** | OpenAI API o Xenova | Vectorizacion de contenido |
| **Inteligencia** | MiniMax M2.5 via OpenCode Go API | Generacion de respuestas contextualizadas |
| **Contenido** | Sitio web completo (6-8 paginas) | Fuente de conocimiento para RAG |

Arquitectura Tecnica

```
Usuario
    ↓
Sitio Web (Astro - multipagina)
    ↓
Chat Widget con historial
    ↓
Backend API (Bun + Elysia)
    ├─ Vectorizacion de pregunta (OpenAI embeddings)
    ├─ Busqueda en PostgreSQL + pgvector
    └─ Envia contexto + pregunta a MiniMax
    ↓
Respuesta basada en contenido real del sitio
```

Funcionalidades del Agente Nivel 2

| Capacidad | Descripcion Tecnica | Valor para el Paciente |
|-----------|---------------------|------------------------|
| **RAG (Retrieval Augmented Generation)** | Busca en la base de datos vectorial antes de responder | Respuestas precisas basadas en informacion real del medico |
| **Navegacion guiada** | Puede dirigir al usuario a paginas especificas | "Te llevo a la pagina de servicios de cardiologia" |
| **Contexto conversacional** | Mantiene historial de la conversacion | No repetir informacion ya proporcionada |
| **Busqueda semantica** | Entiende sinonimos y reformulaciones | "Dolor de pecho" = "toracalgia" = "malestar en el pecho" |

Proceso de Ingesta de Contenido (RAG)

| Paso | Proceso | Output |
|------|---------|--------|
| **1. Extraccion** | Convertir cada pagina del sitio en texto plano | Documentos estructurados |
| **2. Chunking** | Dividir texto en fragmentos semanticos | Bloques de 200-500 palabras |
| **3. Vectorizacion** | Generar embeddings de cada fragmento | Vectores numericos (1536 dimensiones) |
| **4. Almacenamiento** | Guardar en PostgreSQL con pgvector | Base vectorial consultable |
| **5. Indexacion** | Crear indices para busqueda eficiente | Consultas < 200ms |

Ejemplos de Interaccion RAG

| Pregunta del Usuario | Busqueda Vectorial | Respuesta Generada |
|---------------------|-------------------|-------------------|
| "Cuanto cuesta la cirugia de cataratas?" | Encuentra pagina "Oftalmologia" y tabla de precios | "La cirugia de cataratas tiene un costo de $XX. Incluye pre-operatorio, cirugia y controles post-operatorios" |
| "El Dr. tiene experiencia en cirugia de corazon?" | Encuentra CV y pagina "Sobre Mi" | "Si, el Dr. X tiene 15 anos de experiencia en cirugia cardiovascular. Realizo su residencia en..." |
| "Que obras sociales aceptan para internacion?" | Encuentra pagina "Obras Sociales" | "Para internaciones quirurgicas aceptamos OSDE 210, 310, 450, Swiss Medical SMG y..." |

Inversion y Costos

| Concepto | Monto | Periodicidad |
|----------|-------|--------------|
| **Setup inicial** | 1,800 a 2,500 USD | Unico |
| **Suscripcion mensual** | 60 a 100 USD | Mensual |
| **Actualizaciones de contenido** | 100 USD por actualizacion mayor | Segun necesidad |
| **Hosting y base de datos** | Incluido | En suscripcion |

Tiempo de Implementacion

| Fase | Duracion | Entregable |
|------|----------|------------|
| **Arquitectura de informacion** | 3 dias | Mapa de paginas y contenidos |
| **Diseno visual** | 4 dias | Mockups aprobados |
| **Desarrollo frontend** | 7 dias | Sitio completo en staging |
| **Desarrollo backend RAG** | 5 dias | API funcional con busqueda vectorial |
| **Ingesta de contenido** | 2 dias | Base vectorial poblada |
| **Testing y ajustes** | 3 dias | Agente respondiendo correctamente |
| **Deploy y entrega** | 2 dias | Produccion y documentacion |

---

NIVEL 3: PREMIUM

Definicion del Producto
Sistema integral de gestion de consultorio donde el agente de IA no solo responde sino que ejecuta acciones: reserva de turnos, envio de recordatorios, gestion de documentos, generacion de contenido y asistencia completa al medico.

Componentes Tecnicos

| Componente | Tecnologia | Funcion |
|------------|------------|---------|
| **Frontend** | Astro + Panel Admin React | Sitio web + dashboard medico |
| **Chat Widget** | React avanzado | Interfaz con capacidades de accion |
| **Backend** | Bun + Elysia + Workers | API + procesamiento asincronico |
| **Base de Datos** | PostgreSQL + pgvector | Datos estructurados + vectorial |
| **Cache y Colas** | Redis + Bull MQ | Performance y jobs programados |
| **Integraciones** | Google Calendar API, Email (SendGrid/AWS SES), Cloud Storage | Acciones externas |
| **Inteligencia** | MiniMax M2.5 + OpenAI (embeddings) | Generacion y busqueda |

Arquitectura Tecnica Completa

```
┌─────────────────────────────────────────────────────────────┐
│                    NIVEL 3 - ARQUITECTURA                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  FRONTEND                        BACKEND                     │
│  ─────────                       ────────                    │
│  Sitio Web (Astro)               Bun + Elysia                │
│  Panel Admin (React)             PostgreSQL + pgvector       │
│  Chat Widget Avanzado            Redis (cache)               │
│                                  Bull MQ (jobs)              │
│                                                              │
│  INTEGRACIONES                   SERVICIOS                   │
│  ─────────────                   ─────────                   │
│  Google Calendar API             Generacion de articulos     │
│  Email (SendGrid/AWS SES)        Envio de recordatorios      │
│  Cloud Storage (PDFs)            Analisis de prescriptions   │
│  WhatsApp Business (futuro)      Reportes diarios            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

Funcionalidades Ejecutivas del Agente Nivel 3

Gestion de Agenda y Turnos

| Funcion | Descripcion Tecnica | Workflow |
|---------|---------------------|----------|
| **Reserva de turnos** | Integracion con Google Calendar API | Paciente pide turno → Agente consulta disponibilidad → Crea evento → Confirma paciente |
| **Recordatorios automaticos** | Jobs programados con Bull MQ | Cron diario 9 AM → Busca turnos manana → Envia email recordatorio |
| **Confirmaciones** | Email transaccional trigger | Post-reserva → Email inmediato con detalles |
| **Lista de pacientes diaria** | Query a base de datos | Panel medico muestra citas del dia con datos del paciente |

Gestion de Documentos

| Funcion | Descripcion | Flujo |
|---------|-------------|-------|
| **Almacenamiento de prescriptions** | Upload a Cloud Storage (S3/Cloudinary) | Medico sube PDF → Asociado a paciente → URL guardada en DB |
| **Envio de prescriptions** | Email con attachment | Paciente solicita → Agente recupera PDF → Envia por email |
| **Consulta de prescriptions historicas** | Busqueda en DB por paciente | Paciente pregunta → Agente lista prescripciones con fechas |
| **Resumen de prescripcion actual** | NLP sobre PDF | Paciente consulta dosis → Agente lee PDF → Responde instrucciones |

Marketing y Contenidos

| Funcion | Descripcion Tecnica | Frecuencia |
|---------|---------------------|------------|
| **Generacion de articulos** | LLM con prompts especializados medicos | Mensual o quincenal |
| **Optimizacion SEO** | Keywords medicas + estructura HTML semantica | Por articulo |
| **Publicacion automatica** | Commit a repositorio o CMS headless | Automatica post-generacion |
| **Revision humana** | Workflow de aprobacion antes de publicar | Opcional segun preferencia medico |

Asistencia al Medico

| Funcion | Descripcion | Valor Agregado |
|---------|-------------|----------------|
| **Resumen matutino** | Email diario con agenda y pacientes | Medico llega preparado a su consultorio |
| **Estadisticas de consultorio** | Dashboard con metricas (pacientes nuevos, recurrencia, etc.) | Toma de decisiones basada en datos |
| **Alertas de seguimiento** | Identifica pacientes que necesitan control | Mejora continuidad de cuidado |

Inversion y Costos

| Concepto | Monto | Periodicidad |
|----------|-------|--------------|
| **Setup inicial** | 4,000 a 6,000 USD | Unico |
| **Suscripcion mensual** | 150 a 300 USD | Mensual |
| **Costos de integracion** | Variables por uso | Incluidos hasta limites |
| **Soporte prioritario** | Incluido | 24/7 |

Tiempo de Implementacion

| Fase | Duracion | Entregable |
|------|----------|------------|
| **Discovery y requerimientos** | 5 dias | Documento de especificaciones |
| **Diseno UX/UI** | 7 dias | Mockups de sitio + panel admin |
| **Desarrollo sitio web** | 10 dias | Frontend completo |
| **Desarrollo backend** | 12 dias | API + RAG + integraciones |
| **Desarrollo panel admin** | 8 dias | Dashboard funcional |
| **Testing end-to-end** | 7 dias | Sistema validado |
| **Deploy y training** | 3 dias | Produccion + capacitacion medico |

---

COMPARATIVA DE NIVELES

Matriz de Decision

| Criterio | Nivel 1 Start | Nivel 2 Pro | Nivel 3 Premium |
|----------|---------------|-------------|-----------------|
| **Presupuesto inicial** | Bajo (500-800 USD) | Medio (1,800-2,500 USD) | Alto (4,000-6,000 USD) |
| **Complejidad tecnica** | Baja | Media | Alta |
| **Tiempo de implementacion** | 3-7 dias | 3-4 semanas | 6-8 semanas |
| **Capacidad del agente** | Responder preguntas basicas | Buscar en contenido + guiar | Ejecutar acciones + gestionar |
| **Autonomia del sistema** | Ninguna (informativo) | Media (navegacion) | Alta (acciones automaticas) |
| **Escalabilidad futura** | Migrar a Nivel 2 | Migrar a Nivel 3 | Maxima capacidad |
| **ROI esperado** | 3-6 meses | 6-12 meses | 12-18 meses |

Progresion Recomendada

```
Fase 1: Medico recien recibido o con pocos pacientes
└── Nivel 1: Start
    ↓ (cuando el medico crece)
Fase 2: Medico establecido, multiples servicios
└── Nivel 2: Pro
    ↓ (cuando el consultorio se professionaliza)
Fase 3: Consultorio con agenda compleja, asistente necesario
└── Nivel 3: Premium
```

---

CONSIDERACIONES ETICAS Y LEGALES

Restricciones Fundamentales del Agente Medico

El agente de inteligencia artificial en contexto medico debe operar dentro de limites eticos y legales estrictos. No es un reemplazo del juicio clinico ni de la relacion medico-paciente.

| Restriccion | Justificacion | Implementacion Tecnica |
|-------------|---------------|------------------------|
| **No diagnosticar** | Solo un medico puede diagnosticar | Prompt del sistema: "NUNCA sugieras diagnosticos" |
| **No prescribir** | Prescripcion requiere licencia medica | Prompt: "NUNCA recomiendes medicamentos o dosis" |
| **No interpretar estudios** | Analisis de imagenes/lab es trabajo medico | Derivacion automatica a consulta presencial |
| **No modificar prescriptions** | Cambios en tratamiento solo medico | Bloqueo de solicitudes de modificacion |
| **Escalacion a humano** | Paciente frustrado o caso complejo | Deteccion de sentimiento + transferencia |

Manejo de Datos Sensibles

| Aspecto | Nivel 1 | Nivel 2 | Nivel 3 |
|---------|---------|---------|---------|
| **Almacenamiento conversaciones** | No | Opcional (logs anonimizados) | Si, encriptado |
| **Datos de pacientes** | No se almacenan | No se almacenan | Si, en DB segura |
| **Prescriptions** | No aplica | No aplica | Encriptados + acceso controlado |
| **Cumplimiento** | Basico | Basico | HIPAA / Ley local de datos medicos |

Fallback y Escalacion

En todos los niveles, el sistema debe detectar cuando no puede ayudar adecuadamente:

- Palabras clave de emergencia: "dolor de pecho", "no puedo respirar", "sangrado"
- Sentimiento negativo detectado (frustracion, enojo)
- Preguntas fuera del alcance definido
- Respuesta: "Te sugiero comunicarte directamente con el consultorio al [telefono]"

---

IMPLEMENTACION TECNICA RECOMENDADA

Stack Tecnologico Unificado

| Capa | Tecnologia | Justificacion |
|------|------------|---------------|
| **Frontend** | Astro Framework | Performance, SEO, componentes React cuando se necesitan |
| **Backend** | Bun + Elysia | Velocidad, TypeScript nativo, sintaxis limpia |
| **Base de Datos** | PostgreSQL 15+ + pgvector | ACID, SQL conocido, busqueda vectorial integrada |
| **Embeddings** | OpenAI text-embedding-3-small | Costo bajo, calidad probada |
| **LLM** | MiniMax M2.5 via OpenCode Go | Costo efectivo, calidad comparable a GPT-4 |
| **Infraestructura** | Docker + Docker Compose | Reproducibilidad, facilidad de deploy |

Consideraciones de Performance

| Metrica | Target | Nivel |
|---------|--------|-------|
| **Latencia embedding** | < 500ms | Todos |
| **Latencia busqueda RAG** | < 200ms | Nivel 2 y 3 |
| **Latencia LLM** | < 1.5s | Todos |
| **Tiempo total respuesta** | < 2.5s | Todos |
| **Disponibilidad** | 99.9% | Todos |

---

CONCLUSIONES Y RECOMENDACIONES

Para Medicos Individuales

| Perfil del Medico | Solucion Recomendada | Justificacion |
|-------------------|---------------------|---------------|
| **Recien recibido** | Nivel 1 | Costo accesible, rapida implementacion, suficiente para captacion inicial |
| **3-5 anos ejercicio** | Nivel 2 | Necesita presencia SEO, multiples servicios, credibilidad |
| **Establecido +10 anos** | Nivel 3 | Agenda compleja, necesita asistencia, puede invertir en automatizacion |

Para Clinicas y Centros Medicos

| Tipo de Centro | Solucion Recomendada | Consideraciones |
|----------------|---------------------|-----------------|
| **Clinica pequena (1-3 medicos)** | Nivel 2 o 3 por medico | O multiples Nivel 1 unificados |
| **Centro medico mediano (5-15 medicos)** | Nivel 3 institutional | Sistema unico con perfiles por medico |
| **Hospital/Grande centro** | Nivel 3 Enterprise | On-premise, cumplimiento estricto, SSO |

Proximos Pasos Sugeridos

1. **Evaluacion de necesidades** del medico o centro medico especifico
2. **Seleccion de nivel** segun presupuesto y objetivos
3. **Eleccion de medico piloto** (uno de los 8 perfiles creados)
4. **Desarrollo de MVP** (Nivel 1) para validacion
5. **Iteracion y mejora** basada en feedback real de pacientes
6. **Escala al siguiente nivel** cuando el medico lo requiera

---

REFERENCIAS Y RECURSOS

Documentos Relacionados

- Documento de perfiles medicos (8 especialistas creados)
- Arquitectura tecnica detallada de agente IA con RAG
- Investigacion de mercado de centros medicos

Tecnologias Referenciadas

- Astro Framework: https://astro.build
- Bun Runtime: https://bun.sh
- Elysia Framework: https://elysiajs.com
- PostgreSQL pgvector: https://github.com/pgvector/pgvector
- MiniMax M2.5: https://www.minimaxi.com
- OpenCode Go: https://opencode.ai

---

*Documento tecnico y comercial creado para sistema DrHouse*
*Fecha: 2026-04-13*
*Version: 1.0*

---

*Todos los datos de perfiles medicos son ficticios y representativos*
*Las inversiones son estimaciones basadas en mercado actual*
*Los costos de suscripcion pueden variar segun uso real de APIs*
