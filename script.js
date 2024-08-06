let ans = document.getElementById('answer');
let que = document.getElementById('question');
let btn = document.getElementById('button');
let score = document.getElementById('score');
let score1=0;
let ansCorr;

function askQuestion(){
    let a = randomNumber();
    let b = randomNumber();
    que.innerText = `What is ${a} multiply by ${b} ?`;
    ansCorr = a * b ; 
}

btn.addEventListener('click',function(){
    if (ans.value == ansCorr ){
        score1 ++;
    }else{
        score1--;
    }
    score.innerText = score1;
    ans.value= "";
    askQuestion();
})


function randomNumber(){
    return Math.ceil(Math.random()*9);
    
}

window.addEventListener("load",askQuestion());
randomNumber();