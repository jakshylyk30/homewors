//1

let s = Number(prompt('введите первое число'))
let d = Number(prompt('введите второе число'))

function jambo(s,d) {
    if (s > d){
        alert('число ' + d + ' меньше')
    }else if (d > s){
        alert('число '+ s + '  меньше')
    }else if (s === d){
        alert('число '+ s + ' и ' + d + ' равны')
    }else {
        alert('error')
    }
}
jambo(s,d)

//2
function jambo2(a = prompt('введите что не будь')) {
    console.log(a.length);
}
jambo2()

//3

let a = Number(prompt('введите первое число'))
let o = prompt('введите матиматическое действие')
let b = Number(prompt('введите второе число'))

let result;


function jambo3(a,o,b,result) {
    switch (o) {
        case '+':
            alert(result = a + b)
            break
        case '-':
            alert(result = a - b)
            break
        case '*':
            alert(result = a * b)
            break
        case '/':
            if (b === 0){
                alert('делить на ноль нельзя')
                break
            }else if (a === 0){
                alert('делить на ноль нельзя')
                break
            }
            alert(result = a / b)
            break
        default:
            alert('error')

    }
}

jambo3(a,o,b,result)