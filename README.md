# Printfinity — Catálogo de Impresión 3D Halloween

Sitio estático (HTML + Tailwind CDN + JavaScript vanilla, sin build ni frameworks) que muestra el catálogo de Printfinity por categorías, con catálogos individuales embebidos desde Canva.

## Estructura del proyecto

```
CATALOG PRINTFINITY/
├── index.html                  # Página principal: grilla de 7 categorías
├── catalogo.html                # Plantilla de catálogo (usa ?cat=<slug>)
├── assets/
│   ├── js/
│   │   ├── categories.js        # Datos de las 7 categorías + enlaces de Canva
│   │   └── tailwind-config.js   # Tokens del sistema de diseño (colores, tipografía)
│   ├── css/                     # (reservado por si se necesita CSS adicional)
│   └── img/                     # Imágenes locales de cada categoría
├── precision_dark_nocturne_industrial/   # Sistema de diseño original (Stitch)
├── printfinity_cat_logo_.../             # Pantalla original (Stitch) — página principal
└── printfinity_visor_.../                # Pantalla original (Stitch) — visor de catálogo
```

Las dos carpetas `printfinity_*` y `precision_dark_nocturne_industrial/` son las pantallas y el sistema de diseño originales exportados de Google Stitch; se conservan como referencia pero **no** se sirven como parte del sitio funcional (`index.html` y `catalogo.html` son las páginas reales).

## Cómo funciona

- **`index.html`** lee `assets/js/categories.js` y genera las 7 tarjetas de categoría automáticamente.
- Cada tarjeta enlaza a `catalogo.html?cat=<slug>` (por ejemplo `catalogo.html?cat=calabazas`).
- **`catalogo.html`** lee el parámetro `cat` de la URL, busca esa categoría en `categories.js` y:
  - Si la categoría tiene un `embedUrl` de Canva configurado, incrusta el diseño interactivo (como ya está hecho para **Calabazas**, el catálogo de muestra).
  - Si no lo tiene, muestra un aviso de "disponible próximamente".
  - Siempre muestra abajo la grilla de "Otros catálogos" para navegar entre categorías.

### Agregar un catálogo de Canva a otra categoría

1. En Canva, abre el diseño → **Compartir** → **Insertar en un sitio web**.
2. Copia la URL que aparece dentro de `src="..."` (termina en `/view?embed`).
3. Abre [`assets/js/categories.js`](assets/js/categories.js) y en la categoría correspondiente completa:
   ```js
   embedUrl: "https://www.canva.com/design/XXXX/YYYY/view?embed",
   canvaLink: "https://www.canva.com/design/XXXX/YYYY/view?utm_content=...",
   author: "Tu nombre"
   ```
4. Guarda, recarga la página — no se necesita ningún otro cambio.

---

## Pasos de publicación: Local → GitHub → GitHub Pages

### 1. Probar en local

Este sitio es 100% estático, pero **no lo abras con doble clic** (`file://`) porque algunos navegadores bloquean la carga de `assets/js/*.js` por CORS. Usa un servidor local simple:

```bash
python -m http.server 8080
```

Luego abre `http://localhost:8080` en tu navegador. (Alternativas equivalentes: `npx serve`, o la extensión "Live Server" de VS Code.)

Verifica:
- La página principal carga las 7 categorías con imagen, descripción y botón "Ver catálogo".
- "Calabazas" abre el catálogo de Canva embebido.
- Las demás categorías muestran "disponible próximamente".
- La navegación "Otros catálogos" y "Regresar a la página principal" funciona.

### 2. Subir el proyecto a GitHub

El repositorio local ya fue inicializado con `git init` y el primer commit. Para publicarlo:

1. Crea un repositorio nuevo y vacío en GitHub (sin README, sin `.gitignore`, sin licencia — ya los tenemos):
   - Ve a [github.com/new](https://github.com/new)
   - Nombre sugerido: `printfinity-catalogo`
   - Elige **Public** (necesario para GitHub Pages gratuito) o **Private** (si tienes GitHub Pro/Team)
   - Click en **Create repository**

2. Copia la URL del repositorio que te muestra GitHub (algo como `https://github.com/tu-usuario/printfinity-catalogo.git`) y ejecuta en la carpeta del proyecto:

```bash
git remote add origin https://github.com/TU-USUARIO/printfinity-catalogo.git
git branch -M main
git push -u origin main
```

   (Sustituye `TU-USUARIO` y el nombre del repo por los tuyos reales.)

### 3. Activar GitHub Pages

1. En GitHub, entra al repositorio → **Settings** → **Pages** (menú lateral izquierdo).
2. En "Build and deployment" → **Source**, elige **Deploy from a branch**.
3. En **Branch**, selecciona `main` y la carpeta `/ (root)` → **Save**.
4. Espera 1–2 minutos. GitHub mostrará la URL pública, con este formato:
   ```
   https://TU-USUARIO.github.io/printfinity-catalogo/
   ```
5. Abre esa URL y repite las pruebas del paso 1 directamente en producción.

Como todos los enlaces del sitio son relativos (`catalogo.html`, `assets/...`), funciona igual en la raíz de un dominio o dentro de una subruta de proyecto como la de GitHub Pages — no se requiere ninguna configuración adicional.

### 4. Actualizaciones futuras

Cada vez que agregues un nuevo catálogo de Canva o cambies contenido:

```bash
git add -A
git commit -m "Agrega catálogo de <categoría>"
git push
```

GitHub Pages redepliega automáticamente 1–2 minutos después de cada `push` a `main`.
