let totalGeral;
limpar(); 

function adicionar(params) {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade.value * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
    </section>`;
    totalGeral = totalGeral + preco;
    let total = document.getElementById('valor-total');
    total.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(params) {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML='';
    document.getElementById('valor-total').textContent = 'R$ 0';
}