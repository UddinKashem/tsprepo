//Arrays:-----------------
// let numbers: number[] = [1, 2, 3];
// let numbers: number[] = [];
// numbers.forEach(n => n.toString)
//Tuples:----------------------------
// let user: [number, string] = [1, 'Saife'];
// user.concat(2,'Azad');
// user.push(3);
//----------------------------
//Enums:---------------
//PascalCase:----"First Character of each variable is Capital letter"
// const enum Size {Small ='s', Medium='m', Large='l'};
// let mysize: Size = Size.Medium;
// console.log(mysize);
// //Function:-----------------
// function calculateTax(income: number, taxYear: number): number{
//     if(taxYear < 50_000)
//       return income * 1.2;
//     return income * 1.3;
// }
// console.log(calculateTax(100_000, 2024));
//----------------------------------
// ***//Objects:
// let employee: {
//     id: number,
//     name: string,
//     retire: (date: Date) => void
// } = { 
//     id: 1,
//     name: 'Saife',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// };
// console.log(employee);
//--------------------------------
//Type aliases:----------------
//--------------------------
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } 

// let employee: Employee = { 
//     id: 1,
//     name: 'Saife',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }
//----------------------------
//**Union Types:--------------
// //--------------------------
// function kgToLbs(weight: number | string): number{
//     //narrowing
//     if(typeof weight === 'number')
//         return weight * 2.2;
//     else
//         return parseInt(weight) * 2.2;
// }
// console.log(kgToLbs(10));
// console.log(kgToLbs('10kg'));
//------------------------------
//** Intersection Types:*/
// //--------------------
// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }
// console.log(textBox);
//-----------------------
/**Literal Types: (Exact, Specific) */
//-----------------------
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;
// console.log(quantity);

// type Metric = 'cm' | 'inch';
// let metric: Metric = 'cm';
// console.log(metric);
//------------------------
/**Nullables */
// //-----------------------
// function greet(name: string | null | undefined){
//   if(name)  
//     console.log(name.toUpperCase());
//   else
//     console.log('Hola!')
// }
// greet(undefined);
//---------------------------
/**Optional Chaining */
//-------------------------------
// type Customer = {
//     //birthday: Date
//     birthday?: Date // Make birthday Optional
// };

// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : {birthday: new Date()};
// }

// let customer = getCustomer(1);
// /*
// // if (customer !== null && customer !== undefined)
// //     console.log(customer.birthday);
// */
// /*/Optional Property Access Operator.*/
// console.log(customer?.birthday?.getFullYear);
// /*Optional element access operator*/
// //customers?.[0]
// //Optional Call
// let log: any = null;
// log?.('a');
// console.log(log);
//-------------------
// let speed: number | null = null;
// let ride = {
//     //Falsy (Undefined, null, '', false , 0)
//     // Nullish Coalesing Operator;
//     speed: speed ?? 30
// }
// console.log(ride);
//---------------------
//**Type Assertions */
//------------------
// //let phone = document.getElementById('phone') as HTMLInputElement;
// let phone = <HTMLInputElement> document.getElementById('phone');
// //HTMLElement
// //HTMLInputElement
// phone.value
//-----------------------------------------------
//**Unknown Type */
//------------------------------------
// function render(document: unknown) {
//     //Narrowing
//     if(typeof document === 'string'){
//     //if( document instanceof WordDocument)
//         document.toUpperCase();
//     }
// }
//-------------------------
//**The Never Type */
// //----------------------
// function reject(message: string): never{
//     throw new Error(message);
// }
// function processEvents(): never{
//     while (true){
//         //Read a message queue
//     }
// }
// //processEvents();
// reject('...');
// console.log('Hello World!');
type User= {
        name: string,
        age: number,
        occupation?: string
    }

let users: User[] = [
    {
        name: 'John Smith',
        age: 30,
        occupation: 'Software Engineer'
    },
    {
        name: 'Kate Muller',
        age: 28
    }
];

console.log(users);