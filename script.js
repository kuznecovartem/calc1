let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let operation = document.querySelector('#operation');
let resultBtn = document.querySelector('#btn');
let inputResult = document.querySelector('#result');

function getSum(num1, num2) {
    return num1 + num2;
}

resultBtn.addEventListener('click', function(){
    let num1 = +number1.value;
    let num2 = +number2.value;  
    let operation = selectOperation.value;
    console.log(num1);
    console.log(num2);
    console.log(operation);
    switch(operation) {
        case '+': inputResult.value = getSum(num1, num2);
        break;
        case '-': inputResult.value = getDif(num1, num2);
        break;
    }
})