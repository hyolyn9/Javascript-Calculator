'use strict';


let currentOp = '',
    currentVal = 0;


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


//연산해주는 함수
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

// 연산버튼 클릭 시
function operatorBtnHandler(){
    const operatorBtns= document.querySelectorAll('.operator');
    operatorBtns.forEach(operatorBtn =>{
        
        operatorBtn.addEventListener('click', (evt) =>{
            const display = document.querySelector('.display');
            let displayVal = Number(display.value);

            if(evt.target.innerText === '='){
                display.value = calculate(currentOp, currentVal, displayVal);
                currentOp='';
                return;
            }
            if(currentOp === ''){
                currentVal = Number(display.value);
            }else{
                currentVal =calculate(currentOp, currentVal, displayVal);
            }
            display.value='';
            currentOp=evt.target.innerText;
        })
    })
}

function clearBtnHandler(){
    const clearBtn = document.querySelector('.clear');
}