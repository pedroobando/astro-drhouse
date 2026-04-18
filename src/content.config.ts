// src/content.config.ts - Astro 6 Content Collections Configuration
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 1. Colección: Datos del médico (JSON)
const doctors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/doctors' }),

  // file('src/content/doctors/dr-dicampli.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    title: z.enum(['Dr.', 'Dra.']),
    specialties: z.array(z.string()),
    experience: z.number(),
    formation: z.array(
      z.object({
        degree: z.string(),
        institution: z.string(),
        year: z.number(),
        country: z.string().optional(),
      })
    ),
    certifications: z
      .array(
        z.object({
          title: z.string(),
          institution: z.string(),
          year: z.number().optional(),
        })
      )
      .optional(),
    publications: z.array(
      z.object({
        title: z.string(),
        journal: z.string(),
        year: z.number(),
        doi: z.string().optional(),
        impactFactor: z.number().optional(),
      })
    ),
    teaching: z
      .array(
        z.object({
          position: z.string(),
          institution: z.string(),
          period: z.string(),
        })
      )
      .optional(),
    features: z
      .array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
        })
      )
      .optional(),
    theme: z.enum(['pediatra', 'ginecologo', 'cirujano', 'general', 'urologo']),
    photoProfile: z.string().optional(),
    contact: z.object({
      phone: z.string(),
      whatsapp: z.string(),
      email: z.string().email(),
      address: z.string(),
      social: z
        .object({
          instagram: z.string().optional(),
          facebook: z.string().optional(),
        })
        .optional(),
    }),
    clinics: z
      .array(
        z.object({
          name: z.string(),
          address: z.string(),
          phone: z.string().optional(),
          schedule: z.string().optional(),
        })
      )
      .optional(),
  }),
});

// 2. Colección: Servicios (Markdown con frontmatter)
const services = defineCollection({
  loader: glob({
    base: './src/content/services',
    pattern: '**/*.md',
  }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['pediatria', 'alergologia']),
    icon: z.string().optional(),
    order: z.number(),
    keywords: z.array(z.string()).default([]),
  }),
});

// 3. Colección: Horarios (Markdown)
const schedules = defineCollection({
  loader: glob({
    base: './src/content/schedules',
    pattern: '**/*.md',
  }),
  schema: z.object({
    location: z.string(),
    address: z.string(),
    isPrimary: z.boolean().default(false),
    notes: z.string().optional(),
  }),
});

// 4. Colección: Publicaciones (Markdown)
const publications = defineCollection({
  loader: glob({
    base: './src/content/publications',
    pattern: '**/*.md',
  }),
  schema: z.object({
    title: z.string(),
    journal: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    impactFactor: z.number().optional(),
    authors: z.array(z.string()).optional(),
  }),
});

// 5. Colección: Galería (Markdown)
const gallery = defineCollection({
  loader: glob({
    base: './src/content/gallery',
    pattern: '**/*.md',
  }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      caption: z.string(),
      category: z.enum(['instalaciones', 'consulta', 'procedimiento']),
      order: z.number(),
      active: z.boolean().default(true),
    }),
});

// 6. Colección: Testimonios (Markdown)
const testimonials = defineCollection({
  loader: glob({
    base: './src/content/testimonials',
    pattern: '**/*.md',
  }),
  schema: z.object({
    name: z.string(),
    initials: z.string().max(2),
    rating: z.number().min(1).max(5),
    text: z.string(),
    service: z.string(),
    date: z.string(),
  }),
});

// 7. Colección: FAQs (Markdown)
const faqs = defineCollection({
  loader: glob({
    base: './src/content/faqs',
    pattern: '**/*.md',
  }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number(),
    active: z.boolean().default(true),
  }),
});

// Exportar todas las colecciones
export const collections = {
  doctors,
  services,
  schedules,
  publications,
  gallery,
  testimonials,
  faqs,
};
