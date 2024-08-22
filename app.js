/*

TODO : JavaScript Variables :

* JavaScript variables name case-sensitive
! Variables name can't contain spaces 
! Variables can't be the same as reserved keywords such as "if" or "const"
* By convention, JavaScript variable names are written in Camel-Case
* Variables should be given descriptive names that indicate their content and usage (e.g. "sellingPrice" and "costPrice" rather than "x" and "y")
! You can't add number first
? _, $ is acceptable but - isn't acceptable

*/

/* Var Variable :
 * You can Re-Declare
 * You can Re-Assign
 ? Global Scooped
 * Var is hosted
 */
var a = 10;
var a = 20;
a = "Bangladesh";
console.log(a);

/* Let Variable :
 ! You can't Re-Declare 
 * You can Re-Assign
 ? Block Scooped
 ! Let is not hosted
 */
let b = 10;
b = 15;
console.log(b);

/* Const Variable :
 ! You can't Re-Declare 
 ! You can't Re-Assign
 ? Block Scooped
 ! Const is not hosted
 */
const c = 10;
console.log(c);

const person = {
  firstName: "Hi",
  age: 23,
};

person.country = "Bangladesh";
person.age = 25;

console.log(person);
