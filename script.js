let previousValue = 0;
let currentValue = "";
let operand = 0;
let decimalCount = 0;
let previousNum = 0;
let currentNum = 0;
let minusToggle = 0;


// Creating button elements and assigning values from array to buttons
array = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","C","+","="]

const bottomhalf = document.querySelector(".bottomhalf");

for (let i = 0; i < array.length; i++){

const squares = document.createElement('button');
squares.classList.add('buttons');
squares.textContent = array[i];
bottomhalf.appendChild(squares);
}

//Setting Up the Initial Display
const current = document.querySelector(".current");
display = document.createElement('div');
display.classList.add('current');
display.textContent = "0";
current.appendChild(display);


//Delivers result and resets variables
const Operate = function(previousValue, currentValue, operand){
    previousNum = parseFloat(previousValue);
    currentNum = parseFloat(currentValue);
    console.log(previousValue);
    console.log(currentValue);
    console.log(operand);
  
    if(operand == "+"){
      return previousNum + currentNum;
    }
    else if(operand == "-"){
        return previousNum - currentNum;
    }
    else if(operand == "*"){
        return previousNum * currentNum;
    }
    else if(operand == "/"){
        return currentNum == 0 ? "Can't divide by zero!" : previousNum / currentNum;
    }
 
}


//Event listener for calculator
const buttons = document.querySelectorAll(".buttons");
for (const button of buttons){
    button.addEventListener('click', function(){
        console.log(this.textContent) ;
        console.log(currentValue.charAt(0));
        if(isNaN(this.textContent) == false) {
          if(display.textContent == "0"){
              display.textContent = "";
          }
          if(isNaN(display.textContent) == true && currentValue.charAt(0) != "-"){
              display.textContent = "";
          }
          display.textContent += this.textContent;
        }
        
        if(this.textContent == "C"){
            display.textContent = "0";
            currentValue ="";
            previousValue = 0;
            operand = 0;
            minusToggle = 0;
        }

        if(this.textContent == "." && decimalCount == 0){
            display.textContent += this.textContent;
            decimalCount = 1;
        }

       
       if (this.textContent == "-" || this.textContent == "+" || this.textContent == "*" || this.textContent == "/"){

        if(operand!=0 && isNaN(display.textContent) == true && this.textContent == "-" && minusToggle == 0){
            display.textContent = "-"
            currentValue = "-"
            minusToggle = 1;

        }
       

        if(operand!=0 && isNaN(display.textContent) == false) {
            currentValue = display.textContent;
            display.textContent = Operate(previousValue, currentValue, operand) ;
            previousValue = display.textContent;
            operand = this.textContent;
            display.textContent += " " + operand
            minusToggle = 0;
            currentValue = "";
            
        }

        if(operand == 0){
            previousValue = display.textContent;
            operand = this.textContent;
            display.textContent = previousValue + " " + operand;
            
        }
    }

    if (this.textContent == "="){
        if(isNaN(display.textContent) == false && operand!=0){
        currentValue = display.textContent;
        display.textContent = Operate(previousValue, currentValue, operand);
        previousValue = display.textContent;
        operand = 0;
        currentValue = "";
        minusToggle = 0;
        }
    }
}
    
    )};