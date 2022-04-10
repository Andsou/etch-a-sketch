let drawingGrid = document.getElementById("drawing-grids");


// Create 256 square divs
for (i = 0; i < 256; i++) {
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
            square.style.backgroundColor = '#616466';
        }
    });
});

allSqaures.forEach((square) => {
    square.addEventListener("mousedown", () => {
 
        square.style.backgroundColor = '#616466';

    });
});