const X_CLASS ='x'
const O_CLASS = 'circle'
const Winning_Combinations =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const cellElements = document.querySelector('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMesage')
const winningMessageTextElement= document.querySelector('[data-winning-message]')
const restartButton = document.getElementById('restartbutton')

startGame()

restartButton.addEventListener('click', startGame)

function startGame(){
    circleTurn =false
    cell.classList.remove(X_CLASS)
    cell.classList.remove(O_CLASS)
    cell.removeEventListener('click', handleClick)
    cellElements.forEach(cell =>{
    cell.addEventListener('click', handleClick, {once:true})
})
setBoardHover()
winningMessageElement.classList.remove('show')
}

function handleClick(e){
    //console.log('clicked')
    const cell = e.target
    const currentClass = circleTurn ? O_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if(checkWin(currentClass)){
        endGame(false)
    }else if(checkDraw(currentClass)){
        endGame(true)      
    }
    swapTurns()
    setBoardHover()
}

function endGame(draw){
    if(draw){
        winningMessageElement.innerText ='Draw!'
    }else{
        winningMessageTextElement.innerText = '${circleTurn ? Os:Xs} Wins!'
    }
    winningMessageElement.classList.add('show')
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

function checkWin(currentClass){
    Winning_Combinations.some(combination =>{
        return combination.every(index =>{
            return cellElements[index].classList.contains(currentClass)})
    })
}

function checkDraw(){
    return [...cellElements].every(cell =>{
        return cell.classList.contains(X_CLASS) ||
        cell.contains(O_CLASS)
    })
}
