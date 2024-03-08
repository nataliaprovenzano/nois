// alert('bom dia rapaziada grupo do tutu aqui' + '\n' 'e feliz dias das mulheres pra todas')
var nomeUsuario = prompt('Qual seu nome???');
var texto = document.querySelector('span');

while(nomeUsuario == '' ) {// || nomeUsuario == null)
    nomeUsuario = prompt('Qual seu nome???');
}

if (nomeUsuario == null){
    texto.textContent = 'Usuário';
} else { texto.textContent = nomeUsuario; 
}

