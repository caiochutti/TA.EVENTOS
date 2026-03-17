🚀 TA.EVENTOS - Sistema de Agendamento Gourmet
Este projeto é uma aplicação web para gestão de orçamentos e agendamentos de carrinhos gourmet (Picolés, Waffles, Açaí, etc.). Ele permite que o usuário solicite um orçamento e que o administrador visualize os horários reservados em um quadro (Board) em tempo real.

🛠️ Tecnologias Utilizadas
HTML5: Estruturação semântica da página.

CSS3: Design responsivo e estilização moderna com Flexbox.

JavaScript (ES6+): Lógica de validação, manipulação do DOM e integração com API.

Day.js: Biblioteca para formatação e manipulação de datas e horários.

Webpack: Empacotador de módulos para otimizar o carregamento de scripts e assets.

JSON Server: Simulação de uma API REST para armazenamento de dados no arquivo server.json.

🏗️ Arquitetura e Terminal
O projeto utiliza o Node.js para gerenciar dependências e rodar o ambiente de desenvolvimento.

Scripts Principais:
npm run dev:

Inicia o Webpack Dev Server.

Compila os arquivos em tempo real (Hot Module Replacement).

Disponibiliza o site em http://localhost:8080.

npm run server:

Inicia o JSON Server na porta 3333 (ou na porta configurada).

Lê e grava os agendamentos no arquivo server.json.

📋 Funcionalidades
[x] Formulário de Orçamento: Validação de campos obrigatórios (Nome, E-mail, Data).

[x] Gestão de Datas: Integração com calendário para escolha de dias de evento.

[x] Board de Agendamentos: Visualização dinâmica dos pedidos confirmados.

[x] Persistência de Dados: Os dados não somem ao atualizar a página, pois são salvos no servidor local.

🚀 Como Rodar o Projeto
Instale as dependências:

Bash
npm install
Inicie o servidor de dados:

Bash
npm run server
Em outro terminal, inicie o ambiente de desenvolvimento:

Bash
npm run dev
