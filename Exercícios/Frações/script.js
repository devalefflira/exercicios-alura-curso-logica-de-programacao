function drawSquare(x, y, size, size, color) {

    var screen = document.querySelector("canvas");
    var brush = screen.getContext("2d");

    brush.fillStyle = color;
    brush.fillRect(x, y, size, size);
    brush.strokeStyle = "lightgray";
    brush.strokeRect(x, y, size, size);
}

function drawText(texto, x, y) {
    var screen = document.querySelector("canvas");
    var brush = screen.getContext("2d");

    brush.font = "20px Georgia";
    brush.fillStyle = "white";
    brush.fillText(texto, x, y);
}

drawText("Qual é a fração?", 50, 30);

var y = 50;
drawSquare(0, y, 50, 50, "green")
drawSquare(50, y, 50, 50, "green")
drawSquare(100, y, 50, 50, "green")
drawSquare(150, y, 50, 50, "white")