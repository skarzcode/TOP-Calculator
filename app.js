const numbers = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const operatebtn = document.querySelectorAll(".operator");
const currentValue = document.querySelector(".CurrentValue");
const lastValue = document.querySelector(".lastValue");
let operaterSign;


function numberButton(){
  numbers.forEach((btn) => {
    btn.addEventListener("click", function(){
        if (currentValue.innerHTML == "0"){
            currentValue.innerHTML = btn.innerHTML
        } else{
        currentValue.innerHTML += btn.innerHTML;
        }
    })
  })
}

function operateButtons(){
    operatebtn.forEach((btn) => {
      btn.addEventListener("click", function(){
          operaterSign = btn.innerHTML;
          lastValue.innerHTML = currentValue.innerHTML;
          currentValue.innerHTML= "0";
    

      })
    })
  }

function clearbtn(){
    clear.addEventListener("click", function(){
        currentValue.innerHTML = "0";
    });
};




function add (num1,num2){
let sum = num1 + num2;
return (sum);
};

function subtract (num1,num2){
    let sum = num1 - num2;
    return (sum);
}

function multiply (num1,num2){
    let sum = num1 * num2;
    return (sum);
}

function divide (num1,num2){
    let sum = num1 / num2;
    return (sum);
}

function operate (operater , num1, num2){
    if (operater === "+" ){
        return(add(num1,num2));
} else if(operater === "-" ){
        return(subtract(num1,num2));
}  else if(operater === "*" ){
        return(multiply(num1,num2));
} else if(operater === "/" ){
        return(divide(num1,num2));
}
}

clearbtn();

numberButton();

operateButtons()




