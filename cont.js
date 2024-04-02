const botoes = document.querySelectorAll('.objetivos');
console.log(botoes.length);

for (let sas = 0; sas < botoes.length; sas++){
    console.log(sas);
    botoes[0].classList.remove('ativo');
    botoes[1].classList.add('ativo');
}
