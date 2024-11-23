const adiciona = document.querySelectorAll(".add");
const diminui = document.querySelectorAll(".minus");

function adicionarUm(event) {
    const contador = event.target.closest('.botoes-produto').querySelector('.contador');
    let total = Number(contador.innerHTML) + 1;
    contador.innerHTML = total;
}

function diminuirUm(event) {
    const contador = event.target.closest('.botoes-produto').querySelector('.contador');
    let total = Number(contador.innerHTML) - 1;
    if (total >= 0) {
        contador.innerHTML = total;
    }
}

adiciona.forEach(botao => botao.addEventListener("click", adicionarUm));
diminui.forEach(botao => botao.addEventListener("click", diminuirUm));

function alternarImagemSalvo(button) {
    const img = button.querySelector('img');
    if (img.src.includes('stash_save-ribbon-transparente')) {
        img.src = './img/stash_save-ribbon.svg';
        img.alt = 'Favoritado';
    } else {
        img.src = './img/stash_save-ribbon-transparente.svg';
        img.alt = 'Salvar';
    }
}

document.querySelectorAll('.salvar-carrinho').forEach(button => {
    button.addEventListener('click', function() {
        alternarImagemSalvo(button);
    });
});

const botaoSelecionarTipo = document.querySelectorAll('.Variador');

botaoSelecionarTipo.forEach(button => {
    button.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img) {
            img.classList.toggle('move-right');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const variadores = document.querySelectorAll('.Variador');
    variadores.forEach(variador => {
        variador.addEventListener('click', function() {
            const imgProduto = this.closest('.caixa-info-produto').querySelector('.img-do-produto');
            if (imgProduto.src.includes('sofaAlternativo.jpg')) {
                imgProduto.src = './img/sofa 3.jpg';
            } else {
                imgProduto.src = './img/sofaAlternativo.jpg'; 
            }
        });
    });
});

