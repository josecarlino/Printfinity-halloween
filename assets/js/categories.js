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
    icon: "mode_night",
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
    icon: "spellcheck",
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
    icon: "smart_toy",
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
    icon: "diamond",
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
    icon: "grid_view",
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
