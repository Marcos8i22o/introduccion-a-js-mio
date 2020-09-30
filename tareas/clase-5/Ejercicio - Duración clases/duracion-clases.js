const $botonCalcular = document.querySelector("#calcular");
const $botonCantidadDeClases = document.querySelector('#enviar');


$botonCantidadDeClases.onclick = function () {

  // const claseUno = document.querySelector('clase1').checkbox;
  // console.log (claseUno)
  const numeroClase = "uno";
  habilitarClase(numeroClase);
}

$botonCalcular.onclick = function () {
  
  return false;
};


function habilitarClase (numeroClase){

  const horas = document.querySelector(`#hora-clase-${numeroClase}`);
  const minutos = document.querySelector(`#minutos-clase-${numeroClase}`);
  const segundos = document.querySelector(`#segundos-clase-${numeroClase}`);
  
  horas.disabled = false;
  minutos.disabled = false;
  segundos.disabled = false;
  
}


