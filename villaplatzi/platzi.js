let vp = document.getElementById("villaplatzi");
let papel = vp.getContext("2d");
let cantidad = aleatorio(5, 25);

let fondo = {
  url: "tile.png",
  cargaOK: false
};

let vaca = {
  url: "vaca.png",
  cargaOK: false
};

let cerdo = {
  url: "cerdo.png",
  xPos : 250,
  yPos : 250,
  salto : 20,
  cargaOK: false
};

let teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

document.addEventListener("keydown", moverCerdo);


function moverCerdo(e) {
  if (e.keyCode ==  teclas.UP) {
    cerdo.yPos -= cerdo.salto;
  }
  if (e.keyCode ==  teclas.DOWN) {
    cerdo.yPos += cerdo.salto;
  }
  if (e.keyCode ==  teclas.LEFT) {
    cerdo.xPos -= cerdo.salto;
  }
  if (e.keyCode ==  teclas.RIGHT) {
    cerdo.xPos += cerdo.salto;
  }
  dibujar();
}

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdo() {
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK) {
    for (let i = 0; i < cantidad; i++) {
      let x = aleatorio(0, 7);
      let y = aleatorio(0, 7);
      x *= 60;
      y *= 60;
      papel.drawImage(vaca.imagen, x , y);
    }
  }
  if (cerdo.cargaOK) {
    papel.drawImage(cerdo.imagen, cerdo.xPos, cerdo.yPos);
  }
}

function aleatorio(min, max) {
  let resultado = Math.floor(Math.random()*(max - min + 1)) + min;
  return resultado;
}
