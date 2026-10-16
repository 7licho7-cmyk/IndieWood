/* =========================================================
   FUNCIONAMIENTO DEL SITIO
   (el contenido se edita en datos.js, no acá)
   ========================================================= */

/* ---------- Utilidades ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const urlJuego = id => `juego.html?juego=${encodeURIComponent(id)}`;

/* ---------- Menú superior y pie de página ---------- */
function crearMenuYPie() {
  const enlaces = JUEGOS.map(j => `<a href="${urlJuego(j.id)}">${esc(j.titulo)}</a>`).join("");

  document.getElementById("menu-superior").innerHTML = `
    <div class="wrap">
      <a class="logo" href="index.html"><img data-logo alt="${esc(SITIO.nombre)}"></a>
      <ul>
        <li class="dd">
          <button id="boton-juegos" aria-expanded="false" aria-haspopup="true">Juegos ▾</button>
          <div id="lista-juegos" class="menu" hidden>${enlaces}</div>
        </li>
        <li><a href="index.html#quienes-somos">Quiénes somos</a></li>
        <li><a href="index.html#contacto">Contacto</a></li>
        <li><button id="boton-tema" type="button"></button></li>
      </ul>
    </div>`;

  document.getElementById("pie").innerHTML = `
    <div class="wrap pie">
      <div><h3>Juegos</h3>${enlaces}</div>
      <div><h3>Estudio</h3><a href="index.html#quienes-somos">Quiénes somos</a><a href="index.html#contacto">Contacto</a></div>
      <p class="copy">© ${SITIO.anio} ${esc(SITIO.nombre)}</p>
    </div>`;

  // Desplegable "Juegos"
  const boton = document.getElementById("boton-juegos"), lista = document.getElementById("lista-juegos");
  const cerrar = () => { lista.hidden = true; boton.setAttribute("aria-expanded", "false"); };
  boton.addEventListener("click", e => {
    e.stopPropagation();
    lista.hidden = !lista.hidden;
    boton.setAttribute("aria-expanded", String(!lista.hidden));
  });
  document.addEventListener("click", cerrar);
  document.addEventListener("keydown", e => { if (e.key === "Escape") cerrar(); });
}

/* ---------- Logo y correo (se toman de datos.js) ---------- */
function aplicarDatosDelSitio() {
  document.querySelectorAll("[data-logo]").forEach(img => img.src = SITIO.logo);
  document.querySelectorAll("[data-email]").forEach(a => {
    a.href = "mailto:" + SITIO.email;
    a.textContent = SITIO.email;
  });
}

/* ---------- Página de un juego (juego.html?juego=ID) ---------- */
function mostrarJuego() {
  const contenedor = document.getElementById("juego");
  const j = JUEGOS.find(x => x.id === new URLSearchParams(location.search).get("juego"));

  if (!j) {
    contenedor.innerHTML = `<section class="juego"><h2>No encontramos ese juego</h2><p><a href="index.html">Volver al inicio</a></p></section>`;
    return;
  }
  document.title = `${j.titulo} — ${SITIO.nombre}`;

  const capturas = [0, 1, 2].map(i => j.capturas[i]
    ? `<button data-src="${esc(j.capturas[i])}" aria-label="Ampliar captura ${i + 1}"><img src="${esc(j.capturas[i])}" alt="Captura ${i + 1} de ${esc(j.titulo)}"></button>`
    : `<button data-texto="Captura ${i + 1}" aria-label="Ampliar captura ${i + 1}">Captura ${i + 1}</button>`).join("");

  const video = j.video
    ? `<video controls preload="metadata" src="${esc(j.video)}"></video>`
    : `<div class="marcador"><div class="play"></div>Tráiler de ${esc(j.titulo)}</div>`;

  const ficha = Object.entries(j.ficha).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("");
  const descargas = j.descargas.map(d => `<a class="boton" href="${esc(d.enlace)}" download>Descargar para ${esc(d.sistema)} <small>${esc(d.formato)}</small></a>`).join("");

  contenedor.innerHTML = `
    <section class="juego" style="--c1:${j.colores[0]};--c2:${j.colores[1]};--c3:${j.colores[2]}">
      <a class="volver" href="index.html">← Volver al inicio</a>
      <div class="juego-cabecera"><h2>${esc(j.titulo)}</h2><span class="etiqueta">${esc(j.etiqueta)}</span></div>
      <p class="resumen">${esc(j.resumen)}</p>
      <div class="columnas">
        <div><div class="video">${video}</div><div class="capturas">${capturas}</div></div>
        <aside class="ficha"><h3>Ficha del juego</h3><dl>${ficha}</dl><div class="descargas">${descargas}</div></aside>
      </div>
      <p class="descripcion">${esc(j.descripcion)}</p>
    </section>`;

  // Ampliar capturas
  const visor = document.getElementById("visor"), grande = document.getElementById("captura-grande");
  contenedor.addEventListener("click", e => {
    const b = e.target.closest(".capturas button"); if (!b) return;
    grande.style.setProperty("--c1", getComputedStyle(b).backgroundColor);
    grande.innerHTML = b.dataset.src ? `<img src="${b.dataset.src}" alt="">` : esc(b.dataset.texto);
    visor.showModal();
  });
  visor.addEventListener("click", () => visor.close());
}

/* ---------- Botón de modo claro / oscuro ---------- */
function activarBotonTema() {
  const boton = document.getElementById("boton-tema");
  const mostrar = () => {
    boton.textContent = document.documentElement.dataset.tema === "oscuro" ? "☀ Modo claro" : "☾ Modo oscuro";
  };
  boton.addEventListener("click", () => {
    const nuevo = document.documentElement.dataset.tema === "oscuro" ? "claro" : "oscuro";
    aplicarTema(nuevo);
    try { localStorage.setItem("tema", nuevo); } catch (e) {}
    mostrar();
  });
  mostrar();
}

/* ---------- Inicio ---------- */
crearMenuYPie();
activarBotonTema();
aplicarDatosDelSitio();
if (document.getElementById("juego")) mostrarJuego();
