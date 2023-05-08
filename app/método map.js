function aplicarDesconto(livros) {
    const desconto = 0.25;
    livrosComDesconto = livros.map(i => {
        return { ...i, preco: i.preco - (i.preco * desconto) }
    })
    return livrosComDesconto
}