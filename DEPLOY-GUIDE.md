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

**Nota:** El proyecto está configurado para usar **npm** (no requiere Bun instalado).

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
2. Configura Node.js 22 (requerido por Astro 6)
3. Ejecuta `npm install`
4. Ejecuta `npm run build`
5. Deploya automáticamente a GitHub Pages

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

### Problema 3: "Node.js v20.x.x is not supported by Astro!"

**Causa:** Astro 6 requiere Node.js >=22.12.0, pero GitHub Actions está usando una versión anterior

**Solución:**
El workflow ya está configurado con Node.js 22. Si sigues viendo este error:

1. Verifica que el archivo `.github/workflows/deploy.yml` tenga:
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 22  # ← Debe ser 22, no 20
    cache: 'npm'
```

2. Si hiciste el cambio, haz commit y push:
```bash
git add .github/workflows/deploy.yml
git commit -m "fix: Update to Node.js 22"
git push
```

### Problema 4: Build falla en GitHub Actions

**Verificar:**
1. Ir a **Actions** en el repo
2. Click en el workflow fallido
3. Ver el log de errores
4. Común: Falta `package-lock.json` o dependencias

**Solución:**
```bash
# Asegúrate de tener package-lock.json en el repo
git add package-lock.json
git commit -m "chore: Add package-lock.json"
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
- [ ] Build local funciona (`npm run build`)

---

## 📝 Checklist Pre-Deploy

Antes de hacer deploy, verifica:

- [ ] `astro.config.mjs` tiene `site` y `base` correctos
- [ ] `.github/workflows/deploy.yml` existe
- [ ] Repositorio en GitHub creado
- [ ] Código pusheado a la rama `main`
- [ ] GitHub Pages activado en Settings
- [ ] Build local funciona (`npm run build`)

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
2. Verificar que el build local funciona: `npm run build`
3. Asegurar que tienes Node.js 22+ instalado: `node --version`
4. Consultar documentación de Astro: https://docs.astro.build/en/guides/deploy/github/

---

**¡Listo para deployar! 🚀**
