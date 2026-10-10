# 🛒 Avanti - E-commerce Landing Page

Um projeto de Front-end desenvolvido para simular a interface de um e-commerce moderno, com foco na separação de responsabilidades (HTML, CSS e JavaScript), componentização visual e interatividade. 

Este projeto foi construído como demonstração de habilidades técnicas para vagas de estágio em desenvolvimento Front-end.

## 🎯 Funcionalidades

- **Fidelidade de Layout:** Construção da interface baseada no design original, respeitando espaçamentos, cores e tipografia.
- **Busca Interativa:** Captura do texto digitado pelo usuário e exibição de mensagem dinâmica na tela ao clicar na lupa ou pressionar `Enter`.
- **Carrossel de Produtos:** Navegação horizontal de itens (lançamentos) utilizando botões de avançar e voltar, construído com JavaScript puro.
- **Scroll Oculto:** Otimização de CSS para esconder a barra de rolagem (scrollbar) nativa nos carrosséis, mantendo a rolagem via botões limpa e funcional.

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da página e dos componentes.
- **CSS3 & Tailwind CSS:** Estilização da interface de forma ágil através das classes utilitárias do Tailwind (via CDN) e CSS externo para ajustes específicos.
- **JavaScript (Vanilla):** Manipulação da DOM para dar vida aos carrosséis e ao motor de busca, sem dependência de bibliotecas externas pesadas.
- **FontAwesome:** Biblioteca de ícones vetoriais.

## 📂 Arquitetura do Projeto

Para manter a simplicidade e a organização, o projeto foi dividido em três arquivos principais:

```text
/
├── index.html   # Estrutura e conteúdo principal
├── style.css    # Estilos complementares customizados
└── script.js    # Lógica de interação (busca e carrossel)