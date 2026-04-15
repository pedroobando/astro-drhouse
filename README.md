# 🏥 DrHouse - Sistema de Sitios Web Médicos

Plataforma profesional de sitios web para médicos y centros de salud, desarrollada con tecnología moderna y enfocada en conversión de pacientes.

## ✨ Características

- 🎨 **Theming por especialidad médica** - Paletas de colores específicas para cada especialidad
- 📱 **Diseño responsive** - Optimizado para móviles, tablets y desktop
- ⚡ **Rendimiento superior** - Astro con Islands Architecture para carga rápida (95%+ performance)
- 📊 **Content Collections** - Gestión estructurada de datos médicos con validación Zod
- 🔍 **SEO optimizado** - Meta tags dinámicos, Schema.org (MedicalBusiness + Physician), HTML semántico
- 🗺️ **Mapas integrados** - Ubicación de consultorios con Google Maps
- 📅 **Horarios dinámicos** - Sistema de horarios por ubicación
- 📸 **Galería de imágenes** - Lightbox, categorías (instalaciones/consulta/procedimiento), captions éticos
- 📝 **Formulario de contacto funcional** - Validación completa, API endpoint, integración WhatsApp
- 💬 **Testimonios de pacientes** - Social proof con estrellas y verificación
- 🚑 **Página 404 con emergencia** - Destaca contacto de emergencia médica
- 📄 **Páginas de servicio individuales** - SEO dedicado por especialidad

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Astro** | 6.1.6 | Framework web con Islands Architecture |
| **TypeScript** | 5.x | Type-safety y autocompletado |
| **Tailwind CSS** | 4.2.2 | Estilos utility-first con CSS-first config |
| **Bun** | Latest | Runtime y gestión de paquetes |
| **Content Collections** | Astro nativo | Gestión de datos médicos con Zod |
| **astro-icon** | 1.1.5 | Sistema de iconos optimizado |

---

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview

# Comandos de Astro CLI
npx astro add [integración]
npx astro check
```

---

## 🏗️ Estructura del Proyecto

```
drhouse/
├── src/
│   ├── content/              # Content Collections
│   │   ├── doctors/          # Datos JSON de médicos
│   │   ├── services/         # Contenido Markdown de servicios
│   │   ├── schedules/        # Horarios en Markdown
│   │   ├── publications/     # Publicaciones científicas
│   │   └── images/           # Imágenes organizadas
│   │       ├── profile/      # Fotos de perfil de médicos
│   │       ├── offices/      # Fotos de consultorios
│   │       └── procedure/    # Fotos de procedimientos médicos
│   │
│   ├── layouts/              # Layouts Astro
│   │   └── MainLayout.astro  # Layout principal con Schema.org
│   │
│   ├── components/           # Componentes reutilizables
│   │   ├── ui/               # Componentes atómicos
│   │   │   ├── Icon.astro
│   │   │   ├── Button.astro
│   │   │   └── Container.astro
│   │   ├── layout/           # Componentes de layout
│   │   │   ├── Header.astro
│   │   │   └── Footer.astro
│   │   ├── sections/         # Secciones de página
│   │   │   ├── Hero.astro
│   │   │   ├── QuickLinksBar.astro
│   │   │   ├── FeaturesBar.astro
│   │   │   ├── AboutSection.astro
│   │   │   ├── ServicesGrid.astro
│   │   │   ├── OfficeGallery.astro    # Galería con lightbox
│   │   │   ├── FAQSection.astro
│   │   │   └── Testimonials.astro     # Testimonios de pacientes
│   │   └── forms/              # Formularios
│   │       └── ContactForm.astro      # Formulario funcional
│   │
│   ├── pages/                  # Páginas del sitio
│   │   ├── index.astro         # Landing principal
│   │   ├── 404.astro           # Página 404 con emergencia
│   │   ├── api/                # API Routes
│   │   │   └── contact.ts      # Endpoint de formulario
│   │   └── servicios/
│   │       └── [category].astro # Páginas dinámicas de servicios
│   │
│   ├── styles/                 # CSS global y themes
│   │   ├── global.css
│   │   └── themes.css          # Variables CSS por especialidad
│   │
│   └── lib/
│       └── utils.ts            # Utilidades
│
├── doc/                        # Documentación de arquitectura
│   ├── arquitectura-sistemas-digitales-medicos.md
│   ├── arquitectura-agente-centro-medico.md
│   ├── investigacion-centros-medicos.md
│   ├── conclusion-arquitectura-drhouse.md
│   └── perfil-medico-*.md      # 8 perfiles médicos completos
│
├── public/                     # Assets estáticos
├── astro.config.mjs            # Configuración Astro
├── src/content.config.ts       # Configuración Content Collections
└── package.json
```

---

## 👨‍⚕️ Perfiles Médicos Disponibles

El proyecto incluye **8 perfiles médicos completos** ubicados en `doc/`:

| Médico | Especialidad | Años Exp. | Ubicación |
|--------|--------------|-----------|-----------|
| **Dr. Víctor Manuel Chopite-Blanco** | Ginecología Oncológica | 18 años | Barcelona/Lechería |
| **Dr. Mario Antonio Di Campli-Palermo** | Pediatría y Alergología Pediátrica | 38 años | Lechería |
| **Dr. Wilmer Antonio Fermín-Castillo** | Urología y Endourología | 11 años | Barcelona/Pto. La Cruz/Anaco |
| **Dr. Gilberto José Marcano-Hoffman** | Cirugía General y Laparoscópica | 43 años | Puerto La Cruz |
| **Dr. Alejandro Rafael Mendoza-Castellanos** | Cirugía Plástica y Estética | 22 años | Caracas/Valencia/Maracaibo |
| **Dra. Angélica María Castañeda-Duarte** | Ginecología Reproductiva | 10 años | Lechería/Barcelona |
| **Dra. Islemir del Carmen Mirabal-Rojas** | Gastroenterología y Endoscopia | 22 años | Lechería/Pto. La Cruz |
| **Dra. Sandra Elena Ruiz-Montoya** | Urología y Endourología | 18 años | Barinas/Guanare/Barquisimeto |

> Todos los perfiles incluyen: formación académica, certificaciones, servicios detallados, publicaciones científicas, horarios y datos de contacto.

---

## 🎨 Sistema de Theming

Cada especialidad médica tiene una paleta de colores específica:

```css
/* Ejemplo: Tema Pediatría */
[data-theme="pediatra"] {
  --color-primary: #0ea5e9;    /* Azul - Tranquilidad */
  --color-secondary: #f59e0b;  /* Ámbar - Calidez */
  --color-accent: #10b981;     /* Verde - Salud */
}

/* Ejemplo: Tema Ginecología */
[data-theme="ginecologo"] {
  --color-primary: #ec4899;    /* Rosa - Femeninidad */
  --color-secondary: #8b5cf6;  /* Púrpura - Sofisticación */
  --color-accent: #06b6d4;     /* Cyan - Frescura */
}
```

### Especialidades soportadas:
- `pediatra` - Pediatría
- `ginecologo` - Ginecología
- `cirujano` - Cirugía General/Plástica
- `urologo` - Urología
- `general` - Medicina General

---

## 📚 Content Collections

El proyecto utiliza Content Collections de Astro 6+ para gestionar datos estructurados:

### 1. Doctors (JSON)
```typescript
// src/content/doctors/dr-ejemplo.json
{
  "id": "dr-ejemplo",
  "name": "Nombre del Médico",
  "title": "Dr.",
  "specialties": ["Especialidad 1", "Especialidad 2"],
  "experience": 20,
  "photoProfile": "src/content/images/profile/dr-ejemplo.png",
  "formation": [...],
  "certifications": [...],
  "publications": [...],
  "theme": "general",
  "contact": {...},
  "clinics": [...]
}
```

### 2. Services (Markdown)
```markdown
---
title: "Nombre del Servicio"
category: "pediatria"
icon: "icon-name"
order: 1
keywords: ["keyword1", "keyword2"]
---

Descripción detallada del servicio médico...
```

### 3. Schedules (Markdown)
```markdown
---
location: "Nombre de la Clínica"
address: "Dirección completa"
isPrimary: true
notes: "Notas adicionales"
---

## Horarios de Atención

- Lunes a Viernes: 8:00 AM - 5:00 PM
- Sábados: 9:00 AM - 1:00 PM
```

### 4. Publications (Markdown)
```markdown
---
title: "Título de la Publicación"
journal: "Nombre de la Revista"
year: 2023
doi: "10.xxxx/xxxxx"
impactFactor: 4.5
authors: ["Autor 1", "Autor 2"]
---

Resumen o descripción de la publicación...
```

---

## 🔧 Configuración

### Variables de entorno
Crea un archivo `.env` en la raíz:

```env
# Opcional: Google Maps API Key para mapas embebidos
PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_aqui

# Para envío de emails (formulario de contacto)
RESEND_API_KEY=tu_api_key_de_resend
```

### Personalización por médico

1. **Crear archivo JSON** en `src/content/doctors/`
2. **Agregar foto de perfil** en `src/content/images/profile/`
3. **Agregar fotos del consultorio** en `src/content/images/offices/`
4. **Agregar fotos de procedimientos** en `src/content/images/procedure/`
5. **Definir tema** en el campo `theme`
6. **Agregar servicios** en `src/content/services/`
7. **Configurar horarios** en `src/content/schedules/`

---

## 📖 Documentación

La carpeta `doc/` contiene documentación completa:

- **`arquitectura-sistemas-digitales-medicos.md`** - Especificación técnica de 3 niveles de solución (Start, Pro, Premium)
- **`arquitectura-agente-centro-medico.md`** - Arquitectura del agente IA con RAG
- **`investigacion-centros-medicos.md`** - Análisis de mercado y discurso comercial
- **`conclusion-arquitectura-drhouse.md`** - Conclusión arquitectónica completa
- **`perfil-medico-*.md`** - 8 perfiles médicos detallados

---

## 🔍 SEO y Accesibilidad

- ✅ HTML semántico obligatorio
- ✅ Meta tags dinámicos por página
- ✅ **Schema.org completo** (MedicalBusiness + Physician)
- ✅ Alt text en imágenes
- ✅ Contraste de colores accesible
- ✅ Navegación por teclado
- ✅ Open Graph tags para redes sociales
- ✅ Páginas de servicio con SEO dedicado
- ✅ Sitemap automático

---

## ⚡ Performance

Optimizaciones implementadas:
- **Imágenes**: Astro Image component con conversión automática a WebP (95%+ reducción)
- **JavaScript**: 0KB en carga inicial (Islands Architecture)
- **CSS**: Tailwind con purge automático
- **Build estático**: 100/100 Lighthouse score potencial
- **LCP**: < 1.5s en conexiones 4G

---

## 🚀 Funcionalidades de Conversión

### Formulario de Contacto
- Validación completa (cliente y servidor)
- Envío vía API Route
- Integración directa con WhatsApp
- Manejo de errores con mensajes visuales
- Checkbox de privacidad (GDPR compliant)

### Páginas de Servicio
- URLs dedicadas: `/servicios/pediatria`, `/servicios/alergologia`
- FAQs específicas por servicio
- CTAs estratégicamente ubicados
- Información completa para decisión informada

### Galería de Instalaciones
- 7+ imágenes organizadas por categoría
- Lightbox con navegación
- Captions descriptivas
- Nota ética sobre consentimiento informado

### Testimonios
- Social proof con estrellas (1-5)
- Nombre, servicio y fecha
- Diseño en grid responsive
- Verificación implícita de autenticidad

---

## ⚠️ Consideraciones Éticas Médicas

Todo desarrollador trabajando en este proyecto debe conocer:

1. **No diagnosticar**: Solo médicos pueden diagnosticar
2. **No prescribir**: La prescripción requiere licencia médica
3. **No interpretar estudios**: Análisis de imágenes/lab es trabajo médico
4. **Escalación a humano**: Detectar palabras clave de emergencia
5. **Consentimiento informado**: Todas las imágenes de pacientes deben tener autorización
6. **Disclaimer visible**: El sitio es informativo, no sustituye consulta médica

---

## 📝 Convenciones de Código

### TypeScript
- **Strict mode** habilitado
- Tipos explícitos en funciones públicas
- Interfaces para objetos de datos
- `type` para unions/aliases

### Astro
- Componentes `.astro` para UI estática
- Islands con `client:*` directives para interactividad
- Content Collections con schemas Zod validados
- API Routes para funcionalidades dinámicas

### CSS/Tailwind
- CSS-first configuration (Tailwind v4)
- Variables CSS para theming
- Clases de utilidad en HTML
- Componentes con `@apply` cuando sea necesario

### Nomenclatura
- **Archivos**: kebab-case (`header.astro`, `contact-form.tsx`)
- **Componentes**: PascalCase (`Header`, `ContactForm`)
- **Funciones/Variables**: camelCase
- **Constantes**: UPPER_SNAKE_CASE

---

## 📞 Contacto y Contexto

- **Autor**: Pedro Obando
- **Proyecto**: DrHouse Medical Websites
- **Región**: Venezuela (Anzoátegui, Barcelona, Lechería, Puerto La Cruz)
- **Target**: Médicos individuales y centros médicos

---

## 📄 Licencia

Este proyecto es propiedad privada. Todos los derechos reservados.

---

<p align="center">
  <strong>🏥 DrHouse - Excelencia médica en la web</strong><br>
  <em>Creado con ❤️ para médicos que se preocupan por sus pacientes</em>
</p>
