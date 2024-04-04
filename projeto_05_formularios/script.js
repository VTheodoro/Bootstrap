function verificarSenhas() {
    var senha = document.getElementById("senha").value;
    var repitaSenha = document.getElementById("repita_senha").value;
    var mensagemErro = document.getElementById("mensagem_erro");

    if (senha != repitaSenha) {
        document.getElementById("repita_senha").style.borderColor = "red";
        mensagemErro.textContent = "As senhas não coincidem!";
    } else {
        document.getElementById("repita_senha").style.borderColor = "green";
        mensagemErro.textContent = "";
    }
}