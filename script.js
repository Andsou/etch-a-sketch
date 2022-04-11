let drawingGrid = document.getElementById("drawing-grids");


// Create 256 square divs
for (let i = 0; i < 225; i++) {
    let square = document.createElement("div");
    square.className = "square";

    drawingGrid.appendChild(square);
}

let allSqaures = document.querySelectorAll(".square");
let hoverEffect = '.square :hover{ background-color: #00ff00 }';
let mouseDown = false;


allSqaures.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
        if(e.buttons == 1 || e.buttons == 3){
            square.style.backgroundColor = '#1b1b1b';
        }
    });
});

allSqaures.forEach((square) => {
    square.addEventListener("mousedown", () => {
        square.style.backgroundColor = '#1b1b1b';
    });
});

let promptMe = () => {
    let user = prompt("Enter number between 1 and 100 to set the size");
    const testInput = new RegExp(/^\d+$/);

    if (!testInput.test(user) || user == null) {
        user = prompt("Enter number between 1 and 100 to set the size");
    }
    
    allSqaures.forEach((square) => {
        square.style.backgroundColor = "rgb(240, 238, 238)";
    });
}