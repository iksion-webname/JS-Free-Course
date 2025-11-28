"use strict";

alert("Allah");

/* ==================================================================
( 11 মিনিট ) Nested Loop , Nested Inner Loop , 
 ==================================================================*/

for (let count1 = 1; count1 <= 5; count1++) {
    console.log("Fast List " + count1);
}

// উপরের যে সূত্রটি  তৈরি করা হয়েছে ইহার দ্বারা 5টি List তৈরি হবে ।

/* ==================================================================
( 11 মিনিট ) Nested Loop , Nested Inner Loop , 
 ==================================================================*/

for (let count2 = 1; count2 <= 5; count2++) {
    console.log("List " + count2);
    for (let userList = 1; userList <= 3; userList++) {
        console.log("-------User " + userList);
    }
}

// প্রথম for loop অর্থাৎ Main for loop এর ভিতরে count2 <= 5 লেখায়  সিরিয়াল অনুসারে 5টি List তৈরি হবে ।

// দ্বিতীয় for loop এর [ for (let userList = 1; userList <= 3; userList++) ]  মাধ্যমে 3টি করে -----userList  তৈরি  হয়েছে তা  প্রথম for loop এর দ্বারা যে 5টি List তৈরি হয়েছিল তার মধ্যে সিরিয়াল দিয়ে -----userList 1 , -----userList 2 , -----userList 3 দেখাবে । কারণ হলো প্রথম for loop এর ইনার loop হয়েছে দ্বিতীয় for loop টি ।

// সম্পূর্ন Loop এবং ইনার loop টি কিভাবে কাজ করে ( 16 মিনিট ): for (let count2 = 1; count2 <= 5; count2++) এখানে for loop টি প্রথমে তার let count2 = 1 নামক variable এর ভিতরে প্রবেশ করবে এবং variable এর মান 1 থাকায় List টির সিরিয়াল List 1 থেকে শুরু হবে । count2 <= 5; এখানে count2 লেসদ্যান ইকুয়াল (<=) 5  যা বাক্যটি সত্য এবং count2++  থাকায় প্রতিবার 1 করে বৃদ্ধি পেয়ে  List 1, List 2, List 3, List 4, List 5 নামক 5টি আইটেম তৈরি হবে । দ্বিতীয় for loop এর [ for (let userList = 1; userList <= 3; userList++) ] প্রথম for loop এর ভিতরে থাকায় প্রথম for loop এর মতো একই নিয়মে প্রত্যেকটির ভিতরে আরও 3টি loop (-----userList 1 , -----userList 2 , -----userList 3 ) তৈরি হবে । 
