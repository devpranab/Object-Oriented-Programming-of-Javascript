//Static function/method
// static f() - call from class not object

class Person{  //base-class
    constructor(names, ages, froms){
       this.name = names;
       this.age = ages;
       this.from = froms;
    }
    greetings(){ //method
     return `Hello ${this.name} good morning`;
    }
    static test(){
        console.log("i am static f()");
    }
}

let person1 = new Person("suvoman", "20");
console.log(person1);
// console.log(person1.greetings());
 console.log(Person.test());