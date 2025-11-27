"use strict";

alert("Mim");

for (let count = 1; count <= 10; count++) {
    console.log("Allah " + count);
}

// এখানের Allah খেলাটি 10 বার print হবে ।
// count++; এটাকে javascript এর ভাষায় staping (স্টেপিং) বলে । এই stepping  এর কাজ হলো variable এর মান কতবার বৃদ্ধি (++) পাবে বা হ্রাস (--) পাবে তা নির্দেশ করতে ব্যবহার হয় ।

/* =======================================================================
  7 মিনিট continue; এর ব্যবহার একটি ইটারেশন বাদ দেওয়ার নিয়ম for এর মাধ্যমে
==========================================================================*/

for (let count1 = 1; count1 <= 10; count1++) {
    if (count1 == 5) {
        continue;
    }
    console.log("Zhumu " + count1);
}

// if (count1 == 5)  এর অর্থ হলো যদি if condition এর মান 5 এর সমান বাড়ে তাহলে continue; অর্থাৎ 5 নং ইটারেশনটি ইসক্রিপ্ট করে দেও  অর্থাৎ 5 নং ইটারেশনটি বাদ দিয়ে দাও ।

/* =======================================================================
  11 মিনিট continue; এর ব্যবহার 2টি ইটারেশন বাদ দেওয়ার নিয়ম for এর মাধ্যমে
==========================================================================*/

for (let count2 = 1; count2 <= 10; count2++) {
    if (count2 == 2 || count2 == 4 || count2 == 6 || count2 == 8) {
        continue;
    }
    console.log("Zim " + count2);
}

// একই continue এর মধ্যে একাধিক ইটারেশন বাদ দেওয়ার জন্য যে কয়টি ইটারেশন বাদ দিতে হবে প্রত্যেকটির মাঝে পাইপ (||) দিয়ে লিখতে হয়

/* ==========================================================================
  17 মিনিট continue; এর ব্যবহার একটি ইটারেশন বাদ দেওয়ার নিয়ম। while এর মাধ্যমে 
=============================================================================*/

let whileCount3 = 1;
while (whileCount3 <= 10) {
    whileCount3++;

    if (whileCount3 == 5) {
        continue;
    }
    console.log("Dell " + whileCount3);
}

// let whileCount3 এর মান 1 এবং stepping++ হিসাবে  whileCount3++; ব্যবহার করায় ইটারেশন হিসাবে Dell 2 থেকে শুরু হবে টারেশন  Dell 1 থেকে শুরু হবে । কারণ stepping++ এর অর্থ হলো Loop টি যখন ঘুরবে প্রতিবার 1 করে বৃদ্ধি পাবে । এখানে Variable (let whileCount3 = 1;) এর মান 1 থেকে শুরু হওয়ায় এই variable এর মান 1 এর সাথে stepping++ এর মান 1 যোগ হয়ে (1+1) বা 2 হবে । যদি variable এর মান শূন্য (0) থেকে শুরু হয় তখন টারেশন  Dell 1 থেকে শুরু হবে, তখন variable এর মান শূন্য (0) এর সাথে stepping++ এর 1 যোগ (0+1) বা 1 হবে।

// ( 19 মিনিট ) : stepping++  বা stepping-- সবসময় for এর ভিতরে if condition এর  নিচের দিকে রাখতে হয় কিন্তু while এর ক্ষেত্রে if condition এর উপরে রাখতে হয় । তার ব্যাখ্যা নিচেই চিত্রের সাহায্যে দেওয়া হলো ।
/*
let whileCount3 = 1;
while (whileCount3 <= 10) {
    

    if (whileCount3 == 5) {
        continue;
    }
    console.log("Dell " + whileCount3);

    whileCount3++;
}
    */

/* 
 N B ( 18 মিনিট ): while Loop এর ক্ষেত্রে যদি if condition এর মান true হয় এবং continue; থাকে তহলে if condition নিচের  console.log("Dell " + whileCount3); ভিতরে আর প্রবেশ না করে পরবর্তী ইটারেশনে চলে যাবে । অর্থাৎ পুনরায় উপরের  while Loop থেকে শুরু করবে । 

*/
/* 
 let whileCount3 এই variable এর মান 1 যখন while (whileCount3 <= 10) এর whileCount3 এর যায়গায় বসাবো তখন হবে while (1<=10) এর অর্থ হলো 1 ছোট 10 থেকে , বাক্যটি সত্য । বাক্যটি সত্য হওয়ায় while Loop টি if condition এর ভিতরে ঢুকে যাবে । দেখাযাবে if (whileCount3 == 5) আছে , variable এর 1 মানটি তখন if এর condition এর  (whileCount3 == 5) যায়গায় অর্থাৎ (whileCount3 == 5) এর স্থলে (1 == 5) যা 1   5  এর সমান নয় । তখন false হবে । false হবার কারনে  if condition কন্ডিশন থেকে বেরিয়ে  console.log("Dell " + whileCount3); এর ভিতরে প্রবেশ করবে তার পর Dell 1 দেখাবে । সর্বশেষ যখন Loop টি whileCount3++; ভিতরে প্রবেশ করবে তখন ++ থাকায় 1 ‍বৃদ্ধি পেয়ে 2 হবে । তখন পুনরায়  while Loop টি if condition এর ভিতরে ঢুকে যাবে (whileCount3 == 5) যায়গায় অর্থাৎ (whileCount3 == 5) এর স্থলে (2 == 5) যা 2   5  এর সমান নয় । তখন false হবে । false হবার কারনে  if condition কন্ডিশন থেকে বেরিয়ে  console.log("Dell " + whileCount3); এর ভিতরে প্রবেশ করবে তার পর Dell 2 দেখাবে । সর্বশেষ যখন Loop টি whileCount3++; ভিতরে প্রবেশ করবে Loop টি দ্বিতীয় বার ঘুরঝে তাই  ++ থাকায় 2 থেকে ‍বৃদ্ধি পেয়ে 3 হবে এভাবে Loop টি চতুর্থবার যখন চলবে তখন while (whileCount3 <= 10) এর মান হবে 5 । তখন হবে while (5 <= 10) যা 5 হলো 10 এর ছোট । true হওয়ায় নিচের if (whileCount3 == 5) এর ভিতরে প্রবেশ করবে তখন if (5 == 5) এটাও true হয়ে যাবে, তখন Loop টি আর console.log("Dell " + whileCount3); এর ভিতরে প্রবেশ করবে না । পুনরায় while (whileCount3 <= 10) এর ভিতরে প্রবেশ করবে তখন while (whileCount3 <= 10) এর মান হবে 5 । তখন হবে while (5 <= 10) যা 5 হলো 10 এর ছোট । true হওয়ায় নিচের if (whileCount3 == 5) এর ভিতরে প্রবেশ করবে তখন if (5 == 5) এটাও true হয়ে যাবে, এভাবে  চলতেই থাকবে কখনো শেষ হবে না । তখন Loop টি infinite ( ইনফিনিট পড়ে যাবে ) ককন শেষ হবে না । 
   */

/* ==========================================================================
  17 মিনিট continue; এর ব্যবহার একটি ইটারেশন বাদ দেওয়ার নিয়ম। while এর মাধ্যমে 
=============================================================================*/

let whileCount4 = 0;
while (whileCount4 <= 10) {
    whileCount4++;

    if (whileCount4 == 5) {
        continue;
    }
    console.log("R.L.P " + whileCount4);
}

/* 
( 20 মিনিট ) উপরের Loop টির ব্যাখ্যা : প্রথমে দেখা যাচ্ছে let whileCount4 = 0; এই Variable এর মান 0 (শূন্য) এই 0 (শূন্য) টি while Loop (whileCount4 <= 10)  এর মধ্যে প্রবেশ করবে তখন মান হবে while (0 <= 10) অর্থাৎ 0 থেকে 10 বড় যা true । while Loop টি true হওয়ায়  staping (স্টেপিং)  whileCount4++;  তে ++ থাকায় 1 ‍বৃদ্ধি পেয়ে if (whileCount4 == 5) এর ভিতরে প্রবেশ করবে, তখন হবে if(1==5) অর্থাৎ 1  5 এর সমান নয় যা false তখন console.log("R.L.P " + whileCount4); ভিতরে প্রবেশ করবে এবং R.L.P 1  এক্সিকিউট করবে । 
*/
