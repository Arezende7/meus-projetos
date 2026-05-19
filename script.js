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

    "Seu próximo código pode mudar tudo."

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

        "Criando experiências digitais 💻"

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

/* ===== SNAKE GAME ===== */

const canvas = document.getElementById("snakeGame");
const ctx = canvas.getContext("2d");

const scoreText = document.getElementById("score");

const box = 16;

let score = 0;

let snake = [
    {
        x: 160,
        y: 160
    }
];

let direction = "RIGHT";

let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
};

document.addEventListener("keydown", updateDirection);

function updateDirection(event){

    if(event.key === "ArrowUp" && direction !== "DOWN"){
        direction = "UP";
    }

    if(event.key === "ArrowDown" && direction !== "UP"){
        direction = "DOWN";
    }

    if(event.key === "ArrowLeft" && direction !== "RIGHT"){
        direction = "LEFT";
    }

    if(event.key === "ArrowRight" && direction !== "LEFT"){
        direction = "RIGHT";
    }

}

function startGame(){

    ctx.fillStyle = "#111827";
    ctx.fillRect(0, 0, 320, 320);

    /* COMIDA */

    ctx.fillStyle = "#ef4444";

    ctx.fillRect(
        food.x,
        food.y,
        box,
        box
    );

    /* COBRINHA */

    for(let i = 0; i < snake.length; i++){

        ctx.fillStyle = i === 0
        ? "#38bdf8"
        : "#7dd3fc";

        ctx.fillRect(
            snake[i].x,
            snake[i].y,
            box,
            box
        );

    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction === "UP") snakeY -= box;
    if(direction === "DOWN") snakeY += box;
    if(direction === "LEFT") snakeX -= box;
    if(direction === "RIGHT") snakeX += box;

    /* COMER */

    if(
        snakeX === food.x &&
        snakeY === food.y
    ){

        score++;

        scoreText.innerHTML = score;

        food = {

            x: Math.floor(Math.random() * 20) * box,

            y: Math.floor(Math.random() * 20) * box

        };

    }else{

        snake.pop();

    }

    const newHead = {
        x: snakeX,
        y: snakeY
    };

    /* COLISÃO */

    if(

        snakeX < 0 ||
        snakeY < 0 ||
        snakeX >= 320 ||
        snakeY >= 320 ||
        collision(newHead, snake)

    ){

        clearInterval(game);

        setTimeout(() => {

            alert("💀 Game Over");

        }, 100);

    }

    snake.unshift(newHead);

}

function collision(head, array){

    for(let i = 0; i < array.length; i++){

        if(
            head.x === array[i].x &&
            head.y === array[i].y
        ){

            return true;

        }

    }

    return false;

}

const game = setInterval(startGame, 100);