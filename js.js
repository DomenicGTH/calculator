let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.op')
let display = document.querySelector('.output')
let firstNum = ''
let secondNum = ''
let operatorText = ''
let numberText = ''
operators.forEach((button) => 
    button.addEventListener('click' , (e) => {
            operatorText = e.target.innerText
            console.log(operatorText);
    })
)

numbers.forEach((button) =>
button.addEventListener('click' , (e) => {
    numberText = e.target.innerText
    console.log(numberText);
}
));
function addition() {
    if (operatorText === "+") {
        let addAnswer = firstNum + secondNum
        return addAnswer;
    }
}

function subtract() {
    if (operatorText === "-") {
        let subAnswer = firstNum + secondNum
        return subAnswer;
}}
function multiply() {
    if (operatorText === "*") {
        let multiAnswer = firstNum + secondNum
        return multiAnswer;
}}

function divide() {
    if (operatorText === "/") {
        let divAnswer = firstNum / secondNum
        return divAnswer;
}}

