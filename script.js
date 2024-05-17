const container = document.querySelector("#container");
const RAINBOW = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let index = 0;
const rainbowButton = document.querySelector("#rainbow");
let isRainbow = false;
const sizeButton = document.querySelector("#size");
makeGrid(16);


function makeGrid(num){
    for(let i = 1; num >= i; i++){
        const divRow = document.createElement("div");
        container.appendChild(divRow);

        for(let j = 1; num >= j; j++){
            let size = (container.clientWidth / num)-2;
            const divColumn = document.createElement("div");
            divColumn.style.width = `${size}px`;
            divColumn.style.height = `${size}px`;
            divRow.appendChild(divColumn);
        }
    }
}

function changeRainbow(event){
    event.target.style.backgroundColor = RAINBOW[index];
    ++index;
    if(!(index < RAINBOW.length)){
        index-=RAINBOW.length;
    }
}

sizeButton.addEventListener("click", () =>{
    const userInput = prompt("Enter a number that is less than or equal to a hundred.", "");
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    if(100 >= userInput){
        makeGrid(userInput);
    }
    else{
        container.textContent = "Too big of a number."
    }
});

container.addEventListener("mouseover", (event) =>{
    if(event.target.id === "container"){
    }
    else if(isRainbow){
        changeRainbow(event);
    }
    else{
        event.target.style.backgroundColor = "black";
    }
    
});

rainbowButton.addEventListener("click", () => {
    isRainbow = true;
});
