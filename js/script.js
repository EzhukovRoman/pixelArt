let pane = document.querySelector("#pane");
let pickedColor = document.querySelector("#picked-color");
let color = "";



document.querySelector("#palete").addEventListener("click", (event)=>{
    if(event.target.id !== "palete"){
        color = event.target.id;
        pickedColor.style.backgroundColor = color;
    }    
    event.stopPropagation();
});