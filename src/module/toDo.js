const todo = document.querySelector('.todo');
const todoBlock = document.querySelector('.todo-block');
const todoInput = document.querySelector('.todo-input');
const todoLabel = document.querySelector('.todo-label');

todo.addEventListener('click', showToDo);

function showToDo () {
    todoBlock.classList.toggle('show');
    todoLabel.classList.toggle('show');
}

todoInput.addEventListener('change', addTodo);

const ul = document.createElement('ul');
ul.classList.add('todo-items');
todoBlock.append(ul);

function addTodo () {
    const li = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const div = document.createElement('div');
    const button = document.createElement('button');
    const divInnerSetting = document.createElement('div');

    li.classList.add('todo-item');
    input.setAttribute('type', 'checkbox');
    span.classList.add('todo-item__text');
    input.classList.add('todo-item__input');
    label.classList.add('todo-item__label');
    div.classList.add('todo-item__setting');
    divInnerSetting.classList.add('setting-inner__block');
    button.classList.add('setting-inner__btn');

    ul.append(li);
    li.append(label, span, div);
    label.append(input);
    li.append(divInnerSetting);
    divInnerSetting.append(button);

    button.innerText = 'Удалить';

    span.innerText = todoInput.value;
    todoInput.value = '';

    const todoCheckbox = document.querySelectorAll('.todo-item__input');
    const todoText = document.querySelectorAll('.todo-item__text');

    const todoSetting = document.querySelectorAll('.todo-item__setting');
    const settingInnerBlock = document.querySelectorAll('.setting-inner__block');

    const btnDeletetoDo = document.querySelectorAll('.setting-inner__btn');
    const toDoLi = document.querySelectorAll('.todo-item');

    //checkbox through
    addListenerToCheckbox(todoCheckbox, todoText);
    //btn show settings div
    addListenertoDiv(todoSetting, settingInnerBlock);
    //btn delete
    addListenerBtnDeleteTodo(btnDeletetoDo,toDoLi);
}

//btnDelete
function addListenerBtnDeleteTodo(btnDeletetoDo, toDoLi) {
    btnDeletetoDo.forEach((eachBtnDelete, indexBtnDelete) => {
        eachBtnDelete.onclick = () => {toDoLi[indexBtnDelete].remove()}
    })

}

//dot settings
function addListenertoDiv(todoSetting, settingInnerBlock) {
    todoSetting.forEach((eachSetting, index) => {
        eachSetting.onclick = () => showSettingTodo (settingInnerBlock, index);
    })
}

function showSettingTodo (settingInnerBlock, index) {
    settingInnerBlock.forEach((item, settingIndex ) => {
        if (index === settingIndex) {
            return false;
        } else {
            item.classList.remove('show');
        }
    })
    settingInnerBlock[index].classList.toggle('show');
    docListenerRemoveSetting(settingInnerBlock);
}

//remove when click DOM
function docListenerRemoveSetting(settingInnerBlock) {
    document.onclick = (evt) => {
        if(!evt.target.closest('.setting-inner__block') && !evt.target.closest('.todo-item__setting')) {
            settingInnerBlock.forEach(item => {
                item.classList.remove('show');
            })
        }
    }
}

//checkbox
function addListenerToCheckbox(todoCheckbox, todoText) {
    todoCheckbox.forEach((eachCheckbox, index) => {
        eachCheckbox.onclick = () => toggleClassThrought (index, todoText);
    })
}

function toggleClassThrought (index, todoText) {
    todoText[index].classList.toggle('through');
}