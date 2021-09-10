const canvas = document.getElementById("jsCanvas");
const ctx =canvas.getContext("2d"); //context사용

ctx.strokeStyle="#2c2c2c"; //기본색상
ctx.lineWidth = 2.5; //기본 굵기

let painting=false;



function stopPainting(){
    painting=false;
}

function startPainting(){
    painting=true;
}

function onMouseMove(event){
    const x=event.offsetX;
    const y=event.offsetY;
}

function onMouseDown(event){
   painting=true;
    
}


function onMouseLeave(){
    painting=false;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}