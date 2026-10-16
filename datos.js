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
   - logo / portada: imágenes del juego ("" = no se muestran)
   - video:    archivo .mp4 ("" = espacio reservado)
   - capturas: lista de imágenes, por ejemplo ["foto1.jpg","foto2.jpg"]
   - descargas: enlace = dirección real del archivo a descargar
   --------------------------------------------------------- */
const JUEGOS = [
  {
    id: "pistones-teclados",
    titulo: "Pistones y Teclados",
    etiqueta: "",                  // género, por ejemplo "Aventura" ("" = no se muestra)
    resumen: "",                   // frase corta bajo el título ("" = no se muestra)
    descripcion: "",               // texto largo al final de la página ("" = no se muestra)
    ficha: {
      "Plataformas": "Windows",
      "Idioma": "Español"
      // Podés agregar más datos, por ejemplo: "Género": "...", "Lanzamiento": "...", "Peso": "..."
    },
    colores: ["#6b4a24", "#3f5f30", "#7a5a2c"],   // colores de los espacios reservados
    logo: "juegos/pistones-teclados/logo.png",       // logo del juego (reemplaza al título escrito)
    portada: "juegos/pistones-teclados/portada.png", // imagen representativa
    video: "juegos/pistones-teclados/video.mp4",
    proporcionVideo: "21/9",       // forma del video: "16/9" (normal) o "21/9" (panorámico)
    capturas: [],                  // lista de imágenes, por ejemplo ["juegos/pistones-teclados/foto1.png"]
    descargas: [
      { sistema: "Windows", enlace: "#", formato: "" }   // formato opcional, por ejemplo ".zip"
    ]
  }
];
