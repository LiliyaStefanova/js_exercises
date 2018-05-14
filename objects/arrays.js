const myArray = [1, 3, 5, 7, 9, 11];

for(let i=0; i<myArray.length; i++){
    console.log(myArray[i]);
}
myArray.push(13);
myArray.unshift(-1);
console.log('--------------');
myArray.forEach(myElement => { console.log(myElement)});
myArray.pop();
myArray.splice(0,1);
console.log('--------------');
for(const element of myArray){
    console.log(element);
}