const $botonMostrar = document.querySelector('button');

$botonMostrar.onclick = function() {
    const primerNombreUsuario = document.querySelector('#primer-nombre').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre').value;
    const apellidoUsuario = document.querySelector('#apellido').value;
    const edadUsuario = Number(document.querySelector('#edad').value);
    
    const $resultado = document.querySelector('#resultado');
    const $parrafo = document.createElement('p');
    const $textoDelParrafo = document.createTextNode(`Tu nombre es ${primerNombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario}, y tenés ${edadUsuario} años.`);
    
    $parrafo.appendChild($textoDelParrafo);
    $resultado.appendChild($parrafo);
    
    return false;
}