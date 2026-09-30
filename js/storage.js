const camposFormulario = [
    "nome",
    "CEP",
    "Data-de-Nascimento",
    "Telefone",
    "CPF"
];

export function salvarDados() {
    const dados = {};

    camposFormulario.forEach(campo => {
        const input = document.getElementById(campo);

        if (input) {
            dados[campo] = input.value;
        }
    });

    localStorage.setItem(
        "dados-cadastro",
        JSON.stringify(dados)
    );
}

export function restaurarDados() {
    const dadosSalvos = localStorage.getItem("dados-cadastro");

    if (!dadosSalvos) {
        return;
    }

    const dados = JSON.parse(dadosSalvos);

    camposFormulario.forEach(campo => {
        const input = document.getElementById(campo);

        if (input && dados[campo] !== undefined) {
            input.value = dados[campo];
        }
    });
}

export function limparDados() {
    localStorage.removeItem("dados-cadastro");
}

export { camposFormulario };