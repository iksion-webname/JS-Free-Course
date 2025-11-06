"use strict";

let number = prompt("Enter Number :");
number = Number(number);

//console.log(typeof number);

let remender = number % 2; // ভাগশেষ দেখানোর সূত্র

if (remender == 0) {
    alert("Even Number"); // Even Number জোড় সংখ্যার ক্ষেত্রে অর্থাৎ ভাগ যখন মিলে যাবে
} else {
    alert("Odd Number"); // Odd Number বিজোড় সংখ্যার ক্ষেত্রে অর্থাৎ যখন ভাগশেষ থাকবে
}

