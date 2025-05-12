// Container
const container = document.getElementById("container");
container.className = "container";

// Box
const square = document.createElement("div");
square.className = "square";

// Create Square Grid
function createSquare(num){
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

