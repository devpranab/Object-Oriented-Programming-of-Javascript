//encapsulation
//doing private property

class Person{
    #speed = 100;//private data
    //location = "kolkata";//public
    constructor(name){
        this.name = name;
        //this.#speed = 110;//will be change
    }
    run(){
        console.log(`i'm ${this.name} i'm running at ${this.#speed} mph`);
    }
}
const pranab = new Person("pranab");
console.log(pranab);
//console.log(pranab.#speed); //can't access because it's private
//pranab.#speed = 120; //can't change because it's private, but changable in class
pranab.name = "sarkar"; //but will be change
pranab.run();