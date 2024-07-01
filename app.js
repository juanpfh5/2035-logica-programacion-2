// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

asignarTextoElemento('h1', 'Juego del número secreto'); //Hoisiting
asignarTextoElemento('p', 'Indica un número del 1 al 10');

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  console.log(numeroSecreto);
  console.log(typeof(numeroSecreto));
  console.log(numeroDeUsuario);
  console.log(typeof(numeroDeUsuario));
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}