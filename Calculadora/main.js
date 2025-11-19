//VARIAVEIS ADICIONAIS
const primeiro =[];
const segundo=[];
const terceiro=[];
let sinal ='';
let calculo=null;
let calculo2=null;
let mudanca =true;

//ENTRADA DE NUMEROS
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
const n3 = document.querySelector('#n3');
const n4 = document.querySelector('#n4');
const n5 = document.querySelector('#n5');
const n6 = document.querySelector('#n6');
const n7 = document.querySelector('#n7');
const n8 = document.querySelector('#n8');
const n9 = document.querySelector('#n9');
const n0 = document.querySelector('#n0');
const result = document.querySelector('#result');

// ENTRADA DE CARACTERES
const soma =document.querySelector('#soma');
const subtracao = document.querySelector('#subtracao')
const multiplicacao = document.querySelector('#multiplicacao');
const divisao = document.querySelector('#divisao');
const expoente = document.querySelector('#expoente');

//ENTRADA DE CARACTERES EXPECIAIS
const igual = document.querySelector('#igual');
const del = document.querySelector('#del');
const ac = document.querySelector('#ac');

//FUNCAO PARA APARECER NÚMEROS NA TELA
function entrada(numero=null){
    if (Number.isInteger(numero)) {
        primeiro.push(numero);
        console.log(primeiro)
        let caracter =" "
        for(let i=0; i<primeiro.length;i++){
            caracter+=primeiro[i];
        }
        calculo =parseInt(caracter);
        return result.textContent=` ${calculo} `; 
    }
    switch (numero) {
        case 'del':
            primeiro.pop();
            let caract =' ';
            for(let i=0; i<primeiro.length;i++){
                caract+=primeiro[i];
            }
            calculo =parseInt(caract);
            return result.textContent=`${caract}`
            break;
        default:
            return result.innerHTML="ERRO..."
            break;
    }
}

//FUNCAO PARA APARECER NÚMEROS NA TELA
function entrada2(numero=null){
    if (Number.isInteger(numero)) {
        segundo.push(numero);
        console.log(segundo)
        let caracter =" "
        for(let i=0; i<segundo.length;i++){
            caracter+=segundo[i];
        }
        calculo2 =parseInt(caracter);
        return result.textContent=`${caracter}`;  
    }
    switch (numero) {
        case 'del':
            segundo.pop();
            let caract =' ';
            for(let i=0; i<segundo.length;i++){
                caract+=segundo[i];
            }
            calculo2 =parseInt(caract);
            return result.textContent=`${caract}`
            break;
        default:
            return result.innerHTML="ERRO..."
            break;
    }
}


//FUNCAO PARA MOSTRAR OS SINAIS
function operacoes(sinais){    
    switch (sinais) {
        case "+":
            sinal='+'
            mudanca=false;
            return result.textContent=`+`
            break;
        case "-":
            sinal='-';
            mudanca=false;
            return result.textContent=`-`
            break
        case "*":
            sinal='*';
            mudanca=false;
            return result.textContent=`*`
            break
        case "/":
            sinal='/'
            mudanca=false;
            return result.textContent=`/`
            break
        case "ˆ":
            sinal='ˆ'
            mudanca=false;
            return result.textContent=`ˆ`
            break
        default:
            return result.innerHTML="ERRO..."
            break;
    }
}




//ENTRADA DE NÚMEROS
n0.addEventListener('click', (evento)=>{
    evento.preventDefault;
    if (mudanca) {
        entrada(0);  
    }else{
        entrada2(0);
    }
});
n1.addEventListener('click', (evento)=>{
    evento.preventDefault;
    if (mudanca) {
        entrada(1);  
    }else{
        entrada2(1);
    }
});

n2.addEventListener('click', (evento)=>{
    evento.preventDefault;
    if (mudanca) {
        entrada(2);  
    }else{
        entrada2(2);
    }
});
n3.addEventListener('click', (evento)=>{
    evento.preventDefault;
    if (mudanca) {
        entrada(3);  
    }else{
        entrada2(3);
    }
});
n4.addEventListener('click', (evento)=>{
    evento.preventDefault;
    if (mudanca) {
        entrada(4);  
    }else{
        entrada2(4);
    }
});
n5.addEventListener('click', (evento)=>{
    evento.preventDefault;
    if (mudanca) {
        entrada(5);  
    }else{
        entrada2(5);
    }
});
n6.addEventListener('click', (evento)=>{
    evento.preventDefault;
    if (mudanca) {
        entrada(6);  
    }else{
        entrada2(6);
    }
});
n7.addEventListener('click', (evento)=>{
    evento.preventDefault;
    if (mudanca) {
        entrada(7);  
    }else{
        entrada2(7);
    }
});
n8.addEventListener('click', (evento)=>{
    evento.preventDefault;
    if (mudanca) {
        entrada(8);  
    }else{
        entrada2(8);
    }
});
n9.addEventListener('click', (evento)=>{
    evento.preventDefault;
    if (mudanca) {
        entrada(9);  
    }else{
        entrada2(9);
    }
});


//ENTRADA DE CARACTERES
soma.addEventListener('click', (evento)=>{
    evento.preventDefault;
    operacoes('+')
});
subtracao.addEventListener('click', (evento)=>{
    evento.preventDefault;
    operacoes('-')
});
multiplicacao.addEventListener('click', (evento)=>{
    evento.preventDefault;
    operacoes('*')
});
divisao.addEventListener('click', (evento)=>{
    evento.preventDefault;
    operacoes('/')
});
expoente.addEventListener('click', (evento)=>{
    evento.preventDefault;
    operacoes('ˆ')
});


//FUNCAO DE IGUAL PARA APRESENTAR OS RESULTADOS
igual.addEventListener('click', (evento)=>{
evento.preventDefault;
   primeiro.length=0;
   segundo.length=0;
   mudanca=true;
   console.log(primeiro,segundo)

    switch(sinal){
        case "+":
            result.textContent= calculo+calculo2;
            terceiro.push(calculo+calculo2);
            console.log(terceiro)
            calculo=0;
            calculo2=0;
            mudanca=true
            break
        case "-":
            result.textContent= calculo-calculo2;
            terceiro.push(calculo-calculo2);
            console.log(terceiro)
            calculo=0;
            calculo2=0;
            mudanca=true
            break
        case "*":
            //result.style.textalign='end';
            result.textContent= calculo*calculo2;
            //result.style.textalign='center';
            terceiro.push(calculo*calculo2);
            console.log(terceiro)
            calculo=0;
            calculo2=0;
            mudanca=true
            break
        case "/":
            result.textContent= calculo/calculo2;
            terceiro.push(calculo/calculo2);
            console.log(terceiro)
            calculo=0;
            calculo2=0;
            mudanca=true
            break
        case "ˆ":
            calculo=Math.pow(calculo,calculo2)
            result.textContent= calculo;
            terceiro.push(calculo);
            console.log(terceiro)
            calculo=0;
            calculo2=0;
            mudanca=true
            break
        default:
            return result.innerHTML="ERRO..."
            break
    }
  
});

//FUNCAO DE DELETAR UM ELEMENTO
del.addEventListener('click', (evento)=>{
    evento.preventDefault;
    if (mudanca) {
       entrada("del");
    }else{
        entrada2("del")
    }
});

ac.addEventListener('click',(evento)=>{
    evento.preventDefault;
    primeiro.length=0;
    segundo.length=0;
    terceiro.length=0;
    calculo=0;
    calculo2=0;
    mudanca=true
    sinal='';
    result.textContent='Calculo...';
});
