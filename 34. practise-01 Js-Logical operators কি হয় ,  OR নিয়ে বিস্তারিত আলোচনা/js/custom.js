"use strict";
/* if ( jadi id card thaky || jadi reg nam thaky) {
    "ami school a probes kartay pari"
}*/

let av = 1,
    bv = 2;

if (av == bv || av > bv) {
}

/* True || true —---------- true  রিটান করবে ,  [ || ( or )  operant এর দুটি মানই true হলে true রিটান করে ] 
True || False  —----------- true  রিটান করবে
False || true —------------- true  রিটান করবে
False || False —----------- False  রিটান করবে */

// || (OR) variable যখন False রিটান করবে তখন ‍ alert এর মাধ্যমে Run হবে না । অর্থাৎ দেখা যাবে না । (30 মিনিট )

//=======================================
// নিচের variable start 23 মিনিট থেকে
// ======================================

let fisrsNumber = 10;
let secondNumber = 25;

if (fisrsNumber > 5 || secondNumber < 25) {
    alert("Gather than 5 or lessthan 25");
}

//  (fisrsNumber > 5 || secondNumber < 25) এখানে fisrsNumber > 5  এর অর্থ হলো fisrsNumber টি 5 থেকে বড় অথবা (||) secondNumber < 25 এর অর্থ হলো 25 থেকে ছোট

/*(fisrsNumber > 5 || secondNumber < 25) [এর মান বসিয়ে ]
10>5 || 25<25 
ব্যাখ্যা : এখানে দেখা যাচ্ছে যে 10 গেটার দ্যান 5 রয়েছে অর্থাৎ 10 বড় 5 থেকে যা সত্য কিন্তু or এর পরে রয়েছে 25 লেস দ্যান 25 যা মিথ্যা, কারণ 25 থেকে 25 ছোট হতে পারে না । প্রথম বাক্যটি সত্য হওয়া if condition টি true হবে এবং এক্সিকিউট হবে অর্থাৎ run হবে । */

// ===============================================

let fastNumber1 = 2;
let secodNumber1 = 25;

if (fastNumber1 > 5 || secondNumber < 20) {
    alert("Gather than 5 or less than 20");
}

// (fastNumber1 > 5 || secondNumber < 20) এর মান বসালে হয় 2 > 5 || 20 < 20; যা কোন শর্তটিই সত্য নায় তাই এক্সিকিউট হবে না অর্থাৎ run হবে না।

//==================================================
let fastNumber2 = 100;
let secodNumber2 = 200;

if (fastNumber2 > 50 || secodNumber2 < 150) {
    alert("Well come");
}

//======= 31 মিনিট ===================================

let username = "Reza";

let userRoll = "admin";

if (username == "abcd" || userRoll == "admin") {
    alert("Login successfull");
}

// এখানে দ্বিতীয় কন্ডিশন userRoll == "admin" টি মিল থাকায়  এক্সিকিউট হবে অর্থাৎ run হবে ।

//======== 35 মিনিট===========================================

let userName1 = "";

if (userName1 == "" || userName1 == null) {
    alert("Username Requird");
}

//==== 35 মিনিট ======== variable এর মধ্যে OR (||) এর ব্যবহার  ===========

alert("Mim");

let returnValue = 0 || 5 || 2;
alert(returnValue);

//==================================================

let a = 0;
let b = 5;
let c = 2;

if (a > b || b < c) {
    alert();
}

//===== 1:01 মিনিট =====================================

let userName5 = prompt("Enter username");

let usreIsBlank = userName5 || "Blank User";

if (usreIsBlank == "Blank User") {
    alert("User name is Blank");
}
