# 🛒 Lista de Compras(Vanilla JS)

Um sistema robusto de gerenciamento de carrinho de compras e lista de produtos, construído inteiramente do zero utilizando **JavaScript Puro (Vanilla JS)**, HTML5 e CSS3. 

Este projeto foi desenvolvido com foco em fundamentos sólidos de Engenharia de Software, aplicando conceitos de **Clean Code**, **DRY (Don't Repeat Yourself)** e persistência de dados no navegador.

## ✨ Funcionalidades (CRUD Completo)

- **Create:** Adição de novos produtos com validação de dados (impede campos vazios ou valores negativos).
- **Read:** Leitura e renderização dinâmica dos itens na tela, com cálculo automático e em tempo real do Valor Total.
- **Update:** Edição de itens existentes (O usuário pode retornar os dados para os inputs para correção rápida).
- **Delete:** Remoção individual de produtos ou limpeza completa (Zerar Carrinho) com um único clique.
- **Persistência de Dados:** Integração com o `localStorage` da Web API. Se o usuário fechar a aba ou atualizar a página, os dados permanecem intactos.
- **Formatação Monetária:** Utilização da API nativa `Intl.NumberFormat` para conversão e exibição impecável de valores em Real Brasileiro (BRL).

## 🎨 UI/UX Design

A interface foi projetada para ser limpa, moderna e responsiva:
- **Dark Mode Elegante:** Utilização de tons de carbono escuro (#121212, #1E1E1E) contrastando com detalhes em Âmbar/Dourado e tipografia legível.
- **Feedback Visual:** Botões com ações semânticas (Verde para Adição, Vermelho para Destruição/Alerta) e efeitos de `hover` para interatividade.
- **Ergonomia (Focus Management):** Ao editar um item, o sistema automaticamente direciona o cursor (`focus`) para o campo de texto, otimizando o tempo do usuário.
- **Layout Inteligente:** Estruturado com CSS Flexbox para perfeito alinhamento e espaçamento (`gap`) entre os controles.

## 🛠️ Tecnologias Utilizadas

- **HTML5** (Estruturação Semântica)
- **CSS3** (Flexbox, Estilização, Custom Scrollbar)
- **JavaScript (ES6+)** (Manipulação de DOM, Array Methods, Web Storage API)

## 🚀 Como Executar

Como este projeto não possui dependências externas ou frameworks, a execução é imediata:

1. Faça o clone deste repositório:
   ```bash
   git clone [https://github.com/Yahonan/Lista-De-Compras.git](https://github.com/Yahonan/Lista-De-Compras.git)
