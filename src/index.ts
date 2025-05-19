class Account{
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number){
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void{
        if(amount <= 0)
            throw new Error('Invalid Amount');
        this.balance += amount;
    }
}

let account = new Account(112, "Saife", 234);
account.deposit(200);
console.log(account.balance);