const circle = require("./node/cirlce.js");
const Account = require("./node/accounting.js");
const moment = require("moment");

console.log(circle.area(4));
console.log(circle.circumference(4));

const myAccount = new Account("Jeff");
myAccount.credit(150);
console.log(myAccount.describe());

console.log(moment());

let a = moment.duration(2018, 'y');
let b = moment.duration(1976, 'y');
console.log(a.subtract(b).years());