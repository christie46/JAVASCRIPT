// How to do break statement
for(let m =1; m <=5; m++){
   if(m==4){
      break;
   }
   console.log(m)
}
for(let m =1; m <=5; m++){
   if(m==4){
      continue;
   }
   console.log(m)
}
function greet(){
   console.log('Good afternoon')
}
greet()
// Declaring a function
// function greet(name){
//    console.log('Hello ' + name + ', ' + 'you look good')

// }
// let name2 =prompt('please enter your name')
// greet(name2)
// Write a program to multiply two numbers using a function
// function product (x, y){
//    let z =x*y
//    console.log(z)
// }
// product(12, 16)
// // Return Statement
// function product (x, y){
//    let z =x*y
//    return z
// }
// let multiple=product (2, 4)
// console.log(multiple)

// ASSIGNMENT
// Using normal method for addition
function add (x, y, s){
   let z =x+y+s
   console.log(z)
}
add(10, 10, 10)
// Return Statement for addition
function add (x, y, s){
   let z =x+y+s
   return z
}
let addition=add (10, 10, 10)
console.log(addition)
// Using normal method for division
function add (x, y){
   let z =x+y
   console.log(z)
}
add(10, 10)
// // Return Statement for addition
function add (x, y){
   let z =x+y
   return z
}
let addition=add (10, 10)
console.log(addition)
// A PROGRAM TO DIVIDE ANY NUMBER
// METHOD ONE
let x=prompt ('please enter the number you want to divide')
let y=prompt ('please enter the divisive number')
function division (x, y){
   let z = x/y
   console.log(z)
}
division(x, y)
// METHOD TWO
let x=prompt ('please enter the number you want to divide')
let y=prompt ('please enter the divisive number')
function division (x, y){
   let z = x/y
   return z
}
let divide=division(x, y)
   console.log(divide)

   // A PROGRAM TO SQUARE A NUMBER
// METHOD ONE
let x=prompt('please enter any number')
function square(x, x){
let y =x*x
console.log(y)
}
square(x, x)
// METHOD TWO
let x=prompt('please enter any number')
function square(x, x){
let y =x*x
return y
}
let sq=square(x, x)
console.log(sq)