"use strict";

alert("Mim");

function printname(firstNumber, lastNumber = "Test") {
    console.log(`Hello ${firstNumber} ${lastNumber}`);
}

printname("Selim", "Reza");

//console.log(`Hello ${firstNumber} ${lastNumber}`); এর ব্যাখ্যা : এই লাইনের নিচেই printname দ্বার function টিকে call করা হয়েছে । function টিকে call করার ভিতরে 2টি  arguement হিসাবে Selim ও Reza দেওয়া হয়েছে । এই arguement এর সাথে console.log এর ভিতরের Hello কে প্রিন্ট করার জন্য console.log এর প্রথম বন্ধনীর ভিতেরে () প্রথমেই ডবল ইনভাইটেড করার (" ") পরিবর্তে ব্যাকটিক (``) নিতে হবে । তারপর arguement এর সাথে যে লেখাটি প্রিন্ট করতে চাই সে লেখাটি লিখতে হবে । তারপর ডলার ($) চিহ্ন পরে দ্বিতীয় বন্ধনি {} এর ভিতরে function parameter এর নাম অর্থাৎ Variable এর নামটি দিতে হবে ।

/*N B : function এর  parameter অর্থাৎ function এর প্রথম বন্ধনি ( ) এর ভিতের সব সময় 2টি   parameter দেওয়া যায় অর্থাৎ 2টি variable দেওয়া যায় । 

যেমন : function printname(firstNumber, lastNumber) এখানে parameter 2টি হলো firstNumber ও lastNumber*/

/* =================================================================================
 ( 9 মিনিট ) Default Parameter : 2টি parameter থাকা স্বতেও একিটি arguement দ্বারা প্রিন্ট করা যায় যাতে দ্বিতীয় টির জন্য undefined না দেখায়  আর এটাকে Default Parameter বলে 
====================================================================================*/

function printNameOne(firstNumber, lastNumber = "Test") {
    console.log(`Hello ${firstNumber} ${lastNumber}`);
}

printNameOne("Zhumu");

/*দ্বিতীয়  parameter এর মধ্যে Defolt Value Store করার নিয়ম :   parameter এর মধ্যে 2টি arguement থাকে এবং  arguement কে pass করার সময়  অর্থাৎ প্রিন্ট করার সময় যদি অর্থাৎ নিচেই function এর name এর ভিতরে একটি arguement হয় তাহলে সেটি প্রথম variable এর ভিতরে store হবে এবং  দ্বিতীয় variable এর ভিতরে undefined  ‍স্টোর হবে । যাতে দ্বিতীয় variable এর ভিতরে undefined  স্টোর না হয়ে Defolt Value Store হয় তার জন্য দ্বিতয়ী arguement এর পরে সমান (=) চিহ্ন পরে ডবল ইনভাইটেড কমার ভিতরে defolt value টি লিখতে হবে । arguement টি pass করার সময় যদি দ্বিতীয় agruement না দেওয়া হয় তাহলে defolt value টি স্টোর হবে । অর্থাৎ প্রিন্ট হবে । যেমন : lastNumber = "Test"  এখানে দ্বিতীয় variable এর ভিতরে defolt value হিসাবে Test স্টোর হবে । আর যদি ‍arguement এর ভিতরে দুুট value দেওয়া হয় তখন আর defolt value টি store হবে না । যেটি দেওয়া হবে সেটি store হবে ।  */

/* =================================================================================
 ( 11 মিনিট ) 
====================================================================================*/

function sum(fastnumber, lastnumber) {
    console.log(`Selim ${fastnumber}  ${lastnumber}`);
    // fastnumber * lastnumber;
}

sum(2 * 3, 5 * 2);

/* =================================================================================
 ( 16 মিনিট ) Defolt Value হিসাবে Expration ( এক্সপেশন ) সেট করার নিয়ম
====================================================================================*/

function printNameTwo(firstnumber, lastnumber = 1 == 1) {
    console.log(`Zhumu ${firstnumber} ${lastnumber}`);
}

printNameTwo("Mim");

// efolt Value হিসাবে Expration ( এক্সপেশন )  1 == 1 সেট করা হয়েছে । এই এখানে Expration ( এক্সপেশন ) সত্য তাই true দেখাবে যদি দ্বিতীয় arguement না pass করা হয়

/* =================================================================================
 ( 17 মিনিট ) Default Parameter : Defolt Value হিসাবে function কেউ সেট করা যায় তার নিয়ম 
====================================================================================*/

function test() {
    alert("Allah Help me");
}

function printNameThree(firstNumber, lastNumber = test()) {
    console.log(`Oh ! ${firstNumber} ${lastNumber}`);
}

printNameThree("Zhumu");

/* =================================================================================
 ( 21 মিনিট )  Default Parameter : Defolt parameter function এর variable এর সাথে না দিয়ে function এর body ভিতরে if condition এর মাধ্যমে দেওয়ার নিয়ম ।  
====================================================================================*/

function printnameFour(fistNumber, lastNumber) {
    if (lastNumber === undefined) {
        lastNumber = "test";
    }
    console.log(`Zhumu ${fistNumber} ${lastNumber}`);
}

printnameFour("Selim");

// যদি Defolt parameter হিসাবে দ্বিতীয় variable টি lastNumber = test() এভাবে তৈরি করলে যদি কোন brwser সাপোট না করে তার জন্য এই if condition এর মাধ্যমে লিখতে হয়

/* =================================================================================
 ( 21 মিনিট )  Default Parameter : Defolt parameter function এর variable এর সাথে না দিয়ে function এর body ভিতরে or (|| ) Operator  এর মাধ্যমে  Default Parameter সেট করার নিয়ম 
====================================================================================*/
function printnameFive(firstnumber, lastnumber) {
    lastnumber = lastnumber || "test";
    console.log(`Allah ${firstnumber} ${lastnumber}`);
}

printnameFive("Thuin");

/* =================================================================================
 ( 21 মিনিট )  Default Parameter : Defolt parameter function এর variable এর সাথে না দিয়ে function এর body ভিতরে Null (??) Operator  এর মাধ্যমে  Default Parameter সেট করার নিয়ম 
====================================================================================*/

function printnameSix(firstNumber, lastNumber) {
    lastNumber = lastNumber ?? "Text";
    console.log(`Rs.${firstNumber} ${lastNumber}`);
}
printnameSix("Okay");
