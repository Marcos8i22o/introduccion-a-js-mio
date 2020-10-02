const $botonCalcular = document.querySelector("#calcular");
const $botonCantidadDeClases = document.querySelector("#enviar");

$botonCantidadDeClases.onclick = function () {
  const casillerosClases = [];
  const clasesElegidas = [];

  almacenarCasillerosClases(casillerosClases);
  guardarClasesElegidas(casillerosClases, clasesElegidas);
  habilitarClase(clasesElegidas);

  return false;
};

$botonCalcular.onclick = function () {
  return false;
};

function habilitarClase(clasesElegidas) {
  for (let i = 0; i < clasesElegidas.length; i++) {
    let $horas = document.querySelector(`#hora-clase-${clasesElegidas[i]}`);
    let $minutos = document.querySelector(
      `#minutos-clase-${clasesElegidas[i]}`
    );
    let $segundos = document.querySelector(
      `#segundos-clase-${clasesElegidas[i]}`
    );

    $horas.disabled = false;
    $minutos.disabled = false;
    $segundos.disabled = false;
  }
}

function almacenarCasillerosClases(casillerosClases) {
  for (let i = 1; i <= 5; i++) {
    casillerosClases.push(
      document.querySelector(`input[name=clase${i}]`).checked
    );
  }
}

function guardarClasesElegidas(casillerosClases, clasesElegidas) {
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
