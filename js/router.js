import { templates } from "./templates.js";
import { restaurarDados } from "./storage.js";

export function render() {
    const app = document.querySelector("#app");

    if (!app) {
        return;
    }

    const rota = location.hash.substring(1) || "inicio";

    const rotasProjetos = [
        "lar-temporario",
        "patas-vacinadas",
        "feira-adocao"
    ];

    const rotaPrincipal = rotasProjetos.includes(rota)
        ? "projetos"
        : rota;

    app.innerHTML =
        templates[rotaPrincipal] || templates.inicio;

    restaurarDados();

    if (rotasProjetos.includes(rota)) {
        const elemento = document.getElementById(rota);

        if (elemento) {
            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
}