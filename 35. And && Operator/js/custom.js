"use strict";

/*============================================================================
 false && true ----------- false  ( মিথ্যা  এবং সত্য -------- মিথ্যা রিটান করবে )
true && false -------------- false ( সত্য এবং মিথ্যা -------- মিথ্যা রিটান করবে )
false && false ------------- false ( মিথ্যা  এবং মিথ্যা ------ মিথ্যা রিটান করবে )
true && true --------------- true  ( সত্য  এবং সত্য -------- সত্য রিটান করবে )
==============================================================================*/

let userName = "Reza";
let userRoll = "Moderator";

if (userName == "abcd" && userRoll == "admin") {
    alert("Hello " + userRoll);
} else {
    alert("Invalide credentiall");
}

/* এখানে if এর প্রথম condition টি False তাই দ্বিতীয় condition টি Invalide credentiall টি Show হবে */

//==== 15 মিনিট =====================================

let res = 2 && 0 && 5;
alert(res);

/* ব্যাখ্যা : and (&&) operator সবকিছু boolean data type এ রুপান্তর করে । এখানে এই 2 && 0 && 5 অর্থাৎ 2 0 5 boolean value নয়, নাম্বার value , নাম্বার value হলেও javascript এই 2 0 5 কে boolean value তে রুপান্তর করে নেবে । এখানে and (&&) oprator যখন 2 কে Boolean এ convat করবে তখন true পাবে , 0 কে Boolean এ convat করা যায় না তাই False হবে । alert(res); এর মাধ্যমে রান করলে রেজাল্ট হিসাবে 0 দেখা যাবে । কারণ এই and (&&) operator যখনি false পাবে তখন সেখানে থেমে যাবে । False এর পরে যদি true value থাকে সেটা আর রান করবে না। যেখানে false পেয়েছে সেই false এর যায়গায় যে value থাকবে সেটি রান করাবে।   */

//======= 20 মিনিট ===================================================

let userName1 = "Reza";
let userRoll1 = "admin";

if (userName1 == "Reza" && userRoll1 == "admin") {
    alert("Hello " + userRoll1);
} else {
    alert("False");
}

/* এখানে if condition এর  সব গুলো condition সত্য তাই একেবারে শেষের অজিনাল value রিটান করে অর্থাৎ variable এর ভিতরে যে value থাকে সেটি রিটান করবে। এখানে if condition এর admin হলো শেষের value তাই Hello admin দেখা্ যাবে এবং store হবে । */

/* ======== 31 মিনিট =================================================
 রেঞ্জের কার করার জন্য এই addEventListener(&&) operator ব্যবহার করতে হয় । রেঞ্জের কাজ বলতে কত থেকে কত এর মধ্যে সীমাবদ্ধ থাকবে। যেমন : 10 থেকে 40 এর মধ্যের সংখ্যা অর্থাৎ 10 এর বড় এবং 40 এর ছোট যেকোন সংখ্যা */

let amount = 35;

if (amount >= 80 && amount <= 100) {
    alert("Amount is too high");
} else if (amount >= 50 && amount >= 79) {
    alert("amount is too low ");
} else {
    alert("Amount is very Low");
}

//===== 37 মিনিট === একই সাথে and(&&)=== ও === OR(||) ==ব্যবহাররের নিয়ম ==========

let value1;
let value2;
let value3;
let value4;
let value5;

if ((value1 && value3) || (value2 && value4)) {
}

// ========================================================
/* পরীক্ষর গ্রেট পয়েন্ট অনুযায়ী F, D, C, B, A-, A, A+ */
// ========================================================
alert("Mim");

let bengla = prompt("Input Number");

if (bengla >= 0 && bengla <= 32) {
    alert("F");
} else if (bengla >= 33 && bengla <= 39) {
    alert("D");
} else if (bengla >= 40 && bengla <= 49) {
    alert("C");
} else if (bengla >= 50 && bengla <= 59) {
    alert("B");
} else if (bengla >= 60 && bengla <= 69) {
    alert("A-");
} else if (bengla >= 70 && bengla <= 79) {
    alert("A");
} else if (bengla >= 80 && bengla <= 100) {
    alert("A+");
} else {
    alert("Invalide");
}
