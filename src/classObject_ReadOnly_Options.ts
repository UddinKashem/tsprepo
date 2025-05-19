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
// //Inheritance --Method Override
/// "noImplicitOverride": true,    [tsconfig.json]
//====================================
// class Person {
//     constructor( public firstName: string, public lastName: string){}

//     get fullName(){
//         return this.firstName + ' ' + this.lastName;
//     }

//     walk() {
//         console.log('Walking');
//     }
    
//     talk(){
//         console.log('Talking');   
//     }
// }

// //Inheritance
// class Student extends Person {
//     constructor(public studentID: number, firstName: string, lastName: string){
//         super(firstName, lastName);
//     }

//     takeTest(){
//         console.log('Taking Test.');
//     }
// }

// //Creating Object for Inheritance Class
// let students = new Student(111, 'Saife', 'Kashem');
// console.log('Student Name: ' + students.fullName);

// class Teacher extends Person{
//     override get fullName(){
//         return 'Professior ' + super.fullName;
//     }
// }

// let teacher = new Teacher('Josh', 'Smith');
// console.log('Teacher Full Name: ' + teacher.fullName);
//======================================================
/**Phlolimorphism: Open Closed Principle:
 * Classed Should Be Open for Extension and Closed for Modification.
*/
// //======================================================
// class Person {
//     constructor( public firstName: string, public lastName: string){}

//     get fullName(){
//         return this.firstName + ' ' + this.lastName;
//     }

//     walk() {
//         console.log('Walking');
//     }
    
//     talk(){
//         console.log('Talking');   
//     }
// }

// //Inheritance
// class Student extends Person {
//     constructor(public studentID: number, firstName: string, lastName: string){
//         super(firstName, lastName);
//     }

//     takeTest(){
//         console.log('Taking Test.');
//     }
// }

// //Creating Object for Inheritance Class
// class Teacher extends Person{
//     override get fullName(){
//         return 'Professor ' + super.fullName;
//     }
// }

// class Principal extends Person{
//     override get fullName(){
//         return 'Principal ' + super.fullName;
//     }
// }

// printNames([
//     new Student(113, 'John', 'Smith'),
//     new Teacher('Saife', 'Azad'),
//     new Principal('Abdul', 'Bari'),
//     new Student(114, 'John2', 'Smith2'),
//     new Teacher('Saife2', 'Azad2')
// ])

// function printNames(people: Person[]){
//     for(let person of people){
//         console.log('Full Name: ' + person.fullName);
//     }
// }
