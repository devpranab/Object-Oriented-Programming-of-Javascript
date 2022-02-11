//Classes: class is template for creating object
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

//dynamic value
class Person{
    constructor(names, ages, froms){
       this.name = names;
       this.age = ages;
       this.from = froms;
    }
    fullName(){ //method
     console.log(this.name, this.age);
    }
}
//call
let person1 = new Person("pranab", "20", "kolkata");
let person2 = new Person("bhagi", "21", "delhi");

console.log(person1);
console.log(person1.fullName());
console.log(person2);