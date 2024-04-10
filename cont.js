const botoes = document.querySelectorAll('.objetivos');
console.log(botoes.length);






for (let sas = 0; sas < botoes.length; sas++){
    console.log(sas);
    botoes[sas].onclick = function(){
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove('ativo');
        }
        botoes[sas].classList.add('ativo');
       
    }
    
}
