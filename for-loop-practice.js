// ১ থেকে ৫০ পর্যন্ত সংখ্যা প্রিন্ট করুন

for(let i = 1; i <= 50; i++){
    // console.log(i);
};

// 33 থেকে ১ পর্যন্ত সংখ্যা প্রিন্ট করুন

for(let i = 33; i >0; i--){
    // console.log(i);
};

// ১ থেকে ৪৫ এর মধ্যে যতগুলো জোড় সংখ্যা আছে সেইগুলোর যোগফল বের করুন

for(let i = 1; i <= 45; i++){
    const number = i;
    if(number % 2 === 0){
        
        // console.log(number);
    };
};


// ১ থেকে ১০ পর্যন্ত সকল বেজোর সংখ্যার বর্গ বের করে সবগুলো বর্গকে যোগ করুন

for(let i = 1; i <= 10; i++){
    const number = i;
    if(number % 2){
        // console.log('number' , number);
        const square  = number * number;
        // console.log('square' , square);
        const sum = square + square;
        // console.log(sum);
        
    };
};

let sum = 0;

for (let i = 1; i <= 10; i += 2) { // 1 থেকে 10 পর্যন্ত বেজোর সংখ্যা
  sum += i * i; // বর্গ বের করে যোগ করা
};

// console.log(`sum: ${sum}`);

// ৭ এর ঘরের নামতা লেখার জন্য একটি প্রোগ্রাম লিখুন

let num = 7;

for(let i = 1; i <= 10 ; i++){
    const multiply = i * num;
    // console.log(multiply);
};


// 6. 139586883 সংখ্যাটিতে কয়টি ডিজিট আছে তা বের করার প্রোগ্রাম লিখুন।
const number = 139586883;
const digitCount = number.toString().length;
console.log(digitCount);
