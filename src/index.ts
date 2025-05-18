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
//Objects:
let employee: {
    id: number,
    name: string,
    retire: (date: Date) => void
} = { 
    id: 1,
    name: 'Saife',
    retire: (date: Date) => {
        console.log(date);
    }
};
console.log(employee);