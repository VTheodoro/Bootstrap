function mostrarSegundoFormulario() {
    const primeiroFormulario = document.querySelector('.container.p-3');
    const segundoFormulario = document.getElementById('segundoFormulario');

    primeiroFormulario.classList.add('hidden');
    segundoFormulario.classList.remove('hidden');
}
