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
//**=================================
//Abstract Class and Abstract Method:
//=========================================
// // abstract class Shape{
//     constructor(public color: string){}

//     abstract render(): void;
// }

// class Circle extends Shape {
//     constructor(public radious: number, color: string){
//         super(color);
//     }

//     override render(): void {
//         console.log('Rendering a Circle.');    
//     }
// }
// //Creating  object for Circle:
// let circle = new Circle(5, 'Pink');
// console.log(circle);

// class Triangle extends Shape{
//     constructor(public area: number, color: string){
//         super(color);
//     }

//     override render(): void {
//         console.log("Rendering Triangle.");
        
//     }
// }
// //Creating Object for Triangle:
// let triangles = new Triangle(34, 'Purple');
// triangles.render;
// console.log(triangles); */
//===================================
//Interfaces: To Define the Shape of Objects
//To Implements the methods of Interface-> Select Class Name -> CTRL + . 
//===================================
// interface Calerdar {
//     name: string;
//     addEvent(): void;
//     removeEvent(): void;
// }

// interface CloudCalendar extends Calerdar{
//     sysc(): void;
// }

// class GoogleCalendar implements Calerdar{
    
//     constructor(public name: string){}

//     addEvent(): void {
//         throw new Error("Method not implemented.");
//     }
//     removeEvent(): void {
//         throw new Error("Method not implemented.");
//     }

// }

// class CloudCalendarInvite implements CloudCalendar{

//     constructor( public name: string){}

//     sysc(): void {
//         throw new Error("Method not implemented.");
//     }
    
//     addEvent(): void {
//         throw new Error("Method not implemented.");
//     }
//     removeEvent(): void {
//         throw new Error("Method not implemented.");
//     }

// }
//==================================================
//Exercies of class, Interface, Type
//=========================================
/**Define a class called Logger that takes the name of a file in its constructor and provides
a method for writing messages to that file. Don’t worry about the actual file I/O
operations. Just define the class with the right members. */

// class Logger {
//     constructor(public fileName: string){}

//     log(message: string){
//         return 'Test ' + message;
//     }
// }
// let logger = new Logger('Upload a file.');
// console.log(logger);

// /**Given the Person class below, create a getter for getting the full name of a person. */
// class Person {
//     constructor(public firstName: string, public lastName: string) {}

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// let person = new Person('FirstName', 'LastName');

// console.log(person);

// //**Create a new class called Employee that extends Person and adds a new property called salary. */

// class Employee extends Person{
//     constructor(
//         firstName: string,
//         lastName: string,
//         public salary: number
//     )
//     {
//         super(firstName, lastName);

//     }
// }
// let employe = new Employee('Saife', 'Kashem', 2500);
// console.log(employe);
//=================================================
//Generic Class
// //=============================================
// class KeyValuePair<K, V>{
//     constructor(public key: K, public value: V){}
// }

// let pair = new KeyValuePair<string, string>('Fruits', 'apple');
// console.log(pair);
//=============================
//Generic Method: 
//=====================
// class ArrayUtils{
//     static wrapInArray<T>(value: T){
//         return [value];
//     }

// }
// let arrGen = ArrayUtils.wrapInArray([3, 4, 5,9]);
// console.log(arrGen);
//=============================
//Generic Interface:
//=============================
//https://www.mysidte.com/user
//https://www.mysite.com/product

// interface Result<T>{
//     data: T | null,
//     error: string | null
// }

// function fetch<T>(url: string): Result<T>{
//     return  { data: null, error: null };
// }

// interface User {
//     username: string;
// }

// interface Product {
//     title: string;
// }

// let result = fetch<User>('url');
// result.data;
// let result2 = fetch<Product>('url');
// result2.error;
//=========================================
//Generic Constraints:
//===========================================
// interface Person{
//     name: string;
// }

// class Person{
//    constructor(public name: string) {}
// }

// class Customer extends Person{
// }

// function echo<T extends Person> (value: T): T {
//     return value;
// }
// console.log(echo({name: 'a'}));
// console.log(echo( new Person('abx')));
// console.log(echo(new Customer('Cst')));
// //echo({name: 'a'});
//================================================
//Extending Generic Class
//================================================
// interface Product {
//     name: string;
//     price: number;
// }

// class Store<T> {
//    //private _objects: T[] = [];
//    protected _objects: T[] = [];

//     add(obj: T): void {
//         this._objects.push(obj);
//     } 
// }

// //Pass on Generic Type Parameter:
// class CompressibleStore<T> extends Store<T>{
//     compress(){}
// }

// let store = new CompressibleStore<Product>();
// store.compress();
// store.add

// //Restrict the Generic Type Parameter:
// class SearchableStore<T extends {name: string}> extends Store<T>{
//     find(name: string): T | undefined {
//         return this._objects.find(obj => obj.name === name);
//     }
// }

// //Fix or Terminate the Generic Type Parameter
// class ProductStore extends Store<Product>{
//     filterByCategory(category: string): Product[]{
//         return [];
//     }
// }
//=======================
//The Keyof Operator:
//=======================
// class Store<T> {
//    //private _objects: T[] = [];
//    protected _objects: T[] = [];

//     add(obj: T): void {
//         this._objects.push(obj);
//     } 

//     // T is a Product
//     // keyof T => 'name' | 'price'
//     find(property: keyof T, value: unknown): T | undefined {
//          return this._objects.find(obj => obj[property] === value);
//     } 

// }
//===============================================
//Type Mapping:
//=========================================
// interface Product {
//     name: string;
//     price: number;
// }

// type ReadOnly<T> = {
//     readonly [ K in keyof T]: T[K];
// }

// type Optional<T> = {
//     [K in keyof T]?: T[K];
// }

// type Nullable<T> ={
//     [K in keyof T]: T[K] | null;
// }
//=======================================
//Generic Exercise:
//====================================
//Convert the function below to a generic function:
// function echo<T>(arg: T): T { return arg; }
// /*When compiling the following piece of code, we get an error saying ‘Property name does not exist on type T’.
// * How can we solve this problem?
// */
// function printName<T extends {name: string}>(obj: T) {
// console.log(obj.name);
// }
// /**
//  * An Entity should have a unique identifier. The type of identifier, however, is dependenton the use case. In some cases, 
//  * the ID might be a number, in other cases, it might be a string, GUID, etc. Represent the entity using a generic class.
//  */
// class Entity<T>{
//     constructor (public id: T){}
// }
// /**
//  * Given the following interface, what does keyof User return?
//  */
// interface User {
// userId: number;
// username: string;
// }
