const musketeers = ['Athos', 'Porthos', 'Aramis'];
musketeers.forEach(musketeer => { console.log(musketeer)});
console.log('----------------------');
musketeers.push('D\'Artagnan');
for(let musketeer of musketeers){
    console.log(musketeer);
}
console.log('----------------------');
musketeers.splice(2,1);
musketeers.forEach(musketeer => {console.log(musketeer)});
console.log('----------------------');