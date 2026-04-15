# 🚀 Guía de Deploy en GitHub Pages

## PASO 1: Preparar el repositorio

### 1.1 Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre del repositorio: `drhouse-medical` (o el que prefieras)
3. Descripción: "Sitio web médico profesional - Dr. Di Campli"
4. Público o Privado (tu elección)
5. NO inicializar con README (ya tenemos uno)
6. Click en **Create repository**

### 1.2 Subir código a GitHub

```bash
# En la terminal, desde la carpeta del proyecto:

# 1. Inicializar git (si no lo has hecho)
git init

# 2. Agregar todos los archivos
git add .

# 3. Crear primer commit
git commit -m "Initial commit: Complete medical website with Astro"

# 4. Conectar con GitHub (REEMPLAZA con tu usuario y nombre de repo)
git remote add origin https://github.com/TU-USUARIO/drhouse-medical.git

# 5. Subir código
git push -u origin main
```

---

## PASO 2: Configurar GitHub Pages

### 2.1 Ir a Settings del repositorio
1. Abre tu repo en GitHub
2. Click en la pestaña **Settings**
3. En el menú lateral izquierdo, click en **Pages**

### 2.2 Configurar source
1. En "Source", selecciona: **GitHub Actions**
2. Esto activará el workflow que ya creamos

---

## PASO 3: Actualizar configuración de Astro

### 3.1 Editar `astro.config.mjs`

Abre el archivo y reemplaza:

```javascript
export default defineConfig({
  site: 'https://TU-USUARIO.github.io',  // 👈 Tu usuario de GitHub
  base: '/drhouse-medical',               // 👈 Nombre exacto del repositorio
  output: 'static',
  // ... resto de la config
});
```

**Ejemplo real:**
```javascript
site: 'https://pedroobando.github.io',
base: '/drhouse-medical',
```

### 3.2 Commit y push

```bash
git add astro.config.mjs
git commit -m "config: Update for GitHub Pages deployment"
git push
```

---

## PASO 4: Verificar deploy

### 4.1 Ir a Actions
1. En tu repo de GitHub, click en la pestaña **Actions**
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (toma 2-3 minutos)

### 4.2 Verificar URL
1. Cuando termine, ve a **Settings > Pages**
2. Verás la URL donde está deployado, ejemplo:
   `https://pedroobando.github.io/drhouse-medical/`

### 4.3 Probar sitio
1. Abre la URL en el navegador
2. Verifica que todo funcione correctamente

---

## 🔄 Deploys Automáticos (CI/CD)

**¡Lo bueno de esta configuración es que es automático!**

Cada vez que hagas push a la rama `main`:
1. GitHub Actions detecta el cambio
2. Ejecuta `bun install`
3. Ejecuta `bun run build`
4. Deploya automáticamente a GitHub Pages

### Para actualizar el sitio:

```bash
# Hacer cambios en el código
# ...

# Commit y push
git add .
git commit -m "update: Cambios en la página principal"
git push

# ¡Listo! GitHub Actions hará deploy automático en 2-3 minutos
```

---

## 🐛 Solución de Problemas

### Problema 1: "Page not found" (404)

**Causa:** La base URL no está configurada correctamente

**Solución:**
```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://TU-USUARIO.github.io',
  base: '/NOMBRE-EXACTO-DEL-REPO',  // Debe coincidir exactamente
  // ...
});
```

### Problema 2: Imágenes no cargan

**Causa:** Las rutas de imágenes no consideran el base path

**Solución:** Usa rutas relativas o importa las imágenes:
```astro
---
// ✅ CORRECTO: Importar imagen
import myImage from '../content/images/profile/dr-dicampli.png';
---
<Image src={myImage} alt="Doctor" />

// ❌ INCORRECTO: Ruta absoluta
<img src="/images/doctor.png" />
```

### Problema 3: Build falla en GitHub Actions

**Verificar:**
1. Ir a **Actions** en el repo
2. Click en el workflow fallido
3. Ver el log de errores
4. Común: Falta `bun.lock` o dependencias

**Solución:**
```bash
# Asegúrate de tener bun.lock en el repo
git add bun.lock
git commit -m "chore: Add bun.lock"
git push
```

### Problema 4: Cambios no se ven reflejados

**Causa:** Cache del navegador o deploy en progreso

**Solución:**
1. Espera 2-3 minutos después del push
2. Refrescar con `Ctrl+Shift+R` (hard refresh)
3. Verificar en **Actions** que el deploy terminó (punto verde ✅)

---

## 📝 Checklist Pre-Deploy

Antes de hacer deploy, verifica:

- [ ] `astro.config.mjs` tiene `site` y `base` correctos
- [ ] `.github/workflows/deploy.yml` existe
- [ ] Repositorio en GitHub creado
- [ ] Código pusheado a la rama `main`
- [ ] GitHub Pages activado en Settings
- [ ] Build local funciona (`bun run build`)

---

## 🎉 Post-Deploy

Una vez deployado:

1. **Compartir URL** con el doctor
2. **Probar en móvil** (responsive)
3. **Probar formulario** de contacto
4. **Verificar SEO** con Google Search Console
5. **Configurar dominio personalizado** (opcional)

---

## 🌐 Dominio Personalizado (Opcional)

Si quieres usar un dominio propio (ej: `drdicampli.com`):

1. Comprar dominio en Namecheap/GoDaddy
2. En GitHub: **Settings > Pages > Custom domain**
3. Agregar CNAME record en tu DNS:
   - Type: CNAME
   - Name: www
   - Value: TU-USUARIO.github.io
4. Esperar propagación (puede tardar hasta 24h)

---

## 📞 Soporte

Si tienes problemas:
1. Revisar logs en **Actions**
2. Verificar que el build local funciona: `bun run build`
3. Consultar documentación de Astro: https://docs.astro.build/en/guides/deploy/github/

---

**¡Listo para deployar! 🚀**
