"use strict";

let fastName = prompt("Enter your fastname :");
alert(fastName);
console.log(typeof fastName);

alert(null === undefined); // false দেখাবে

// ব্যাখ্যা  (9 মিনিট ) : false দেখাবে, কারণ Strict Equality (= = =) এ সব সময় প্রথমে type এর দিক থেকে চেক হয় তাই এখানে null এবং undefined দুইটি সম্পূর্ন আলাদা ধরনের Type

alert(null == undefined); // true দেখাবে

// ব্যাখ্যা (10 মিনিট) : // true দেখাবে , কারণ ইকুয়াল বা  equal two  বা ডবল ইকুয়াল  এর string value কে সবসময় Comparison ( কমপ্রিজন ) আপারেটর  number এ convat করে নেয় । তাই এই ডবল ইকুয়াল (==) Comparison ( কমপ্রিজন ) আপারেটর null কে Number এ convat করলে জিরো (0) হয় এবং undefined কে Number এ convat করলে হয় NaN

// alert(null== undefined)  অথবা ‍ alert(null=null) দেওয়া যায় অর্থাৎ null এর Value হিসাবে কেবলমাত্র undefined ও null দেওয়া যাবে । আর কোন value দেওয়া যাবে না ।

/* --16 মিনিট------------------------------------------------------*/

/* 0 == null ------------------ false

ব্যাখ্যা : null এর সাথে যদি ডবল ইকুয়াল (==) ব্যবহার করি তাহলে null এর  value হিসাবে undefined অথবা null হবে। null এর অন্যকোন value হবে না। এখানে জিরো 0==null হতে পারে না। তাই Folse দেখাবে। 

0 > null  ------------------- false

ব্যাখ্যা : Comparison ( কমপ্রিজন ) আপারেটর এ গ্রেটারদ্যান (>) operator এর ক্ষেত্রে null কে Number এ convat করে শূন্যতে (0) তে রুপান্তর করবে। তখন হবে (0>0) জিরো গ্রেটারদ্যান জিরো অর্থাৎ জিরোর থেকে জিরো বড় হতে পারে না । তাই False দেখাবে । 


0 >= null ------------------- true */
/* ব্যাখ্যা : Comparison ( কমপ্রিজন ) আপারেটর এ গ্রেটারদ্যান (>=) operator এর ক্ষেত্রে null কে Number এ convat করে শূন্যতে (0) তে রুপান্তর করবে। তখন হবে হয় (0>=0) জিরো গ্রেটারদ্যান ইকুয়াল জিরো অর্থাৎ জিরো থেকে জিরো বড় যা অসম্ভব কিন্তু যখন সমানের দিক থেকে বিবেচনা করা হবে তখন জিরো হবে জিরোর সমনা (0=0) এই সমানের দিক থেকে বিবেচনা করলে উক্তিটি সত্য ।  comparison Operator এর ভিতরে যদি একই সাথে দুইটি শর্ত থাকে তার ভিতরে যে কোন একটি শর্ত মিলে গেলেই তখন রেজাল্ট দেখাবে true   */

alert(0 == null); // false রিটান করেছে

alert(0 > null); // false রিটান করেছে

alert(0 >= null); // true রিটান করেছে

//======= 20 মিনিট =============================================

alert("Mim");

let fastNumber = 10;
let secondNumber = 20;

alert(fastName >= secondNumber); // false
