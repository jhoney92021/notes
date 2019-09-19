
// __proto__

obj1.newProperty = "newProperty!";
obj1.__proto__.anotherProperty = "anotherProperty!";
console.log(obj1.anotherProperty); // anotherProperty!
console.log(obj1.newProperty); // newProperty!
// What about obj2?
console.log(obj2.newProperty); // undefined
console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!

function makePerson(name, age)
{
    this.name = name;
    this.age = age;

    this.yell = function() {console.log("My name is  " + this.name + "!!!!!");}

    return this

}

var billy = new makePerson("Billy", 58);
console.log(billy);
var billyBad = new makePerson("BillyBadAss", 0);

