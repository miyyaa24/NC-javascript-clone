
const player = {
	name : "naim",
	age : 27,
};

console.log (player);

// update object
player.name = "kim";
console.log (player);

// add object
player.pretty = "soon";
console.log (player);

// ===================================================================== //

// basic function
function plus(a, b) {
    console.log(a + b);
};

plus(5, 10);


function minusFive (c) {
    console.log(c -5); // 5
    console.log(c);    // 10 출력됨
};

minusFive (10); // 1. 이것 때문에

// ===================================================================== //

const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },

    minus: function (a, b) {
        console.log (a - b);
    },

    divide : function (a, b) {
        console.log (a / b);
    },

    multi : function (a ,b) {
        console.log (a * b);
    },

    square : function (a, b) {
        console.log( a ** b );
    }
};

calculator.add(3,2); 
console.log(calculator.add(3,2));
calculator.minus(3,2);
calculator.divide(3,2);
calculator.multi(3,2);
calculator.square(3,2);

// ===================================================================== //


const age = 12;
function convertHumanAge(DogAge) {
    return DogAge + 40;
}

const myDogHumanAge = convertHumanAge(age);
console.log(myDogHumanAge);

// 값을 업데이트 해보겠습니당
// ===================================================================== //


// 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함
const h1 = document.querySelector("div.hello:first-child h1");

// event 찾는 법 (on~ = event)
console.dir(h1);


function handleTitleClick(){

    h1.style.color = "blue";
    h1.style.fontSize = "50px";
};

function handleMouseEnter() {
    h1.innerText = "mouse is here";
}

function handleMouiseLeave() {
    h1.innerText = "mouse is gone";
}

function handleWidnowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier")
}

function handleWindowOffline(){
    alert("SOS no wifi");
}

function handleWindowOnline(){
    alert("everything is okay");
}

h1.addEventListener("click", handleTitleClick); // = title.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouiseLeave);

window.addEventListener("resize", handleWidnowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


// JS 문법을 활용해서 HTML element를 가져오고
// 가져온 element 에 eventListener를 추가해줌
// 그리고 event 가 발생되면 어떤 function을 실행시키는거

