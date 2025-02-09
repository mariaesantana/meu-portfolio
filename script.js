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
