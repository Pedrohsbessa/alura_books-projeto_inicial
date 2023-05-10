const btnOrdenarPorPreço = document.querySelector('#btnOrdenarPorPreco')
btnOrdenarPorPreço.addEventListener('click', ordenarLivrosPorPreço)
function ordenarLivrosPorPreço() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivros(livrosOrdenados)
    
}