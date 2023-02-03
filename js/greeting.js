const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    //일단 submit 하게 되면 자동으로 새로고침 하는거 막아줘
    // event.preventDefault();
    //id가 login-form 인 클래스에 hidden 을 추가해
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    //유저 이름은 input에 입력하는 value가 될건데 그걸 username 이라고 부를거고
    const username = loginInput.value;
    //localStorage에 변수는 username, 값은 username이 될거야
    localStorage.setItem(USERNAME_KEY, username);
    
    //그리고 이 함수를 실행해줘
    paintGreetings(username);
}

    // username을 가지고 이 함수를 실행할텐데
function paintGreetings(username) {
    // greeting id를 가진 태그에 이런 텍스트를 써줘
    greeting.innerText = `${username} IS HERE`;
    // greeting id를 가진 태그의 class 중 HIDDEN_CLASSNAME 을 지우고 = 보여줘
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에 저장된 유저 이름을 가져오는걸 saveUsername 이라고 할게
const saveUsername = localStorage.getItem(USERNAME_KEY);

// 저장된 유저가 없으면
if(saveUsername === null) {
    //form 을 보여줘
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // 그리고 유저 정보 입력 해야하니까 대기해줘
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    //그게 아니라면 h1 을 보여줘
    paintGreetings(saveUsername);
}



