// Lógica para mudar tema do portifólio
let botao = document.getElementById('botao');
let corpo = document.getElementById('corpo');
botao.addEventListener('click', function() {
    if(corpo.classList.contains('tema-claro')){
        corpo.classList.remove('tema-claro') ;
        corpo.classList.add('tema-escuro');
        botao.value = '☀️';
       
    } else{
        corpo.classList.remove('tema-escuro');
        corpo.classList.add('tema-claro');
        botao.value = '🌙';
      
    }
});

// Lógica para inserir meus projetos no portifólio
let projetos = [
    {
        nome: "Toca MPB Website",
        imagem: '/img/toca-mpb.png',
        github: "https://github.com/mariaesantana/toca-mpb-music-website.git",
        demo: "https://harmonious-otter-42d02b.netlify.app/"
    },
    {
        nome: "Exploreza Website",
        imagem: '/img/exploreza.png',
        github: "https://github.com/mariaesantana/exploreza-travel-website.git",
        demo: "https://exploreza-travel-website.vercel.app/"
    },
    {
        nome: "HDC Hosting Website",
        imagem: '/img/hdc-host.png',
        github: "https://github.com/mariaesantana/hdc-hosting-solutions.git",
        demo: "https://hdc-hosting-solutions-hsfa.vercel.app/"
    },
    {
        nome: "Clone Instagram Website",
        imagem: '/img/clone-insta.png',
        github: "https://github.com/mariaesantana/website-clone-instagram.git",
        demo: "https://website-clone-instagram.vercel.app/"
    },
    {
        nome: "Movie Quiz Challenge",
        imagem: '/img/quiz.png',
        github: "https://github.com/mariaesantana/movie-quiz-challenge.git",
        demo: "https://movie-quiz-challenge.vercel.app/"
    },
    {
        nome: "Tributo Linkin Park Website",
        imagem: '/img/tributo-lp.png',
        github: "https://github.com/mariaesantana/tribute-linkin-park-website.git",
        demo: "https://tribute-linkin-park-website.vercel.app/"
    }
];

let secaoProjetos = document.getElementById('projetos-container');

for(let i = 0; i < projetos.length; i++){

    let projeto = projetos[i];

    let projetoCard = document.createElement('div');
    projetoCard.classList.add('projeto-card');
    
    let imagem = document.createElement('img');
    imagem.src = projeto.imagem;
    imagem.alt = `Imagem do ${projeto.nome}`;
    projetoCard.appendChild(imagem);

    let titulo = document.createElement('h3');
    titulo.textContent = projeto.nome;
    projetoCard.appendChild(titulo);

    let github = document.createElement('a');
    github.href = projeto.github;
    github.target = "_blank"
    github.textContent = ' Código no GitHub';
    projetoCard.appendChild(github)

    let demo = document.createElement('a');
    demo.href = projeto.demo;
    demo.target = "_blank";
    demo.textContent = 'Ver demo';
    projetoCard.appendChild(demo);

    secaoProjetos.appendChild(projetoCard);

}


