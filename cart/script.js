// Função de diminui e aumentar os itens

// Seleciona os botões e o contador
const adiciona = document.querySelectorAll(".add");
const diminui = document.querySelectorAll(".minus");

// Função para adicionar 1 ao contador
function adicionarUm(event) {
    const contador = event.target.closest('.botoes-produto').querySelector('.contador');
    let total = Number(contador.innerHTML) + 1;
    contador.innerHTML = total;
}

// Função para diminuir 1 do contador
function diminuirUm(event) {
    const contador = event.target.closest('.botoes-produto').querySelector('.contador');
    let total = Number(contador.innerHTML) - 1;
    if (total >= 0) {
        contador.innerHTML = total;
    }
}

// Adiciona os event listeners aos botões de adicionar e diminuir
adiciona.forEach(botao => botao.addEventListener("click", adicionarUm));
diminui.forEach(botao => botao.addEventListener("click", diminuirUm));

// Função do botão favoritar
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
