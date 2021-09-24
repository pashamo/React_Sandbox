//let and const instead of var

//arrow function
const printName = name => console.log(name);

printName("Mohammed");

//using import and export

//classes: blueprints for js objects
class Person {
  constructor() {
    this.name = 'Mohammed Pasha';
  }
  printName = () => console.log(this.name);
}
const person = new Person();
person.printName();

//spread and rest oper
//spread used to split array or object
//rest used to merge
//const newArr = [...oldArr, 1,2];
//const filter = (...args) => args.filter();

//== auto conversion and value comparator
//=== stice type and value comparator

//Destructuring - for arrays and objects
const arr = [1,2,3];
[num1, , num3] = arr;
console.log(num1 + " ... " + num3);

//array functions
doubleThis = arr.map((num) => num*2);
console.log(doubleThis);

//