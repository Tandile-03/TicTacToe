const X_CLASS ='x'
const O_CLASS = 'circle'
const cellElements = document.querySelector('[data-cell]')
const board = document.getElementById('board')

startGame()
function startGame(){
    circleTurn =false
    cellElements.forEach(cell =>{
    cell.addEventListener('click', handleClick, {once:true})
})
}

function handleClick(e){
    //console.log('clicked')
    const cell = e.target
    const currentClass = circleTurn ? O_CLASS : X_CLASS
    placeMark(cell, currentClass) 
    swapTurns()
    setBoardHover()
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

function swapTurns(){
    circleTurn = !circleTurn
}

function setBoardHover(){
    board.classList.remove(X_CLASS)
    board.classList.remove(O_CLASS)
    if (circleTurn){
        board.classList.add(O_CLASS)
    }else{
        board.classList.add(X_CLASS)
    }
}