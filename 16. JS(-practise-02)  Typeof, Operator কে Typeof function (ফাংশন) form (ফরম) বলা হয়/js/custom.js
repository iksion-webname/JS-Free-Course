"use strict";
let fname = "Md Selim Reza";

console.log(typeof fname);
alert(fname);

let lname = "Reza";
alert(typeof lname); //কোন ধরনের value সেটি Show হবে। String Value হওয়ায় ‍String Show হবে
alert(lname);

/*============================================================================*/
// একই লাইনে value Assign করা

console.log(typeof 320); // Output: Number দেখাবে

console.log(typeof 850n); // Output: BigIng দেখাবে

console.log(typeof "Javascript"); // Output: String দেখাবে

console.log(typeof true); // Output: Boolean দেখাবে

console.log(typeof undefined); // Output: undefined দেখাবে

console.log(typeof null); // Output: null এর বেলায় Object দেখায়  কারণ এটা ব্যতিক্রম

// typeof কে দুই ভাবে লেখা যায়
typeof price; // ব্রাকেটের ভিতরে value দেয়ায় একে -- Function Form  বলে
typeof price; // Value ব্রাকেটের  ভিতরে  না রাখায় একে  --- Operator Form বলে

/*==============================================================================*/
// আলাদা লাইনে Value Assing করা

const myVariable = null;
console.log(typeof myVariable); // Output: "object"

const myOtherVariable = "Hello";
console.log(typeof myOtherVariable); // Output: "string"

const myNullVariable = null;
console.log(myNullVariable === null); // Output: true
