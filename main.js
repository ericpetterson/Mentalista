
const $input = document.querySelector("input")
const $resposta = document.querySelector("#resposta")
const $teste = document.querySelector("#teste")
let numSecret = parseInt(Math.random()*11)

console.log(numSecret)
$teste.onclick = function () {
 

  const kick = Number($input.value)
  console.log(kick)
  
  if (kick == numSecret) {
   $resposta.innerHTML = "Parabéns você acertou";
  }
  else if (kick < 0 || kick > 10) {
    $resposta.innerHTML = 'Por favor digite um número de 0 a 10';

  } else if (kick < numSecret)
     $resposta.innerHTML = "Você errou! Tente chutar um numero mais alto"
  
  else {
    $resposta.innerHTML= "Você errou! Tente chutar um numero mais baixo";
  }


  
}
