let drawingGrid = document.getElementById("drawing-grids");

for (i = 0; i < 256; i++) {
    let square = document.createElement("div");

    drawingGrid.appendChild(square);
}