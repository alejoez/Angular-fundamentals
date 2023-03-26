//We can to define variables in two diferents ways
const usernameT: string = 'Alejandro'; //We can to define a variable defining it the type
const usernameN = 'Alejandro'; //Also we can to define a variable without type, this is called datas inference

//Double type
const company: string | number = 'Platzi';

//Type of parameters and returned of a function
function myFunction(company: string): number {
    //This function expects to receive a string and will retunr a number
    return 1;
}

//POO
class Person{
    private age: number;
    name: string;

    constructor(age: number, name: string){
        this.age = age;
        this.name = name;
    }
}

//we can access to the object
const person = new Person(25, 'Alejandro');