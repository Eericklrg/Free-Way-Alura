let xAtor = 85;
let yAtor = 366;
let colisao = false;
meusPontos = 0;

function movimentaAtor(){
 if (keyIsDown(UP_ARROW))
 yAtor -= 3; 
 if (keyIsDown(DOWN_ARROW)){
   if (podeSeMover())
  yAtor += 3;}
}
function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
     posicaoInicial();
      somDaColisao.play();
      if (meusPontos > 0){
      meusPontos -= 1;}
    }
  }
}
function posicaoInicial(){
  yAtor = 366;
}
function incluirPontos(){
text(meusPontos, width / 5, 27);
textSize(25);
textAlign(CENTER);
fill(color(255,0,255));
}

function marcarPonto(){
if (yAtor < 15){
  meusPontos += 1;
  somDoPonto.play();
  posicaoInicial(); 
}
}

function podeSeMover(){
return yAtor < 366;
}





