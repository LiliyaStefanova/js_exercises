var fetch = require("node-fetch");

const planes = [
    {
        "manufacturer": "Airbus",
        "model": "A320"
    },
    {
        "manufacturer": "Boeing",
        "model": "757"
    }

];

console.log(planes);

//Convert JSON to text
//Works for individual objects and arrays
const planeText = JSON.stringify(planes);
console.log(planeText);

//Convert text back to JSON
//Works for individual objects and arrays
console.log(JSON.parse(planeText));