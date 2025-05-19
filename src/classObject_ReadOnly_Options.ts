class _Account{
    //readonly id: number;
    // owner: string;
    // balance: number;
     nickname?: string;

     //**Access Modifier */
    // constructor(id: number, owner: string, balance: number){
    //     this.id = id;
    //     this.owner = owner;
    //     this.balance = balance;
    // }


    constructor(
        public readonly id: number,
        public owner: string, 
        private _balance: number){
    }

    deposit(amount: number): void{
        if(amount <= 0)
            throw new Error('Invalid Amount');
        this._balance += amount;
    }

        withdraw(amount: number): void{
        if(amount <= 0)
            throw new Error('Invalid Amount');
        this._balance -= amount;
    }
}

let _account = new _Account(112, "Saife", 234);
_account.nickname='azad';
_account.deposit(200);
//Union -- Narrowing
//console.log(typeof account);
//console.log(account instanceof Account);
//console.log(_account);