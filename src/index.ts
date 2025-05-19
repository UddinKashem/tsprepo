class Account{
    nickname?: string;

    constructor(
        public readonly id: number,
        public owner: string, 
        private _balance: number){
    }

    deposit(amount: number): void{
        if(amount <= 0)
            throw new Error('Invalid Amount');
        //Record a transaction
        this._balance += amount;
    }

    withdraw(amount: number): void{
        if(amount <= 0)
            throw new Error('Invalid Amount');
        this._balance -= amount;
    }

    // private calculateTax(): number{
    //     return this.calculateTax = 0;
    // }

    getBalance(): number{
       return this._balance;
    }
}    

let account = new Account(112, "Saife", 234);
account.nickname='azad';
account.deposit(200);
//Union -- Narrowing
console.log(typeof account);
console.log(account instanceof Account);
console.log(account);
account.deposit(250);
//console.log(account.balance);
account.owner='Saife Uddin'
console.log(account);
account.withdraw(25);
console.log(account);
console.log(account.getBalance);
