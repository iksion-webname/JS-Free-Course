"use strict";

alert("Mim");

let result = 2 + 6;
alert(result);

// দুইটি string value এক সাথে যোগ করার নিয়ম

let resultString = "Selim" + "Reza";
alert(resultString); // দুইটি string Value এক সাথে লেগে যাবে, মাঝে কোন ইসপেস তৈরি হবে না SelimReza

// ======================================

/* প্লাস চিহ্নের মাধ্যমে দুইটি string Value এর মাঝখানে ইসপেস তৈরি করার জন্য দুইটি প্লাস চিহ্নের মাঝখানে দুইটি ডবল ইনভাইটেড কমা ব্যবহার করতে হয়ে এবং ডবল ইনভাইটেড কামর মাঝে একটি ইসপেস দিতে হয় । 
যেমন:  + " " +  */

let resultOne = "Zhumu" + " " + "Khan";
console.log(resultOne);

// ==========================================

/*প্রথম string value এর শেষের ইনভাইটেড কমার আগে  একটি ইসপেস দিতে হয় । অর্থাৎ যে string value টির শেষে ইসপেস তৈরি করতে চাচ্ছি সেই String Value টি লেখা শেষ হলে ডবল ইনভাইটেড করার আগে একটি ইসপেস দিতে হয় । */

let resultThree = "Good " + "Luck"; // এখানে Good লেখার শেষে একটি ইসপেস দিয়ে ইনভাইটেড কমা শেষ করা হয়েছে
console.log(resultThree);

//=============================

let fastname = "Selim ";
let lastname = "Rlp";
let fullname = fastname + lastname; // fastname Selim এর পরে ইসপেস দেওয়ার জন্য ‍Selim ও Rlp এর মাঝে ইসপেস তৈরি হয়েছে ।
console.log(fullname);

// =====================================

let fastnameOne = "Abdul";
let lastnameTwo = "Malek";

let fullnameFather = fastnameOne + " " + lastnameTwo;
console.log(fullnameFather);

//=====12 মিনিট =========================
// ‍string value কে Number value সাথে Concatenation (কন-ক্যাটি-নে-শন ) করলে পাশাপাশি বসে

let priceConca = "4" + 2; // পাশাপাশি বসে 42 হবে
console.log(priceConca);

//=======================================

let priceThree = 5 + 2 + "4"; // এখানে 5+2=7 এর পরে 4 বসে 74 হবে
console.log(priceThree);
