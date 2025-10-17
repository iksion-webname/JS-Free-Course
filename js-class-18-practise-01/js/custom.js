"use Strict";

alert("Mim");

let price = prompt("Enter your price");
alert(typeof price);

/* ====================================================*/

let priceOne = 100;
alert(typeof priceOne); //Number

priceOne = String(priceOne); //"100" string value
alert(typeof priceOne); //string show হবে

/* ====================================================*/
let priceTwo = 100;
alert(typeof priceTwo); // Number দেখাবে কারণ উপরের variable টি Number এ আছে
priceTwo = String(priceTwo); // এখানে string ব্যবহার করায় value টি string দেখাবে
alert(typeof priceTwo);
alert(priceTwo);

/* =======  null এর ব্যবহার ========== 14 মিনিট===================================*/
let test = null;
alert(typeof test); // Value হিসাবে Null দেওয়ায় object দেখাবে, কারণ null সবসময় object দেখায়
alert(test);
test = String(null);
alert(typeof test); // ‍null এর আগে string দেওয়ায় string দেখাবে
alert(test);

/* ========  undefined এর ব্যবহার ========= 17 মিনিট===================================*/

let testOne = undefined;
alert(typeof testOne);
alert(testOne);

testOne = String(undefined);
alert(typeof testOne);
alert(testOne);

/* ========  boolean data type (true/false) এর ব্যবহার ==== 17 মিনিট==============*/

let testTwo = true;
alert(typeof testTwo);
alert(testTwo);

testTwo = String(true);
alert(typeof testTwo);
alert(testTwo);

/* ========  string value কে number এ রুপান্তরের নিয়ম ==== 20 মিনিট==============*/

let priceThree = "100"; // ডবল কোটেশনের মধ্যে রাখায় 100 হলো String Value
alert(typeof priceThree);
alert(priceThree);

priceThree = Number("100"); // ডবল কোটেশনের আগে Number লেখায় 100 Number Value
alert(typeof priceThree);
alert(priceThree);

/* ====24 মিনিট ================  string value কে prompt এর মাধ্যমে user এর কাছ থেকে নেওয়ার পর Number Value তে রুপান্তরের নিয়ম =======================*/

let priceFour = prompt("Enter Price");
alert(typeof priceFour);
alert(priceFour);

let newprice = Number(priceFour);
alert(typeof newprice);
alert(newprice);

/* =========================== ২৭ মিনিট ========================*/
// string value এর আগে number লেখায় String value Number এ Convat হয়ে যাবে ।
/* =============================================================*/

let fastNumber = Number("10");
let secondNumber = Number("20");
alert(secondNumber / fastNumber); // ‍alert এর মাধ্যমে ভাগ করা হয়েছে

/* =========================== 37 মিনিট ========================*/
// string value এর আগে number লেখায় String value Number এ Convat হয়ে যাবে ।
/* =============================================================*/
/* prompt এর মাধ্যমে যখন user এর কাছ থেকে কোন Number Value চাওয়া হয় , তখন যদি user Number এর পরিবর্তে String Value অর্থাৎ কোন কিছুর নাম দেয় তখন Variable এর ভিতরে NaN Data type store হবে। */

let rullNumber = prompt("Enter your Rull Number");
alert(typeof rullNumber);
alert(rullNumber);

let newRullNumber = Number(rullNumber);
alert(typeof newRullNumber);
alert(newRullNumber);

/*  ==================== 43 মিনিট ===============================*/
alert("Reza");
let numOne = Number("100");
alert(typeof numOne);
alert(numOne);

/*  === 43 মিনিট =====সমস্ত প্রকার Data type কে Number এ Convat  করার নিয়ম ============*/

let num = Number("100"); // string value হলেও এটি আগে Number দেওয়া এটি Number Da
alert(num);
alert(typeof num); // Number Show হবে ।

//=====================================================

let numOneN = Number(null); // null কে Number এ Convat করলে 0 (শুন্যু) দেখাবে
alert(numOneN);
alert(typeof numOneN);

// ============== undefined =======================================

let numTwo = Number(undefined); // NaN দেখাবে
alert(numTwo);
alert(typeof numTwo);

/* ==== Boolean data type (true , false) ======== Boolean data type এ true হলে Number এ 1 দেখাবে  ==  এবং  ==== Boolean data type এ false হলে Number এ 0 (শূন্য) দেখাবে ===*/

let numThree = Number(true); // Number ফাংশনের মধ্যে true দেওয়ায় 1 দেখাবে
alert(numThree);
alert(typeof numThree);

//------ false এর ক্ষেত্রে ------------

let numFour = Number(false); // Number ফাংশনের মধ্যে false দেওয়ায়  0 (শূন্য) দেখাবে

alert(numFour);
alert(typeof numFour);

// ====59 মিনিট ====white=Space = এর ক্ষেত্রে 0 (শূন্য) দেখাবে ========

let numFive = Number("    "); //white Space অর্থাৎ Empty(খালি) এর ক্ষেত্রে 0 (শূন্য) দেখাবে
alert(numFive);
alert(typeof numFive);

// ==1:03মিনিট= যে কোন data type কে Boolean data type (true , false) রূপান্তিত করার নিয়ম ==

let oldPrice = 200;
let newPriceTwo = Boolean(oldPrice);
alert(newPriceTwo); // true দেখাবে ‍
alert(typeof newPriceTwo); // Boolean দেখাবে

// null , undefined , NaN , "" , 0 এই গুলো যদি কোন variable এর value হয় তাহলে Boolean Data type এর ক্ষেত্রে false দেখাবে ।

let priceFive = null; // null মানে কিছুই না তাই Boolean False রিটান করবে
priceFive = Boolean(priceFive);
alert(priceFive); // false দেখাবে
