const $botonCalcular = document.querySelector("#calcular");
const $botonCantidadDeClases = document.querySelector("#enviar");

$botonCantidadDeClases.onclick = function () {
  const casillerosClases = [];

  let numeroClase = "";
  almacenarCasillerosClases(casillerosClases, numeroClase);
  guardarClasesElegidas(casillerosClases);
  habilitarClase(numeroClase);
};

$botonCalcular.onclick = function () {
  return false;
};

function habilitarClase(numeroClase) {
  const horas = document.querySelector(`#hora-clase-${numeroClase}`);
  const minutos = document.querySelector(`#minutos-clase-${numeroClase}`);
  const segundos = document.querySelector(`#segundos-clase-${numeroClase}`);

  horas.disabled = false;
  minutos.disabled = false;
  segundos.disabled = false;
}

function almacenarCasillerosClases(casillerosClases) {
  for (let i = 1; i <= 5; i++) {
    casillerosClases.push(
      document.querySelector(`input[name=clase${i}]`).checked
    );
  }
}

function guardarClasesElegidas(casillerosClases) {
  
  const clasesElegidas = [];

  for (let i = 0; i < casillerosClases.length; i++) {
    if (casillerosClases[i]) {
      switch (i) {
        case 0:
          clasesElegidas.push("uno");
          break;
        case 1:
          clasesElegidas.push("dos");
          break;
        case 2:
          clasesElegidas.push("tres");
          break;
        case 3:
          clasesElegidas.push("cuatro");
          break;
        case 4:
          clasesElegidas.push("cinco");
          break;
        default:
          clasesElegidas.push("");
          break;
      }
      
    }
  }
  return clasesElegidas;
}
