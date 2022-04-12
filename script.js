let drawingGrid = document.getElementById("drawing-grids");

let setDrawingBoard = (size) => {
    for (let i = 0; i < size; i++) {
        let square = document.createElement("div");
        square.className = "square";
    
        drawingGrid.appendChild(square);
    }
}

let setInk = () => {
    let allSqaures = document.querySelectorAll(".square");
    let black = '#1b1b1b';
    allSqaures.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = '#1b1b1b';
            console.log("hi");
        });
    });
}

let clearBoard = () => { 
    document.querySelectorAll(".square").forEach(e => e.remove());
}

setDrawingBoard(256);
setInk();

document.getElementById("clear-button").addEventListener("click", function() {
    let allSqaures = document.querySelectorAll(".square");
    clearBoard();
    do {
        var userNumber = parseInt(window.prompt("Enter number between 1 and 64 to set the grid size. (Ie 5 = 5x5 drawing board)", ""), 10);
    } while(isNaN(userNumber) || userNumber > 64 || userNumber < 1);


    drawingGrid.style.gridTemplateColumns = "repeat(" + userNumber + ", auto)";
    drawingGrid.style.gridTemplateRows = "repeat(" + userNumber + ", fill)";
    setDrawingBoard(userNumber * userNumber);
    setInk();
    
    allSqaures.forEach((square) => {
        square.style.backgroundColor = "rgb(240, 238, 238)";
    });
});