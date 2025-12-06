"use stcrict";

function myName() {
    let myfullName = "Selim";
    console.log("myfullName");
    myfullName = "Test";
    console.log("myfullName");
}

/*myName();
myName();*/ // function কে এক্সিকিউট করার জন্য ব্যবহার করা হয়েছে

/* ===================================================================
         ( 6 মিনিট ) Local  Variable  নিয়ে আলোচনা 
======================================================================*/

function myNametwo() {
    let fname = "Md Abdul Malek";
    console.log(fname);
    alert(fname);
}
myNametwo(); // myNametwo নামক variable টি এক্সিকিউট করার জন্য ব্যবহার হয়েছে

// function এর মধ্যে লেখা সম্পূর্ণ কোর্ডটি এক্সিকিউট করতে হলে function এর myNametwo()  নামটি copy করে function এর বাইরে past করতে হয় । তখন এ function এর মধ্যে যা লেখা হয়েছে সম্পূর্ণ code  এক্সিকিউট হবে ।

// function এর ভিতরে থাকা যে কোন একটি variable কে যদি copy করে function এর বাহিরে past করা হয় তহলে সেই variable টি এক্সিকিউট হবে না । এটাই হলো local variable এর বৈশিষ্ট ।

//console.log(fname); // এটি দ্বারা function এর ভিতরের একটি variable কে এক্সিকিউট করার জন্য ব্যবহার করা হয়েছে । কিন্তু  এটি এক্সিকিউট হবে না । কারন fname নামক variable টি function এর ভিতরের একটি variable ,  local variable এর কোন variable function এর বাহিরে এক্সিকিউট করা যায় না ।

function myNameThree() {
    let motherName = "Ozifa Akther";
    console.log(motherName);
    motherName = "Test";
    console.log(motherName);
}
myNameThree();

// (11 মিনিট ) এখানে একটি variable এর ভিতরে 2টি value রাখা হয়েছে । প্রথম value টি হলো Ozifa Akther এবং 2য় value টি হলো Test

/* ===================================================================
( 13 মিনিট ) Global Variable  নিয়ে আলোচনা 
======================================================================*/

// (14 মিনিট ) নিচেই  Global Variable টি হলো let yourName = "Tamim"; এই Variable টি যখন Local  Variable এর ভিতরে ব্যবহার কতে হয় তখন ঐ  Global Variable এর name টি copy করে function এর ভিতরে  console.log অথবা alert এর মাধ্যে past করে দিলেও  এক্সিকিউট হবে ।

let yourName = "Tamim";

function myNamefour() {
    let brotherName = "Shamim Reza";
    console.log(brotherName);
    brotherName = "Azim";
    console.log(brotherName);
    console.log(yourName); // বাহিরের let yourName = "Tamim"; এখানে function এর ভিতরে ব্যবহার করা হয়েছে
    yourName = "Web Ground"; // Global Variable টি let yourName = "Tamim"; এটি এখানে তার মানের পরিবর্তন করেছে । তাই এখানে Web Ground এক্সিকিউট করাবে। (18 মিনিট)
}
myNamefour(); // function কে এক্সিকিউট করার জন্য ব্যবহার করা হয়েছে
console.log(yourName); // function এর ভিতরে  yourName কে এক্সিকিউট করার জন্য ব্যবহার করা হয়েছে

/* ==========================================================================
   ( 22 মিনিট ) Local এবং Global এর একই নামে দুটি Variable তৈরি করা যায়
=============================================================================*/
alert("Mim");

let officeName = "BRDB";
/*alert(officeName);
console.log(officeName);*/

function myOfficename() {
    let officeName = "BRDB, Sitakunda";
    console.log(officeName);
}

myOfficename();
console.log(officeName);
