//new keyword
//create object from class
/*
class Person{
    constructor(){
       this.name = "pranab";
       this.age = 20;
       this.from = "kolkata";
    }
}
//call
let person1 = new Person(); //copy of main object
let person2 = new Person(); //copy of main object
console.log(person1);
console.log(person2);
*/

//before es-6- 
function Person(name, age){
 this.name = name;
 this.age = age;
}
const person1 = new Person("pranab", 21);
console.log(person1);