    let total = 0;

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const preco = document.getElementById("precoProduto");

    const nome = document.getElementById("nomeProduto");

    const valorTotal = document.getElementById("valorTotal");

    const listaProdutos = document.getElementById("listaProdutos");

    const formatador = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    const btnLimpar = document.getElementById("btnLimparLista");

    function limparCampos(inputNome, inputPreco){
        inputNome.value = ''
        inputPreco.value = ''
    }

    function salvarCarrinho(){
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
    }

    function retornarCarrinho(){
            window.addEventListener("DOMContentLoaded", () => {
                carrinho.forEach((produto) => {
                    criarItemNaTela(produto.nome, produto.preco);
                    atualizarSomaTotal(parseFloat(produto.preco));
                })
                salvarCarrinho();
            });
        }

    function atualizarSomaTotal(valorRecebido){
        total = total + valorRecebido;
        valorTotal.textContent = `Total: ` + formatador.format(total);
    }

    function dadosSaoValidos(nomeRecebido, precoRecebido){
        if(nomeRecebido.trim() === ''){
            alert("O nome do produto não pode estar vazio e precisa ser um texto");
            return false
        }

        if(precoRecebido.trim() <= 0 || isNaN(precoRecebido)){
            alert("O preco não pode ser menor que 0 e precisa ser um número")
            return false
        }
        return true; 
    }
        //Mudança na lógica, seguindo os princípios do clean code e DRY 
        //Tava feio uma função gigante fazendo tudo
    function adicionarProduto() {
        let valorProduto = parseFloat(preco.value);

        if (!dadosSaoValidos(nome.value, preco.value)) return;

        criarItemNaTela(nome.value, valorProduto);

        atualizarSomaTotal(valorProduto);

        carrinho.push({nome: nome.value, preco: valorProduto});

        salvarCarrinho();
        limparCampos(nome, preco);
    }

    function criarItemNaTela(nomeRecebido, precoRecebido){

        const criarItem = document.createElement('li')
        criarItem.textContent = `${nomeRecebido} - ` + formatador.format(precoRecebido) 

        const btnRemover = document.createElement('button');
                    
        btnRemover.textContent = '❌'
                    
        btnRemover.onclick = function(){
           removerProduto(criarItem, precoRecebido, nomeRecebido)    
        }

        const divBotoes = document.createElement('div')

        const btnEditar = document.createElement('button')
        btnEditar.textContent = '✏️'

        btnEditar.onclick = function(){
            editarLista(criarItem, precoRecebido, nomeRecebido)
        }

        divBotoes.appendChild(btnEditar);   
        divBotoes.appendChild(btnRemover);

        criarItem.appendChild(divBotoes);
        listaProdutos.appendChild(criarItem);
    }

    preco.addEventListener("keydown", (evento) => {
        if(evento.key === 'Enter'){
            adicionarProduto()
        }
    });

    btnLimpar.addEventListener("click", () => {
        carrinho = []
        total = 0

        salvarCarrinho()

        listaProdutos.innerHTML = ''
        valorTotal.textContent = "Total: R$ 0,00"
    })


    function removerProduto(itemRemovivel, valorSubtraivel, produtoRemovido){

        total = total - valorSubtraivel;
        valorTotal.textContent = `Total: ${formatador.format(total)}`
        itemRemovivel.remove();

        const index = carrinho.findIndex(produto => produto.nome === produtoRemovido)

        if (index !== -1){
            carrinho.splice(index, 1)
            salvarCarrinho()
        }
    }
    
    function editarLista(itemAlterado, precoAlterado, nomeAlterado){
        nome.value = nomeAlterado;
        preco.value = precoAlterado;
        
        nome.focus()

        removerProduto(itemAlterado, precoAlterado, nomeAlterado)
    }

    retornarCarrinho();
