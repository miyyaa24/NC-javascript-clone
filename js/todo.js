const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
// = const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

if (window.localStorage.getItem(USERNAME_KEY) !== null) {
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
}

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo (event) {
   const li = event.target.parentElement;
   li.remove();
   toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
   saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id
    
    const delButton = document.createElement("button");
    const span = document.createElement("span");
    
    li.appendChild(delButton);
    li.appendChild(span);
    
    span.innerText = newTodo.text;
    delButton.innerText = "×"

    delButton.addEventListener("click", deleteTodo)
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value='';
    
    const newTodoObj = {
        text: newTodo,
        id:Date.now(),
    };
    
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

// savedToDos !== null
if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
}
