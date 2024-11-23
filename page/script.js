function adicionarEventosDeClique() {
    // Pega todas as imagens com a classe "salvar"
    const botoesSalvar = document.getElementsByClassName("salvar");

    // Itera sobre todos os elementos da classe "salvar"
    for (let i = 0; i < botoesSalvar.length; i++) {
        const botao = botoesSalvar[i];
        
        // Adiciona um evento de clique para cada imagem
        botao.addEventListener("click", function() {
            // Verifica se a URL da imagem contém o nome correto
            if (botao.src.includes("stash_save-ribbon.png")) {
                botao.src = "../img/pagina/salvo.png"; // Troca para a imagem "salvo.png"
            } else {
                botao.src = "../img/pagina/stash_save-ribbon.png"; // Troca para a imagem original
            }
        });
    }
}

// Chama a função para adicionar os eventos de clique
adicionarEventosDeClique();