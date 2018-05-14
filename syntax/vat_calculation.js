let rawPrice = prompt('Enter raw price: ');
let vatRate = 20.6;
let priceWithVAT3 = rawPrice + (rawPrice * (vatRate/100));
console.log(`The price with VAT added is: ${priceWithVAT3}`);