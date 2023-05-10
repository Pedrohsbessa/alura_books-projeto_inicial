const btnFiltrarLivros = document.querySelectorAll('.btn')
btnFiltrarLivros.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elBtn = document.getElementById(this.id)
    const categoria = elBtn.value
    // aleterando o método filter para exibir os itens do botão de disponibilidade:
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivros(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDisponiceis(livrosFiltrados)
        exibirValorNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorNaTela(total) {
    elementoValorTotal.innerHTML = ` <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${total}</span></p>
  </div>`
}