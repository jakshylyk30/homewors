//1
const plus = document.querySelector('.increment')
const minus = document.querySelector('.decrement')
const zero = document.querySelector('#zero')

let i = 0

plus.addEventListener('click', ()=>{
    i++
    if (i > 0){
        zero.innerText = i
        zero.style.color = 'green'
    }
})
minus.addEventListener('click',  ()=>{
    i--
    if (i >= 0){
        zero.innerText = i
        zero.style.color = 'red'
    }
})

//2
const box = document.querySelector('.box')
const y = document.querySelector('.y')
const x = document.querySelector('.x')

box.onmousemove = (j) => {
    y.innerText = 'X '+ j.screenY
    x.innerText = 'Y '+ j.screenX
}

//3
const redd = document.querySelector('.red')
const gren = document.querySelector('.green')
const yellow = document.querySelector('.yellow')


const color = prompt('введите цвет светофора').toLowerCase().trim()

const sv = (color) => {
    switch (color) {
        case 'red':
        case 'красный':
            redd.innerText = 'Stop'
            redd.style.background = 'red'
            redd.style.color = 'white'
            break
        case 'green':
        case 'зеленый':
            gren.innerText = 'Go'
            gren.style.background = 'green'
            gren.style.color = 'black'
            break
        case 'yellow':
        case 'желтый':
            yellow.innerText = 'Wait'
            yellow.style.background = 'yellow'
            yellow.style.color = 'black'
            break
        default:
            alert('error')
    }
}
sv(color)