const $botonCalcular = document.querySelector("#calcular");
const $botonCantidadDeClases = document.querySelector("#enviar");

const clasesElegidas = [];

$botonCantidadDeClases.onclick = function () {
  const casillerosClases = [];

  almacenarCasillerosClases(casillerosClases);
  guardarClasesElegidas(casillerosClases, clasesElegidas);
  habilitarClase(clasesElegidas);

  return false;
};

$botonCalcular.onclick = function () {
  const duracionTotalClases = {
    acumuladorHoras: 0,
    acumuladorMinutos: 0,
    acumuladorSegundos: 0,
  };

  calcularDuracionTotalClases(clasesElegidas, duracionTotalClases);
  mostrarDuracionTotalClases(duracionTotalClases);

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

function calcularDuracionTotalClases(clasesElegidas, duracionTotalClases) {
  for (let i = 0; i < clasesElegidas.length; i++) {
    let horas = Number(
      document.querySelector(`#hora-clase-${clasesElegidas[i]}`).value
    );
    let minutos = Number(
      document.querySelector(`#minutos-clase-${clasesElegidas[i]}`).value
    );
    let segundos = Number(
      document.querySelector(`#segundos-clase-${clasesElegidas[i]}`).value
    );

    duracionTotalClases.acumuladorHoras += horas;
    duracionTotalClases.acumuladorMinutos += minutos;
    duracionTotalClases.acumuladorSegundos += segundos;
  }

  return duracionTotalClases;
}

function mostrarDuracionTotalClases(duracionTotalClases) {
  document.querySelector("h2").className = "";

  const mensajeEnPantalla = document.querySelector("#duracion");

  mensajeEnPantalla.innerText += ` ${duracionTotalClases.acumuladorHoras} hs ${duracionTotalClases.acumuladorMinutos}'${duracionTotalClases.acumuladorSegundos}'' `;
}
