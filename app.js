
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