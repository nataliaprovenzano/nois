const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');

console.log(botoes.length);

for (let sas = 0; sas < botoes.length; sas++){
    console.log(sas);
    botoes[sas].onclick = function(){
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove('ativo');
            textos[j].classList.remove('ativa');
        }
        botoes[sas].classList.add('ativo');
        textos[sas].classList.add('ativa');
    } 
}
const contadores = document.querySelectorAll('.contador');
const tempo0objetivo1 = new Date('2024-04-19T00:00:00');
const tempoObjetivo2 = new Date('2024-12-10T00:00:00');
const tempoObjetivo3 = new Date('2025-01-15T00:00:00');
const tempoObjetivo4 = new Date('2024-12-13T00:00:00');


let tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];
for(let i = 0; i< contadores.length;i++){
contadores[i].textContent = CalculaTempo(tempos[i]);
}


function CalculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos =  Math.floor(segundos/60);
    let hora =  Math.floor(minutos/60);
    let dia =  Math.floor(hora/24);


segundos %= 60;
minutos %= 60;
horas %= 24;

return dia + " Dias " + hora + " Horas " + minutos + " Minutos " + segundos + " Segundos ";
}

