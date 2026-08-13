// ===== MENU RESPONSIVO =====
const menuBotao = document.querySelector(".menu-botao");
const navegacao = document.querySelector("nav");

if(menuBotao) {
    menuBotao.addEventListener("click", () => {
        navegacao.classList.toggle("ativo");
    
        if (navegacao.classList.contains("ativo")) {
            menuBotao.setAttribute("aria-label", "Fechar menu");
        } else {
            menuBotao.setAttribute("aria-label", "Abrir menu");
        }
    });
}


// ===== MENSAGENS PARA A FAMÍLIA =====
const mensagens = [
    { texto: "Ensinar uma criança pelo exemplo é uma das formas mais simples de fortalecer sua fé.", categoria: "Família" },
    { texto: "Pequenos momentos de aprendizado podem criar grandes lembranças em família.", categoria: "Aprendizado" },
    { texto: "Uma conversa sobre o evangelho pode acontecer em qualquer momento do dia.", categoria: "Evangelho" },
    { texto: "As crianças aprendem melhor quando se sentem amadas, ouvidas e incluídas.", categoria: "Crianças" }
];

const mensagemBotao = document.querySelector("#mensagem-botao");
const mensagemFamilia = document.querySelector("#mensagem-familia");
let indiceMensagem = Number(localStorage.getItem("indiceMensagem")) || 0;

// Requisito: Uso de Objetos, Arrays e MÉTODOS de Array
// Usando .map() para extrair as categorias e .forEach() para iterar
const categoriasDisponiveis = mensagens.map(mensagem => mensagem.categoria);
categoriasDisponiveis.forEach(categoria => {
    console.log(`Categoria de mensagem carregada no sistema: ${categoria}`);
});


// ===== FUNÇÃO PARA MOSTRAR UMA MENSAGEM =====
function mostrarMensagem() {
    const mensagemAtual = mensagens[indiceMensagem];
    
    // Requisito: Uso exclusivo de template literal (``)
    mensagemFamilia.textContent = `${mensagemAtual.texto} — ${mensagemAtual.categoria}`;
    
    indiceMensagem++;
    
    // Requisito: Branch condicional (if)
    if (indiceMensagem >= mensagens.length) {
        indiceMensagem = 0;
    }
    
    // Requisito: Uso de localStorage
    localStorage.setItem("indiceMensagem", indiceMensagem);
}


// ===== EVENTO DO BOTÃO =====
if (mensagemBotao) {
    mensagemBotao.addEventListener("click", mostrarMensagem);
}


// ===== FUNÇÃO PARA MOSTRAR O ANO ATUAL =====
function atualizarAno() {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const elementosRodape = document.querySelectorAll("#ano-atual");
    
    elementosRodape.forEach(elemento => {
        elemento.textContent = anoAtual;
    });
}

atualizarAno();