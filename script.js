function calcularImc(){
  
    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;
    if(peso != '' && altura !=''){
    let IMC = peso/(altura*altura)
    let resultado = document.querySelector('#resultado');

    resultado.innerHTML = `<h3>Seu IMC é ${IMC.toFixed(1)}</h3>`
    
    }
    else{
        alert('Preencha todos os campos')
    }
}