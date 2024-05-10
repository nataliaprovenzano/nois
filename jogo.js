
let numeroSecreto = Math.floor( Math.random() * 50);
console.log(numeroSecreto);


let chute = prompt('Quantas vezes o Gui passou mal essa semana?');



while(chute == null){
    alert('Vai de volta tonto');
    chute = prompt('Quantas vezes o Gui passou mal essa semana?');
}

if(numeroSecreto == chute){
    alert('Parabéns!!! Acertou safado!!');
    console.log('Acertou safado!!')   
} else{
    alert('AAAAAAAA, ERROU BURROO');
    console.log('ERROU BURROO');