let teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:39
};

console.log(teclas);
document.addEventListener("keyup", dibujarTeclado);
let cuadrito = document.getElementById("areaDeDibujo");
let papel = cuadrito.getContext("2d");
let x = 150, y = 150;
let colorcito = "blue";
let movimiento = 10;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  if (evento.keyCode == teclas.UP) {
     dibujarLinea(colorcito, x, y, x, y - 10, papel);
     y -= movimiento;
  } else if (evento.keyCode == teclas.DOWN) {
     dibujarLinea(colorcito, x, y, x, y + 10, papel);
     y += movimiento;
  } else if (evento.keyCode == teclas.LEFT) {
     dibujarLinea(colorcito, x, y, x - 10, y, papel);
     x -= movimiento;
  } else if (evento.keyCode == teclas.RIGHT) {
     dibujarLinea(colorcito, x, y, x + 10, y, papel);
     x += movimiento;
  }
}
