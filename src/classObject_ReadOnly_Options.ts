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
//**Getter and Setter is Type Script */
    get balance(): number{
        return this._balance;
    }
    
    set balance(value: number){
        if(value < 0)
            throw new Error('Invalid Value');
        this._balance = value;
    }
}

let _account = new _Account(112, "Saife", 234);
_account.nickname='azad';
_account.deposit(200);
//Union -- Narrowing
//console.log(typeof account);
//console.log(account instanceof Account);
//console.log(_account);

//**=========================
// class SeatAssignment{
    //A1, A2, ...
    //Saife, Jhon, ....
    //Index Signature Property
//     [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// seats.A1 = 'Saife';
// seats.A2 = 'Zeba';

// console.log(seats);
// ============================================ */
// class Ride {
//     private static _activeRides: number = 0;
//     start() {Ride._activeRides++;}
//     stop() {Ride._activeRides--;}

//      static get activeRides(){
//         return Ride._activeRides
//     }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// let ride3 = new Ride();
// ride3.start();

// console.log(Ride.activeRides);
//====================================