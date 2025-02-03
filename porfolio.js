const iconos = ["angular", "css", "entityF", "git", "html5", "js", "python", "react", "sql"];
const root = "./public/assets/images/";
const extension = ".png";
let num = 0;
const imagenSRC = document.getElementById("carrusel");
function actualizarImagen() {
  return imagenSRC.setAttribute("src", `${root}${iconos[num]}${extension}`);
}

window.addEventListener("DOMContentLoaded", () => {
  actualizarImagen();
});

setInterval(() => {
  num = (num + 1) % iconos.length;
  actualizarImagen();
}, 2000);
