
function desenhaQuadrado(x, y, color) {
    var tela = document.querySelector("canvas");
    var pincel = tela.getContext("2d");
    
    pincel.fillStyle = color;
    pincel.fillRect(x, y, 50, 50);
    pincel.strokeStyle = "white";
    pincel.strokeRect(x, y, 50, 50);
}

for(var x = 0; x < 600; x = x + 50) {
    desenhaQuadrado(x, 0, "green");
}