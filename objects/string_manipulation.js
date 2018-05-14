function wordInfo(value){
    console.log(value.length);
    console.log(value.toLowerCase());
    console.log(value.toUpperCase());
}

function vowelCount(value){
    const vowels = ['a', 'o', 'u', 'e', 'i', 'y'];
    let vowelCount = 0;
    for(let letter of value){
        if(vowels.includes(letter)){
            vowelCount++;
        }
    }
    return vowelCount;
}

function backwardsWord(value){
    let backwardsWord='';
    for(let i = value.length-1; i>=0; i--){
        backwardsWord=backwardsWord+value[i];
    }
    return backwardsWord;
}

function palindrome(value){
    return value === backwardsWord(value);
}

const months = 'Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec';
const monthsArray = months.split(',');
monthsArray.forEach(month => {console.log(month)});

Array.from('Sarah').forEach(letter => {console.log(letter)});

const song = 'Honky Tonk Women';
console.log(song.indexOf('onk'));
console.log(song.indexOf('Onk'));
console.log(song.startsWith('Hon'));
console.log(song.endsWith('men'));

wordInfo('Elizabeth');
console.log(vowelCount('ooh la la'));
console.log(backwardsWord('dog'));
console.log(palindrome('madam'));
