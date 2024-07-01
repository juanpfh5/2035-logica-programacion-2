// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 6;

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto'); //Hoisiting
  asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}.`);
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
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números disponibles.');
    listaNumerosSorteados = [];
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }

  // if (listaNumerosSorteados.length >= parseInt(numeroMaximo / 2)) {
  //   listaNumerosSorteados.shift();
  // }
  // if (listaNumerosSorteados.includes(numeroGenerado)) {
  //   return generarNumeroSecreto();
  // } else {
  //   listaNumerosSorteados.push(numeroGenerado);
  //   return numeroGenerado;
  // }
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