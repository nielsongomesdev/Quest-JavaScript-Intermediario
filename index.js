const formulario = document.querySelector('.formulario');
const inputs = document.querySelectorAll('input, textarea');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    inputs.forEach((input) => {
        const mensagemErro = input.nextElementSibling;

        if (input.value.trim() === '') {
            input.classList.add('erro');
            input.classList.remove('sucesso');

            if (mensagemErro && mensagemErro.classList.contains('mensagem-erro')) {
                mensagemErro.classList.add('ativo');
            }
        } else {
            input.classList.add('sucesso');
            input.classList.remove('erro');

            if (mensagemErro && mensagemErro.classList.contains('mensagem-erro')) {
                mensagemErro.classList.remove('ativo');
            }
        }
    });
});
