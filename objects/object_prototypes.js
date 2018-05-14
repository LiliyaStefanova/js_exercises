const anObject = {
    myProp: 2
};

//Create another object using anObject as a prototype
const anotherObject = Object.create(anObject);

//Create yet another object using another object as a prototype
const yetAnotherObject = Object.create(anotherObject);

//myProp will be accessible through yetAnotherObject by going up the chain
console.log(yetAnotherObject.myProp);

//a different property will be searched through all the way to the top of the tree and defined returned if not found
console.log(yetAnotherObject.myOtherProp);

//Delegation principle - an object delegates some of its functionality to the prototype