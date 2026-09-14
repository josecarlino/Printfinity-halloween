// Datos de las categorías del catálogo Printfinity.
//
// Para publicar un catálogo de Canva en una categoría:
//   1. En Canva, abre el diseño > Compartir > Insertar en un sitio web.
//   2. Copia la URL que aparece dentro de src="..." (termina en /view?embed).
//   3. Pégala en el campo "embedUrl" de esa categoría, y coloca el enlace
//      normal (el que aparece en el atributo href del botón "Ver diseño")
//      en "canvaLink". Si además quieres mostrar el autor, complétalo en "author".
//   4. Si una categoría no tiene "embedUrl" (queda como null), la página
//      mostrará automáticamente un aviso de "Próximamente".
window.CATALOG_CATEGORIES = [
  {
    slug: "fantasmas",
    name: "Fantasmas",
    icon: "nights_stay",
    // Material Symbols no tiene íconos reales de fantasma/calabaza/esqueleto, así que estas
    // 3 categorías usan un SVG a medida (mismo trazo/color naranja que el resto) vía "iconSvg"
    // en vez de "icon".
    iconSvg:
      "<svg width='22' height='22' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
      "<path d='M12,2.5 C7.86,2.5 4.5,5.86 4.5,10 L4.5,20 C4.5,20.7 5.3,21.08 5.85,20.65 L7.35,19.48 C7.73,19.18 8.27,19.18 8.65,19.48 L9.85,20.42 C10.52,20.94 11.48,20.94 12.15,20.42 L13.35,19.48 C13.73,19.18 14.27,19.18 14.65,19.48 L15.85,20.42 C16.4,20.85 17.2,20.47 17.2,19.77 L17.2,10 C17.2,5.86 15.86,2.5 12,2.5 Z'/>" +
      "<circle cx='9' cy='10.5' r='1.6' fill='#1B1B1E'/>" +
      "<circle cx='15' cy='10.5' r='1.6' fill='#1B1B1E'/>" +
      "<circle cx='12' cy='14.8' r='1.5' fill='#1B1B1E'/>" +
      "</svg>",
    shortDescription:
      "Fantasmas tan blancos que asustan... de tiernos que son.",
    pageDescription: "Explora los modelos 3D de fantasmas de nuestro catálogo Halloween.",
    image: "assets/img/fantasmas.jpg",
    imageAlt: "Esculturas de fantasmas low-poly impresas en 3D con luz tenue de fondo",
    embedUrl: "https://www.canva.com/design/DAHVJKFs3NM/NfnaQxDxKpxvd73U-TF4Lw/view?embed",
    canvaLink:
      "https://www.canva.com/design/DAHVJKFs3NM/NfnaQxDxKpxvd73U-TF4Lw/view?utm_content=DAHVJKFs3NM&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
    author: "José Carlos Lino"
  },
  {
    slug: "calabazas",
    name: "Calabazas",
    icon: "lightbulb",
    iconSvg:
      "<svg width='22' height='22' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
      "<rect x='10.7' y='1.5' width='2.6' height='3.2' rx='1'/>" +
      "<path d='M12,4.2 C7.5,4.2 4.5,7.8 4.5,12.2 C4.5,16.6 7.5,20.5 12,20.5 C16.5,20.5 19.5,16.6 19.5,12.2 C19.5,7.8 16.5,4.2 12,4.2 Z'/>" +
      "<path d='M9.3,5.2 C8,7 7.3,9.5 7.3,12.2 C7.3,14.9 8,17.4 9.3,19.2' stroke='#1B1B1E' stroke-width='0.6' fill='none' opacity='0.35'/>" +
      "<path d='M14.7,5.2 C16,7 16.7,9.5 16.7,12.2 C16.7,14.9 16,17.4 14.7,19.2' stroke='#1B1B1E' stroke-width='0.6' fill='none' opacity='0.35'/>" +
      "<polygon points='9,10.8 11,10.8 10,13' fill='#1B1B1E'/>" +
      "<polygon points='13,10.8 15,10.8 14,13' fill='#1B1B1E'/>" +
      "<polygon points='8.7,16 15.3,16 13.5,17.6 10.5,17.6' fill='#1B1B1E'/>" +
      "</svg>",
    shortDescription:
      "Calabazas con más personalidad que el elenco de una peli de terror.",
    pageDescription: "Explora los modelos 3D de calabazas de nuestro catálogo Halloween.",
    image: "assets/img/calabazas.jpg",
    imageAlt: "Lámpara jack-o-lantern moderna geométrica en capas de filamento negro y naranja",
    embedUrl: "https://www.canva.com/design/DAHVI_mnZI0/qD_A3z8Dgk-eCf8GISdF2w/view?embed",
    canvaLink:
      "https://www.canva.com/design/DAHVI_mnZI0/qD_A3z8Dgk-eCf8GISdF2w/view?utm_content=DAHVI_mnZI0&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
    author: "José Carlos Lino"
  },
  {
    slug: "letreros",
    name: "Letreros",
    icon: "signpost",
    shortDescription:
      "Para anunciar el terror con estilo (y buena ortografía).",
    pageDescription: "Explora los modelos 3D de letreros de nuestro catálogo Halloween.",
    image: "assets/img/letreros.jpg",
    imageAlt: "Letrero tipográfico 3D de escritorio de dos colores Spooky Season",
    embedUrl: null,
    canvaLink: null,
    author: null
  },
  {
    slug: "figuras",
    name: "Muñecos y Figuras",
    icon: "skull",
    iconSvg:
      "<svg width='22' height='22' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
      "<path d='M12,3 C8.7,3 6,5.7 6,9 C6,11 7,12.7 8.5,13.7 L8.5,15.5 C8.5,16.1 9,16.5 9.5,16.5 L9.5,17.5 C9.5,18.1 10,18.5 10.5,18.5 L10.5,17 L13.5,17 L13.5,18.5 C14,18.5 14.5,18.1 14.5,17.5 L14.5,16.5 C15,16.5 15.5,16.1 15.5,15.5 L15.5,13.7 C17,12.7 18,11 18,9 C18,5.7 15.3,3 12,3 Z'/>" +
      "<circle cx='9.7' cy='9' r='1.5' fill='#1B1B1E'/>" +
      "<circle cx='14.3' cy='9' r='1.5' fill='#1B1B1E'/>" +
      "<path d='M10.3,12.3 C10.3,11.8 10.8,11.6 11.2,11.9 C11.6,12.2 12.4,12.2 12.8,11.9 C13.2,11.6 13.7,11.8 13.7,12.3 C13.7,12.9 12,13.2 12,13.2 C12,13.2 10.3,12.9 10.3,12.3 Z' fill='#1B1B1E'/>" +
      "<path d='M3,15 L7,17.5 M3,20 L7,17.5' stroke='currentColor' stroke-width='2' stroke-linecap='round'/>" +
      "<path d='M21,15 L17,17.5 M21,20 L17,17.5' stroke='currentColor' stroke-width='2' stroke-linecap='round'/>" +
      "<circle cx='3' cy='15' r='1'/><circle cx='3' cy='20' r='1'/>" +
      "<circle cx='21' cy='15' r='1'/><circle cx='21' cy='20' r='1'/>" +
      "<circle cx='7' cy='17.5' r='1'/><circle cx='17' cy='17.5' r='1'/>" +
      "</svg>",
    shortDescription:
      "Esqueletos con mejor postura que la tuya (y sin ir al gym).",
    pageDescription: "Explora los modelos 3D de muñecos y figuras de nuestro catálogo Halloween.",
    image: "assets/img/figuras.jpg",
    imageAlt: "Figura articulada impresa en 3D esqueleto estilizado con detalles naranja",
    imageFit: "contain",
    embedUrl: null,
    canvaLink: null,
    author: null
  },
  {
    slug: "adornos",
    name: "Adornos",
    icon: "celebration",
    shortDescription:
      "El toque necesario para un lugar embrujado de verdad.",
    pageDescription: "Explora los modelos 3D de adornos de nuestro catálogo Halloween.",
    image: "assets/img/adornos.jpg",
    imageAlt: "Modern geometric 3D printed Halloween decorative ornaments",
    embedUrl: null,
    canvaLink: null,
    author: null
  },
  {
    slug: "souvenirs",
    name: "Souvenirs",
    icon: "card_giftcard",
    shortDescription:
      "Un pedazo de Halloween para llevar a donde sea.",
    pageDescription: "Explora los modelos 3D de souvenirs de nuestro catálogo Halloween.",
    image: "assets/img/souvenirs.jpg",
    imageAlt: "Sleek 3D printed Halloween souvenirs and keychains",
    embedUrl: null,
    canvaLink: null,
    author: null
  },
  {
    slug: "otros",
    name: "Otros",
    icon: "widgets",
    shortDescription:
      "Lo raro, lo curioso y lo que no cabe en ninguna categoría.",
    pageDescription: "Explora otros modelos 3D de nuestro catálogo Halloween.",
    image: "assets/img/otros.jpg",
    imageAlt: "Creative miscellaneous 3D printed Halloween oddities",
    embedUrl: null,
    canvaLink: null,
    author: null
  }
];
