//abstraction

class Animal{
    constructor(){

    }
    talk(){
         throw new Error("u must impliment talk() method at class Dog")// force for impliment is abstraction
       //console.log("make noise");
    }
}

class Cat extends Animal{
    talk(){
        console.log("meow meow noise of cat");
    }
}
class Dog extends Animal{
    talks(){
        console.log("bark bark noise of dog");
    }
    // talk(){ //happening method override
    //     console.log("bark bark noise of dog");
    // }
}

//call
const myCat = new Cat();
myCat.talk();

const myDog = new Dog();
myDog.talk(); //no talk() method in class Dog, so will do inheritance from parent
myDog.talking(); //error


//Different between inheritance & abstraction:
// extend is inheritance
// force for impliment is abstraction