//Using a function expression
const min = function(number1, number2){
    if(number1<number2){
        return number1;
    }else if(number1>=number2){
        return number2;
    }
};

console.log(min(4.5, 5));
console.log(min(19, 9));
console.log(min(1,1));