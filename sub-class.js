//Sub class
//Inheritance
// base-class + sub-class = inheritance

class Person{  //base-class
    constructor(names, ages, froms){
       this.name = names;
       this.age = ages;
       this.from = froms;
    }
    greetings(){ //method
     return `Hello ${this.name} good morning`;
    }
}
class customer extends Person{  //sub-class
    constructor(names, ages, phn, membership){ 
    super(names, ages);
    this.phn = phn;
    this.membership = membership;
 }
}

let person1 = new Person("pranab", "23", "mumbai");
// console.log(person1);
// console.log(person1.greetings());
let customer1 = new customer("Rony", "22", "7654", "m-id");
// console.log(customer1);