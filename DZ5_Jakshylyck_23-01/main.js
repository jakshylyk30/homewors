const input = document.getElementById('input')
const createButton = document.getElementById('crete_todo')
const todoList = document.getElementById('todo_list')

const createTodo = function () {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const btn_del = document.createElement('button')
        const edit = document.createElement('button')

        edit.setAttribute('class' , 'edit')
        btn_del.setAttribute('class','delete')
        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')

        edit.innerText = 'edit'
        btn_del.innerText = 'delete'
        text.innerText = input.value.trim()
        div.append(text , edit , btn_del)
        todoList.append(div)
        edit.addEventListener('click' , () =>{
            let edit_prompt = prompt('измените текст').trim()
            text.innerText = edit_prompt
        })
        btn_del.addEventListener('click' , () =>{
            div.remove()
        })
    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', (e) => e.keyCode === 13 ? createTodo() : false)