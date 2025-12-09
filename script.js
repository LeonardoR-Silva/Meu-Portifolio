// Mostrar/Ocultar Seções
function mostrarSecao(event, secaoId) {
    event.preventDefault();
    
    const secoes = document.querySelectorAll('section');
    secoes.forEach(s => s.classList.remove('ativo'));
    
    document.getElementById(secaoId).classList.add('ativo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Validação de e-mail
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Limpando erros
function limparErros() {
    document.querySelectorAll('.erro-msg').forEach(el => el.style.display = 'none');
    document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('erro'));
}

// Validar formulário
function validarFormulario() {
    limparErros();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    let valido = true;

    if (nome === '') {
        document.getElementById('nome').classList.add('erro');
        document.getElementById('erro-nome').style.display = 'block';
        valido = false;
    }

    if (email === '' || !validarEmail(email)) {
        document.getElementById('email').classList.add('erro');
        document.getElementById('erro-email').style.display = 'block';
        valido = false;
    }

    if (mensagem === '') {
        document.getElementById('mensagem').classList.add('erro');
        document.getElementById('erro-mensagem').style.display = 'block';
        valido = false;
    }

    return valido;
}

// Abrir modal
function abrirModal() {
    document.getElementById('modal').classList.add('ativo');
}

// Fechar modal
function fecharModal() {
    document.getElementById('modal').classList.remove('ativo');
}

// Fechar modal ao clicar fora
document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) {
        fecharModal();
    }
});

// Simulando o envio de formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validarFormulario()) {
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensagem').value = '';
        abrirModal();
    }
});