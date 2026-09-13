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
    // Material Symbols no tiene un ícono de fantasma real, así que se usa este SVG a medida
    // (mismo trazo/color naranja que el resto de íconos) en vez de "icon" para esta categoría.
    iconSvg:
      "<svg width='22' height='22' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>" +
      "<path d='M12,3 C7.58,3 4,6.58 4,11 L4,19.2 C4,20.15 5.11,20.67 5.84,20.06 L7.2,18.93 C7.66,18.55 8.32,18.55 8.78,18.93 L10.11,20.04 C10.62,20.46 11.35,20.46 11.86,20.04 L13.19,18.93 C13.65,18.55 14.31,18.55 14.77,18.93 L16.1,20.04 C16.61,20.46 17.34,20.46 17.85,20.04 L18.16,19.78 C18.68,19.35 19,18.71 19,18.03 L19,11 C19,6.58 15.42,3 12,3 Z'/>" +
      "<circle cx='9.2' cy='10.8' r='1.3' fill='#1B1B1E'/>" +
      "<circle cx='14.8' cy='10.8' r='1.3' fill='#1B1B1E'/>" +
      "<ellipse cx='12' cy='14.6' rx='1.6' ry='1.2' fill='#1B1B1E'/>" +
      "</svg>",
    shortDescription:
      "Fantasmas tan blancos que asustan... de tiernos que son.",
    pageDescription: "Explora los modelos 3D de fantasmas de nuestro catálogo Halloween.",
    image: "assets/img/fantasmas.jpg",
    imageAlt: "Esculturas de fantasmas low-poly impresas en 3D con luz tenue de fondo",
    embedUrl: null,
    canvaLink: null,
    author: null
  },
  {
    slug: "calabazas",
    name: "Calabazas",
    icon: "lightbulb",
    shortDescription:
      "Calabazas con más personalidad que el elenco de una peli de terror.",
    pageDescription: "Explora los modelos 3D de calabazas de nuestro catálogo Halloween.",
    image: "assets/img/calabazas.jpg",
    imageAlt: "Lámpara jack-o-lantern moderna geométrica en capas de filamento negro y naranja",
    embedUrl: "https://www.canva.com/design/DAGy5aEcmes/QhkRveWCkexktZLlIkSK6Q/view?embed",
    canvaLink:
      "https://www.canva.com/design/DAGy5aEcmes/QhkRveWCkexktZLlIkSK6Q/view?utm_content=DAGy5aEcmes&utm_campaign=designshare&utm_medium=embeds&utm_source=link",
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
