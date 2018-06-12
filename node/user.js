module.exports = class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.login = (firstName[0]+lastName).toLowerCase();
    }

    describe(){
        return `${this.firstName} ${this.lastName} (login: ${this.login})`
    }
};
