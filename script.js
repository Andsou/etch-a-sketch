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

    allSqaures.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            if(e.buttons == 1  || square.style.backgroundColor == '#1b1b1b'){
                square.style.backgroundColor = '#1b1b1b';
            }
        });
    });

    allSqaures.forEach((square) => {
        square.addEventListener("mousedown", () => {
            square.style.backgroundColor = '#1b1b1b';
            console.log('success');
        });
    });
}


setInk();

document.getElementById("clear-button").addEventListener("click", function() {
    let allSqaures = document.querySelectorAll(".square");

    do {
        var userNumber = parseInt(window.prompt("Enter number between 1 and 100 to set the size", ""), 10);
    } while(isNaN(userNumber) || userNumber > 100 || userNumber < 1);

    drawingGrid.style.gridTemplateColumns = "repeat(" + userNumber + ", auto)";
    drawingGrid.style.gridTemplateRows = "repeat(" + userNumber + ", fill)";
    setDrawingBoard(userNumber * userNumber);
    setInk();
    
    allSqaures.forEach((square) => {
        square.style.backgroundColor = "rgb(240, 238, 238)";
    });
});




