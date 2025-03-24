function validarLogin() {
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message2");

    // Esconde a mensagem de erro (caso já tenha sido exibida antes)
    errorMessage.style.display = "none";
    errorMessage.style.opacity = "1";

    // Valida se os campos estão preenchidos corretamente
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput === "" || passwordInput === "" || !emailRegex.test(emailInput)) {
        exibirMensagemErro();
        return;
    }

    // Obtém os dados armazenados no localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("senha");

    // Verifica se os dados do login estão corretos
    if (emailInput === storedEmail && passwordInput === storedPassword) {
        localStorage.setItem("loggedIn", "true"); // Marca o usuário como logado
        window.location.href = "areadousuario.html"; // Redireciona para a área restrita
    } else {
        // Se o formulário não for válido, mostra uma mensagem de erro
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Todos os campos são obrigatórios e devem conter um texto válido.";
    }
}

// Função para exibir a mensagem de erro e fazê-la desaparecer após 4 segundos
function exibirMensagemErro() {
    const errorMessage = document.getElementById("error-message2");
    errorMessage.style.display = "block";

    setTimeout(() => {
        errorMessage.style.opacity = "0"; // Faz a mensagem desaparecer suavemente
        setTimeout(() => {
            errorMessage.style.display = "none"; // Esconde completamente após o fade-out
        }, 1000);
    }, 4000);
}