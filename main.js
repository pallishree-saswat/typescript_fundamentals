"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//declare a new variable
//.ts extension
var message = 'hello world welcome';
console.log(message);
//next step is to compile this down typescript into  plain javascript
//using typescript compiler
//type command tsc main.ts 
//it will create a file main.js
//variable declaration
var x = 10;
var t = 'typescript';
//can declare without initialisation
var sum;
//can not declare without declaration
var title = 'typescript';
//basic variable types
var isBegginer = true;
var total = 0;
var name = 'palli';
var sententce = "my name is " + name;
console.log(sententce);
//subtypes
var n = null;
var u = undefined;
var isNew = null;
var myname = undefined;
//Array type
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuple type
var person1 = ['Chris', 22];
// Enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// Any type
var randomValue = 10;
randomValue = true;
randomValue = 'Vishwas';
// Unknown type
var myVariable = 10;
console.log(myVariable.name.firstName);
myVariable();
myVariable.toUpperCase();
// Type inference
var a;
a = 10;
a = true;
var b = 10;
// Union Types
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
// Functions
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
function fullName(person) {
    console.log(person.firstName + ' ' + person.lastName);
}
var p = {
    firstName: 'Bruce'
};
fullName(p);
// Classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log('Good morning ' + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delgating tasks' + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//public for -access anywhere
//private - access only inside that class
//protected- access inside that class and  inside derived classes from that class
