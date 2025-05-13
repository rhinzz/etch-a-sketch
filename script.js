// Container
const container = document.getElementById("container");
container.className = "container";

// Square
const square = document.createElement("div");
square.className = "square";
square.setAttribute("draggable", "true");


// Create Square Grid
function createSquare(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let j = 0; j < num; j++) {
            row.appendChild(square.cloneNode(true));
        }

        container.appendChild(row.cloneNode(true));
    }
}

createSquare(16);

// Change color when mouse is dragged
const changeSquareColor = document.querySelectorAll(".square");

for (var i = 0; i < changeSquareColor.length; i++) {
    changeSquareColor[i].addEventListener("dragenter", function () {
        this.style.backgroundColor = "black";
    });
}