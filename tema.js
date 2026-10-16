/* =========================================================
   MODO CLARO / OSCURO
   Los colores de cada modo están en styles.css (secciones 1a y 1b).
   ========================================================= */

// Modo con el que arranca la página la primera vez:
// "claro", "oscuro" o "sistema" (sigue la configuración del dispositivo)
const TEMA_POR_DEFECTO = "claro";

function temaActual() {
  let guardado = null;
  try { guardado = localStorage.getItem("tema"); } catch (e) {}
  if (guardado === "claro" || guardado === "oscuro") return guardado;   // elección previa del visitante
  if (TEMA_POR_DEFECTO !== "sistema") return TEMA_POR_DEFECTO;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "oscuro" : "claro";
}

function aplicarTema(tema) {
  document.documentElement.dataset.tema = tema;
}

aplicarTema(temaActual());
