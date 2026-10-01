# Instituto Patas do Amanhã

Projeto front-end desenvolvido para o Instituto Patas do Amanhã, uma organização
voltada à proteção, recuperação e adoção responsável de animais.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- ES6 Modules
- Manipulação do DOM
- localStorage
- Git e GitHub
- SweetAlert2

## Estrutura do projeto

A aplicação foi organizada separando conteúdo, estilos, lógica e recursos:

/AULA → contém os arquivos principais do projeto.

/AULA/css → contém o arquivo style.css.

/AULA/js → contém os módulos JavaScript responsáveis por roteamento,
templates, validação de formulário, armazenamento e integração principal.

/AULA/assets → contém os recursos visuais do projeto.

/AULA/assets/fonts → contém as fontes utilizadas.

/AULA/assets/img → contém a imagem patas.png.

## Instalação e execução

1. Clonar ou baixar o repositório.
2. Abrir a pasta AULA no editor de código.
3. Verificar se as pastas css, js e assets estão presentes.
4. Abrir o arquivo index.html no navegador.
5. Utilizar o menu de navegação para acessar as funcionalidades da aplicação.

O projeto não depende de um servidor de back-end para suas funcionalidades
principais. Os dados do formulário são armazenados localmente no navegador.

## Funcionalidades

- Navegação em formato de Single Page Application.
- Roteamento utilizando hash.
- Renderização dinâmica por Template Literals.
- Geração de projetos utilizando map().
- Validação de formulário.
- Feedback visual para campos válidos e inválidos.
- Persistência dos dados com localStorage.
- Navegação responsiva.
- Menu dropdown e menu hambúrguer.
- Feedback por alertas utilizando SweetAlert2.

## Versionamento

O projeto utiliza Git e GitHub para controle de versões.

A organização das branches segue uma estrutura baseada em GitFlow:

- main → versões estáveis.
- develop → desenvolvimento contínuo.
- feature/ → implementação de funcionalidades específicas.

As mensagens de commit seguem o padrão Conventional Commits e as versões
são organizadas utilizando versionamento semântico.

## Acessibilidade

Foram aplicadas práticas de acessibilidade como uso de elementos semânticos,
labels associados aos campos, estados de foco, feedback de validação,
responsividade e organização visual consistente.

## Testes

Os testes foram realizados diretamente no navegador, verificando navegação,
renderização dos conteúdos, funcionamento do formulário, validação dos campos,
persistência dos dados e comportamento responsivo.

## Manutenção

A separação do JavaScript em módulos permite alterar cada funcionalidade
isoladamente. Novos templates podem ser adicionados em templates.js,
regras de validação em form.js, operações de armazenamento em storage.js
e alterações de navegação em router.js.