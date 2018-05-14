//regular declaration
function square1(x){
    return x*x;
}


//fat arrow function with implicit return and no brackets
const square2 = x => x*x;

console.log(square1(0));
console.log(square1(2));
console.log(square1(5));

console.log(square2(0));
console.log(square2(2));
console.log(square2(5));

let counter = 1;
while(counter<=10){
    console.log(square2(counter));
    counter++;
}