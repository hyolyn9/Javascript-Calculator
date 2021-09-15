//canvas는 이 안에 픽셀들을 다룰 수 있는 html5의 한 요소
//css에 가로,세로 값을 주고 Context(픽셀 컨트롤)도 줘야한다.2d,3d 등이있다. 
// ctx.strokeStyle은 우리가 그릴 선 색.ctx.lineWidth는 그릴 선의 너비 px
// 마우스를 클릭하지 않고 움직일때는 beginPath() Path는 선. 
//ctx.moveTo를 이용해 패스를 만들면 x,y좌표로 패스를 옮긴다.

//마우스 클릭하면 패인팅 트루, ,lineto실행 만약 우리가 첫 번째로 ctx.moveTo(6,6); 6,6위치에 패스를 만들고 ctx.lineTo(7,7); 7,7에 마우스를 위치해서 클릭하면 패스부터 7,7까지 선이 만들어 짐.

//path는 캔버스 안에서 마우스를 움직이는 내내 발생 클릭하면 스트록이 만들어짐. lineTo는 현재의 sub-path에서 마지막 지점을 특정 좌표로 연결한다고 되어 있음. 그래서 그리는 것 처럼 보임.

//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

const canvas = document.getElementById("jsCanvas");
const ctx =canvas.getContext("2d"); //context사용
const colors= document.getElementsByClassName("jsColor");
const range=document.getElementById("jsRange");
const mode=document.getElementById("jsMode");
const saveBtn=document.getElementById("jsSave");

const INITIAL_COLOR="#2c2c2c";
const CANVAS_SIZE=700;

canvas.width=CANVAS_SIZE;
canvas.height =CANVAS_SIZE;

ctx.fillStyle="white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle=INITIAL_COLOR; //기본색상
ctx.fillStyle=INITIAL_COLOR;
ctx.lineWidth = 2.5; //기본 굵기
// ctx.fillStyle="green";
// ctx.fillRect(50, 20, 100, 49);
// ctx.fillStyle="purple"
// ctx.fillRect(80, 100, 100, 49);

let painting=false;
let filling=false;


function stopPainting(){
    painting=false;
}

function startPainting(){
    painting=true;
}

function onMouseMove(event){
    const x=event.offsetX;
    const y=event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}


function handleColorClick(event){
    const color=event.target.style.backgroundColor;
    ctx.strokeStyle=color;
    ctx.fillStyle= color;
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth=size;
}

function handleModeClick(){
    if(filling === true){
        filling=false;
        mode.innerText="Fill";
    }else{
        filling=true;
        mode.innerText="Paint";
    }
}

function handleCanvasClick(){
    if(filling){
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function handleCM(event){
    
event.preventDefault();
}

function handleSaveClick(){
    const image = canvas.toDataURL("image/jpeg");//defult는 png
    const link= document.createElement("a");
    link.href=image;
    link.download="PaintJS[🎨]";
    link.click();
    
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

console.log(Array.from(colors));
//array.from 메소드는 object로 부터 array를 만든다.
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
//color를 감자로해도 상관없음... 그냥 array안에 있는 각각의 아이템들을 대표하는 것뿐.

if(range){
    range.addEventListener("input",handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}