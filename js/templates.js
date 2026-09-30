export const projetos = [
    {
        id: "lar-temporario",
        badge: "Acolhimento",
        titulo: "Projeto Lar Temporário",
        descricao:
            "Conecta animais resgatados a voluntários que podem oferecer abrigo temporário enquanto uma família definitiva não é encontrada."
    },

    {
        id: "patas-vacinadas",
        badge: "Saúde",
        titulo: "Campanha Patas Vacinadas",
        descricao:
            "Busca ampliar a vacinação de animais de famílias que não possuem condições financeiras para arcar com os custos."
    },

    {
        id: "feira-adocao",
        badge: "Adoção",
        titulo: "Feira de Adoção",
        descricao:
            "Eventos realizados periodicamente para aproximar os animais disponíveis de possíveis adotantes."
    }
];

export const templates = {
    inicio: `
        <section class="apresentacao">
            <h2>Apresentação</h2>

            <p>
                O Instituto Patas do Amanhã é uma organização sem fins lucrativos
                dedicada à proteção e ao bem-estar de animais abandonados ou em
                situação de vulnerabilidade. A organização atua no resgate,
                tratamento, recuperação e encaminhamento de cães e gatos para
                adoção responsável, além de promover ações de conscientização
                sobre abandono e maus-tratos.
            </p>
        </section>

        <section class="missao">
            <h2>Missão</h2>

            <p>
                Promover uma vida mais digna para animais em situação de abandono,
                oferecendo cuidados veterinários, alimentação, abrigo temporário e
                oportunidades de adoção.
            </p>
        </section>

        <section class="projetos-destaque">
            <h2>Nossos Projetos</h2>

            <button
                type="button"
                data-rota="projetos"
            >
                Clique aqui para conhecer nossos projetos
            </button>
        </section>
    `,

    projetos: `
        <div class="alert alert-info" role="status">
            Os projetos apresentados possuem diferentes formas de participação,
            como adoção, voluntariado, vacinação e apoio às campanhas.
        </div>

        ${projetos.map(projeto => `
            <article
                id="${projeto.id}"
                class="${projeto.id}"
            >
                <span class="badge">
                    ${projeto.badge}
                </span>

                <h2>${projeto.titulo}</h2>

                <p>
                    ${projeto.descricao}
                </p>
            </article>
        `).join("")}

        <section class="participacao">
            <h2>Participação</h2>

            <p>
                Existem diversas maneiras de ajudar o Instituto Patas do Amanhã:
            </p>

            <ul>
                <li>Adotar um animal</li>
                <li>Ser voluntário</li>
                <li>Oferecer um lar temporário</li>
                <li>Fazer uma doação</li>
                <li>Divulgar animais disponíveis para adoção</li>
                <li>Participar das campanhas</li>
            </ul>
        </section>

        <section class="chamada-participacao">
            <h2>Participe!</h2>

            <p>
                Faça parte dessa mudança e ajude a transformar uma história
                de abandono em uma história de recomeço.
            </p>

            <button
                type="button"
                data-rota="cadastro"
            >
                Clique aqui para se cadastrar e participar
            </button>

            <p>OU</p>

            <button
                type="button"
                data-rota="inicio"
            >
                Clique aqui para voltar à página inicial
            </button>
        </section>
    `,

    cadastro: `
        <section class="cadastro-form">
            <h1>
                Cadastro de Adotantes e Voluntários
            </h1>

            <p class="instrucao-form">
                Preencha o formulário abaixo para realizar o cadastro.
            </p>

            <div class="alert alert-info" role="status">
                Confira os formatos indicados nos campos de CEP, telefone e CPF
                antes de enviar o formulário.
            </div>

            <form id="cadastro-form" novalidate>
                <fieldset>
                    <legend>
                        <strong>Seus Dados</strong>
                    </legend>

                    <label class="input-form" for="nome">
                        Nome:
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome completo"
                        required
                    >

                    <label class="input-form" for="CEP">
                        CEP:
                    </label>

                    <input
                        type="text"
                        inputmode="numeric"
                        id="CEP"
                        name="CEP"
                        maxlength="9"
                        pattern="\\d{5}-\\d{3}"
                        placeholder="00000-000"
                        required
                    >

                    <label
                        class="input-form"
                        for="Data-de-Nascimento"
                    >
                        Data de Nascimento:
                    </label>

                    <input
                        type="date"
                        id="Data-de-Nascimento"
                        name="Data-de-Nascimento"
                        min="1900-01-01"
                        max="2026-12-31"
                        required
                    >

                    <label
                        class="input-form"
                        for="Telefone"
                    >
                        Telefone:
                    </label>

                    <input
                        type="tel"
                        inputmode="numeric"
                        id="Telefone"
                        name="Telefone"
                        maxlength="15"
                        pattern="\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}"
                        placeholder="(00) 00000-0000"
                        required
                    >

                    <label class="input-form" for="CPF">
                        CPF:
                    </label>

                    <input
                        type="text"
                        inputmode="numeric"
                        id="CPF"
                        name="CPF"
                        maxlength="14"
                        pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                        placeholder="000.000.000-00"
                        required
                    >

                    <div class="form-buttons">
                        <button type="submit">
                            Enviar
                        </button>

                        <button type="reset">
                            Limpar
                        </button>
                    </div>
                </fieldset>
            </form>
        </section>
    `
};