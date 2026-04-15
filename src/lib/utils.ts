// src/lib/utils.ts - Utilidades Helper

/**
 * Formatea un número de teléfono para WhatsApp
 * Elimina todos los caracteres no numéricos
 */
export function formatWhatsAppNumber(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Trunca un texto a un número máximo de caracteres
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Formatea una fecha legible
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-VE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Genera un slug URL-friendly desde un string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Capitaliza la primera letra de un string
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Formatea años de experiencia con el texto correcto
 */
export function formatExperience(years: number): string {
  return `${years} años de experiencia`;
}
