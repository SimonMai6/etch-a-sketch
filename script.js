const container = document.querySelector("#container");
const rgbButton = document.querySelector("#rgb");
const sizeButton = document.querySelector("#size");
const opacityButton = document.querySelector("#opacity");

let isOpacity = false;
let isRGB = false;
let index = 0;



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
            divColumn.classList.add("cell");
            divRow.appendChild(divColumn);
        }
    }
}
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function changeColor(event){
    event.target.style.backgroundColor = `rgb(${getRandomInt(255)},
    ${getRandomInt(255)},${getRandomInt(255)})`;

}

function changeOpacity(event){
    let rgba = event.target.style.background;
    if(!(rgba.length === 12)){
        event.target.style.background = changeAlpha(rgba);
    }
}

function changeAlpha(rgba){
    if(rgba.length === 16){
        return `rgba(0, 0, 0, ${Number(rgba.slice(rgba.length - 3, rgba.length-2))+0.1})`;
    }
    else{
        return `rgba(0, 0, 0, ${Number(rgba.slice(rgba.length - 4, rgba.length-1))+0.1})`;
    }
    
}



sizeButton.addEventListener("click", () =>{
    const userInput = prompt("Enter a number that is less than or equal to a hundred.", "");
    if(userInput === ""){
    }
    else if(100 >= userInput){
        while(container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
        makeGrid(userInput);
    }
    else{
        container.textContent = "Too big of a number."
    }
});

container.addEventListener("mouseover", (event) =>{
    if(isOpacity){
        changeOpacity(event);
    }
    else if(isRGB){
        changeColor(event);
    }
    else{
        event.target.style.backgroundColor = "black";
    }
    
});

opacityButton.addEventListener("click", () => {
    const cell = document.querySelectorAll("div.cell");
    for(let i = 0; i < cell.length ; ++i){
        cell[i].style.background = `rgba(0, 0, 0, 0)`;
    }

    isRGB = false;
    isOpacity = true;
});

rgbButton.addEventListener("click", () => {
    isOpacity = false;
    isRGB = true;
});
