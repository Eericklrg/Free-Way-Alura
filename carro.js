let xCarros = [500, 500, 500, 500, 500, 500];
let yCarros = [40, 95, 150, 210, 270, 318];
let velocidadeCarros = [2, 3, 4.2, 5, 3.5, 2.6];
let comprimentoCarro = 50;
let alturaCarro = 40;


    function mostraCarro(){
      for (let i = 0; i < imagemCarros.length; i++) {
      image(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarro,alturaCarro);
    }
  }


function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 500;
      }
    }
  }
  
function passouTodaTela(xCarros){
  return xCarros < -50;
}

  
