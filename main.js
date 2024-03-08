// alert('bom dia rapaziada grupo do tutu aqui' + '\n' 'e feliz dias das mulheres pra todas')
var nomeUsuario = prompt('Qual seu nome???');
var texto = document.querySelector('span');

texto.textContent = nomeUsuario;

while(nomeUsuario == ''){
    nomeUsuario = prompt('Qual seu nome???');
}