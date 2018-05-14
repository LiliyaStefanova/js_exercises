class Character {
    constructor(name, health, strength){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;
    }

    describe(){
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp}
        XP points`;
    }
}

const aurora = new Character('Aurora', 150, 25);
const glacius = new Character('Glacius', 130, 30);

aurora.health-=20;
aurora.strength+=10;
aurora.xp+=15;
// const aurora = {
//     name: 'Aurora',
//     health: 150,
//     strength:25,
//     xp: 0,
//     describe(){
//         return `${this.name} has ${this.health} health points and ${this.strength} strength`;
//     }
// };

console.log(aurora.describe());
console.log(glacius.describe());