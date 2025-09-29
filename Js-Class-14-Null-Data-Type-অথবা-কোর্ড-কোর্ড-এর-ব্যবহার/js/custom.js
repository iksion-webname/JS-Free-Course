"ues strict";

alert("Allaha");

let fName = null;

let lName = " "; //

// Fname = user Form এ যে value টি দিয়েছে সেটি store হবে

/*================================================================
কেবল মাত্র let দ্বারা variable  তৈরির পর variable এর value না দেওয়া হলে 
পরবর্তীতে variable ডিক্লিয়ার করলে html এর input box এর Form এর ভিতরে 
যে তথ্য দেওয়া হবে সেটি Variable এর মধ্যে Store বা Save হবে । 10 মিনিট
================================================================*/

let fatherName;
fatherName = "Md Abdul Malek";
alert(fatherName);

// এখানে variable এর ভিতরে Md Abdul Malek নাম টি store হবে ।

/*================================================================
input box এর ভিতরে user যদি কোন value না দিয়ে Submit করে তখন 
Variable এর মধ্যে Store হবে  Null , 13 মিনিট
================================================================*/

let motherName;
motherName = "";
alert(motherName);

/* এখানে variable এর মধ্যে কোন কিছুই দেওয়া হয় নি । তাই variable এর মধ্যে  কোন কিছুই store হবে না । Null দেখাবে অর্থাৎ ফাকা থাকবে । যা alert(motherName); করলে variable টি Show হবে । কোন কিছুই দেখাবে না । */
