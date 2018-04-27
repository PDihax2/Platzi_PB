let d = document.getElementById("dibujito");
let texto = document.getElementById("texto_lineas");
let boton = document.getElementById("botoncito");
let lienzo = d.getContext("2d");
let ancho = parseInt(d.width);
//console.log(lienzo);
boton.addEventListener("click", dibujoPorClick);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  let l = 0;
  let lineas = parseInt(texto.value);
  let scl = ancho/lineas;
  while(l < lineas) {
    dibujarLinea("pink", 0, l*scl, (l+1)*scl, 300);
    dibujarLinea("pink", l*scl, 300, 300, 300 - (l+1)*scl);
    dibujarLinea("pink", l*scl, 0, 300, (l+1)*scl);
    dibujarLinea("pink", 300 - l*scl, 0, 0, (l+1)*scl);
    l++;
  }
  dibujarLinea("pink", 1, 1, 299, 1);
  dibujarLinea("pink", 1, 1, 1, 299);
  dibujarLinea("pink", 1, 299, 299, 299);
  dibujarLinea("pink", 299, 1, 299, 299);

}
