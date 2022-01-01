Operate = function(a, b, c){
    if(c == "+"){
      return a + b;
    }
    if(c == "-"){
        return a - b;
    }
    if(c == "*"){
        return a * b;
    }
    if(c == "/"){
        return b == 0 ? "Can't divide by zero!" : a / b;
    }
}

console.log(Operate(10,1, "/"));



//Junky code to create the buttons

const bottomhalf = document.querySelector(".bottomhalf");

const squares = document.createElement('button');
const squares1 = document.createElement('button');
const squares2 = document.createElement('button');
const squares3 = document.createElement('button');
const squares4 = document.createElement('button');
const squares5 = document.createElement('button');
const squares6 = document.createElement('button');
const squares7 = document.createElement('button');
const squares8 = document.createElement('button');
const squares9 = document.createElement('button');
const squares10 = document.createElement('button');
const squares11 = document.createElement('button');
const squares12 = document.createElement('button');
const squares13 = document.createElement('button');
const squares14 = document.createElement('button');
const squares15 = document.createElement('button');
const squares16 = document.createElement('button');


squares.textContent = "7";
bottomhalf.appendChild(squares);
squares1.textContent = "8";
bottomhalf.appendChild(squares1);
squares2.textContent = "9";
bottomhalf.appendChild(squares2);
squares3.textContent = "/";
bottomhalf.appendChild(squares3);
squares4.textContent = "4";
bottomhalf.appendChild(squares4);
squares5.textContent = "5";
bottomhalf.appendChild(squares5);
squares6.textContent = "6";
bottomhalf.appendChild(squares6);
squares7.textContent = "*";
bottomhalf.appendChild(squares7);
squares8.textContent = "1";
bottomhalf.appendChild(squares8);
squares9.textContent = "2";
bottomhalf.appendChild(squares9);
squares10.textContent = "3";
bottomhalf.appendChild(squares10);
squares11.textContent = "-";
bottomhalf.appendChild(squares11);
squares12.textContent = "0";
bottomhalf.appendChild(squares12);
squares13.textContent = ".";
bottomhalf.appendChild(squares13);
squares14.textContent = "C";
bottomhalf.appendChild(squares14);
squares15.textContent = "+";
bottomhalf.appendChild(squares15);
squares16.textContent = "=";
bottomhalf.appendChild(squares16);

//End of junky code