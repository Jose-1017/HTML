window.addEventListener('load', function() {

    // Revisar si ya vio la alerta
    if (!localStorage.getItem('bienvenidaMostrada')) {

        alert('¡Bienvenido a mi portafolio! Soy José Julián Arévalo.');

        // Guardar que ya se mostró
        localStorage.setItem('bienvenidaMostrada', 'true');
    }

});
const btnBienvenida = document.getElementById('boton-bienvenida');
const mensajeBienvenida = document.getElementById('mensaje-bienvenida');
const tituloBienvenida = document.getElementById('titulo-bienvenida');

btnBienvenida.addEventListener('click', function() {

    if (mensajeBienvenida.style.display !== 'block') {
        mensajeBienvenida.style.display = 'block';
        tituloBienvenida.style.display = 'none';
        btnBienvenida.textContent = 'Ocultar mensaje';
    } else {
        mensajeBienvenida.style.display = 'none';
        tituloBienvenida.style.display = 'block';
        btnBienvenida.textContent = 'Mostrar mensaje';
    }

});

const btnMas = document.getElementById('btn-mas');
const infoExtra = document.getElementById('info-extra');
btnMas.addEventListener('click', function() {
    if (infoExtra.style.display !== 'block') {
        infoExtra.style.display = 'block';
        btnMas.textContent = 'Mostrar menos';
    } else {
        infoExtra.style.display = 'none';
        btnMas.textContent = 'Mostrar más';
    }
});
