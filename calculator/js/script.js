'use strict';


// digit btns 클릭시 숫자가 dispaly에 출력
function digitBtnHandler(){
    const digits = document.querySelectorAll('.digit');
    digits.forEach( digit=> { digit.addEventListener('click', (evt)=>{
        const display= document.querySelector('.display');
        let targetDigit = evt.target.innerText;
        display.value +=targetDigit;
    })
})
};


// 연산버튼 클릭시
function calculate(operator, val1, val2){
    if(operator === '+'){
        return val1 + val2;
    }else if(operator === '-'){
        return val1 - val2;
    }else if(operator === '*'){
        return val1 * val2;
    }else if(operator === '/'){
        return val1 / val2;
    }
}


function operatorBtnHandler(){
    const operatorBtns = document.querySelectorAll('.operator');
     operatorBtns.forEach( operatorBtn => {
        operatorBtns.addEventListener('click', (evt)=> {
            const display= document.querySelector('.display');
            let displayVal= Number(dispaly)
     })})
}