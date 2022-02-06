// get the drag-items
const dragItems = document.querySelectorAll('.drag-item');

// add dragstart and dragend event listeners to the drag-items
for(const dragItem of dragItems) {
    dragItem.addEventListener('dragstart', dragStart);
    dragItem.addEventListener('dragend', dragEnd);
}

let dropItem; // our drop item we are dragging 
let cellVal1, cellVal2, cellVal3, cellVal4, cellVal5, cellVal6, cellVal7, cellVal8, cellVal9; // values for each cell



function dragStart(e) {
    setTimeout(()=> this.className = 'invisible', 0);
    dropItem = e.target;
    // TODO: fix bug - if moving a drag item from a grid item, set grid item's value to 0 because the drag item is no longer there
    let parent;
    parent = this.parentNode;
    switch(parent.id) {
        case 'grid-item1':
            cellVal1 = 0;
            break;
        case 'grid-item2':
            cellVal2 = 0;
            break;
        case 'grid-item3':
            cellVal3 = 0;
            break;
        case 'grid-item4':
            cellVal4 = 0;
            break;
        case 'grid-item5':
            cellVal5 = 0;
            break;
        case 'grid-item6':
            cellVal6 = 0;
            break;
        case 'grid-item7':
            cellVal7 = 0;
            break;
        case 'grid-item8':
            cellVal8 = 0;
            break;
        case 'grid-item9':
            cellVal9 = 0;
            break;
    }
}

function dragEnd() {
    this.className = 'drag-item';
}

// get the grid-items for dropping
const gridDropItems = document.querySelectorAll('.grid-item');

// add event listeners to gridDropItems
for(const gridDropItem of gridDropItems) {
    gridDropItem.addEventListener('dragover', dragOver);
    gridDropItem.addEventListener('dragenter', dragEnter);
    gridDropItem.addEventListener('dragleave', dragLeave);
    gridDropItem.addEventListener('drop', dragDrop);
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    
}

cellVal1 = 0;
cellVal2 = 0;
cellVal3 = 0;
cellVal4 = 0;
cellVal5 = 0;
cellVal6 = 0;
cellVal7 = 0;
cellVal8 = 0;
cellVal9 = 0;

let rowSum1, rowSum2, rowSum3, colSum1, colSum2, colSum3, diagSum1, diagSum2;

function dragDrop(e) {
    if(this.innerHTML === '') { // don't append the drop item if the grid item already has a drop item 
        this.append(dropItem);
        // assign values to cells based on what grid-item is dropped
        switch(this.id) {
            case 'grid-item1':
                cellVal1 = dropItem.innerText;
                break;
            case 'grid-item2':
                cellVal2 = dropItem.innerText;
                break;
            case 'grid-item3':
                cellVal3 = dropItem.innerText;
                break;
            case 'grid-item4':
                cellVal4 = dropItem.innerText;
                break;
            case 'grid-item5':
                cellVal5 = dropItem.innerText;
                break;
            case 'grid-item6':
                cellVal6 = dropItem.innerText;
                break;
            case 'grid-item7':
                cellVal7 = dropItem.innerText;
                break;
            case 'grid-item8':
                cellVal8 = dropItem.innerText;
                break;
            case 'grid-item9':
                cellVal9 = dropItem.innerText;
                break;
            default:
                cellVal1 = 0;
                cellVal2 = 0;
                cellVal3 = 0;
                cellVal4 = 0;
                cellVal5 = 0;
                cellVal6 = 0;
                cellVal7 = 0;
                cellVal8 = 0;
                cellVal9 = 0;
        }

        // this is where I can access the cell values
        // convert all the cell values to numbers
        cellVal1 = Number(cellVal1);
        cellVal2 = Number(cellVal2);
        cellVal3 = Number(cellVal3);
        cellVal4 = Number(cellVal4);
        cellVal5 = Number(cellVal5);
        cellVal6 = Number(cellVal6);
        cellVal7 = Number(cellVal7);
        cellVal8 = Number(cellVal8);
        cellVal9 = Number(cellVal9);

        rowSum1 = cellVal1 + cellVal2 + cellVal3;
        rowSum2 = cellVal4 + cellVal5 + cellVal6;
        rowSum3 = cellVal7 + cellVal8 + cellVal9;

        colSum1 = cellVal1 + cellVal4 + cellVal7;
        colSum2 = cellVal2 + cellVal5 + cellVal8;
        colSum3 = cellVal3 + cellVal6 + cellVal9;

        diagSum1 = cellVal1 + cellVal5 + cellVal9;
        diagSum2 = cellVal3 + cellVal5 + cellVal7;

        // make sums of rows,columns, and diagonals the innerHTML of result view
        const resultView = document.querySelector('.result-view');
        resultView.innerHTML = `
            <ul>
                <h2>Row Sums</h2>
                <li>Row 1 Sum: ${rowSum1}</li>
                <li>Row 2 Sum: ${rowSum2}</li>
                <li>Row 3 Sum: ${rowSum3}</li>
                <h2>Column Sums</h2>
                <li>Column 1 Sum: ${colSum1}</li>
                <li>Column 2 Sum: ${colSum2}</li>
                <li>Column 3 Sum: ${colSum3}</li>
                <h2>Diagonal Sums</h2>
                <li>Diagonal 1 Sum: ${diagSum1}</li>
                <li>Diagonal 2 Sum: ${diagSum2}</li>
            </ul>
        `;
        
        // add an event lister to the verify-btn
        const verifyBtn = document.querySelector('.verify-btn');
        verifyBtn.addEventListener('click', verifySums);

        function verifySums() {
            if((rowSum1 === 15) && (rowSum2 === 15) && (rowSum3 === 15) && (colSum1 === 15) && (colSum2 === 15) && (colSum3 === 15) && (diagSum1 === 15) && (diagSum2 === 15)){
                displayWinnerScreen();
            }
            else {
                displayLoserScreen();
            }
        }
    }
}

function displayWinnerScreen() {
    document.body.innerHTML = `
        <div class="winner-screen">
            <h1>You found a valid solution!</h1>
            <a href="GameScreen.html"><button>Play Again</button></a>
        </div>
    `;
    document.body.style.backgroundColor = '#14a76c';
}

function displayLoserScreen() {
    document.body.innerHTML = `
        <div class="loser-screen">
            <h1>Your solution was not valid :(</h1>
            <a href="GameScreen.html"><button>Try Again</button></a>
        </div>
    `;
    document.body.style.backgroundColor = '#ff652f';
}


// add an event listener to the reset button
document.querySelector('.reset-btn').addEventListener('click', ()=>{
    window.location.reload();
});