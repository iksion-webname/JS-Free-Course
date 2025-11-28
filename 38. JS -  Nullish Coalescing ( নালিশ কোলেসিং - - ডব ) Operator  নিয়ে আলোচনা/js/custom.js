"use sctict";

let myName;
console.log(myName);

/*============================================================================
undefined দেখাবে কারণ let myName এই variable এর ভিতরে কোন value দেওয়া হয়নি । কারণ কোন variable এর ভিতরে কোন value দেওয়া না হলে সেটি undefined দেখায় । 
=============================================================================*/

/* ( 3 মিনিট ) যদি নিচের এই let myName1; নামক variable টি null না হয় এবং undefined না হয় তহলে একটি মেসেচ দেখাও not undefined তখন নিচের নিয়মে করতে হবে  */

let myName1;
if (myName1 !== undefined && myName1 !== null) {
    alert("defined");
} else {
    alert("undefined");
}

/* !== কে নট এক্সজাক্ট ইকুয়াল বলে  */

/*  উপরের if condition এর myName1 !== undefined অংশের অর্থ হলো যদি myName1 নামক variabe এর মান undefined না হয়, হওয়ার কথা ছিল undefined কিন্তু নট ইকুয়ার (!==) ব্যবহার করায় নাম বিপরীত হয়ে গেছে এজন্য defined এক্সিকিউট না হয়ে   else এর মান undefined এক্সিকিউট হবে, এবং (&&) এর পরে null এর আগে নট ইকুয়াল (!==) ব্যবহার করায় এর মানে হয় যদি যায়গাটি ফাকা না হয় কিন্তু হওয়ার কথা ছিল ফাকা এখানে বিপরীত মানে হওয়ায় if (myName1 !== undefined && myName1 !== null) কন্ডিশনটি  undefined এবং null হওয়ার কথা ছিল কিন্তু নট ইকুয়াল (!==) ব্যবহার করায় তা হয়নি । এ কারনে if এর শর্তনুযায়ী দ্বিতীয়  else এর alert এর ভিতরে থাকা undefined টি এক্সিকিউট হবে ।  কোন variable এর ভিতরে কোন value দেওয়া না হলে সেটি undefined দেখায় ।  */

// ======== 7 মিনিট ======================================

let myName3 = "Reza";
let test;
if (myName3 !== undefined && myName3 !== null) {
    test = "Hello-1";
} else {
    test = "byy";
}

alert(test);

/* if (myName3 !== undefined && myName3 !== null) এর অর্থ হলো যদি myName3 নামব variable এর মান  undefined না হয় এবং  null না হয় তাহলে test নামক variable এর ভিতরে Hello কে store কর । কিন্তু let myName3; ও let test; নামক variable এর কোন মান দেওয়া নাই একারনে এই if (myName3 !== undefined && myName3 !== null)  এর প্রথম  test = "Hello"; কন্ডিশনটি সত্য নয় এজন্যই দ্বিতীয় কন্ডিশন  else এর ভিতরে থাকা text variable এর byy স্টোর হবে এবং এক্সিকিউট হবে  */

// ======== 8 মিনিট ======================================

let myName4 = "Reza";
let test2;

if (myName4 !== undefined && myName4 !== null) {
    test2 = "Hello";
} else {
    test2 = "Byy okay";
}
alert(test2);

// এই if (myName4 !== undefined && myName4 !== null) কন্ডিশনটি মান হলো যদি undefined না হয় এবং (&&) null না হয় তাহলে test2 নামক variable এর ভিতরে Hello স্টোর করো । এখানে let myName4 নামক variable এর value দেওয়া আছে Reza  তাই variable টি undefined এবং (&&) null ও না , তাহরে কিছু স্টোর আছে । এখানে variable এর ভিতরে Reza স্টোর আছে । তাই if এর প্রথম কন্ডিশন টি মিলে যাওয়া text2 এর মান Hello স্টোর হবে ।

// ======== 9 মিনিট ==== ( ? : ) Ternary Operator (Class-33 ) ===============

/* উপরের এই if (myName4 !== undefined && myName4 !== null) এর বিস্তারিত টি শটকাটে দেখানোর জন্য ব্যবহার করতে হয়  ( ? : ) Ternary Operator  অথবা  Conditional  অথবা Question Mark Operato এই  সংক্ষিপ্ত সূত্রের মাধ্যমে দেখানোর নিয়মটি হলো Nullish Coalescing Operator (??)-এর কাজ  */

let myName5 = "Selim";
let test3;

test3 = myName5 !== undefined && myName5 !== null ? "Hello" : "Byy";

alert(test3);

/* সূত্রের ব্যাখ্যা */
/* test3 = myName5 !== undefined && myName5 !== null ? "Hello" : "Byy"; 
এই Ternary Operator (?) সূত্রটির ব্যাখ্যা হলো 
1। test3 দ্বারা যে variable এর ভিতরে স্টোর হবে তার নাম দেওয়া হয়েছে 
2। myName5 হলো যে variable এর value আছে সেই variable এর নাম দেওয়া হয়েছে
3। myName5 !== undefined && myName5 !== null এতটুকু হলো if এর condition টুকু 
4। যদি 3নং এর condition টি সত্য হয় তাহলে Hello এক্সিকিউট হবে । আর যদি সত্যনা হয় তাহলে Byy এক্সিকিউট হবে  */

//======= 11 মিনিট ======================================

let myName6 = "Zhumu";
let test4;
/*
if (myName6 !== undefined && myName6 !== null) {
    test4 = "Good";
} else {
    test4 = "Bad";
}

alert(test4); */

/* if condition টিকে Ternary Operator রুপান্তরিত করা হয়েছে*/

test4 = myName6 !== undefined && myName6 !== null ? "Good" : "Bad";
alert(test4);

//============= 11 মিনিট ==============================================

let myName7 = "Abdulla";
let test5;
/*
test5 = myName7 !== undefined && myName7 !== null ? "Very Good" : "Very Bad";

alert(test5);

 এই Ternary Operator(?) টিকে Nullish Coalescing (??) এ রুপান্তর করা হয়েছে । */

test5 = myName7 ?? "Bad";
alert(test5);

// test5 = myName7 ?? "Bad"; এর অর্থ হলো myName7 নামক variable টি যদি null না হয় এবং undefined না হয় তহলে myName7 নামক variable এর vlue টি let test5; নামক variable এর ভিতরে store হোক । অন্যথায় let test5; নামক variable এর ভিতরে Bad Store হোক ।

// এখানে let myName7 এই variable এর value আছে Abdulla তাই let test5; নামক variable এর ভিতরে Abdulla  store হবে এবং এক্সিকিউট হবে Abdulla

// ==========================================================

let myName8;

let test6;

test6 = myName8 ?? "Not Good";

alert(test6);

// এখানে variable এর কোন value দেওয়া হয়নি, তাই Nullish Coalescing (??) এর দ্বারা Not Good এক্সিকিউট হবে । কারণ এখানে variable কে Define কারা হয় নি, অর্থাৎ variable এর কোন value দেওয়া হয় নি । variable টি undefine অবস্থায় আছে ।

// ================== 18 মিনিট =======================================

let myName9;
let yourname = "anything";
let test7;

test7 = myName9 ?? yourname ?? "wellcome";

alert(test7);

// এখানে variable টি Define করা হয়েছে । অর্থাৎ variable এর value হিসাবে anything (let yourname = "anything";) দেওয়া হয়েছে, তাই variable এর value এক্সিকিউট হবে। অর্থাৎ anything এক্সিকিউট হবে ।

// Nullish Coalescing(??) Operator এবং OR (||) Operator সবসময় true কে খোজে। প্রথমে যে variable এর মানটি true পাবে তার value টি এক্সিকিউট করাবে । true পাওয়ার পর পরবর্তী variable এর ভিতরে যাবে । এখানে প্রথম variable let myName9; যার কোন value assign করা হয়নি। তাই দ্বিতীয় variable (let yourname = "anything";) যাওয়ার পর সে variable টি Define দেখতে পাবে । অর্থাৎ Variable এর মান হিসাবে Zhumu দেখতে পাবে । এই দ্বিতীয় variable এর value Zhumu কে এক্সিকিউট করিয়েছে ।

//========== 20 মিনিট ====== OR (||) == Operator এর ব্যবহার =================

let myName10;
let yourName = "Zhumu";
let test8;

test8 = myName10 || yourName || "Name do not Define";

alert(test8);

// এখানে OR(||) Operator এর মাধ্যমে এক্সিকিউট করা হয়েছে । variable এর মান থাকায় অর্থাৎ Veriable টি Define করায় variable এর value Zhumu এক্সিকিউট হবে ।

// =====================================================

let amount = 0;
let myName2 = "Ibrahim";
let test9;

test9 = amount ?? myName1 ?? "Rong";
alert(test9);

//  এখানে প্রথম variable এর Value পাওয়ায় Nullish Coalescing(??) আর দ্বিতীয় variable এর ভিতরে যাবে না । প্রথম variable এর মান 0 (শূন্য) কে assign করাবে ।

//============= 24 মিনিট ==============================

alert("Mim");

let myName11 = 10;
let myName12 = 20;

let amount1 = (myName11 ?? 5) * (myName12 ?? 6);

alert(amount1);

// এখানে রেজাল্ট হিসাবে 200 দেখাবে ।
