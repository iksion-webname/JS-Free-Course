"use strict";

/*let amount = 100;

if (amount == 100) {
    console.log("good");
} else if (amount == 200) {
    console.log("better");
} else if (amount == 300) {
    console.log("Best");
}*/

/*======================================================================
switch (amount) এর ভিতরে কেবলমাত্র variable এর নাম দ্বার তৈরি করা হয়েছে
========================================================================*/

let amount = 100;

switch (amount) {
    case 100:
        alert("100"); //  console.log(....) ব্যবহার করা যাবে
        break;
    case 200:
        alert("200");
        break;
    case 300:
        alert("300");
    default:
        alert("Invalide Amount ");
        break;
}

// switch (amount) {case 100} এর  দ্বারা বোঝায় যদি switch (amount) এর অর্থ {case 100} হয় অর্থাৎ switch (amount) এর অর্থ  100 হয় তাহলে break করো ।

// switch (key) এখানে (key) এর যায়গায় দিতে হয় let দ্বারা variable এর নাম ।

// case value: এখানে case এর পরে value এর যায়গায় variable এর যে value দেওয়া হয়েছে সেই value টি দিতে হয় । যেমন : let amount = 100; এই variable এর মান 100 তাই case এর পরে value এর যায়গায় 100 দেওয়ায় এক্সিকিউট হয়েছে ।

// break; প্রত্যেকটি case value এর নিচেই break; লিখতে হবে । এটাই সূত্র

// যে  case এর value variable এর মানের সাথে মিলে যাবে সেই case টি এক্সিকিউট হবে ।

// default: এর কাজ হলো যদি উপরের কোন case এর মান না মেলে তাহলে default এর ভিতরে alert("100"); অথবা  console.log(....) এর ভিতরে যা লেখা থাকবে সেটি এক্সিকিউট হবে ।

/*======================================================================
  (16 মিনিট ) switch (amount) এর ভিতরে  এক্সপেশন দেওয়া যায় 
========================================================================*/

let amountOne = 400;

switch (amountOne + 100) {
    case 400:
        alert("400");
        break;

    case 200:
        alert("300");
        break;

    case 300:
        alert("400");
        break;

    case 400 + 100:
        alert("500");
        break;

    default:
        alert("Invalide Amount ");
        break;
}

/* switch (amount) এর (amount) নামব variable এর যায়গায় আমরা ইচ্ছা করলে variable এর সাথে একাধিক এক্সপ্রেশন যোগ করতে পারি । এখানে এক্সপ্রেশন বলতে প্লাস (+) চিহ্নকে বুঝানো হয়েছে । যেমন amountOne + 100; এটা একটি এক্সপেশন । switch statement এর ভিতরে একাধিক এক্সপ্রেশন যোগ করা হলেও কেবল মাত্র একটি value এক্সিকিউট করবে । এখানে  amountOne + 100; এক্সপ্রেশনটি রেজাল্ট দেবে (400+100) বা 500 অর্থাৎ একটি value হিসাবে 500 এক্সিকিউট হবে ।

case 400 + 100: এই value এর মান 500 তাই এটি এক্সিকিউট করবে । 
 */

/*======================================================================
  (17 মিনিট ) case এর ভিতরে  এক্সপেশন দ্বারা তৈরি করা হয়েছে case 50 + 50:
========================================================================*/

let amountTwo = 100;

switch (amountTwo) {
    case 50 + 50:
        alert("100");
        break;

    default:
        alert("Invalide Amount ");
        break;
}

/*======================================================================
  (18 মিনিট ) switch  এর ভিতরে  string value অর্থাৎ কোন কিছুর নাম দেওয়া যায় 
========================================================================*/

let fastName = "Selim";

switch (fastName) {
    case "Reza":
        alert("Reza");
        break;

    case "Selim":
        alert("Selim");
        break;

    default:
        alert("Invalid Name");
        break;
}

// এখানে switch statement এ  (key) এর স্থলে amount লেখার পরিবর্তে fastName দেওয়া হয়েছে এবং case এর ভিতরে value পরিবর্তে  "Selim" দেওয়া হয়েছে । এর অর্থ হলো switch statement এর মধ্যে string value দেওয়া যায় ।

// এখানে variable এর value হিসাবে "Selim" দেওয়া আছে, তাই যে case এর value হিসাবে "Selim" পাবে সেই case টি এক্সিকিউট হবে ।

/*======================================================================
 or (||) operator এর ব্যবহার ( Class - 34 এর অংশ )
========================================================================*/

let fastNumber2 = 100;
let secodNumber2 = 200;

if (fastNumber2 > 50 || secodNumber2 < 150) {
    alert("Well come");
}

/* ----------------------------------------------------------------------------
 (19 মিনিট ) এই or (||) operator টি swotch statement এর মাধ্যমে ব্যবহারের নিয়ম
------------------------------------------------------------------------------*/

let number = 300;

switch (number + 200) {
    case 300:
    case 400:
    case 500:
    case 600:
        alert("300 or 400 or 500 or 600");
        break;

    default:
        alert("Invalide Number");
        break;
}

/* or (||) অর্থ অথবা 
or (||) operator টি swotch statement এর মাধ্যমে প্রকাশ করার জন্য switch এর মধ্যে দুইটি case: নিচেই নিচেই রাখলে or (||) operator এর মতো কাজ করে ।

or (||) operator এর মদ্যে দুইটি অপারেন্ট থাকে । এই দুটি অপারেন্টের মধ্যে যে কোন একটি অপারেন্ট সত্য হলে এক্সিকিউট করবে । 
 */
/*
    case 420:
    case 300:
        alert("Good");
        break;

এখানে 2টি case পরপর নিচেই নিচেই রাখার জন্য এবং প্রথম case এর ভিতরে কোন কিছু না রাখার জন্য or (||) operator এর কাজ করছে । 

        */

/*======================================================================
(22 মিনিট ) Strict Equality (= = =) এর ব্যবহার 
========================================================================*/

/* Strict Equality (= = =) এর ভ্যালুগুলির type এবং value উভয়ই চেক করে। যদি একই value হয় তহলে true রিটান করবে । আর যদি তারা একই না হয়, তবে এটি false রিটার্ন করে।  অর্থাৎ Strict Equality সবসময় Boolean data type রিটান করে 

যদি ‍switch এর value এবং case এর value উভয় value এই switch statement এর variable এর সাথে মিল থাকে তাহলে তখন switch statement টি এক্সিকিউট হবে । 

*/

/*==================================================================================
( 24 মিনিট )  prompt এর ব্যবহার , ইউজারের কাছ থেকে value নেওয়ার জন্য prompt ব্যবহার হয় 
=====================================================================================*/
// ‍switch statement এর মধ্যে prompt ব্যবহারের নিয়ম

alert("Mim");

let amountThree = prompt("Enter Amount");

switch (+amountThree) {
    case 100:
        alert("100");
        break;

    case 200:
        alert("Nice");
        break;

    default:
        alert("Invalide");
        break;
}

/* জাভাস্ক্রিপ্টে numeric data types বলতে বোঝায় সেইসব ডেটা যা গাণিতিক মান বা সংখ্যাকে উপস্থাপন করে, যা পূর্ণসংখ্যা (integer) এবং ভগ্নাংশ (floating-point) উভয়ই হতে পারে। 

/* prompt in put box এর মধ্যে user যে value টি দেবে সেটি string data type এর অন্তভূক্ত । এই string data type কে switch statement এর মধ্যে নিউমেরিক অর্থাৎ Number এ  convat করার জন্য switch (+amountThree) সামনে প্লাস (+) চিহ্ন ব্যবহার করা হয়েছে  */

/*let greatpoint = prompt("Enter your amount");

switch (+greatpoint) {
    case 80 <= 100:
        alert("A+");
        break;

    case 70 <= 79:
        alert("A");
        break;

    case 60 <= 69:
        alert("A-");
        break;

    case 50 <= 59:
        alert("B");
        break;

    case 40 <= 49:
        alert("C");
        break;

    case 33 <= 39:
        alert("D");
        break;

    case 0 <= 32:
        alert("F");
        break;

    default:
        alert("Invalide");
        break;
}*/

let value = 75;

switch (true) {
    case value >= 90:
        console.log("A গ্রেড");
        break;
    case value >= 80:
        console.log("B গ্রেড");
        break;
    case value >= 70:
        console.log("C গ্রেড");
        break;
    default:
        console.log("ফেল");
}
