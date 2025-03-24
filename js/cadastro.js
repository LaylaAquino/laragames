function validarFormulario() {
    // Obtém o formulário
    const formulario = document.getElementById("registration-form");

    // Obtém o elemento da mensagem de erro
    const errorMessage = document.getElementById("error-message");

    // Limpa qualquer mensagem de erro anterior
    errorMessage.style.display = "none";
    errorMessage.innerHTML = "";

    // Verifica se o formulário é válido
    if (formulario.checkValidity()) {
        // Verifica se o checkbox de privacidade está marcado
        const checkbox = document.getElementById("privacidade");
        if (!checkbox.checked) {
            errorMessage.style.display = "block";
            errorMessage.innerHTML = "Você precisa concordar com os termos de privacidade e segurança.";

            // Após 10 segundos, faz a mensagem desaparecer com efeito
            setTimeout(() => {
                errorMessage.style.opacity = 0;  // Inicia o desaparecimento
                // Após o efeito de transição, esconde completamente a mensagem
                setTimeout(() => {
                    errorMessage.style.display = "none";
                    errorMessage.style.opacity = 1;  // Reseta a opacidade para o próximo uso
                }, 1000); // Tempo da transição (1 segundo)
            }, 4000); // Tempo para esperar antes de começar a transição (10 segundos)
            return; // Se o checkbox não estiver marcado, impede o redirecionamento
        }

        // Se o formulário for válido e o checkbox estiver marcado, obtém os valores dos inputs
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("password").value;

        // Armazenar os dados no localStorage para o login
        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("senha", senha);

        // Redireciona para a página de cadastro realizado
        window.location.href = 'cadrealizado.html';
    } else {
        // Se o formulário não for válido, mostra uma mensagem de erro
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Todos os campos são obrigatórios e devem conter um texto válido.";

        // Após 10 segundos, faz a mensagem desaparecer com efeito
        setTimeout(() => {
            errorMessage.style.opacity = 0;  // Inicia o desaparecimento
            // Após o efeito de transição, esconde completamente a mensagem
            setTimeout(() => {
                errorMessage.style.display = "none";
                errorMessage.style.opacity = 1;  // Reseta a opacidade para o próximo uso
            }, 1000); // Tempo da transição (1 segundo)
        }, 4000); // Tempo para esperar antes de começar a transição (10 segundos)
    }
}

