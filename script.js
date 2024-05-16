const container = document.querySelector("#container");


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

makeGrid(16);


const button = document.querySelector("button");
button.addEventListener("click", () =>{

    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }

    const userInput = prompt("Enter a number that is less than or equal to a hundred.", "");
    if(100 >= userInput){
        makeGrid(userInput);
    }
    else{
        container.textContent = "Too big of a number."
    }
    

});


container.addEventListener("mouseover", (event) =>{

    if(!(event.target.id === "container")){
        event.target.style.backgroundColor = "black";
    }
    
});