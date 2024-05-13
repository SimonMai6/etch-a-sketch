function makeGrid(num){
    const container = document.querySelector("#container");
    
    for(let i = 1; num >= i; i++){
        const divRow = document.createElement("div");
        container.appendChild(divRow);

        for(let j = 1; num >= j; j++){
            const divColumn = document.createElement("div");
            divColumn.textContent = j;
            divRow.appendChild(divColumn);
        }
        

    }
}

makeGrid(16);

const button = document.querySelector("button");
button.addEventListener("click", () =>{
    const container = document.querySelector("#container");

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