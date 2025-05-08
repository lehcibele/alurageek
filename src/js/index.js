const inputNomeProduto = document.getElementById('nome-produto');
const inputPrecoProduto = document.getElementById('preco-produto');
const inputImagemProduto = document.getElementById('imagem-produto');
const formulario = document.getElementById('forms-adicionar-produto');

const containerProdutos = document.getElementById('container-produtos');

const listaProdutos = [];

formulario.addEventListener('submit', guardarProdutos);

function guardarProdutos(event) {
    event.preventDefault();

    const nomeProduto = inputNomeProduto.value;
    const precoProduto = inputPrecoProduto.value;
    const imagemProduto = inputImagemProduto.value;

    console.log(nomeProduto);
    console.log(precoProduto);
    console.log(imagemProduto);

    // função que cria o card
    


}
