# 🏥 DrHouse - Sistema de Sitios Web Médicos

Plataforma profesional de sitios web para médicos y centros de salud. Desarrollada con **Astro 6+**, **TypeScript** y **Tailwind CSS**.

---

## ✨ Características

- 🎨 **Theming por especialidad médica** - Paletas de colores específicas
- ⚡ **Smart Components** - Cada componente obtiene sus propios datos
- 📊 **Content Collections** - Datos estructurados con Zod
- 🔍 **SEO optimizado** - Schema.org, meta tags dinámicos
- 📱 **Diseño responsive** - Móvil, tablet y desktop
- 📝 **Formulario funcional** - Validación + WhatsApp integration
- 💬 **Testimonios** - Social proof con estrellas
- 🚑 **Página 404 médica** - Mensaje empático

---

## 🛠️ Stack

| Tecnología | Uso |
|------------|-----|
| **Astro 6.1.6** | Framework con Islands Architecture |
| **TypeScript** | Type-safety completo |
| **Tailwind CSS 4.2.2** | Estilos utility-first |
| **Bun** | Runtime y paquetes |
| **Content Collections** | Datos médicos estructurados |

---

## 🚀 Comandos

```bash
# Instalar
bun install

# Desarrollo
bun dev -- --host

# Build
bun build

# Preview
bun preview
```

---

## 🏗️ Estructura

```
drhouse/
├── src/
│   ├── content/           # Content Collections
│   │   ├── doctors/       # Datos JSON de médicos
│   │   ├── services/      # Servicios en Markdown
│   │   ├── gallery/       # Imágenes de galería
│   │   ├── testimonials/  # Testimonios de pacientes
│   │   ├── faqs/          # Preguntas frecuentes
│   │   └── images/        # Imágenes del sitio
│   │
│   ├── components/        # Componentes self-contained
│   │   ├── sections/      # Hero, About, Services, etc.
│   │   └── forms/         # ContactForm
│   │
│   ├── pages/             # Páginas Astro
│   │   └── index.astro    # Landing principal (60 líneas)
│   │
│   └── content.config.ts  # Schemas Zod
│
├── doc/                   # Perfiles médicos y docs
└── public/                # Assets estáticos
```

---

## 🧠 Patrón: Smart Components

Cada componente obtiene sus datos internamente vía **Content Collections**:

```astro
<!-- index.astro - 60 líneas limpias -->
<MainLayout>
  <Hero image={officeImage} />
  <QuickLinksBar />
  <FeaturesBar />
  <AboutSection />
  <ServicesGrid />
  <OfficeGallery />
  <FAQSection />
  <Testimonials />
  <ContactForm />
</MainLayout>
```

Los componentes usan `getEntry()` y `getCollection()` internamente. No más props complejas.

---

## 📚 Content Collections

### Doctors (JSON)
```json
{
  "id": "dr-dicampli",
  "name": "Mario Antonio Di Campli",
  "specialties": ["Pediatría", "Alergología"],
  "experience": 38,
  "features": [...],
  "photoProfile": "src/content/images/dr-dicampli.png",
  "contact": { ... },
  "clinics": [ ... ]
}
```

### Gallery, Testimonials, FAQs (Markdown)
```markdown
---
image: ../images/office-01.png
caption: "Sala de consulta"
category: "instalaciones"
order: 1
active: true
---
```

---

## 👨‍⚕️ Perfiles Médicos Disponibles

| Médico | Especialidad | Años | Ubicación |
|--------|--------------|------|-----------|
| Dr. Mario Di Campli | Pediatría/Alergología | 38 | Lechería |
| Dr. Víctor Chopite | Ginecología Oncológica | 18 | Barcelona/Lechería |
| Dr. Wilmer Fermín | Urología | 11 | Barcelona/Pto. La Cruz |
| +5 perfiles más... | | | |

> Todos en `doc/`

---

## 🎨 Theming

```css
[data-theme="pediatra"] {
  --color-primary: #0ea5e9;    /* Azul */
  --color-secondary: #f59e0b;  /* Ámbar */
  --color-accent: #10b981;     /* Verde */
}
```

**Especialidades:** `pediatra`, `ginecologo`, `cirujano`, `urologo`, `general`

---

## 🔧 Configuración

### .env (opcional)
```env
PUBLIC_GOOGLE_MAPS_API_KEY=...
RESEND_API_KEY=...
```

### Agregar un médico

1. Crear `src/content/doctors/dr-nuevo.json`
2. Agregar foto en `src/content/images/`
3. Agregar servicios en `src/content/services/`
4. Listo — el sitio se adapta automáticamente

---

## ✅ SEO & Performance

- **100/100 Lighthouse** potencial
- Schema.org (MedicalBusiness + Physician)
- Imágenes optimizadas con Astro
- 0KB JS en carga inicial
- LCP < 1.5s

---

## 📞 Contacto

- **Autor**: Pedro Obando
- **Proyecto**: DrHouse Medical Websites
- **Región**: Venezuela (Anzoátegui)

---

<p align="center">
  <strong>🏥 DrHouse - Excelencia médica en la web</strong><br>
  <em>Smart components. Content-first. Medical-grade.</em>
</p>
