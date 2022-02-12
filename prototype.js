//prototype

function Cat(name){
    this.name = name;
}
Cat.prototype.talk = function(){ //add in class by prototype
    console.log('meow meow');
}
const myCat = new Cat('Tiger');
console.log(myCat);
myCat.talk()//possible to access, prototype inheritance