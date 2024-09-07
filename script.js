function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let secaoEmocoes = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se pesquisa for uma string sem nada
    if (!campoPesquisa) {
        secaoEmocoes.innerHTML = "<p>Não encontrei nada, será que pode tentar de novo?</p>"
        return
    }

    // Transforma em minúsculas para uniformizar pesquisa
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let emocao = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        emocao = dado.emocao.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tecnica = dado.tecnica.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se pesquisa inclui o que foi pesquisado
        if (emocao.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item card${dado.id}">
                
                <h2 class="tecnica">${dado.tecnica}</h2>
                <p class="descricao">${dado.descricao}</p>
                <a class="informacoes" href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Não encontrei nada, será que pode tentar de novo?</p>"
    }

    // Atribui os resultados gerados à seção HTML
    secaoEmocoes.innerHTML = resultados;
}

//Overlay botão respirar
let btnRespirar = document.getElementById("respiracao-guiada");
let animacaoRespirar = document.querySelector('.container');
let sobrepor = document.querySelector('.sobrepor');

btnRespirar.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique no botão afete o clique global
    animacaoRespirar.classList.toggle('active');
    sobrepor.classList.toggle('active');
})

// Adiciona um listener de clique ao document
document.addEventListener('click', () => {
    // Remove a classe 'active' se ela estiver presente
    animacaoRespirar.classList.remove('active');
    sobrepor.classList.remove('active');
});