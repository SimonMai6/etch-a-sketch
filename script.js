const container = document.querySelector("#container");

for(let i = 1; 16 >= i; i++){
    const divRow = document.createElement("div");
    // divRow.textContent = i;
    container.appendChild(divRow);

    for(let j = 1; 16 >= j; j++){
        const divColumn = document.createElement("div");
        divColumn.textContent = j;
        divRow.appendChild(divColumn);
    }
    

}