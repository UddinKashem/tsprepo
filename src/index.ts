class Person {
    constructor( public firstName: string, public lastName: string){}

    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }

    walk() {
        console.log('Walking');
    }
    
    talk(){
        console.log('Talking');   
    }
}

//Inheritance
class Student extends Person {
    constructor(public studentID: number, firstName: string, lastName: string){
        super(firstName, lastName);
    }

    takeTest(){
        console.log('Taking Test.');
    }
}

//Creating Object for Inheritance Class
let students = new Student(111, 'Saife', 'Kashem');
console.log('Student Name: ' + students.fullName);

class Teacher extends Person{
    override get fullName(){
        return 'Professior ' + super.fullName;
    }
}

let teacher = new Teacher('Josh', 'Smith');
console.log('Teacher Full Name: ' + teacher.fullName);
