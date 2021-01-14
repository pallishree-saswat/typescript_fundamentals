export {}

//declare a new variable
//.ts extension
let message = 'hello world welcome'
console.log(message)

//next step is to compile this down typescript into  plain javascript
//using typescript compiler

//type command tsc main.ts 
//it will create a file main.js

//variable declaration
let x =10;
const t = 'typescript';
//can declare without initialisation
let sum;
//can not declare without declaration
const title = 'typescript';

//basic variable types
let isBegginer: boolean = true;
let total : number = 0;
let name: string = 'palli';

let sententce: string = `my name is ${name}`
console.log(sententce)

//subtypes
let n: null = null;
let u : undefined = undefined;

let isNew: boolean = null;
let myname: string = undefined

//Array type
let list1 : number[] = [1,2,3];
let list2: Array<number> = [1,2,3]


// Tuple type

let person1: [string, number] = ['Chris', 22];

// Enum type
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

// Any type
let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';

// Unknown type
let myVariable: any = 10;
console.log(myVariable.name.firstName);
myVariable();
myVariable.toUpperCase();

// Type inference
let a;
a = 10;
a = true;

let b = 10;

// Union Types
let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

// Functions

function add(num1: number, num2: number = 10): number {
  if (num2)
    return num1 + num2;
  else
    return num1;
}

add(5, 10);
add(5);

// Interfaces

interface Person {
  firstName: string;
  lastName?: string;
}

function fullName(person: Person) {
  console.log(person.firstName + ' ' + person.lastName);
}

let p = {
  firstName: 'Bruce'
};
fullName(p);

// Classes

class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log('Good morning ' + this.employeeName);
  }
}

let emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log('Manager delgating tasks' + this.employeeName);
  }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//public for -access anywhere
//private - access only inside that class
//protected- access inside that class and  inside derived classes from that class
