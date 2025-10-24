"use strict";

let num = 0;
//num = 5;
alert((num = 3 + 2));

// let num4 নামক variable এর ভিতরে let num4 এর value 5 এর সাথে num1 এর মান 5 এবং num2 এর মান 6 যোগ হয়ে সর্বমোট 16 স্টোর হবে ।
// N B : let num4 = 5 + (num1 + num2); এখানে সংক্ষিপ্ত আকারে লেখা হয়েছে ।
let num1 = 5;
let num2 = 6;
let num3 = 0;
let num4 = 5 + (num1 + num2);
alert(num4);

// উপরের let num4 = 5 + (num1 + num2); variable টি ভেঙ্গে ভেঙ্গে লেখার নিয়ম ।

let num5 = 5;
let num6 = 6;
let num7 = num5 + num6;
let num8 = 5 + num7;
alert(num8);

//====22 মিনিট =====একই value একাধিক variable এর মধ্যে এক সাথে বসানোর নিয়ম==========

// নিচের এই তিনটি কে একটি variable এর মাধ্যমে assign করার নিয়ম

let num9;
let num10;
let num11;

num9 = num10 = num11 = 5;

alert(num9);
alert(num10);
alert(num11);

//========উপরের Chaining এর চেয়ে নিচের টা করা ভালো ===================================
alert("Allaha");

let num12;
let num13;
let num14;

num12 = 4 + 5;
num13 = num12;
num14 = num13;

alert(num12);
alert(num13);
alert(num14);
