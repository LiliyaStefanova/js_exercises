let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a+b*b;
const d = a*b+b;
const e = a*(b+b);
const f = a*b/a;
const g = b/a*a;
/* Predicted outcome:
a = 2
b = 10
c = 102
d = 40
e = 20
f = 10
g = 10
 */
console.log(a, b, c, d, e, f, g);