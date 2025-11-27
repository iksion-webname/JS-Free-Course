"use strict";

let start = 1;

while (start <= 10) {
    console.log("Hello " + start);
    break;
    start++;
}
/* 
start ++; কে javascript এর ভাষায় staping (স্টেপিং) বলে ।

 start ++; অর্থাৎ staping (স্টেপিং) এর উপরে break; ব্যবহার করায় while loop টি run করবে না । 
 
 while loop টি 10 বার loop বা ঘোরার কথা ছিল কিন্তু  staping (স্টেপিং) এর উপরে break; ব্যবহার করায় while loop টি run করবে না ।*/

//  Hello লেখাটি 10 বার এক্সজিকিউট হওয়ার কথা কিন্তু Hello লেখাটি এক বার এক্সজিকিউট হবে কারণ start1++; এর আগে  break; দেওয়া while (start1 <= 10) লেখাটির ভিতরে আর প্রবেশ করবে না । তখন  কেবল মাত্র variable টি অর্থাৎ let start1 = 1; লেখাটি এক্সজিকিউট  হবে । কারণ variable টি 1 বার এক্সজিকিউট হয় ।

// ( 7 মিনিট )

/*==========================================================================
            if condition এর উপরে ভিত্তি করে break; এর ব্যবহার
==========================================================================*/

let start1 = 1;

while (start1 <= 10) {
    console.log("Reza " + start1);

    if (start1 == 6) {
        break;
    }
    start1++;
}
// start1++; এটাকে javascript এর ভাষায় staping (স্টেপিং) বলে । এই stepping  এর কাজ হলো variable এর মান কতবার বৃদ্ধি (++) পাবে বা হ্রাস (--) পাবে তা নির্দেশ করতে ব্যবহার হয় ।

// if condition টি while loop এর ভিতরে console.log("Reza " + start1); এর উপরে অথবা console.log("Reza " + start1); এর নিচেও লেখা যায় । দুটির ভিন্ন ভিন্ন মানে প্রদর্শন করে ।

// যদি while এর ভিতরের (start1 <= 10) লেখায় Reza লেখাটি 10 বার এক্সজিকিউট হবে । কিন্তু এই Reza লেখাটি যদি 10 এক্সিকিউট করতে না চায় অর্থাৎ  কাউন্ট করতে না চায়  তাহলে while এর ভিতরে if condition ব্যবহার করতে হয় । আর if (start2 == 6) অর্থাৎ statr value এর মান 6 লেখায়  6 বার কাউন্ট হবে তখন 6 বার এক্সজিকিউট করার পর অর্থাৎ 6 বার ঘুরার পর 7ম বার while থেকে বেরিয়ে আসবে । কারণ হলো loop টি কতবার ঘুরবে তা নির্ভর করছে  console.log() এর উপরে নির্ভর করে । এখানে console.log("Reza " + start2); টি if condition এর উপরে লেখা হয়েছে । যদি if condition এর নিচেই  console.log("Reza " + start2); লেখা হয় তাহরে 6 তম বার Loop টি ঘোরার সময়  বাহিরে বেরিয়ে আসবে । তখন এক্সিকিউট হবে 5 । সর্বশেষে  staping (স্টেপিং) অর্থাৎ start1++; লিখতে হয় ।

/*==========================================================================
            if condition এর উপরে ভিত্তি করে break; এর ব্যবহার
==========================================================================*/

// যদি 6 তম বারেই অর্থাৎ 5 বার ঘুরার পর while Loop থেকে বেরিয়ে আসতে হয় তহলে if condition টি  console.log("Ibrahim " + start2); এর উপরে দিতে হবে । যা নিচেই দেখানো হলো ।

let start2 = 1;

while (start2 <= 10) {
    if (start2 == 6) {
        break;
    }
    console.log("Mother " + start2);
    start2++;
}

// if (start2 == 6) এই লাইনের অর্থ হলো  যদি start2 এর value 6 হয় অথবা start2 এর value 6 এর সমান হয় তাহলে
// start2++; এটাকে javascript এর ভাষায় staping (স্টেপিং) বলে । এই stepping  এর কাজ হলো variable এর মান কতবার বৃদ্ধি (++) পাবে বা হ্রাস (--) পাবে তা নির্দেশ করতে ব্যবহার হয় ।

/*==========================================================================
        12 মিনিট   while (true)  কে enfinit থেকে বন্ধ করার নিয়ম 
==========================================================================*/

let start3 = 1;

while (true) {
    console.log("Father " + start3);

    if (start3 == 3) {
        break;
    }

    start3++;
}

// start3++; এটাকে javascript এর ভাষায় staping (স্টেপিং) বলে । এই stepping  এর কাজ হলো variable এর মান কতবার বৃদ্ধি (++) পাবে বা হ্রাস (--) পাবে তা নির্দেশ করতে ব্যবহার হয় ।

// while এর condition এর ভিতরে কেবল true দেওয়া হয়েছে । true দেওয়ায় সমস্ত loop টি infinite এর ভিতরে পড়ে যাবে । infinite থেকে রক্ষা করার জন্য if condition এর ভিতরে break ব্যবহার করা হয়েছে ।

// start5++; কে stepping; বলে । এই stepping; দ্বারা বোঝা যাবে  Loop টি কোথায় গিয়ে False হবে

// while এর condition checking এর যায়গায় (true) দেওয়ার ফলে while এর সমস্ত কন্ডিশন টি Infinitve ( ইনফিনিটিভ ) হয়ে যাবে। যার ফলে loop টি চলতেই থাকবে এবং পুরো পেজটি হ্যাং হয়ে যাবে ।

// while এর condition checking এর যায়গায় (true) দেওয়ার ফলে সরাসরি while Loop এর ভিতরে ঢুকে যাবে । ঢুকার পর প্রথমে if condition এর ভিতরে (start5 == 7)  break লেখা থাকায় Infinitve ( ইনফিনিটিভ ) থেকে রক্ষা পাবে এবং Reza লেখাটি 6 বার প্রিন্ট হওয়ার পর 7 তম বার while loop এর বাহিরে চরে আসবে । console.log টি if condition এর নিচেই থাকার কারনে   Reza লেখাটি 6 বার প্রিন্ট হওয়ার পর 7 তম বার while loop এর বাহিরে চলে এসেছে । এভাবে enfinit (ইনফিনিট ) কে break এর মাধ্যমে বন্ধ করা যায় ।

/*==========================================================================
        15 মিনিট   ইউজারের কাছ থেকে prompt এর মাধ্যমে string value নেওয়ার নিয়ম  
==========================================================================*/

// ইউজারের কাছ থেকে input box এর মাধ্যমে নাম নেওয়ার জন্য browsur Refress করলে একটি input box আসবে এবং ঐ input box এর ভিতরে কোন কিছুর নাম দিয়ে নিচেই Ok তে ক্লিক করলে পুনরায় input box আসবে আবরও নাম দিয়ে ok তে ক্লিক করলে আগের নামের পাশে এক ইসপেস ফাকা রেখে পাশাপাশি একই variable এর ভিতরে যতবার নাম দেবে সবগুলো store হতে থাকবে । যতক্ষন পর্যন্ত input box এর নিচেই cancel এ ক্লিক করা না হবে ততক্ষন পর্যন্ত । যখনি cancel এ ক্লিক করা হবে তখনি ঐ variable টি বন্ধ হয়ে যাবে । অর্থাৎ loop টি বন্ধ হয়ে যাবে ।

// while (true)  এর অর্থ ( 18 মিনিট ): এখানে while (true) অর্থ হলো যতক্ষন চলছে চলুক । আর এই যতক্ষন চলছে চলুক এটা হতে পারে না । তাই যে কোন একটি সময় বন্ধ করতে হবে । আর এই বন্ধ করার সময় টি লিখতে হবে if condition এর ভিতরে ।

//myName = myName + promptName;

let myName = "";
while (true) {
    let promptName = prompt("Enter your name");
    if (!promptName) {
        break;
    }
    myName = myName + promptName;
}

console.log(myName);

// !promptName এর ব্যাখ্যা (19 মিনিট ) : !promptName এর অর্থ হলো যদি prompt নামক variable এর মধ্যে কোন না থাকে তাহলে break করে while Loop এর বাহিলে চলে আসবে ।

// myName = myName + promptName; এর ব্যাখ্যা : এই প্রথম myName নামক variable এর ভিতরে স্টর হবে । সমান চিহ্নের পরের myName এর কাজ হলো প্রতিবার যে লেখা দেবে সেটি পাশাপশি একটি ইসপেস পার পর স্টর করবে ।

//************************************************************* */

let myName1 = "";

while (true) {
    let promptName0 = prompt("Enter your nick name");
    if (!promptName0) {
        break;
    }

    myName1 += promptName0;
}

console.log(myName1);

// myName = myName + promptName; এর সংক্ষিপ্ত রুপ  myName1 += promptName0; দুটোর কাজ একই

/*==========================================================================
    28 মিনিট   ইউজারের কাছ থেকে prompt এর মাধ্যমে Number value নেওয়ার নিয়ম  
==========================================================================*/

let fastNumber = 0;

while (true) {
    let promptNumber = prompt("Enter Your Amount");
    if (!promptNumber) {
        break;
    }
    fastNumber += promptNumber;
}

console.log(fastNumber);

// ইউজার prompt box এর মধ্যে প্রতিবার যে নাম্বার গুলো দেবে সবগুলো পাশাপশি বসবে । কনকানেট হয়ে পাশাপাশি বসবে । আমরা জানি input box এর মাধ্যে ইউজার যে value টি দেয় সেটি সবসময় string data type এর হয় । আর এই string data type টি কে নাম্বারে convat করার জন্য prompt এর আগে প্লাস (+) চিহ্ন দিতে হয় । আর যখন prompt এর আগে প্লাস (+) চিহ্ন দেওয়া হবে তখন input box এর ভিতরে যতবার number দেওয়া হবে । সবগুলো যোগ করে রেজাল্ট দেবে ।

/*==========================================================================
    28 মিনিট   ইউজারের কাছ থেকে prompt এর মাধ্যমে Number value নেওয়ার নিয়ম  
==========================================================================*/
alert("Mim");

let sum = 0;

while (true) {
    let promptNumber1 = +prompt("Input Number");
    if (!promptNumber1) {
        break;
    }
    sum += promptNumber1;
}
console.log(sum);

// counter3++; এটাকে javascript এর ভাষায় staping (স্টেপিং) বলে । এই stepping  এর কাজ হলো variable এর মান কতবার বৃদ্ধি (++) পাবে বা হ্রাস (--) পাবে তা নির্দেশ করতে ব্যবহার হয় ।