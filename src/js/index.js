const inputNomeProduto = document.getElementById('nome-produto');
const inputPrecoProduto = document.getElementById('preco-produto');
const inputImagemProduto = document.getElementById('imagem-produto');
const formulario = document.getElementById('forms-adicionar-produto');
const containerListaProdutos = document.getElementById('container-lista-protudos');
/*
    Obtem os produtos salvos anteriormente no localStorage, convertendo o JSON de volta para um array com JSON.parse().
    Se não houver nada salvo ainda (ou seja, o valor for null), usa um array vazio [].
*/
let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

window.addEventListener('DOMContentLoaded', () => {
    produtos.forEach(produto => criarCardProduto(produto));
});

formulario.addEventListener('submit', guardarProdutos);

function guardarProdutos(event) {
    event.preventDefault();



    const nomeProduto = inputNomeProduto.value;
    const precoProduto = parseFloat(inputPrecoProduto.value).toFixed(2);
    const imagemProduto = inputImagemProduto.value;

    const novoProduto = {
        nomeProduto,
        precoProduto,
        imagemProduto
    }

    produtos.push(novoProduto); // Adiciona o novo produto ao array produtos

    // Converte o array atualizado para JSON com JSON.stringify() e salva no localStorage
    localStorage.setItem('produtos', JSON.stringify(produtos)); 

    // chama a função que cria o produto e exibi na tela
    criarCardProduto(novoProduto);

    formulario.reset(); // limpa o formulario
}

function criarCardProduto(produto) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <div class="card-img">
            <img src="${produto.imagemProduto}" alt="Game boy">
        </div>

        <h3 class="card-titulo-produto">${produto.nomeProduto}</h3>

        <div class="card-container-conteudo">
            <p class="card-preco-produto">${produto.precoProduto}</p>
            <div class="card-icon-lixeira" id="card-icon-lixeira">
                <img src="src/img/icon-lixeira.png" alt="Icone da lixeira">
            </div>
        </div>
    `;

    containerListaProdutos.appendChild(card);
}
