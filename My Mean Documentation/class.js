// parent Dot class
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
}
// child Circle class
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
}
// we can now create Circles
const circle1 = new Circle(33, 33, 33);
// same attributes as a Dot, plus a radius
console.log(circle1);
// and Circles can access Dot methods
circle1.showLocation();
// ***************************************
// ***************************************
// CLASS EXTENSION
// ***************************************
// ***************************************
// parent Dot class
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        console.log(`This ${ this.constructor.name } is at x ${ this.x } and y ${ this.y }`);
    }
    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
}
// child Circle class
class Circle extends Dot {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
}
const circle = new Circle(1, 2, 3);
circle.childFunction();
// ***************************************
// ***************************************
//GET SET
// ***************************************
// ***************************************
class Pizza {
    constructor(radius, slices) {
        this.radius = radius;
        this._slices = slices;
    }
    get slices () { 
        return this._slices; 
    }
    set slices (slices) { 
        this._slices = slices;
    }
};
// ***************************************
//GET SET
// ***************************************
const pie = new Pizza(12, 6);
console.log(pie.slices);     // we use the getter to determine how many slices we have
pie.slices = 12;             // the setter will change the number of slices
console.log(pie.slices);     // use the getter again to make sure our slices have doubled
// ***************************************
//GET SET CUSTOM
// ***************************************
class Circle{
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
}
const circle1 = new Circle(1, 2, 5);
console.log(circle1.diameter);

