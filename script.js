// =========================================
// CONFIGURAÇÕES INICIAIS
// =========================================

// CONTADOR DE PROJETOS
let totalProjetos = 0;

// ARRAY DE MENSAGENS
const mensagens = [

    "A programação transforma ideias em realidade.",

    "Cada linha de código é um novo aprendizado.",

    "Criatividade e tecnologia andam juntas.",

    "Grandes projetos começam com pequenos passos.",

    "Seu próximo código pode mudar tudo.",
    
    "Eu sou um com o universo",

];

// ÍNDICE DA MENSAGEM
let mensagemAtual = 0;


// =========================================
// CONTADOR DE PROJETOS
// =========================================

function aumentarProjetos(){

    totalProjetos++;

    document.getElementById("counter").innerText = totalProjetos;

}


// =========================================
// DIMINUIR PROJETOS
// =========================================

function diminuirProjetos(){

    if(totalProjetos > 0){

        totalProjetos--;

        document.getElementById("counter").innerText = totalProjetos;

    }

}


// =========================================
// RESETAR CONTADOR
// =========================================

function resetarProjetos(){

    totalProjetos = 0;

    document.getElementById("counter").innerText = totalProjetos;

}


// =========================================
// ALTERNAR TEMA
// =========================================

function alternarTema(){

    document.body.classList.toggle("light-mode");

}


// =========================================
// MENSAGEM DINÂMICA
// =========================================

function mostrarMensagem(){

    const texto = document.getElementById("mensagem");

    texto.innerText = mensagens[mensagemAtual];

    mensagemAtual++;

    // VOLTA PARA A PRIMEIRA MENSAGEM
    if(mensagemAtual >= mensagens.length){

        mensagemAtual = 0;

    }

}


// =========================================
// SCROLL SUAVE
// =========================================

function scrollProjetos(){

    const secao = document.getElementById("projetos");

    secao.scrollIntoView({

        behavior: "smooth"

    });

}


// =========================================
// ANIMAÇÃO NOS CARDS
// =========================================

function animarCards(){

    const cards = document.querySelectorAll(".feature-card");

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("show");

        }, index * 200);

    });

}


// =========================================
// MENU MOBILE
// =========================================

function abrirMenu(){

    const menu = document.querySelector(".menu ul");

    menu.classList.toggle("active");

}


// =========================================
// TROCAR TEXTO AUTOMATICAMENTE
// =========================================

function textoAutomatico(){

    const titulo = document.querySelector(".mini-title");

    const frases = [

        "Front-End Developer 🚀",

        "UI Designer 🎨",

        "JavaScript Lover ⚡",

        "Criando experiências digitais 💻",

        "Assista serie da Agatha Cristie 💻",

        "Crie disciplina 🚀",

    ];

    let index = 0;

    setInterval(() => {

        titulo.innerText = frases[index];

        index++;

        if(index >= frases.length){

            index = 0;

        }

    }, 3000);

}


// =========================================
// EFEITO DE DIGITAÇÃO
// =========================================

function efeitoDigitacao(){

    const texto = "Transformando ideias em experiências digitais.";

    const elemento = document.querySelector(".content h1");

    elemento.innerHTML = "";

    let i = 0;

    function digitar(){

        if(i < texto.length){

            elemento.innerHTML += texto.charAt(i);

            i++;

            setTimeout(digitar, 50);

        }

    }

    digitar();

}


// =========================================
// BOTÃO VOLTAR AO TOPO
// =========================================

function voltarAoTopo(){

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// =========================================
// APARECER BOTÃO AO ROLAR
// =========================================

window.addEventListener("scroll", () => {

    const botao = document.getElementById("topButton");

    if(window.scrollY > 300){

        botao.style.opacity = "1";

        botao.style.pointerEvents = "all";

    }

    else{

        botao.style.opacity = "0";

        botao.style.pointerEvents = "none";

    }

});


// =========================================
// CARREGAMENTO DA PÁGINA
// =========================================

window.onload = () => {

    animarCards();

    textoAutomatico();

    efeitoDigitacao();

};