// Container
const container = document.getElementById("squareContainer");
container.className = "squareContainer";

// Square
const square = document.createElement("div");
square.className = "square";
square.setAttribute("draggable", "true");


document.getElementById("reset").addEventListener("click", () => {
    document.querySelectorAll(".row").forEach(e => e.remove());
    let num = prompt("Enter grid size (1-100):", 16);
    createSquare(+num);
    changeSquareColor();
});

createSquare(16);
changeSquareColor();

// Create Square Grid
function createSquare(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let j = 0; j < num; j++) {
            square.style.width = square.style.height = `${800 / num}px`;
            row.appendChild(square.cloneNode(true));
        }

        container.appendChild(row.cloneNode(true));
    }
}

// Change color when mouse is dragged
function changeSquareColor() {
    const squareColor = document.querySelectorAll(".square");

    for (var i = 0; i < squareColor.length; i++) {
        squareColor[i].addEventListener("dragenter", function () {
            this.style.backgroundColor = "black";
        });
    }
}
