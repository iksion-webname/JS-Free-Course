"use strict";

let fastName = "Reza";
if (fastName == "Reza") {
    alert("Hello");
}

let amount = 10;
if (amount == 10) {
    alert("Selim");
}

//==========================================
let amountOne = 50;
if (amountOne == 60) {
    alert("Ibrahim");
}

//ব্যাখ্যা : এখানে let দ্বারা তৈরি amountOne নামক variable এর মধ্যে 50 Store করা হয়েছে। কিন্তু if এর ভিতরের amountOne নামক variable এর মধ্যে ইকুয়াল বা ডবল ইকুয়াল (==) এর পরে 60 লেখায় variable দুইটির value সমান নয় । তাই if condition টি False হওয়ায় if এর ভিতরেই ঢুকছেনা । তাই দেখা যাবে না ।

//=======5 মিনিট ===== else এর ব্যবহার =================================

let amountTwo = 80;

if (amountTwo == 100) {
    alert("RLP");
} else {
    alert("BRDB");
}

//======= 11 মিনিট ===== else if এর ব্যবহার =================================

let amountThree = 21;

if (amountThree == 10) {
    alert("10");
} else if (amountThree == 20) {
    alert("20");
} else {
    alert("something"); // সর্বশেষ এটাই দেখাবে
}

//ব্যাখ্যা : amountThree নামক variable এর মান 21 হওয়ায় if (amountThree == 10) হওয়ায় if কন্ডিশনের মধ্যে ঢুকবে না । তারপর else এর সাথে  if থাকায় else এর কন্ডিশন যুক্ত হয়েছে যার ফলে else if (amountThree == 20) টি variable এর সাথে মিলছে কিনা তা চেক হবে। চেক হয়ে দেখা যাচ্ছে যে variable হিসাবে let amountThree = 21; দেওয়া রয়েছে , যার ফলে মিল নাই । সর্বশেষ কোন মিল না পাওয়ায় else এর মাধ্যমে alert("something"); এর মান something দেখা যাবে ।

// ============================================================================

let amountFour = 400;

if (amountFour == 300) {
    alert("300");
} else if (amountFour == 400) {
    alert("400");
} else {
    alert("Something");
}

/* =======18 মিনিট ====================================================
   if condition এর মাধ্যমে user ==এর কাছ থেকে তথ্য নেওয়ার নিয়ম =======
 user যদি মাসের প্রথম তিন অক্ষর দেয় তাহলে মাসের নামের সম্পূর্ণ অক্ষর দেখা যায় তার নিময়ম
====================================================================*/
let monthName = prompt("Enter your month name :", "Jan");

if (monthName == `Jan`) {
    alert("January ");
} else if (monthName == `Feb`) {
    alert("February ");
} else if (monthName == `Mar`) {
    alert("March");
} else if (monthName == `Apr`) {
    alert("April");
} else if (monthName == `May`) {
    alert("May");
} else if (monthName == `Jun`) {
    alert("June");
} else if (monthName == `Jul`) {
    alert("July");
} else if (monthName == `Aug`) {
    alert("August");
} else if (monthName == `Sep`) {
    alert("September ");
} else if (monthName == `Oct`) {
    alert("October");
} else if (monthName == `Nov`) {
    alert("November");
} else if (monthName == `Dec`) {
    alert("December");
} else {
    alert("In valied month name");
}

// =======24 মিনিট =========বড়- ছোট এবং সমান নাম নেওয়ার নিয়ম===================

alert("Mim");

let amountFive = prompt("Enter your amount :");

if (amountFive > 100) {
    alert("Amount is greater than 100");
} else if (amountFive < 100) {
    alert("Amount is less than 100");
} else if (amountFive == 100) {
    alert("Amount is equial to 100");
}
