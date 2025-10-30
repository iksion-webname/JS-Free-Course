"use strict";

alert("Mim");

alert(true == 1);
// true দেখাবে, কারণ Comparison Operator সবসময় number data type দেয়। তাই এখানে true Number এ পরিবর্তন হয়ে 1 হবে । তখন alert(1==1) এমন হবে । আর দুই পাশে সমন হওয়ায় true হবে।

console.log("123" == 123);
true;
//দেখাবে, কারণ প্রথম টা ডবল ইনভাইটেড কমার ভিতরে থাকা সত্বেও Comparison Operator হওয়ায় Number এ convat হবে ।

console.log("120" === "120");
// true রিটান করবে, কারণ দুটই string data type এবং একই value "120"

console.log("123" !== 123);
// true রিটান করবে, কারণ Strict Non Equality(!= =) সবসময় আলাদা আলাদা data type এবং আলাদা আলাদা value মান দ্বারা গঠিত হয় ।

