let pane = document.querySelector("#pane");
let pickedColor = document.querySelector("#picked-color");
let color = "";

document.querySelector("#palete").addEventListener("click", pickColor);

document.querySelector("#erace").addEventListener("click", erace);

document.querySelector("#pane").addEventListener("mousedown", draw);

document.querySelector("#pane").addEventListener("mouseup", stopDraw);

document.querySelector("#custom-color").addEventListener("input", pickCustomColor);

function draw(){  
    document.querySelectorAll(".cell").forEach(element=>{
        element.addEventListener("mouseenter", changeColor);
    });   
}

function changeColor(){
        event.target.style.backgroundColor = color;   
}

function stopDraw(){  
    document.querySelectorAll(".cell").forEach(element=>{
        element.removeEventListener("mouseenter", changeColor);
    });   
}

function erace(){    
    document.querySelectorAll(".cell").forEach(element => {
        element.style.backgroundColor = "white";
    });
}

function pickColor(){
    if(event.target.id !== "palete"){
        color = event.target.id;
        pickedColor.style.backgroundColor = color;
    }    
    event.stopPropagation();
}

function pickCustomColor(event){
    color = event.target.value;
    pickedColor.style.backgroundColor = color;
}