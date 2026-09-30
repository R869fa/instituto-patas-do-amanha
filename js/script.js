import { render } from "./router.js";
import {
    camposFormulario,
    salvarDados,
    limparDados
} from "./storage.js";

import { validarCampo } from "./form.js";

const app = document.querySelector("#app");

/* Navegação dos componentes gerados dinamicamente */
app.addEventListener("click", event => {
    const botao = event.target.closest("[data-rota]");

    if (!botao) {
        return;
    }

    location.hash = botao.dataset.rota;
});

/* Persistência e validação durante a digitação */
app.addEventListener("input", event => {
    if (!camposFormulario.includes(event.target.id)) {
        return;
    }

    salvarDados();
    validarCampo(event.target);
});

/* Validação do formulário */
app.addEventListener("submit", event => {
    if (!event.target.matches("#cadastro-form")) {
        return;
    }

    event.preventDefault();

    let formularioValido = true;

    camposFormulario.forEach(campo => {
        const input = document.getElementById(campo);

        if (input && !validarCampo(input)) {
            formularioValido = false;
        }
    });

    if (formularioValido) {
        alert("Cadastro validado com sucesso!");
    }
});

/* Limpeza dos dados */
app.addEventListener("reset", event => {
    if (!event.target.matches("#cadastro-form")) {
        return;
    }

    limparDados();
});

window.addEventListener("hashchange", render);

render();