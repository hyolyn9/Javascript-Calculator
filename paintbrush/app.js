const canvas = document.getElementById("jsCanvas");
const ctx =canvas.getContext("2d");
let painting=false;

function onMouseMove(event){
    const x=event.offsetX;
    const y=event.offsetY;
}

function stopPainting(){
    painting=false;
}

function onMouseDown(event){
   painting=true;
    
}

function onMouseUp(event){
    stopPainting();
}

function onMouseLeave(){
    painting=false;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown",onMouseDown);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("mouseleave",stopPainting);
}