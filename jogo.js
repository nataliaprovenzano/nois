let numeroSecreto = Math.random(); * 10;
console.log(numeroSecreto);

let chute = '';

while(chute == null || chute != numeroSecreto){
    alert('Tente novamente:)');
    chute = prompt('Escolha um número entre 0 a 10');
}

if(numeroSecreto == chute){
    alert('Parabéns!!!! Você acertou :)')
    console.log('Parabéns, acertou mizera')
} else{
    alert('Que tristeza, errou :(');
    console.log('Infelizmente, errou mizera')
}