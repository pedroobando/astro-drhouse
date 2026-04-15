// src/content.config.ts - Astro 6 Content Collections Configuration
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
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
    theme: z.enum(['pediatra', 'ginecologo', 'cirujano', 'general', 'urologo']),
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

// Exportar todas las colecciones
export const collections = {
  doctors,
  services,
  schedules,
  publications,
};
