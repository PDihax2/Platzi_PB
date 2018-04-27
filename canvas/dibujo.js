let d = document.getElementById("dibujito");
let lienzo = d.getContext("2d");
//console.log(lienzo);
lienzo.beginPath();
lienzo.strokeStyle = "peru";
lienzo.moveTo(200, 200);

lienzo.lineTo(300, 300);

lienzo.moveTo(400, 200);

lienzo.lineTo(200, 200);

lienzo.moveTo(400, 200);

lienzo.lineTo(300, 300);

lienzo.moveTo(500, 300);

lienzo.lineTo(400, 200);

lienzo.moveTo(500, 300);

lienzo.lineTo(300, 300);

lienzo.moveTo(200, 200);

lienzo.lineTo(100, 300);

lienzo.moveTo(100, 300);

lienzo.lineTo(300, 300);

lienzo.moveTo(300, 100);

lienzo.lineTo(200, 200);

lienzo.moveTo(300, 100);

lienzo.lineTo(400, 200);

lienzo.moveTo(400, 200);

lienzo.lineTo(500, 100);

lienzo.moveTo(500, 100);

lienzo.lineTo(300, 100);

lienzo.moveTo(500, 100);

lienzo.lineTo(500, 300);

lienzo.moveTo(100, 300);

lienzo.lineTo(100, 100);

lienzo.moveTo(100, 100);

lienzo.lineTo(300, 100);

lienzo.moveTo(100, 100);

lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();
