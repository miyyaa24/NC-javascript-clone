const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
// = const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}


// click 을 하게 되면 event가 발생되고
// 그 event 안에는 많은 정보가 담겨져 있음
// 클릭된 HTML element가 뭔지 확인 하기 위해 "target" 을 입력 했음
// 그리고 모든 HTML element에는 하나 이상의 property 가 있는데
// 그 중 하나가 parentElement (클릭된 element 의 부모) ---> button의 부모인 li 가 해당

function deleteTodo (event) {
   const li = event.target.parentElement;
   li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    //li 안에 span 을 넣어줘
    li.appendChild(span);
    li.appendChild(button);
    // 그리고 그 span 안에는 newTodo를 넣어주고
    span.innerText = newTodo;
    button.innerText = "X"
    button.addEventListener("click", deleteTodo)
    // 그리고 toDoList 안에는 (=todo-list를 id로 가진 애) li를 넣어줘
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    // newTodo 라는 변수에 value 값이 복사되는거야
    const newTodo = toDoInput.value;
    
    // 그래서 비게해도 (입력하면 입력창에서는 사라져야하니까) 그 값에 영향은 없는거구
    toDoInput.value='';

    toDos.push(newTodo);

    //그리고 복사된 newToDo를 function paintToDo에 넣어주는것
    paintToDo(newTodo);

    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);