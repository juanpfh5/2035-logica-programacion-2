// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto;
let intentos;


function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto'); //Hoisiting
  asignarTextoElemento('p', 'Indica un número del 1 al 10.');
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  // console.log(numeroSecreto);
  // console.log(typeof(numeroSecreto));
  // console.log(numeroDeUsuario);
  // console.log(typeof(numeroDeUsuario));

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}.`);

    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acertó.
    limpiarCajaDeTexto();

    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor.');
    } else {
      asignarTextoElemento('p', 'El número secreto es mayor.');
    }

    intentos++;
  }
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function limpiarCajaDeTexto() {
  document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
  // Limpiar la caja
  limpiarCajaDeTexto();

  // Indicar mensaje de intervalo de números
  // Generar el nuevo aleatorio
  // Inicializar el número de intentos
  condicionesIniciales();

  // Desabilitar el botón de nuevo juego
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
console.log(numeroSecreto);