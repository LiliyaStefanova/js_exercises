const account = {
    name: 'Alex',
    balance: 0,
    credit(amount){
        this.balance = this.balance+amount;
    },
    describe(){
      return `This account belongs to ${this.name} and has a balance of ${this.balance}`
    }
};

account.credit(100);
account.credit(-10);
console.log(account.describe());