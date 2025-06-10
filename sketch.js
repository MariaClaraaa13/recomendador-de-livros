// fantasia, aventura, drama

// dead poets society, 14, drama
// harry potter e o prisoneiro de azkaban,12, fantasia

// garota interrompida, 16, drama, biografia
// as vantagens de ser invisivel, 18, romance, ficcao juvenil
// o ladrao de raios, 12, fantasia
// me chame pelo seu nome, 18, romance LGBTQIA+

let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade= createInput("5")
}

function draw() {
  background(220);
  let idade= campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 12) {
    if(idade >= 18) {
      return "me chame pelo seu nome";
    } else {
      return "garota interrompida";
    }
  } else {
    return "dead poets society";
  }
}
