
/*
const min=50;
const max=100;

let randomNum=Math.floor(Math.random()*(max-min))+min ; // 0-1 arasında random sayı üretilir burada 50-100 arasında bir sayı üretiyoruz

console.log(randomNum);
*/

const myButton= document.getElementById('myButton');
const myLabel= document.getElementById('myLabel');
const min=1;
const max=6;
let randomNum;

myButton.onclick=function(){

    randomNum=Math.floor(Math.random()*max)+min;
    myLabel.textContent=randomNum;
}