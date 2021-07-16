'use strict';


//1 숫자 배열을 변수에 저장, 클릭시 배열 각각에 클릭이벤트, 숫자 display
//2. 연산자함수
//3. +, -, *, /, = 클릭시 display빈화면 출력 , 연산자 함수 이용하여 계산, = 버튼 클릭시 계산 결과 보여줌
//4. clear btn 클릭 시 display 리셋


let currentOp='',
    currentVal=0;


function digitBtnHandler(){
    const digits= document.querySelectorAll('.digit');
    digitBtnHandler.forEach(digit => {
        digit.addEventListener('click', (evt) => {
            const display=document.querySelector('#input_box');
            let targetDigit =evt.target.innerText;
            display.value += targetDigit;
        });
    });
};




  digitBtnHandler();