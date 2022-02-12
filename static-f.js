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


 /*
 class Animal {
    static category = 'Dog';
    location = 'Khagrachori';
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }
    static compare(animal1, animal2){
        if(animal1.speed > animal2.speed){
            return `${animal1.name} is Faster`;
        }
        return `${animal2.name} is Faster`;
    }
}
const myRat = new Animal('rat', 12);
const myDog = new Animal('dog', 50);
// console.log(myRat.category)
// console.log(myRat.location)
// console.log(Animal.category)
// console.log(Animal.location)
console.log(Animal.compare(myRat, myDog));
 */
