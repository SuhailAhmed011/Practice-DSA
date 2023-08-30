/*Missing Letters
Given a string containing unique letters, return a sorted string with the letters that don't appear in the string.

Examples
get_missing_letters("abcdefgpqrstuvwxyz") ➞ "hijklmno" 

function pairs(num1 , num2){
    return [num1 , num2];
}
console.log(pairs(2,2));
console.log(pairs(9,2)); 

function isEqual(str1, str2){
    if(str1.length===str2.length){
        return true
    }else{
        return false
    }
};

console.log(isEqual("AB", "CD"));
console.log(isEqual("ABC", "C"));
console.log(isEqual("ij", "klm"));*/

/*Is the String Empty?
Create a function that returns true if a string is empty and false otherwise.

Examples
isEmpty("") ➞ true

isEmpty(" ") ➞ false

isEmpty("a") ➞ false
Notes
A string containing only whitespaces " " does not count as empty.

function isStringEmpty(str1){
    
    return str1.length ===0;
}
console.log(isStringEmpty(""));
console.log(isStringEmpty("hello"));

/*Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

Examples

divisibleByFive(5) ➞ true
divisibleByFive(-55) ➞ true*/

/*function divisibleByFive(number){
    if(number % 5 ===0){
        return true;
    }else{
        return false;
    }
};

console.log(divisibleByFive(10));


function dividesEvenly(num1, num2){
    if(num1 % num2===0){
        return true;
    }else{
        return false;
    }
};
console.log(dividesEvenly(98,7));
console.log(dividesEvenly(53,5));


function area(length, height){
    if(length<1 || height<1){
        return -1;
    }else{
        return length * height;
    }
};
console.log(area(5,5));
console.log(area(3,0));
console.log(area(6,6));


function reverseArr(numbers){
    let length = numbers.length;
    let emptyArr = [];
    for(let i = 0; i<length-1; i++){
        emptyArr.push(numbers.pop());

    }
    return emptyArr;
    
};

console.log(reverseArr([1,2,3,4,5]));*/

/* check even odd number

function checkNum(num1){
    if(num1 % 2 === 0){
        return 'even';
    }else{
        return 'odd';
    }
};

console.log(checkNum(22)); */


/* check max number from the array

function maxNum(numbers){
    let max = numbers[0];
    for(let i = 1; i<numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}

console.log(maxNum([2,3,4,56,90,8])); */

/* write a function to reverse a string

function reverseStr(name){
    return name.split('').reverse().join('');
}
console.log(reverseStr('suhail')); */


/*write a function of factorial of a number

function factorialOfNum(num){
    if(num === 0 || num === 1){
        return 1;
    }
    let factorial = 1;
    for(let i = 2; i<=num; i++){
        factorial *= i;
    }
    return factorial;
}
console.log(factorialOfNum(5)); */


/*check string is pallindrome or not

function checkPallindrome(name){
    let reversed = name.split('').reverse().join('');
        return name === reversed;
}
console.log(checkPallindrome('mom')); */


/* sum of an array


function sumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum +=numbers[i];
    }
    return sum;
}

console.log(sumOfArray([1,2,3,4,5])); */


/*function to give average of array


function calculateAverage(numbers) {
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum +=numbers[i];
        
    } 
    if(numbers.length === 0 ){
        return 0;
    } else{
        return sum / numbers.length;
    } 
  
}
console.log(calculateAverage([5,5,5,5]));  */

/* vowels in array


function countVowels(str){
    let count = 0;
    let vowels = 'aeiou';

    for(let i =1; i<str.length; i++){
      if(vowels.includes(str[i].toLowerCase())){
        count++;
      }
    }
    return count;
}

console.log(countVowels('hello world')); */
  

/* code to push even numbers in different array


function evenNum(numbers){
    let evenNumbers = [];
        for( let i =0; i<numbers.length; i++){
            if(numbers[i] % 2 === 0){
                evenNumbers.push(numbers[i]);
            }
        }
        return evenNumbers;

}

let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(evenNum(numbers));  

function addTwoNum(a,b){
    return a + b;
}

console.log(addTwoNum(1,2));



function removeDupicate(array){
    let uniqueElement = [];

    for(let i =0; i<array.length; i++){
        if(uniqueElement.indexOf(array[i])=== -1){
            uniqueElement.push(array[i]);
        }
    }
    return uniqueElement;
}


let newArr = removeDupicate([1,2,2,1,3,4,5]);
console.log(newArr);


function isVowelHere(str){
    let count = 0;
    let vowels = 'aeiou';

    for(let i = 1; i<str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(isVowelHere("suhail"));


function evenNum(arr){
    let newArr = [];
    for(let i =0 ; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(evenNum([1,2,3,4,5,6,7,8,9,10])); 

function haveVowels(name){
    let count = 0;
    let vowels = 'aeiou';
    for(let i = 0; i<=name.length; i++){
        if(vowels.includes(name[i])){
            count++;
        }
    }
    return count;
}
 
console.log(haveVowels('suhail')) 


function table(num){
    let tab ="";
    for(let i = 1; i<=10; i++){
        tab += `${num} * ${i} = ${num * i}\n`;
    }
    return tab;
}
console.log(table(8));
console.log(table(9));
console.log(table(10));

function pallindrome(str){
    let reversedStr = '';
    for(let i = str.length-1; i>=0; i--){
        reversedStr +=str[i];
    }
    if(reversedStr === str){
        return true;
    }else{
        return false;
    }
}
console.log(pallindrome('mam'))

let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a- b;

console.log("value of a is: " +a);
console.log("value of b is: " +b);


let fizz = (n) => {
    for(let i = 0; i<=n; i++){
        if(i % 3 ===0 && i % 5 ===0){
            console.log("fizzBuzz");
        }else if(i % 3 ===0){
            console.log("fizz");
        }else if(i % 5 ===0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
fizz(20); 

for(let i = 5; i>=1; i--){
    for(let j = 1; j<=i; j++){
        document.write(j);
    }
    document.write("<br/>");
}

function longestWord(text){
    let strSplit = text.split(" ");
    let longesttext = 0;
    for(let i = 1; i<=strSplit.length; i++){
        if(strSplit.length > longesttext ){
            longesttext = strSplit[i].length;
        }
    }
    return longesttext;
}

   
console.log(longestWord("hey suhailahmed this side")); 

function reverseStr(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseStr("suhail")); 

let number = [2,3,4,5,6,8];
let sum = number.reduce(function(a,b){
    return a + b;
});
console.log(sum); 

 let numbers = [1,2,34,,2,1];
 let fil = numbers.filter((num) => num % 2 === 0);
 console.log(fil) 

 
 let arr = [1,2,3,4,56,8,10];
 let map = arr.map((items) => items % 2 ===0 );
   
 console.log(map); */