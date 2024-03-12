let numeroSecreto = 8;

let chute = '';

while(chute == ''){
    chute = prompt("Escholha um número entre 0 a 10");
}

if(numeroSecreto == chute){
    alert('Parabéns!!!! Você acertou :)')
    console.log('Parabéns, acertou mizera')
} else{
    alert('Que tristeza, errou :(');
    console.log('Infelizmente, errou mizera')
}