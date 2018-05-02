class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
  }
}


let dinero;
let entregado = [];
let div = 0;
let papeles = 0;
let caja = [];
let b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
let resultado = document.getElementById("resultado");
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));


function entregarDinero() {
  let t = document.getElementById("cantidad");
  dinero = parseInt(t.value);
  for (let bi of caja) {
    if(dinero > 0) {
      div = Math.floor(dinero/bi.valor);

      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }

      entregado.push(new Billete(bi.valor, papeles));
      dinero -= bi.valor * papeles;
    }
  }
  if (dinero > 0) {
    resultado.innerHTML = "Soy un cajero malo y no puedo darte esa cantidad xD" ;
  } else {
    for (let e of entregado) {
      if (e.cantidad > 0) {
        resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
}
