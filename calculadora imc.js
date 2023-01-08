const form = document.querySelector('#formulario');

 form.addEventListener('submit', function(evento){

    evento.preventDefault();


    const inputpeso = document.querySelector ('#peso');
    const inputaltura = document.querySelector ('#altura');
    const grau = document.querySelector ('#grau');
    const resultado = document.querySelector ('#resultado');

    const peso = Number (inputpeso.value)
    const altura = Number (inputaltura.value)

   let imc = ( peso / (altura*altura)).toFixed(2);

   
   let nivel
 
   if(imc < 18.5){
       nivel = 'Abaixo do peso'
       grau.style.color = "#ff0b03"
   }
   else if(imc >= 18.5 && imc <= 24.9){
       nivel = 'Peso normal'
       grau.style.color = "#03ff28"
   }
   else if(imc >= 25 && imc <= 29.9){
       nivel = 'Sobrepeso'
       grau.style.color = "##ff9203"
   }
   else if(imc >= 30 && imc <= 34.9){
       nivel = 'Obesidade grau I'
       grau.style.color = "#ff0b03"
   }
   else if(imc >= 35 && imc <= 39.9){
       nivel = 'Obesidade grau II'
       grau.style.color = "#ff0b03"
   }
   else if(imc >= 40){
       nivel = 'Obesidade grau III'
       grau.style.color = "#ff0b03"
   }
   
   //Validando dados
   if(peso == '' || altura == ''){
       resultado.style.color = "#ff0b03"
       resultado.innerHTML = 'Verifique seus dados e tente novamente!'
   }else{
       grau.innerHTML = `${nivel}`
       resultado.innerHTML = `Seu IMC é de ${imc}`
   }
});
