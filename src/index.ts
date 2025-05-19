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
class Teacher extends Person{
    override get fullName(){
        return 'Professor ' + super.fullName;
    }
}

class Principal extends Person{
    override get fullName(){
        return 'Principal ' + super.fullName;
    }
}

printNames([
    new Student(113, 'John', 'Smith'),
    new Teacher('Saife', 'Azad'),
    new Principal('Abdul', 'Bari'),
    new Student(114, 'John2', 'Smith2'),
    new Teacher('Saife2', 'Azad2')
])

function printNames(people: Person[]){
    for(let person of people){
        console.log('Full Name: ' + person.fullName);
    }
}
