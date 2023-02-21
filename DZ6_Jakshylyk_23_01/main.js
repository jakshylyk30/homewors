const str = document.querySelector('#input')
const btn = document.querySelector('button')

function jambo (){
    if (str.value.trim() !== ''){
        let jamb = []
        jamb.push(str.value)
        jamb.forEach(i => {
            const text = document.createElement('h2')
            text.innerText = i.split('').reverse().join('')
            document.body.append(text)
            str.value = ''
        })
    }else {
        return false
    }

}

btn.onclick = () => jambo()

str.onkeydown = ({keyCode}) => {
    keyCode === 13 && jambo()
}

