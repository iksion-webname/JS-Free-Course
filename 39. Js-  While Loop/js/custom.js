"use strict";

/*console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");*/

// while loop এর সূত্র

/* while (condition) {
    loop body
} */

// condition এর যায়গায় দিতে হয় condition টি

// loop body এর যাযগায় দিতে হয় যে জিনিসটি বার বার run করতে চাচ্ছি সে জিনিস টি ।

// seentax বা stacture বা গঠন প্রনালী

// 10 মিনিট থেকে শুরু
// counter > 5 একে বলা হয় counter Less than 5
// while (counter < 5) এর কাজ হলো যতক্ষন পর্যন্ত counter এর value 5 এর কম থাকবে ততক্ষন পর্যন্ত Run করবে ।

// let counter = 0;
// while (counter < 5)   [ counter greather than 5]
// এই let counter variabl এর মান  0 , while এর counter < 5 এর মানের সাথে  সম্পর্ক যুক্ত । আর while এর counter < 5 এর counter যায়গায় 0 ( শূন্য ) বসবে । তখন  seentax বা stacture বা গঠন প্রনালী হবে 0 < 5 অর্থাৎ সবসময় 0 ( শূন্য ) থেকে 5 সব সময় বড় দেখাবে তাই সবসয় True দেখাবে ।  loop কখনো শেষ হেব না । Enfinitive দেখাবে ।

// N B : while এর counter টি এমন ভাবে তৈরি করতে হবে যে কোন এক সময় False হয় ।
// while (counter < 5) এর মান কোন এক সময় False করার জন্য counter এর মান 1 ( এক ) বাড়িয়ে দিতে পারি । আর এই counter এর মান 1 ( এক ) বাড়ানোর বিভিন্ন উপায় রয়েছে । যেমন : counter = counter + 1; অথবা counter += 1; অথবা counter += 1;

//============================================================================

console.log("Hello");
/*while (condition) {
    loof body
}*/

let counter = 0;
while (counter < 5) {
    console.log("Zhumu");
    counter++;
}

// counter>5 এর অর্থ counter Less than 5 অর্থাৎ counter এর মান সবসময় 5 এর চেয়ে ছোট হবে । counter এর মান সর্বচ্চ 4 পর্যন্ত হতে পারবে ।

// counter++; একানে ++ দেওয়া প্রতিবার 1 করে বৃদ্ধিপেতে থাকবে। আর এই বৃদ্ধিটা হবে 5 এর থেকে কম । কারণ while এর condition এর ভিতরে  counter>5 এর অর্থ counter Less than 5 অর্থাৎ counter এর মান সবসময় 5 এর চেয়ে ছোট হবে ।

// while এর condition এর ভিতরে counter>5 ( counter Less than 5 ) লেখায় loop টি 5 বার ঘুরবে । এই ঘুরাটা console.log এর ভিতরে দেখা যাবে । console.log("Zhumu"); লেখায়  Console এর ভিতরে Zhumu এর সামনে 5 লেখা গোলের ভিতরে দেখা যাবে ।  inspect এর console এর ভিতরে প্রবেশ করলে Zhumu লেখার সামনে গোলের ভিতরে 5 লেখা দেখা যাবে । গোলের ভিতরে 5 লেখা দেখা যাওয়ার অর্থ হলো Loop টি 5 বার ঘুরছে ।

// console.log এর প্রথম বন্ধনির ইনভাইটেড (" ") কমার ভিতরে যেটি লেখা হবে সেটি console.log এ দেখা যাবে । এখানে console এর ভিতরে Zhumu লেখায় Zhumu দেখা যাবে ।

// N B : কখন while এর body ভিতরে থাকা Condition এর মান ++ হয় । যখন let দ্বারা তৈরি variable এর মান while এর condition এর মানের চেয়ে ছোট হয় তখন While এর body এর ভিতরে condition এর পরে ++ দিতে হয় ।
// ব্যাখ্যা : এখানে Variable এর মান 0 দেওয়া আছে এবং while loop এর condition এর মান লেসদ্যান ইকুয়াল (<=) 5 দেওয়া আছে । variable এর মান বৃদ্ধি করলে 5 এর সমান বা কম হবে ।  তাই variable এর মানটি কখনই 5 এর বড় হবে না । সেজন্যই loop টি 5 বার ঘুরবে । বৃদ্ধি পাওয়ার জন্যই  counter3++; দেওয়া হয়েছে ।

// ======== 24 মিনিট ======================================

let counter1 = 8;
while (counter1) {
    console.log("Lucky");
    counter1--;
}

// N B : কখন while এর body ভিতরে থাকা Condition এর মান -- হয় । যখন let দ্বারা তৈরি variable এর মান while এর condition এর মানের চেয়ে বড় হয় তখন While এর body এর ভিতরে condition এর পরে -- দিতে হয় । while loop এর condition এর ভিতরে কোন value দেওয়া হয় না । এখানে while (counter1) এর ভিতরে কোন value দেওয়া হয়নি ।

// ========= 27 মিনিট =======================

alert("Mim");

let counter3 = 10;
while (counter3) {
    console.log("Khan " + counter3);
    counter3--;
}

//  counter3--; দেওয়ায় loop টি যখন ঘুরবে তখন প্রতিবার 1 করে কুমতে থাকবে । এখানে variable এর মান 10 দেওয়ায় loop টি ঘুরার সময় 1 করে কুমে 10 বার পর্যন্ত ঘুরবে ।

//  console.log("Khan" + counter2); এর ভিতরে "Khan" নামক ‍string value এর পাশে প্লাস (+) চিহ্ন দিয়ে variable এর নাম টি লেখায় console এর ভিতরে নিচেই নিচেই 10 বার  Khan লেখাটি Print হবে ।  Khan লেখাটি 10 বার  print হবার কারণ হলো let counter3 = 10; নেওয়ার কারনে ।
