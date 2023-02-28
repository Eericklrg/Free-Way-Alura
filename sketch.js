
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  image(imagemAtor,xAtor,yAtor,30,30);
  movimentaCarro();
  movimentaAtor();
  mostraCarro();
  voltaPosicaoDoCarro();
  verificaColisao();
  incluirPontos();
  marcarPonto();
}
















