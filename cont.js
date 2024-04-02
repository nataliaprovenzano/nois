const botoes = document.querySelectorAll('.objetivos');
console.log(botoes.length);

for (let sas = 0; sas < botoes.length; sas++){
    console.log(sas);
    botoes[sas].onclick = function(){
    botoes[sas].classList.add('ativo');    
    }
    botoes[sas].classList.add('ativo');
}
