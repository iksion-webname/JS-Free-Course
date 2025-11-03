"use strict";

/*if(jady ami valo porikha die){
    Ami valo result karbo
}*/

let fastName = "Selim";

if (fastName == "Selim") {
    alert("hello Javascript");
}

let middelName = "Selim";
if ((middelName = "Selim")) {
    alert(middelName);
}

// if এর প্রথম ব্রাকেটের ভিতরে যেটি থাকে সেটি boolean data type এর হয় । কারণ if condition  টি true হবে না false হবে সেটি if এর প্রথম ব্রাকেটের ভিতরে value উপরে নির্ভর করে

// ======================================================================

alert("Mim");

let myName = "Reza"; // এই লাইনের অর্থ যদি myName এর সমান "Reza" এজন্যই if এর মধ্যে ইকুয়াল (==) আপারেটর ব্যবহার করা হয়েছে ।

if (myName == "Reza") {
    alert("Hello Javascript");
}

//========26 মিনিট ====================================================

let myNameTwo = prompt("Enter your Name ");

if (myNameTwo == "something") {
    alert("Your niame is" + myNameTwo);
}
