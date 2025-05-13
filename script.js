// Container
const container = document.getElementById("container");
container.className = "container";

// Box
const square = document.createElement("div");
square.className = "square";


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

let squareHover = document.querySelectorAll(".square");

console.log(squareHover.length);
for (var i = 0; i < squareHover.length; i++) {
    squareHover[i].addEventListener("mouseenter", function () {
        this.style.backgroundColor = "black";
        console.log(i);
    });
}

