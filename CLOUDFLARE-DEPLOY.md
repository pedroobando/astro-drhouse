# 🚀 Guía de Deploy en Cloudflare Pages

## ¿Por qué Cloudflare Pages?

✅ **Más rápido** - CDN global con 300+ ubicaciones  
✅ **SSL gratuito** - Certificados automáticos  
✅ **Previsualizaciones** - Cada PR tiene su URL de preview  
✅ **Sin configuración de Node.js** - Cloudflare maneja todo  
✅ **Funciones Edge** - API routes funcionan en el edge  

---

## PASO 1: Crear cuenta en Cloudflare

1. Ve a https://dash.cloudflare.com/sign-up
2. Regístrate con tu email
3. Verifica tu cuenta

---

## PASO 2: Crear API Token

1. Ve a https://dash.cloudflare.com/profile/api-tokens
2. Click en **Create Token**
3. Usa la plantilla: **Cloudflare Pages**
4. O crea uno manual con estos permisos:
   - Zone:Read
   - Page:Edit
5. Copia el token (lo necesitarás en GitHub)

---

## PASO 3: Obtener Account ID

1. En el dashboard de Cloudflare, mira la barra lateral derecha
2. Verás **Account ID** - cópialo

---

## PASO 4: Configurar Secrets en GitHub

1. Ve a tu repo en GitHub
2. Settings → Secrets and variables → Actions
3. Click en **New repository secret**
4. Agrega estos dos secrets:

### Secret 1: CLOUDFLARE_API_TOKEN
- Name: `CLOUDFLARE_API_TOKEN`
- Value: El token que copiaste en el Paso 2

### Secret 2: CLOUDFLARE_ACCOUNT_ID
- Name: `CLOUDFLARE_ACCOUNT_ID`
- Value: El Account ID del Paso 3

---

## PASO 5: Crear Proyecto en Cloudflare Pages

1. Ve a https://dash.cloudflare.com
2. Click en **Pages** en el menú lateral
3. Click en **Create a project**
4. Selecciona **Upload assets**
5. Nombre del proyecto: `astro-drhouse`
6. Click en **Create project**

---

## PASO 6: Deploy Automático

El workflow ya está configurado. Solo haz push:

```bash
git add .
git commit -m "config: Setup Cloudflare Pages deployment"
git push
```

---

## PASO 7: Verificar Deploy

1. Ve a **Actions** en tu repo de GitHub
2. Verás el workflow "Deploy to Cloudflare Pages" ejecutándose
3. Cuando termine (✅ verde), ve a Cloudflare Pages
4. Verás tu sitio con una URL como:
   `https://astro-drhouse.pages.dev`

---

## 🔄 Deploys Automáticos

Cada vez que hagas push a `main`:
1. GitHub Actions hace build automáticamente
2. Deploya a Cloudflare Pages
3. Actualiza la cache CDN global

```bash
# Hacer cambios
git add .
git commit -m "update: Nuevos cambios"
git push
# ¡Deploy automático en ~2 minutos!
```

---

## 🌐 Dominio Personalizado (Opcional)

1. Ve a tu proyecto en Cloudflare Pages
2. Click en **Custom domains**
3. Agrega tu dominio (ej: `drdicampli.com`)
4. Sigue las instrucciones de DNS
5. SSL se configura automáticamente

---

## 🐛 Solución de Problemas

### "Failed to publish"

**Causa:** El proyecto no existe en Cloudflare

**Solución:**
1. Crea el proyecto manualmente en https://dash.cloudflare.com/pages
2. Nombre exacto: `astro-drhouse`

### "Invalid API Token"

**Causa:** Token incorrecto o sin permisos

**Solución:**
1. Verifica que el token tenga permiso `Page:Edit`
2. Revisa que el secret esté bien escrito en GitHub

### "Build failed"

**Verificar:**
1. Ve a **Actions** → workflow fallido
2. Revisa el log de errores
3. Asegúrate de que `npm install` funciona localmente

---

## ✅ Checklist Pre-Deploy

- [ ] Cuenta de Cloudflare creada
- [ ] API Token generado con permisos correctos
- [ ] Account ID copiado
- [ ] Secrets configurados en GitHub (CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID)
- [ ] Proyecto `astro-drhouse` creado en Cloudflare Pages
- [ ] Workflow actualizado en el repo

---

## 📞 Soporte

Si tienes problemas:
1. Revisa logs en **Actions**
2. Documentación de Astro: https://docs.astro.build/en/guides/integrations-guide/cloudflare/
3. Documentación de Cloudflare: https://developers.cloudflare.com/pages/

---

**¡Listo para deployar en Cloudflare! 🚀**

Ventajas que tendrás:
- ⚡ CDN global ultra-rápido
- 🔒 SSL automático
- 🌍 Edge functions para API routes
- 📊 Analytics integrados
