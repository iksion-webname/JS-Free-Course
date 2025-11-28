"use strict";

//aert(" ALLAHA");

let myName4;
console.log(myName4); // 

/*=====================================================================================
undefined দেখাবে কারণ let myName4 এই variable এর ভিতরে কোন value দেওয়া হয় নি । কোন variable এর ভিতরে কোন value দেওয়া না হলে সেটি undefined দেখায় । 
====================================================================================*/

if (myName !== undefined && myName !== null) {
    alert("Defined");
} else {
    alert("undefined");
}

let myName1;
let test;

if (myName1 !== undefined && myName1 !== null) {
    test = "Hello";
} else {
    test = "by";
}

alert(test);
