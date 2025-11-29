"use strict";

alert("Mim");

for (let loopOne = 1; loopOne <= 3; loopOne++) {
    console.log("Loop One " + loopOne);
    for (let loopTwo = 1; loopTwo <= 10; loopTwo++) {
        console.log(" -----------Loop Two " + loopTwo);

        if (loopOne == 2 && loopTwo == 5) {
            break;
        }
    }
}

//  if (loopOne == 2 && loopTwo == 5) এর অর্থ হলো প্রথমটির 2নং loop এর ভিতরে 2য় loop টি 5 বার ঘুরবে ।

// এখানে for (let loopOne = 1; loopOne <= 3; loopOne++) এর দ্বারা loopOne 1, loopOne 2, loopOne 3 নামক 3টি কলাম তৈরি হবে । কারন loopOne <= 3; দেওয়ার কারনে 3টি কলাম তৈরি হয়েছে । ভিতরে for (let loopTwo = 1; loopTwo <= 10; loopTwo++) এর দ্বারা 10টি কলাম তৈরি হবে এবং এই 10টি কলাম তৈরি হবে প্রথম যে 3টি কলাম তৈরি হয়েছিল তার ভিতরের প্রত্যেক প্রত্যেকটির মধ্যে 10 টি করে কলাম তৈরি হবে ।

/* =====================================================================
   ===================================================================== */

for (let loopthree = 1; loopthree <= 3; loopthree++) {
    console.log("Loop Three " + loopthree);
    for (let loopFour = 1; loopFour <= 10; loopFour++) {
        console.log("**************Loop Four " + loopFour);

        if (loopthree == 2 && loopFour == 5) {
            break;
        }
    }
}

//  if (loopOne == 2 && loopTwo == 5) এর অর্থ হলো প্রথমটির 2নং loop এর ভিতরে 2য় loop টি 5 বার ঘুরবে ।

// if (loopthree == 2 && loopFour == 5) এর অর্থ হলো যদি loopthree == 2 এর মান 2 হয় এবং loopFour == 5) হয় তাহলে break; করে loop এর বাহিরে চলে এসো । এখানে loopthree == 2 দেওয়ায় প্রধান loop এর 2নং loop টি ভিতরে প্রবেশ করবে এবং loopFour == 5 দেওয়ায়  2নং Loop এর ভিতরে 5 বার ঘুরার পর 2নং loop থেকে বেরিয়ে আসবে । কিন্তু একেবারে সম্পূর্ন Loop থেকে বেরিয়ে আসবে না । কারেন্ট loop থেকে বেরিয়ে আসবে । কারেন্ট loop বলতে যে loop এর ভিতরে break ব্যবহার করা হয়েছে সেই loop থেকে বেরিয়ে আসবে । যেখানে loop টি break পাবে সেখান থেকে বেরিয়ে পুনরায় আবার প্রথম loop থেকে চলতে থাকবে, সে কারনে break পাওয়া 2য় loop এর নিচেই  3য় Loop এর ভিতরে অর্থাৎ loopthree 3 এর ভিতরে আবার loopFour টি 10 বার ঘুরবে ।

/* =====================================================================
    10 মিনিট Label Break  নিয়ে আলোচনা 
   ===================================================================== */

selim: for (let loopFive = 1; loopFive <= 3; loopFive++) {
    console.log("Loop Five " + loopFive);
    for (let loopSix = 1; loopSix <= 5; loopSix++) {
        console.log("=============Loop Six " + loopSix);

        if (loopFive == 2 && loopSix == 5) {
            break selim;
        }
    }
}

console.log("Hello");

//  if (loopOne == 2 && loopTwo == 5) এর অর্থ হলো প্রথমটির 2নং loop এর ভিতরে 2য় loop টি 5 বার ঘুরবে ।

// এখানে Label এর নাম দেওয়া হয়েছে selim । Label এর নাম দিতে হয় যে কোন কন্ডিশনের উপরে এবং যেখান থেকে break করতে চাচ্ছি সেখানে break এর পরে label এর নাম দিতে হয় । lable দেওয়া হলে পুরোপুরি একেবারে সম্পূর্ন loop থেকে বেরিয়ে যাবে ।

/* =====================================================================
    14 মিনিট Label  Continue নিয়ে আলোচনা 
   ===================================================================== */

zhumu: for (let loopSeven = 1; loopSeven <= 3; loopSeven++) {
    console.log("Loop Seven " + loopSeven);

    for (let loopEight = 1; loopEight <= 10; loopEight++) {
        console.log("************* Loop Eight " + loopEight);

        if (loopSeven == 2 && loopEight == 5) {
            continue zhumu;
        }
    }
}

// continue এর কাজ হলো break এর মতো , যেখানে continue দেওয়া হয় সেখান থেকে break করে পুনরায় আবার প্রথম থেকে loop আবার চলতে থাকে ।

// continue ব্যবহার করা হয় যখন main loop এর ভিতরে একাধিক inner loop ব্যবহার করা হয় । তখন এই continue ব্যবহার করা হয় ।

/* =====================================================================
    17 মিনিট Label  Continue নিয়ে আলোচনা 
   ===================================================================== */

mim: for (let loopNine = 1; loopNine <= 3; loopNine++) {
    console.log("Loop Nine " + loopNine);

    for (let loopTen = 1; loopTen <= 7; loopTen++) {
        console.log("############Loop Ten " + loopTen);

        zim: for (let loopEleven = 1; loopEleven <= 7; loopEleven++) {
            console.log("Loop Eleven " + loopEleven);

            for (let loopTwelve = 1; loopTwelve <= 7; loopTwelve++) {
                console.log("===========Loop Twelve " + loopTwelve);

                if (loopEleven == 2 && loopTwelve == 5) {
                    continue zim;
                }
            }
        }

        if (loopNine == 2 && loopTen == 5) {
            continue mim;
        }
    }
}

console.log("End");
