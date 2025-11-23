"use strict";
alert("Mim");

let counter = 5;

while (counter) {
    console.log("Zhumu" + counter);
    counter--;
}

/*let counter2 = 5;
while (counter2) {
    console.log("Zhumu" + counter2);
    counter2--;
}*/

// Iteration ( 6 মিনিট ) : iteration অর্থ চলা বা ঘুরা ।  Loop টি কতবার ঘুরবে বা চলবে তা নির্ভর করে Loop এর condition / variable এর উপরে । Loop এর 1 বার ঘুরাকে Iteration বলে ।

//====== 6 মিনিট ==========================

let loopCount = 0;
do {
    console.log("Reza" + loopCount);
    loopCount++;
} while (loopCount <= 6);

// ==================================

let loopCount1 = 1;
do {
    console.log("Zim " + loopCount1);
    loopCount1++;
} while (loopCount1 <= 5);

//====================================

let loopCount2 = 8;
do {
    console.log("RLP");
    loopCount2--;
} while (loopCount2);

// ==== 10 মিনিট ==== do while loop এর ব্যাখ্যা ===========

// do while loop এর ব্যাখ্যা : সূত্রের প্রথমে do থাকায় এবং do এর কোন condition না থাকায় সরাসরি console.log এর ভিতরে যেটি থাকবে সেটি 1 বার  Run করাবে ।  1 বার  Run করানোর পরে চলে যাবে নিচেই থাকা while loop এর Condition এর কাছে । while loop এর ভিতরের  Condition টি যতক্ষন পর্যন্ত True থাকবে ততক্ষন পর্যন্ত loop টি ঘুরতে থাকবে । যখনি Condition টি False হবে । তখনি while loop থেকে বেরিয়ে আসবে ।

//do while loop কখন ব্যবহার হয় : কোন কন্ডিশন ছাড়ায় do while loop টি  একবার run করার জন্যই এই do while loop ব্যবহার করা হয় ।
