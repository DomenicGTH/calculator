let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".op");
let display = document.querySelector(".output");
let equal = document.querySelector(".equals");
let clear = document.querySelector(".clear");
let calculation = [];
let currentNumberIndex = 0;

numbers.forEach((button) =>
  button.addEventListener("click", (e) => {
    const number = e.target.innerText; // gets button number
    // if number is empty string AND if calculation[currentNumberIndex] is undefined, return nothing
    if (number === "0" && calculation[currentNumberIndex] === undefined) {
      return;
    }

    calculation[currentNumberIndex] = `${
      calculation[currentNumberIndex] || ""
    }${number}`;
    // calculation[currentnumberindex] = '1' or '' if display is empty + '2' = '12' basically concatenation

    console.log(calculation);

    display.textContent = calculation.join(" "); // adds spacing between arrays
  })
);

operators.forEach((button) =>
  button.addEventListener("click", (e) => {
    const operator = e.target.innerText; // grabs operator from button text +,-,/,*
    calculation[currentNumberIndex + 1] = operator; // operator equals next index in calculation array
    // currentnumberindex = 1
    // calculation = [2,1]
    // calculation[2] = +
    // calculation = [2,1,+]
    console.log(calculation);
    currentNumberIndex = currentNumberIndex + 2; // arrays start at 0,
    // currentnumberindex = 1
    // currentnumberindex = 1 + 2 = 3
    // because calculation[3] is undefined we have an empty field
    // we do this because we need to be in the correct position to start adding new numbers

    console.log(calculation);

    display.textContent = calculation.join(" "); // just for looks
  })
);

equal.addEventListener("click", () => {
  //['12','+','2']
  let result; //undefined
  calculation.forEach((item, index) => {
    // item = value of the current element | index = current index
    if (!isNaN(item)) {
      // NaN = Not a Number, ! = not, !isNan = is it not not an item, asking if it IS a number =>
      if (!result) {
        // If result is undefined and there is a number already =>
        result = item; // result will take the item value
        //result = '12'
      } else {
        const operator = calculation[index - 1]; // if the item is not a number, but result is defined, operator will equal the
        //index = 2
        //calculation[2-1] = calculation[1] = '+'
        //operator = '+'
        // previous index.
        result = operate(result, operator, item); // calls operate function
        // operate('12', '+', '2')
      }
    }
  });
  display.textContent = `${calculation.join(" ")} = ${result}`;
});

clear.addEventListener("click", (e) => {
  clearUp();
});

function clearUp() {
  calculation = [];
  currentNumberIndex = 0;
  display.textContent = "";
}

function additionOp(addA, addB) {
  return +addA + +addB;
}

function subtractOp(addA, addB) {
  return +addA - +addB;
}
function multiplyOp(firstNum, secondNum) {
  return +firstNum * +secondNum;
}

function divideOp(addA, addB) {
  return +addA / +addB;
}

function operate(firstNum, operator, secondNum) {
  if (operator === "+") {
    return additionOp(firstNum, secondNum);
  } else if (operator === "-") {
    return subtractOp(firstNum, secondNum);
  } else if (operator === "*") {
    return multiplyOp(firstNum, secondNum);
  } else if (operator === "/") {
    return divideOp(firstNum, secondNum);
  }
}

// unused code, test

// // operators.forEach((button) =>
// //     button.addEventListener('click', () => inputOp(button.textContent)
// // ));

// // numbers.forEach((button) =>
// //     button.addEventListener('click', () => InputNum(button.textContent)

// //     ));

// //   function InputNum() {
// //     display.textContent += numbers;
// //     console.log(numbers);
// //   }

// //   function inputOp() {
// //     display.textcontent += operators;
// //     console.log(operators);
// //   }

// // equal.addEventListener('click', (e) => {
// //     if (operatorText === '+') {
// //         display = addition()
// //     }
// // })
