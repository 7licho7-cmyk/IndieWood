/* =========================================================
   DATOS DEL SITIO  ← acá se cambia casi todo el contenido
   ========================================================= */

const SITIO = {
  nombre: "indie wood",
  logo: "logo.png",                 // imagen del logo (misma carpeta)
  email: "hola@indiewood.example",
  anio: 2026
};

/* ---------------------------------------------------------
   JUEGOS
   Para agregar uno nuevo: copiá un bloque { ... } completo,
   pegalo después de una coma y cambiá los datos.
   - id:       sin espacios ni tildes (se usa en la dirección web)
   - portada:  imagen de portada ("" = sin imagen)
   - video:    archivo .mp4 ("" = espacio reservado)
   - capturas: hasta 3 imágenes, por ejemplo ["foto1.jpg","foto2.jpg"]
   - descargas: enlace = dirección real del archivo a descargar
   --------------------------------------------------------- */
const JUEGOS = [
  {
    id: "nube-nube",
    titulo: "Nube Nube",
    etiqueta: "Aventura",
    resumen: "Una pequeña nube que busca llover en el lugar correcto.",
    descripcion: "El jugador guía a Nube por seis islas flotantes. Cada isla plantea un problema que se resuelve con lluvia, viento o descanso. Sin combate ni límite de tiempo: una experiencia pensada para jugar con calma.",
    ficha: {
      "Género": "Aventura / puzzle",
      "Plataformas": "Windows, macOS, Linux",
      "Lanzamiento": "Mar 2026",
      "Idioma": "Español, inglés",
      "Peso": "180 MB"
    },
    colores: ["#6b4a24", "#3f5f30", "#7a5a2c"],   // colores de los espacios reservados
    portada: "",
    video: "",
    capturas: [],
    descargas: [
      { sistema: "Windows", enlace: "#", formato: ".zip" },
      { sistema: "macOS",   enlace: "#", formato: ".dmg" },
      { sistema: "Linux",   enlace: "#", formato: ".tar.gz" }
    ]
  }
];
