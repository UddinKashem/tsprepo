//import { Circle, Square } from "./shape";
/**Default Export */
//import Store, { Format } from "./storage";
/**Wildcard Import */
//import * as Shape from "./shapes"

// let circle = new Circle.Circle(56);
// console.log("Area of Circle: " + circle.radious);

// let square = new Square.Square(54);
// console.log(square);

// let store = new Store();
// console.log(store);
import { Circle, Square } from "./shapes";

let circle = new Circle(5);
console.log("Area of Circle: " + circle.radious);

let square = new Square(34);
console.log("Area of Square: " + square.width);

