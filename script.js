const X_CLASS ='x'
const O_CLASS = 'circle'
const cellElements = document.querySelector('[data-cell]')

cellElements.forEach(cell =>{
    cell.addEventListener('click', handleClick, {once:true})
})

function handleClick(e){
    //console.log('clicked')
}