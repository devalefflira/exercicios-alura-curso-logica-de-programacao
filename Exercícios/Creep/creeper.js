/*
Tarefa: desenhar o personagem "Creeper" do Minecraft.

-Requisitos:
# Use o JavaScript
# Use a tag <canvas>
# Cores:
## cabeça: "darkgreen"
## olhos, nariz e boca: "black"

-Medidas:
# Cabeça....350x300
# Olhos.......90x90
# Nariz......70x100
# Boca.......40x110

*/

// Variáveis
var tela = document.querySelector("canvas");
var creeper = tela.getContext("2d");

// Creeper - Cabeça
creeper.fillStyle = "darkgreen";
creeper.fillRect(0, 0, 350, 300);

// Creeper - Olhos
creeper.fillStyle = "black";
creeper.fillRect(50, 70, 90, 90);

creeper.fillStyle = "black";
creeper.fillRect(210, 70, 90, 90);

// Creeper - Nariz
creeper.fillStyle = "black";
creeper.fillRect(140, 160, 70, 100);

// Creeper - Boca
creeper.fillStyle = "black";
creeper.fillRect(100, 190, 40, 110);

creeper.fillStyle = "black";
creeper.fillRect(210, 190, 40, 110);