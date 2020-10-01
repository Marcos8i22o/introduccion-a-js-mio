const $botonCalcular = document.querySelector("#calcular");
const $botonCantidadDeClases = document.querySelector('#enviar');


$botonCantidadDeClases.onclick = function () {

  const casillerosClases = [];

  let numeroClase = '';
  almacenarCasillerosClases(casillerosClases,numeroClase);
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

function almacenarCasillerosClases (casillerosClases,numeroClase) {
  
 
  for (let i = 1; i <= 5; i++) {
    casillerosClases.push(document.querySelector(`input[name=clase${i}]`).checked);
  }

}


//   for (let i = 1; i <= casillerosClases.length; i++) {
    
//     if (casillerosClases[i]) {
//       numeroClase = casillerosClases[i+1].toString();
//       console.log(numeroClase)
//     }
//   }

  

// }
