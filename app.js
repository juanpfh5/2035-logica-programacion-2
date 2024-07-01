// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

asignarTextoElemento('h1', 'Juego del número secreto'); //Hoisiting
asignarTextoElemento('p', 'Indica un número del 1 al 10');

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function intentoDeUsuario() {
  alert('Click desde el botón');
}