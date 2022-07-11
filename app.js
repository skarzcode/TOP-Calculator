const numbers = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const deletebtn = document.querySelector(".delete");
const operatebtn = document.querySelectorAll(".operator");
const currentValue = document.querySelector(".CurrentValue");
const lastValue = document.querySelector(".lastValue");
let number = 0;
let number2 = 0;
let operaterSign;
let ifTrue = false


function numberButton() {
    numbers.forEach((btn) => {
        btn.addEventListener("click", function () {
            if (currentValue.innerHTML == "0") {
                currentValue.innerHTML = btn.innerHTML
            } else {
                currentValue.innerHTML += btn.innerHTML;
            }

            if (!(lastValue.innerHTML === " ")) {
                ifTrue = true;
            }
        })
    })
}

function operateButtons() {
    operatebtn.forEach((btn) => {
        btn.addEventListener("click", function () {

            if (ifTrue == true) {
                lastValue.innerHTML = operate(operaterSign, parseInt(lastValue.innerHTML), parseInt(currentValue.innerHTML));
                currentValue.innerHTML = "0";
                operaterSign = btn.innerHTML;
            } else {
                operaterSign = btn.innerHTML;
                lastValue.innerHTML = currentValue.innerHTML;
                currentValue.innerHTML = "0";
            }
        })
    })
}


clear.addEventListener("click", function () {
    currentValue.innerHTML = "0";
    lastValue.innerHTML = " ";
    // ifTrue = false;
});


deletebtn.addEventListener("click", function () {
    currentValue.innerHTML = "0";
    lastValue.innerHTML = " ";
    ifTrue = false;
});




equal.addEventListener("click", function () {
    currentValue.innerHTML = operate(operaterSign, parseInt(lastValue.innerHTML), parseInt(currentValue.innerHTML));
    ifTrue = false;
    lastValue.innerHTML = " ";
});




function add(num1, num2) {
    let sum = num1 + num2;
    return (sum);
};

function subtract(num1, num2) {
    let sum = num1 - num2;
    return (sum);
}

function multiply(num1, num2) {
    let sum = num1 * num2;
    return (sum);
}

function divide(num1, num2) {
    let sum = num1 / num2;
    return (sum);
}

function operate(operater, num1, num2) {
    if (operater === "+") {
        return (add(num1, num2));
    } else if (operater === "-") {
        return (subtract(num1, num2));
    } else if (operater === "*") {
        return (multiply(num1, num2));
    } else if (operater === "/") {
        return (divide(num1, num2));
    }
};


numberButton();

operateButtons()
