const passwordlen=document.querySelector('#password-len');
const numInput=document.querySelector('#number-input');
const upper=document.querySelector('#upper');
const lower=document.querySelector('#lower');
const symbol=document.querySelector('#symbol');
const passwordGenerateBtn=document.querySelector('#password-generate');
const generatedPass=document.querySelector('.pw');

const numbers='0123456789';
const upperCaseLetter='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetter='abcdefghijklmnopqrstuvwxyz';
const symbols='!@#$%^&*()_+=';

function getUpperCaseLetters(){
    return upperCaseLetter[Math.floor(Math.random()*upperCaseLetter.length)];
}

function getLowercaseletters(){
   return lowerCaseLetter[Math.floor(Math.random()*lowerCaseLetter.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function getNumbers(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function generatePassword(){
   
    let len=passwordlen.value;
    let password='';
        
    for(let i=0;i<len;i++){
        const x=generateX();
        password +=x;
    }

 generatedPass.innerText=password;
}

function generateX(){
    const xs=[];
    if(upper.checked){
        xs.push(getUpperCaseLetters());
    }

    if(lower.checked){
        xs.push(getLowercaseletters());
    }
    if(symbol.checked){
        xs.push(getSymbol());
    }
    
    if(numInput.value!=0){
        
        xs.push(getNumbers())
    }

    if(xs.length === 0) 
    return "";

    return xs[Math.floor(Math.random()* xs.length)];
}

passwordGenerateBtn.addEventListener('click',generatePassword);