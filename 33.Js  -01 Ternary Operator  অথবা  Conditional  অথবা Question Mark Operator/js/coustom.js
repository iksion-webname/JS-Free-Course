"use strict";
//alert("Allaha Mohan");

let userAccess; // user name টি যদি Admin অথবা Modarator হয় তাহলে আলাদা ভাবে store করার জন্য এই variable টি নেওয়া হয়েছে । ( 3 মিনিট )

let userName = prompt("Enter Username :"); // prompt box এর মাধ্যমে user এর কাছ থেকে যে তথ্য নেওয়া হবে সেটি userName variable এর মধ্যে store হবে ।

if (userName == "Suman") {
    userAccess = "Admin";
} else {
    userAccess = "Modarator";
}

alert(userAccess);

//=============================================================================

// Ternary Operator এর সূত্র :- (expression) ? (value1) : (Value2) এর ব্যাখ্যা  (10 মিনিট )

//Ternary Operator এর সূত্রের ব্যাখ্যা  :- (expression) এর যায়গায় দিতে হয় if condition টি । এখানে if condition টি হলো userName == "Suman" । আর এই "Suman" নামটি হলো নির্দেষ্টি ।

// প্রথম (value1) এর যায়গায় দিতে হয় if condition এর মধ্যে থাকা  প্রথম condition টি । এখানে প্রথম condition টি  হলো string value  "Admin"(অদ্বিতীয়) আর এই নামটি একবারই ব্যবহার করা যাবে

// দ্বিতীয়  (Value2)  এর যায়গায় দিতে হয় if condition এর মধ্যে থাকা  দ্বিতীয় condition টি । এখানে দ্বিতীয় condition টি  হলো else এর মধ্যে থাকা string value "Modarator" ( মধ্যে সব ধরনের নাম লেখা যায় )

let userAccess1;
let userName1 = prompt("Enter your name plase :");

if (userName1 == "Suman") {
    userAccess = "Admin";
} else {
    userAccess = "Modarator";
}
if (condition) {
    
}
//===============================================================================

// উপরের এই if condition টি Ternary Operator এ রুপান্তিত করার নিয়ম (9 মিনিট )।

// Ternary Operator  সূত্র  :- (expression) ? (value1) : (Value2)
// (expression) বলতে বোঝায় if condition অর্থাৎ প্রথম বন্ধনির () ভিতরে যেটি থাকে সেটি
//প্রথম  (value1) বলতে বোঝায় if condition এর কারলি passege অর্থাৎ দ্বিতীয় বন্ধনীর Value অর্থাৎ  "Admin" লিখতে হবে
// দ্বিতীয়  (Value2) বলতে বোঝায়  else এর কারলি passege অর্থাৎ দ্বিতীয় বন্ধনীর Value অর্থাৎ  "Modarator" লিখতে হবে

let userAccess2;
let userName2 = prompt("Enter your name plase :");

userAccess2 = userName2 == "Suman" ? "Admin" : "Modarator";
alert(userAccess2);

// ( 12 মিনিট ) এখানে (ডবল ইকুয়াল ) == বা comparison operators এর কাজ সবার আগে হবে । করাণ হলো এই (ডবল ইকুয়াল ) == বা comparison operators এর রেসিডেন্সি সবচেয়ে বেশি । কোশ্চেন মার্ক (?) operators এর মান সব চেয়ে কোম । যদি userName2 == "Suman" নামক variable এর ভিতরে prompt box এর তথ্য যদি Suman হয় তাহলে variable রিটান করবে বাক্যটি true তখন Admin দেখাবে এটি  প্রথম (value1) এর মান হিসাবে store হবে । আর যদি  prompt box এর তথ্য যদি Suman বাদে অন্য কোন তথ্য হয় তাহলে variable রিটান করবে False দেখাযাবে  Modarator লেখা । এটি দ্বিতীয় (Value2) মান হিসাবে store হবে ।
// Ternary Operator  True অথবা False ( Admin অথবা Modarator ) এর যে কোন একটি value রিটান করবে । আর এই রিটান করা value টি store করার জন্যই এই Ternary Operator আগে  userAccess2 নামক variable  টি লেখা হয়েছে ।
