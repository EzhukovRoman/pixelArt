let pane = document.querySelector("#pane");
let pickedColor = document.querySelector("#picked-color");
let color = "";

document.querySelector("#palete").addEventListener("click", pickColor);

document.querySelector("#erace").addEventListener("click", erace);

document.querySelector("#pane").addEventListener("mousedown", draw);

document.querySelector("#pane").addEventListener("mouseup", stopDraw);

function draw(){  
    document.querySelectorAll(".cell").forEach(element=>{
        element.addEventListener("mouseover", (event)=>{
            event.target.style.backgroundColor = color;
        });
    });   
}

function stopDraw(){  
    document.querySelectorAll(".cell").forEach(element=>{
        element.removeEventListener("mouseover");
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