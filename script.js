
document.querySelector('body').addEventListener('contextmenu',(e)=>{
    e.preventDefault()
})
document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
})
const result=document.querySelector('input')
result.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        result.value=eval(result.value)
    }
})

//enter to solve
window.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        result.value=eval(result.value)
    }
})

// delete button to remove all character in calc display
window.addEventListener('keydown', (e) => {
    if (e.key === "Delete") {
        result.value = ''
    }
})
//Press any key to focus on calc display
window.addEventListener('keydown', (e) => {
    result.focus()
})

const buttons =document.querySelectorAll('span')
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.textContent==='C'){
            result.value=""
        }
        else if(e.target.textContent==='DEL'){
            result.value=result.value.slice(0,-1)
        }
        else if(e.target.textContent==='='){
            result.value=eval(result.value)
        }
        else{
            if(e.target.textContent==='DEL'){
                const del=document.querySelector('.backspace')
                del.textContent=''
            }
            else{
                result.value+=`${e.target.textContent}`
            }
            
        }
    })
})
