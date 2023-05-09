const btnFiltrarLivros = document.querySelectorAll('.btn')
btnFiltrarLivros.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elBtn = document.getElementById(this.id)
    const categoria = elBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirLivros(livrosFiltrados)

}
