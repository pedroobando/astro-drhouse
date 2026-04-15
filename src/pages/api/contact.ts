// src/pages/api/contact.ts
// API Route para manejar envío de formulario de contacto

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validación básica
    if (!data.name || !data.email || !data.subject || !data.message) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Aquí iría la lógica real de envío:
    // Opción 1: Enviar email usando Resend/SendGrid
    // Opción 2: Guardar en base de datos
    // Opción 3: Enviar webhook a CRM
    // Opción 4: Simplemente loguear (para demo)
    
    console.log('Nuevo contacto recibido:', {
      name: data.name,
      email: data.email,
      phone: data.phone || 'No proporcionado',
      subject: data.subject,
      message: data.message.substring(0, 100) + '...',
      timestamp: new Date().toISOString(),
    });
    
    // Simulación de envío exitoso
    // En producción, aquí se integraría con servicio de email real
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Mensaje recibido correctamente',
        data: {
          name: data.name,
          email: data.email,
        }
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error en API contact:', error);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
