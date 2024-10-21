// 1. Write a function called addNumbers thant takes tow numbers as parameters and returns their sum

function addNumbers(num1 , num2){
    return num1 + num2;
};

// console.log(addNumbers(5,9));

// 2. Write a function called sum  Up ToN that takes two numbers as parameters and returns their sum.

function sumUpToN(num1 , num2){
    return num1 + num2;
};

// console.log(sumUpToN(12,16));

// 3. Write a function called countEvenNumbers that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

function countEvenNumbers(array){
    const sum = array.map(num => {
        // console.log('num', num)
        const result = num + num;
        // console.log('result' , result);
    })
    return sum;
};

// console.log(countEvenNumbers([1,2,3,4]));
countEvenNumbers([1,2,3,4]);


// 4. Write a function called stringLength that takes a string as a parameter and returns the length of the string.

function stringLength(str){
    const strLength = str.length;
    console.log(strLength);
};

stringLength('sifat')