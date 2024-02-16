function colorSquare(){
    square.setAttribute("style", "background-color:blue;")

}

function colorGen() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

function createGrid(dim){
    grid.innerHTML = '';
    for(let i = 0; i < dim; i++){
        const line = document.createElement('div');
        line.classList.add('line-container');  
        for(let j = 0; j < dim; j++){
            const square = document.createElement('div');
            square.classList.add('single-square');  
            square.addEventListener("mouseover", () => {
                if(!square.classList.contains('touched-square')){
                    //console.log("Mouse in");
                    square.classList.add('touched-square');
                }
            });
            line.appendChild(square);
        }
        grid.appendChild(line);
    }
}

function createProgressiveGrid(dim){
    grid.innerHTML = '';
    for(let i = 0; i < dim; i++){
        const line = document.createElement('div');
        line.classList.add('line-container');  
        for(let j = 0; j < dim; j++){
            const square = document.createElement('div');
            square.classList.add('single-square');  
            square.style.filter = "brightness(1)";
            square.addEventListener("mouseover", () => {
                let regExp = /\(([^)]+)\)/;
                let oldBrightness = regExp.exec(square.style.filter);
                if(oldBrightness[1] != "0"){
                    //console.log(oldBrightness[1]);
                    let newBrightness = parseFloat(oldBrightness[1]) - 0.1;
                    square.style.filter = "brightness(" + newBrightness + ")";
                } 
            });
            line.appendChild(square);
        }
        grid.appendChild(line);
    }
}

function createRainbowGrid(dim){
    grid.innerHTML = '';
    for(let i = 0; i < dim; i++){
        const line = document.createElement('div');
        line.classList.add('line-container');  
        for(let j = 0; j < dim; j++){
            const square = document.createElement('div');
            square.classList.add('single-square');  
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = colorGen();
            });
            line.appendChild(square);
        }
        grid.appendChild(line);
    }
}

const grid = document.querySelector('.grid');
const newGrid = document.querySelector('.new-grid-button');
const progressiveGrid = document.querySelector('.progressive-grid-button');
const rainbowGrid = document.querySelector('.rainbow-grid-button');

createGrid(16);

newGrid.addEventListener('click', () => {
    let gridSize = parseInt(prompt("A new standard grid will be created. Enter the the number of squares per side for the new grid, between 1 and 100:", "64"));
    if(!isNaN(gridSize) && (gridSize > 0 && gridSize < 101)){
        createGrid(gridSize);
        alert("A new "+gridSize+"x"+gridSize+" grid has been created!");
    } else if(!isNaN(gridSize)){ alert(gridSize+" is not a number between 1 and 100!");
    } else alert("This is not a number!");
    //console.log(gridSize);
});

progressiveGrid.addEventListener('click', () => {
    let gridSize = parseInt(prompt("A new progressive grid will be created. Enter the the number of squares per side for the new grid, between 1 and 100:", "64"));
    if(!isNaN(gridSize) && (gridSize > 0 && gridSize < 101)){
        createProgressiveGrid(gridSize);
        alert("A new "+gridSize+"x"+gridSize+" progressive grid has been created!");
    } else if(!isNaN(gridSize)){ alert(gridSize+" is not a number between 1 and 100!");
    } else alert("This is not a number!");
});

rainbowGrid.addEventListener('click', () => {
    let gridSize = parseInt(prompt("A new rainbow grid will be created. Enter the the number of squares per side for the new grid, between 1 and 100:", "64"));
    if(!isNaN(gridSize) && (gridSize > 0 && gridSize < 101)){
        createRainbowGrid(gridSize);
        alert("A new "+gridSize+"x"+gridSize+" rainbow grid has been created!");
    } else if(!isNaN(gridSize)){ alert(gridSize+" is not a number between 1 and 100!");
    } else alert("This is not a number!");
});