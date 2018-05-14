const calculate = function(number1, operation, number2){
    switch(operation){
        case '+':
            return number1 + number2;
            break;
        case '-':
            return number1-number2;
            break;
        case '*':
            return number1*number2;
            break;
        case '/':
            return number1/number2;
            break;
        default:
            return 'Invalid operator';
    }
};

console.log(calculate(4, '+', 6));
console.log(calculate(4, '-', 6));
console.log(calculate(2, '*', 0));
console.log(calculate(12, '/', 0));
console.log(calculate(34, '#', 34));