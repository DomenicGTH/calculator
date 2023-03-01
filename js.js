let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.op')
let display = document.querySelector('.output')
let equal = document.querySelector('.equals')
let clear = document.querySelector('.clear')
let firstNum = {
    key: ''
};
let secondNum = {
    key: ''
};
let operatorText = ''
let numberText = ''
let equalText;


clear.addEventListener('click', (e) => {
    clearUp()
})

equal.addEventListener('click', (e) => {
    
        operate();
        console.log(firstNum.number)
        display.textContent = `I: ${firstNum.number}`
    });

operators.forEach((button) => 
    button.addEventListener('click' , (e) => {
            operatorText = e.target.innerText
            
            console.log(operatorText);
    })
)

numbers.forEach((button) =>
button.addEventListener('click' , (e) => {
    consoleText = e.target.innerText
    numberText += e.target.innerText
    firstNum.number = numberText
    // not clearing numberText
    console.log(consoleText)
}
));

function clearUp() {
    operatorText = ''
    numberText = ''
    firstNum = {}
    secondNum = {}
    equalText = ''
}

// equal.addEventListener('click', (e) => {
//     if (operatorText === '+') {
//         display = addition()
//     }
// })


function additionOp(addA, addB) {
    if (operatorText === '+') {
        let addAnswer = firstNum + secondNum
        return addAnswer;
}};

function subtractOp() {
    if (operatorText === "-") {
        let subAnswer = firstNum + secondNum
        return subAnswer;
}}
function multiplyOp() {
    if (operatorText === "*") {
        let multiAnswer = firstNum + secondNum
        return multiAnswer;
}}

function divideOp() {
    if (operatorText === "/") {
        let divAnswer = firstNum / secondNum
        return divAnswer;
}}

function operate() {
    if (operatorText === '+') {
        additionOp();
    }
    else if (operatorText === '-') {
        subtractOp()
    }
   else if (operatorText === '*') {
        multiplyOp()
    }
    else if (operatorText === '/') {
        divideOp()
    }
}


// operators.forEach((button) => 
//     button.addEventListener('click', () => inputOp(button.textContent)
// ));


// numbers.forEach((button) => 
//     button.addEventListener('click', () => InputNum(button.textContent)
    
//     ));

//   function InputNum() {
//     display.textContent += numbers;
//     console.log(numbers);
//   }

//   function inputOp() {
//     display.textcontent += operators;
//     console.log(operators);
//   }