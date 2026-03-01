let total = 0;

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const preco = document.getElementById("precoProduto");

const nome = document.getElementById("nomeProduto");

const valorTotal = document.getElementById("valorTotal");

const listaProdutos = document.getElementById("listaProdutos");

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
                criarItemNaTela(produto.nome, parseFloat(produto.preco));
                atualizarSomaTotal(parseFloat(produto.preco));
            })
            salvarCarrinho();
        });
    }

function atualizarSomaTotal(valorRecebido){
    total = total + valorRecebido;
    valorTotal.textContent = `Total R$ ${total.toFixed(2)}`;
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
    criarItem.textContent = `${nomeRecebido} - R$ ${precoRecebido}`
    const btnRemover = document.createElement('button');
                
    btnRemover.textContent = '❌'
                 
    btnRemover.onclick = function(){
    removerProduto(criarItem, precoRecebido)
    }

    listaProdutos.appendChild(criarItem)
    criarItem.appendChild(btnRemover)
}

preco.addEventListener("keydown", (evento) => {
    if(evento.key === 'Enter'){
        adicionarProduto()
    }
});

function removerProduto(itemRemovivel, valorSubtraivel){

    total = total - valorSubtraivel;
    valorTotal.textContent = `Total: R$ ${total.toFixed(2)}`
    itemRemovivel.remove();
}

retornarCarrinho();
