let vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d");
let mapa = "tile.png";
let fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

let vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", );

let cerdo = new Image();
cerdo.src = "cerdo,png";
vaca.addEventListener("load", );

let pollo = new Image();
pollo.src = "pollo.png";
vaca.addEventListener("load", );


function dibujar() {
  papel.drawImage(fondo,0, 0);
}

function aleatorio(min, max) {
  let resultado = Math.floor(Math.random()*(max - min + 1)) + min;
  return resultado;
}
