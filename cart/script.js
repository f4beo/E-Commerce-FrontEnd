// Função de diminui e aumentar os itens

// Seleciona os botões e o contador
const adiciona = document.querySelectorAll(".add");
const diminui = document.querySelectorAll(".minus");
const contador = document.querySelectorAll(".contador");

// Função para adicionar 1 ao contador
function adicionarUm() {
    const contador = event.target.closest('.botoes-produto').querySelector('.contador');
    let total = Number(contador.innerHTML) + 1;
    contador.innerHTML = total;
}

// Função para diminuir 1 do span
function diminuirUm() {
    const contador = event.target.closest('.botoes-produto').querySelector('.contador');
    let total = Number(contador.innerHTML) - 1;
    if (total >= 0) {
        contador.innerHTML = total;
    }
}


adiciona.forEach(botao => botao.addEventListener("click", adicionarUm));
diminui.forEach(botao => botao.addEventListener("click", diminuirUm));
