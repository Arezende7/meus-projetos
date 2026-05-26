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

// ===== DADOS DOS PROJETOS =====
// Edite aqui para adicionar/alterar seus projetos!
const projetos = [
    {
        titulo: "Landing Page Dark",
        descricao: "Página de apresentação com tema escuro, animações suaves e layout moderno. Desenvolvida com foco em performance e experiência visual marcante.",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        codeUrl: "#",
        previewBg: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)"
    },
    {
        titulo: "Dashboard Analytics",
        descricao: "Painel administrativo com gráficos interativos, métricas em tempo real e design limpo. Inclui sidebar, cards de dados e visualizações dinâmicas.",
        tags: ["HTML", "CSS", "Chart.js"],
        demoUrl: "#",
        codeUrl: "#",
        previewBg: "#f8fafc"
    },
    {
        titulo: "UI Components Kit",
        descricao: "Biblioteca de componentes reutilizáveis com animações CSS avançadas, estados interativos e documentação de uso. Inclui cards, modais, botões e inputs.",
        tags: ["CSS", "Animações", "JavaScript"],
        demoUrl: "#",
        codeUrl: "#",
        previewBg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        titulo: "Weather App",
        descricao: "Aplicativo de clima em tempo real usando Open Weather API, com animações por condição climática, geolocalização e design glassmorphism responsivo.",
        tags: ["JavaScript", "API REST", "CSS"],
        demoUrl: "#",
        codeUrl: "#",
        previewBg: "linear-gradient(180deg, #1e3a5f 0%, #2d6a9f 50%, #87ceeb 100%)"
    },
    {
        titulo: "E-commerce Store",
        descricao: "Loja virtual completa com carrinho de compras, filtros por categoria, busca em tempo real e página de checkout responsiva.",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        codeUrl: "#",
        previewBg: "#fff7ed"
    },
    {
        titulo: "Quiz Interativo",
        descricao: "Jogo de perguntas e respostas com temporizador, múltiplas categorias, animações de feedback, sistema de pontuação e ranking local.",
        tags: ["JavaScript", "CSS"],
        demoUrl: "#",
        codeUrl: "#",
        previewBg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
    }
];
 
// ===== FILTROS =====
function initFiltros() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.portfolio-card');
 
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Atualiza botão ativo
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
 
            const filtro = btn.dataset.filter;
 
            cards.forEach(card => {
                if (filtro === 'all' || card.dataset.category === filtro) {
                    card.classList.remove('hidden');
                    // Pequena animação de entrada
                    card.style.animation = 'none';
                    requestAnimationFrame(() => {
                        card.style.animation = 'cardEntrada 0.35s ease forwards';
                    });
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}
 
// Animação CSS injetada via JS
const estiloAnimacao = document.createElement('style');
estiloAnimacao.textContent = `
    @keyframes cardEntrada {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(estiloAnimacao);
 
// ===== MODAL =====
function abrirModal(index) {
    const projeto = projetos[index];
    const modal = document.getElementById('projectModal');
 
    // Preenche as informações
    document.getElementById('modalTitle').textContent = projeto.titulo;
    document.getElementById('modalDesc').textContent = projeto.descricao;
    document.getElementById('modalDemo').href = projeto.demoUrl;
    document.getElementById('modalCode').href = projeto.codeUrl;
 
    // Tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    projeto.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });
 
    // Preview no modal (reutiliza o thumb do card clicado)
    const originalCard = document.querySelectorAll('.portfolio-card')[index];
    const thumbClone = originalCard.querySelector('.thumb-browser').cloneNode(true);
    // Remove overlay se vier clonado
    const overlayClone = thumbClone.querySelector('.card-overlay');
    if (overlayClone) overlayClone.remove();
 
    const previewArea = document.getElementById('modalPreview');
    previewArea.innerHTML = '';
    thumbClone.style.height = '100%';
    previewArea.appendChild(thumbClone);
 
    // Abre modal
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}
 
function fecharModal(event) {
    if (event.target === document.getElementById('projectModal')) {
        fecharModalBtn();
    }
}
 
function fecharModalBtn() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
}
 
// Fecha modal com Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModalBtn();
});
 
// ===== ANIMAÇÃO DE ENTRADA COM SCROLL =====
function initScrollReveal() {
    const cards = document.querySelectorAll('.portfolio-card');
 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
 
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}
 
// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initFiltros();
    initScrollReveal();
});

/* ===================================================
   COMO ADICIONAR UM NOVO PROJETO:
   
   1. Adicione um novo objeto no array "projetos" acima
   2. Adicione o HTML de um novo .portfolio-card no index.html
   3. Atualize o data-index e o data-category do card
   4. Personalize o .thumb-preview com o visual do projeto
   =================================================== */