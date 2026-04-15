# AGENTS.md

> Contexto y guía para agentes de IA trabajando en el proyecto DrHouse

---

## 🏥 Proyecto: DrHouse - Sistema de Sitios Web Médicos

**DrHouse** es una plataforma de sitios web profesionales para médicos y centros de salud, desarrollada con tecnología moderna y enfocada en conversión de pacientes.

### Objetivo
Crear sitios web multipágina para profesionales de la salud que transmitan credibilidad médica, faciliten la información al paciente y optimicen la conversión (agendamiento de citas).

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Astro** | 6.1.6 | Framework web con Islands Architecture |
| **TypeScript** | 5.x | Type-safety y autocompletado |
| **Tailwind CSS** | 4.2.2 | Estilos utility-first con CSS-first config |
| **Bun** | Latest | Runtime y gestión de paquetes |
| **Content Collections** | Astro nativo | Gestión de datos médicos con Zod |

### Patrones de desarrollo
- **Content Collections**: Datos estructurados en JSON + contenido narrativo en Markdown
- **CSS Variables**: Theming dinámico por especialidad médica
- **Islands Architecture**: Hidratación selectiva de componentes interactivos

---

## 👨‍⚕️ Perfiles Médicos Disponibles

El proyecto cuenta con **8 perfiles médicos completos** ubicados en `@doc/`:

| Archivo | Médico | Especialidad | Años Exp. | Ubicación |
|---------|--------|--------------|-----------|-----------|
| `perfil-medico-dr-chopite-ginecologia.md` | Dr. Víctor Manuel Chopite-Blanco | Ginecología Oncológica | 18 años | Barcelona/Lechería |
| `perfil-medico-dr-dicampli-pediatria.md` | Dr. Mario Antonio Di Campli-Palermo | Pediatría y Alergología Pediátrica | 38 años | Lechería |
| `perfil-medico-dr-fermin-urologia.md` | Dr. Wilmer Antonio Fermín-Castillo | Urología y Endourología | 11 años | Barcelona/Pto. La Cruz/Anaco |
| `perfil-medico-dr-marcano-cirugia.md` | Dr. Gilberto José Marcano-Hoffman | Cirugía General y Laparoscópica | 43 años | Puerto La Cruz |
| `perfil-medico-dr-mendoza.md` | Dr. Alejandro Rafael Mendoza-Castellanos | Cirugía Plástica y Estética | 22 años | Caracas/Valencia/Maracaibo |
| `perfil-medico-dra-castaneda-ginecologia.md` | Dra. Angélica María Castañeda-Duarte | Ginecología Reproductiva | 10 años | Lechería/Barcelona |
| `perfil-medico-dra-mirabal-gastroenterologia.md` | Dra. Islemir del Carmen Mirabal-Rojas | Gastroenterología y Endoscopia | 22 años | Lechería/Pto. La Cruz |
| `perfil-medico-dra-ruiz-urologia.md` | Dra. Sandra Elena Ruiz-Montoya | Urología y Endourología | 18 años | Barinas/Guanare/Barquisimeto |

> **Nota**: Todos los perfiles incluyen información completa: formación académica, certificaciones, servicios detallados, publicaciones científicas, horarios y datos de contacto.

---

## 📚 Documentación de Arquitectura

Ubicada en `@doc/`:

| Documento | Contenido |
|-----------|-----------|
| `arquitectura-sistemas-digitales-medicos.md` | Especificación técnica de 3 niveles de solución (Start, Pro, Premium) |
| `arquitectura-agente-centro-medico.md` | Arquitectura del agente IA con RAG |
| `investigacion-centros-medicos.md` | Análisis de mercado y discurso comercial |
| `conclusion-arquitectura-drhouse.md` | Conclusión arquitectónica completa del proyecto |

---

## 🎨 Sistema de Theming

Cada especialidad médica tiene una paleta de colores específica:

| Especialidad | Colores | Psicología |
|--------------|---------|------------|
| **Pediatría** | Azul (#0ea5e9), Ámbar (#f59e0b), Verde (#10b981) | Tranquilidad, confianza, salud |
| **Ginecología** | Rosa (#ec4899), Púrpura (#8b5cf6), Cyan (#06b6d4) | Femeninidad, sofisticación |
| **Cirugía** | Azules oscuros, Grises, Blancos | Profesionalismo, precisión |
| **Urología** | Azules profundos, Verdes | Confianza, masculinidad |

Implementado con CSS Variables en Tailwind CSS 4:
```css
[data-theme="pediatra"] {
  --color-primary: #0ea5e9;
  --color-secondary: #f59e0b;
  --color-accent: #10b981;
}
```

---

## 🤖 Agentes del Sistema

### Gentleman
Agente especializado en:
- Arquitectura de software y mejores prácticas
- Análisis crítico de decisiones técnicas
- Patrones de diseño (Clean, Hexagonal, Screaming)
- TypeScript, Angular, React, estado
- Testing y calidad de código

**Personalidad**: Arquitecto senior, 15+ años experiencia, apasionado por enseñar. Usa voseo rioplatense ("che", "loco", "¿se entiende?"). Directo pero con cariño.

### Sdd-Orchestrator
Agente coordinador del sistema SDD (Spec-Driven Development):
- Inicializa contexto SDD en proyectos
- Gestiona flujo de trabajo spec → design → implement → verify
- Coordina entre múltiples agentes especializados
- Mantiene trazabilidad de cambios

**Responsabilidades**:
1. Inicializar SDD (`sdd-init`)
2. Explorar e investigar (`sdd-explore`)
3. Crear propuestas (`sdd-propose`)
4. Escribir especificaciones (`sdd-spec`)
5. Diseñar arquitectura (`sdd-design`)
6. Crear tasks (`sdd-tasks`)
7. Implementar (`sdd-apply`)
8. Verificar (`sdd-verify`)
9. Archivar (`sdd-archive`)

---

## 🏗️ Estructura del Proyecto

```
drweb/
├── src/
│   ├── content/          # Content Collections (médicos, servicios, horarios)
│   │   ├── doctors/      # Datos JSON de médicos
│   │   ├── services/     # Contenido Markdown de servicios
│   │   ├── schedules/    # Horarios en Markdown
│   │   └── publications/ # Publicaciones científicas
│   ├── layouts/          # Layouts Astro
│   ├── components/       # Componentes reutilizables
│   ├── pages/            # Páginas del sitio
│   └── styles/           # CSS global y themes
│   └── content.config.ts # Configuración Content Collections (Astro 6+)
├── doc/                  # Documentación de arquitectura y perfiles
├── public/               # Assets estáticos
└── astro.config.mjs      # Configuración Astro
```

---

## ⚙️ Comandos de Desarrollo

```bash
# Instalar dependencias
bun install

# Servidor de desarrollo
bun dev

# Build para producción
bun build

# Preview de build
bun preview
```

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

## 🔍 SEO y Accesibilidad

- HTML semántico obligatorio
- Meta tags dinámicos por página
- Schema.org para datos estructurados
- Alt text en imágenes
- Contraste de colores accesible
- Navegación por teclado

---

## 🚀 Preparación para RAG (Futuro)

El proyecto está diseñado para integración con chatbot IA:
- **Formato híbridos** JSON + Markdown ideal para embeddings
- **Keywords** en frontmatter para búsqueda semántica
- **Estructura clara** facilita chunking de contenido
- **Schemas validados** garantizan consistencia de datos

---

## ⚠️ Consideraciones Éticas Médicas

Todo agente trabajando en este proyecto debe conocer:
1. **No diagnosticar**: Solo médicos pueden diagnosticar
2. **No prescribir**: La prescripción requiere licencia médica
3. **No interpretar estudios**: Análisis de imágenes/lab es trabajo médico
4. **Escalación a humano**: Detectar palabras clave de emergencia

---

## 📞 Contacto y Contexto

- **Autor**: Pedro Obando
- **Proyecto**: DrHouse Medical Websites
- **Región**: Venezuela (Anzoátegui, Barcelona, Lechería, Puerto La Cruz)
- **Target**: Médicos individuales y centros médicos

---

> **Última actualización**: 2026-04-14  
> **Versión**: 1.0  
> **Estado**: Activo - Fase de implementación