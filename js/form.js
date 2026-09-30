export function validarCampo(input) {
    let mensagem = input.nextElementSibling;

    if (
        !mensagem ||
        !mensagem.classList.contains("form-feedback")
    ) {
        mensagem = document.createElement("span");
        mensagem.classList.add("form-feedback");

        input.insertAdjacentElement(
            "afterend",
            mensagem
        );
    }

    input.classList.remove(
        "campo-valido",
        "campo-invalido"
    );

    mensagem.classList.remove(
        "feedback-erro",
        "feedback-sucesso"
    );

    mensagem.textContent = "";

    if (input.value.trim() === "") {
        input.classList.add("campo-invalido");
        mensagem.classList.add("feedback-erro");
        mensagem.textContent =
            "Este campo é obrigatório.";

        return false;
    }

    if (!input.checkValidity()) {
        input.classList.add("campo-invalido");
        mensagem.classList.add("feedback-erro");
        mensagem.textContent =
            "Confira o formato informado.";

        return false;
    }

    input.classList.add("campo-valido");
    mensagem.classList.add("feedback-sucesso");
    mensagem.textContent =
        "Campo preenchido corretamente.";

    return true;
}