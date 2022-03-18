/////IF -ELSE
// let briyani = 90;
// if(briyani>=100){
//     console.log("win briyani");
// }
// else{
//     console.log("no briyani");
// }

// let radnum = Math.random()

//example

// if(radnum < 0.5){
//     console.log("heads")
// }else{
//     console.log("tails")
// }

//////ELSE IF
// let cooking=90;

// if (cooking >=90){
//     console.log("A")
// }
// else if(cooking>=80){
//     console.log("B")
// }
// else if(cooking>=70){
//     console.log("c")
// }
// else if(cooking>=60){
//     console.log("d")
// }
// else{
//     console.log("else")
// }

// <!--nested-->
// let cook=95;
// if(cook>= 90){
//     console.log("a")
//     if(cook>= 98){
//         console.log("extra a")
//     }
//     else{
//         console.log("just a")
//     }
// }

// else if(cook>=80){
//     console.log("b")
// }
// else{
//     console.log("else")
// }

////AND OPERATOR
// let color="purple";
// let animal="toads";

// if(color==="purple" && animal==="toad"){
//     console.log("wow purple toad");
// }

// else{
//     console.log("no")
// }

////OR OPERATOR
// let age="17";

// if (age<20 || age>=70){
//     console.log("free")
// }
// else{
//     console.log("pay")
// }

// let rate = 100;
// if (rate >= 100) {
//   console.log("success");
// } else {
//   console.log("no");
// }

////loops => for loop

// for (let i = 0; i < 10; i++) {
//   console.log("in the loop", i);
// }

//perfect square(1-20)
// for (let i = 1; i <= 20; i++) {
//   console.log(i * i);
// }

//countdown backward(50-40)
// for (let i = 50; i >= 40; i--) {
//   console.log(i);
// }

// //while loop

// let i = 50;
// while (i >= 40) {
//   console.log(i);
//   i--;
// }

// let password = "lol";
// let guess = prompt("enter the password");
// while (guess !== password) {
//   console.log("try again");
//   guess = prompt("enter the pass");
// }
// console.log("you got it");

// let password = "lol";
// let guess = prompt("enter password");
// while (guess !== password) {
//   console.log("try agaain");
//   guess = prompt("enter pass");
// }
// console.log("you got it");

////for...of

// const purchases = [21.3, 45, 67, 54, 32];
// for (let i = 0; i < purchases.length; i++) {
//   console.log(purchases, "i");
// }

// const purchases = [21.3, 45, 67, 54, 32];
// let total = 0;
// for (let i = 0; i < purchases.length; i++) {
//   total += purchases[i];
//   console.log(purchases[i]);
// }
// console.log(`total: $${total}`);

////for ..of process syntax

// for (let char of "cszxcsdf") {
//   console.log(char);
// }

// const purchases = [32.4, 32, 43, 45, 56];
// let total = 0;
// for (let purchase of purchases) {
//   total += purchase;
//   console.log(purchase);
// }
// console.log(`Total is:$${total}`);

/////////FUNCTIONS////

// function laugh() {
//   console.log("hahahaha");
// }
// laugh();

// const color = function laugh() {
//   console.log("hehehehe");
// };
// color();

///////////PASSING ARGUMENTS IN FUNCTION////////////

// function laugh(loundness) {
//   console.log(loundness);
//   console.log("hahahaha");
// }
// laugh();

// function laugh(laughloud) {
//   console.log("ha".repeat(laughloud));
// }
// laugh(2);

// function laugh(laughloud, name) {
//   console.log("Name is:", name);
//   console.log("ha".repeat(laughloud));
// }
// laugh(2, "connel");

// function laugh(laughloud, name) {
//   const laughter = "ha".repeat(laughloud);
//   console.log(`${name} says ${laughter}`);
// }
// laugh(1, "collonal");

// function laugh(laughloud = 3, name = "ermoini") {
//   const laughter = "ha".repeat(laughloud);
//   console.log(`${name} says ${laughter}`);
// }
// laugh(1, "collonal");

/////////////////////////examples using return in functions////////

// function square(num) {
//   console.log(num ** 2);
// }

// function square(num) {
//   return num ** 2;
// }

// const result = square(2);

// function add(x, y) {
//   return x + y;
// }

// guess game
// const test = Math.floor(Math.random() * 10) + 1;
// const guess = parseInt(prompt("enter a number"));
// // while (Number.NaN(guess)) {
// //   guess = parseInt(prompt("enter a number"));
// // }

// while (guess !== test) {
//   if (guess > test) {
//     console.log(`${guess}is too high`);
//   } else {
//     console.log(`${guess}is too low`);
//   }
//   guess = parseInt(prompt("enter again a number"));
//}

//oct4 es6 dev ed

//old
// var counter = 9;
// function name() {
//   let number = 6;
//   console.log(number);
// }
// name();
// function book(title, author) {
//   return {
//     title: title,
//     author: author,
//   };
// }
// book();

//////////////////Arrow function//////
// function sayname() {
//   console.log("hello im dev ed");
// }

// var sayage = function () {
//   console.log("my age is");
// };

// sayname();
// sayage();
/////////////////////////////////

//es6
// const list = [1, 2, 3, 4, 5];
// for (let i = 0; i < list.length; i++) {
//   console.log(i);
// }

// var book = getbook("hp", "jk");
// console.log(book);

//////////Arrow function/////////
// const saylocation=()=>{
//   console.log(`location is`)
// }
// saylocation()

// const saylocation = (location) => {
//   console.log(`location is ${location}`);
// };
// saylocation("paris");

////////////default parameter
// const add = (c = 1, d = 1) => {
//   console.log(c + d);
// };

// add();

////////////////examples of another arrow functions
const shoppinglist = ["Milk", "Cow", "ghee", "butter", "cheese"];
//foreach
// shoppinglist.forEach((item) => {
//   console.log(item);
// });

// shoppinglist.forEach((product, index) => {
//   console.log(`the index is ${index} the product is ${product}`);
// });

//Map
// const newlist = shoppinglist.map((item) => {
//   return item + "new";
// });
// console.log(newlist);

// const newlist = shoppinglist.map((item) => item + "new");
// console.log(newlist);

//filter
// const filterlist = shoppinglist.filter((item) => {
//   return item === "ghee";
// });
// console.log(filterlist);

///////udemy react -js refresher/////

//let&const&var
// var myname = "pravee";
// console.log(myname);

// mynameis = "veena";
// console.log(mynameis);

//arrow function
// function myage(age) {
//   console.log(age);
// }
// myage("21");

// const myname = (name) => {
//   console.log(name);
// };
// myname("maxi");

// const multiply = (number) => {
//   return number * 2;
// };
// console.log(multiply(2));
