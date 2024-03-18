const gridElement = document.getElementById("grid"); // Assign the grid to a constant 

// Creates the grid with specific amount of squares
function createGrid(size) {
    gridElement.innerHTML = ''; // Set the gridElement to empty

    const gridSize = Math.sqrt(size); // Get the size of the grid
    const squareSize = 960 / gridSize; // Calculate the size of each square

    gridElement.style.width = '960px'; // Set width of the grid in px
    gridElement.style.height = '960px'; // Set height of the grid in px

    for(let i = 0; i < size; i++) { // Creates square divs with class square-element and specified width, heigth, then appends to grid
        const squareElement = document.createElement("div");
        squareElement.classList.add('square-element');
        squareElement.style.width = squareSize + 'px';
        squareElement.style.height = squareSize + 'px';
        gridElement.appendChild(squareElement);
    
    }
    

}

// This function is used to create a new grid with the wanted amount of squares 
function newGrid() {
    let newSize = prompt('Enter the wished size for your new grid (numbers of squares, max 100)');
    newSize = parseInt(newSize);

    if (newSize && newSize > 0 && newSize <=100) {
        createGrid(newSize * newSize);
    }
    else {
        alert('Please enter a valid number, less than 100');
    }

}

createGrid(16 * 16);

