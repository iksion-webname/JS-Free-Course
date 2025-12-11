"use stcrict";

function printName() {
    console.log("Selim Reza");
}

printName(); // function টি call করার জন্য ব্যবহার করা হয়েছে । function টি call করার মাধ্যমে function এর মধ্যে যা আছে সবই এক্সিকিউট হবে ।

printName(); // এটি যাতযায়গায় Copy & Past এর মাধ্যমে call করবো ততো যায়গায় console.log এর মধ্যে Selim Reza দেখা যাবে

// এখানে function সূত্রের মাধ্যমে console.log এর মধ্যে Selim Reza দেখা যাবে ।

/* =============================================================================
 (6 মিনিট ) function এর মধ্যে 2টি varible এর মাধ্যমে Dynamic (ডাইনামিক) করার নিয়ম 
=================================================================================*/

function printNametwo(fastname, lastname) {
    console.log(fastname + " " + lastname); //  দুইটি variable এর মধ্যে ইসপেস + " " + করার জন্য ব্যবহার হয়েছে
}

printNametwo("Mahafuz", "Mim"); // printNametwo নামক ফাংশনের ভিতরে দুইটি আলাদা আলাদা string value দেওয়া হয়েছে এবং দুটি পাশাপাশি এক্সিকিউট হবে ।

printNametwo("Zhumu", "Selim");

printNametwo(); // function এর variable এর মধ্যে কোন value না দেওয়া undefine undefine দেখাবে । কারণ variable এর ভিতরে কোন কিছু store না করলে variable টি undefine দেখায় । আর পাশাপাশি 2টি undefine undefine দেখানোর কারণ হলো function এর ভিতরে 2টি variable তৈরি করা হয়েছে । undefine undefine দেখানো কে logical Error বলে ।  (13 মিনিট )

/* N B : Dynamice function এর মাধ্যমে অর্থাৎ যেখানে function টি call করা হবে সেই যায়গাতে function এর নামের মধ্যে যে value অর্থাৎ যে নামটি  দেওয়া হবে সেই যায়গাতে সেই নামটি এক্সিকিউট হবে । কিন্তু function এর শুরুতেই function এর প্রথম () বন্ধনির মধ্যে যে variable তৈরি করা হয়েছে সেই একই variable এর ভিতরে store হবে । */

// function printNametwo(fastname, lastname) এর ব্যাখ্যা : function সূত্র তৈরি করার জন্য ব্যবহার হয়েছে ।  name এর যায়গাই যে নাম দেওয়া হবে সেই নামেই function এর নামকরন হবে । function এবং function name এর পরে প্রথম বন্ধনির ( ) এর মধ্যে যে নাম লেখা হয় সেটি Local variable এর variable  , এই প্রথম বন্ধনির ( ) এর মধ্যে একাধিক variable দেওয়া যায় । একাধিক variable দেওয়ার জন্য কাম ( , ) ব্যবহার করতে হয় ।  function name এর পরে প্রথম বন্ধনি ( ) হলো  loal variable অর্থাৎ ঐ function এর veriable দেওয়ার যায়গা, functiom এর প্রথম বন্ধনির  ভিতরে হওয়ায় let দেওয়া লাগিনি । let ব্যবহার করলেও কোন ক্ষতি নেই করা যাবে , না করা টাই ভালো ।   যদি একাধিক variable দিতে হয় প্রত্যেকটি variable এর মাঝে কমা দিতে হয় ।

// console.log(fastname + " " + lastname); এর ব্যাখ্যা : console.log এর ভিতরে function এর প্রথম বন্ধনির  Variable এর নাম দেওয়ায় হয়েছে + " " +  এর দ্বারা দুইটি variable এর মান  ইসপেস এর মাধ্যমে পাশাপশি রাখার জন্য অর্থাৎ কনকানেশন করার জন্য ব্যবহার হয়েছে ।

// printNametwo("Mahafuz", "Mim"); এর ব্যাখ্যা : এই নাম দুইটি  function এর প্রথম বন্ধনির মধ্যে যে variable আছে তার মধ্যে store হবে ।

/* function parameter(প্যারামিটার) বা parameter ( 16 মিনিট ): function এর প্রথম বন্ধনির মধ্যে যখন 2টি variable থাকে তখন তাকে function parameter বা parameter । 
যেমন : function printNametwo(fastname, lastname) এখানে fastname ও lastname নামে দুটি variable তৈরি করা হয়েছে । তাই এটি function parameter বা parameter হয়েছে  */

/* function arguement (17 মিনিট ): function কে pass করার জন্য অর্থাৎ এক্সিকিউট করার জন্য যে value গুলো pass করা হয় । এই value গুলোকে arguement বলে । function কে call করার জন্য যে value গুলো দেওয়া হয সেগুলো কে function arguement বা arguement বলে ।
যেমন : printNametwo("Mahafuz", "Mim"); এর arguement হলো Mahafuz ও  Mim */

function printNameTwo(fastnameone, lastnameone) {
    console.log(fastnameone + " " + lastnameone);
}
printNameTwo("Rofiqe", "Karim");

printNameTwo("Rumu", "Zhumu");
/* =============================================================================
 (18 মিনিট ) function এর নামের ভিতরে variable সেট করার নিয়ম : function কে call করার জন্য function এর নামের ভিতরে variable এর varible কে pass করার নিয়ম  
=================================================================================*/
function printNamethree(fastNameone, lastnameone) {
    console.log(fastNameone + " " + lastnameone);
}
let officeName = "RLP-3";
let officeStation = "BRDB";

printNamethree(officeName, officeStation);

/* function এর ভিতরে string value এর পরিবর্তে variable কেও pass করা যায় । 
NB : যখন string value পরিবর্তে Variable কে pass করা হয় তখন ইনভাইটেড ("") কমা দেওয়া যায় না । globlab variable এর value যখন function call এর মাধ্যমে function variable এর ভিতরে স্টোর হয় তখন globlab variable এর value টি copy হিসাবে যায় ।  */

function printNamefour(fastnameTwo, lastnameTwo) {
    console.log(fastnameTwo + " " + lastnameTwo);
    broterName = "Shamim Reza";
    console.log(broterName);
}

let fastSon = "Abdulla";
let lastSon = "Ibrahim";

printNamefour(fastSon, lastSon);

/* =============================================================================
 (25 মিনিট ) function এর ভিতরে ক্যালকুলেশন করার নিয়ম : 
=================================================================================*/

alert("Mim");

function sum() {
    console.log(2 + 5);
}

sum();

// নিচেই function এর মাধ্যমে ক্যালকুলেশন করার জন্য  parameter এর সূত্র তৈরি করা হলো

function sumAll(fustNumber, secondNumber) {
    console.log(fustNumber + " " + secondNumber);
}

sumAll(5 * 7, 5 * 8);

/* =============================================================================
 (31 মিনিট ) function এর ভিতরে ক্যালকুলেশন করার নিয়ম : 
=================================================================================*/

function userInput(fustNumber, secondNumber) {
    console.log(fustNumber + " " + secondNumber);
}

let fustName = prompt("Enter Fast Number");
let secondName = prompt("Enter Second Number");

userInput(fustName, secondName);

// variable এর ভিতরে সবসময় string value input হয় তাই prompt inout box এর মাধ্যমে যে সংখ্যা নেওয়া হবে সেটি string value হিসাবে input হবে এবং সংখ্যাগুলো পাশাপাশি বসবে ।

/* ==================================================================================
 (33 মিনিট ) prompt inout box এর মাধ্যমে string value কে number এ convat করার নিয়ম : 
=====================================================================================*/

function userinputNumber(fastname, secondnumber) {
    console.log(fastname + secondnumber);
}

let fastnumberOne = +prompt("Input Fast Number 1");
let secondNameOne = +prompt("Input Second Number 2");

userinputNumber(fastnumberOne, secondNameOne);

// ( +prompt ) এখানে prompt এর আগে প্লাস (+) চিহ্ন দেওয়ায় এবং এই প্লাস (+) চিহ্নকে unary প্লাস বলে ।  unary প্লাস ব্যবহার করলে input box এর ভিতরে যে সংখ্যা দেওয়া হোক তা number এ convat হয়ে যাবে।
