
//1.Determining Even/odd numbers

// function oddEven () {
//     let input = prompt("Enter the number")
//     if(input%2===0)
//        console.log("Number is even")
//     else{
//        console.log("Number is odd")
//     }
// }
// oddEven()

//2.Checking for prime numbers

// function isPrime(){
//     let num=prompt("enter the number");
//     if(num<=1){
//         console.log("not prime")
//     }
//     for( let i = 2; i< num; i++) {
//         if(num%i===0){
//            console.log("not prime");

//         } else{ console.log("prime number")}

//     }
    
    
// }
// isPrime()


//3.Validating leap years

// function isLeap (){
//     let inpt=prompt("Enter the year")
//     if(inpt%4===0){
//         console.log("this is leap year")

//     }else if(inpt%400===0){
//         console.log("this is leap year")
//     }
//     else if(inpt%100 !=0){
//         console.log("this is leap year")
//     }
//     else{
//         console.log("this is not leap yar")
//     }
// }
//  isLeap()

//4.Sum of digit in array

// let array = [5,5,5];
// let Sum=0;
// for(let i=0; i<array.length; i++){
//     Sum +=array[i]
// }
// console.log(`sum of the numbers is ${Sum}`);

// 44. finding the avg of the num in array

// let array = [2,3,4,5,6,7,8,9]
// let sum=0;
// for( let i=0; i<array.length; i++){
//     sum += array[i]
//     }
//      let avg= sum/array.length
// console.log(`the avg of the numbers is ${avg}`)

//38. finding the sum of square of digits

// function sumOfSquaresOfDigits(number) {
//     // Convert the number to a string to access each digit
//     const digits = number.toString();
//     let sum = 0;

//     // Iterate through each digit
//     for (let digit of digits) {
//         // Parse the digit to an integer and calculate its square
//         const square = parseInt(digit) ** 2;
//         sum += square;
//     }

//     return sum;
// }

// // Example usage:
// const num = 12;
// console.log(`The sum of squares of digits of ${num} is: ${sumOfSquaresOfDigits(num)}`);

//userid generator

// let name = prompt("Enter your name without space");
// let username= name+ "@" + name.length;
// console.log(username)

//33. calculating the power of given number

// let base=prompt("Enter the base");
// let exponent= prompt("Enter the exponent");
//  let result= (base)**exponent;
//  alert(`${base} to the power ${exponent} is ${result}`)

//25. finding the number of digits of a number 

// let num=1234;
// //convert the number into string
// let convert= num.toString();
// console.log(convert)
// let numlength= convert.length;
// console.log(`The length of ${num} is ${numlength}`)


//22.calculating sum of odd number in range.

// let arr=[1, 10];
// //create a new empty array
// let newarr=[];
// let sum =0;
// for(i=arr[0]; i <= arr[1]; i++ ){
//     // console.log(i)
// if(i%2!=0){
//     // console.log(i);
//     newarr.push(i)
//     sum+=i;
//  }
// }
// // console.log(newarr)
// console.log(`The sum of odd numbers is ${sum}`)

//21.calculating sum of even number in range.

// let arr=[1,10];
// let sum=0;
// //create a new empty array
// let newArr=[];
// let i=0;
// for(i=arr[0]; i<= arr[1]; i++){
//     if(i%2===0){
//         // console.log(i)
//         //push the new data into new Array
//         newArr.push(i);
//         sum+=i;
//     }
// }
// // console.log(newArr)
// console.log(`The sum of even numbers is ${sum}`)

//6.Identify palidromes strings

// let str=prompt("Enter the string");
// let opposite =str.toLowerCase().split("").reverse().join("");
// if(opposite===str.toLowerCase()){
//     console.log("String is palidrome")
// }else{
//     console.log("String is not palidrome")
// }

//Identify palidrome numbers

// let isPalidrone=function(num){
// let splittedNum =num+""
// let splitting= splittedNum.split("").reverse().join("");
// if( splittedNum===splitting){
//     return true;
// }return false
// }
// console.log(isPalidrone(12321))

//9.summing of number
//  function sumOfNumber(num){
//     let numstr = num.toString();
    // let sum=0;
    // for(let digit of numstr){
    //     sum += parseInt(digit);
    // }
//     return sum;

//  }
//  console.log(sumOfNumber(123));

// var isPalidrome= function(x){
//     // convert the nom into string
//     let numTostring= x+"";
//     //split the string anf reverse then join the letters of the strings
//     let splitdnum= numTostring.split("").reverse().join("");
//     if(splitdnum===numTostring){
//         return true;
//     } return false

// }
// console.log(isPalidrome(121343121))

// //
// let num= 8;
// let root= num.sqrt(num)                           //ERROR
// console.log(root)
// let num= 1;
// let splitted=num.split("");
// console.log(splitted)
// let product= splitted[2]
// console.log(product)

//13. Reversing a string

// let string=prompt("Enter the string");
// let opposite=string.split("").reverse().join("");
// console.log(opposite)

// 14. finding largest and shortest num in the array      

// let arr=[3,4,5,9];
// let largest = arr[0];
// let smallest= arr[0];
// for(i=0; i<arr.length; i++){
//     if(arr[i]>largest){
//       largest= arr[i]
//     }
// }console.log(`the largest number is ${largest}`)
// for(j=0; j<arr.length; j++){
//     if(arr[j]<smallest){
//         smallest= arr[j];
//     }
// }
// console.log(`the smallest number is ${smallest}`)

//19.Finding prime num in range

// let arr=[10, 30];
// newArr=[];
// for(i=arr[0]; i<=arr[1]; i++){
//     // console.log(i)
//     newArr.push(i)
// }
// console.log(newArr)
// var prime = [];                       

// function isPrime(item) {
//     var identifier = item / 2;
//       for (var j = 2; j <= identifier; j++) {
//        if ((item % j) == 0) { // modulous
//         return false;
//        } 
//      }
//      return true;
// }
// for (var index = 0; index < newArr.length; index++) {
//   if (isPrime(newArr[index])) {
//       prime.push(newArr[index])
//   }
// }

// console.log(prime);


//22. Calculating the sum of odd numbers bwt the range
// let arr= [1,10]
// //create an empty array
// let newArr=[];
// sum=0;
// //  run the loop amd find the digits btw the range
// for(i=arr[0]; i<=arr[1]; i++){
//     // console.log(i)
//     // newArr.push(i)
// //check for odd numbers in the range
//     if(i%2 !=0){
// //calculate the sum
//         sum += i;
//     }
// }
// console.log(`The sum of odd numbers btw the range is ${sum}`)

//24.  Printing the prime numbers less than a given numbers

// let num=prompt("Enter the number")
// newArr=[];
// for(i=1; i<=num-parseInt(1); i++){
//     // console.log(i)
//     newArr.push(i)
// }
// // console.log(newArr)
// var prime = [];                           //learn concept 
// //checking for prime
// function isPrime(newArr) {
//     var identifier = newArr / 2;
//       for (var j = 2; j <= identifier; j++) {
//        if ((newArr % j) == 0) { // modulous
//         return false;
//        } 
//      }
//      return true;
// }
// for (var index = 0; index < newArr.length; index++) {
//   if (isPrime(newArr[index])) {
//       prime.push(newArr[index])

//   }
// }

// console.log(prime);


//43.find all divisers of a number

// let num=24;
// newArr=[];
// for(i=1; i<=num; i++){
//     // console.log(i)
// if(num%i===0){
//     newArr.push(i)
// }
// }
// console.log(newArr)


//37. checking for perfect square               //Doubt

// function isPerfectSquare(num) {
//     if(num<0) return false; //negative no. cant be perfect sqr
//     let i=0;
//     while(i*i<num){  //while loop will check untill the condition show true
//         i++;
//     }
//     return i*i===num;
// }
// console.log(isPerfectSquare(121))


//35. finding the sum of prime num in the range

// let arr=[10, 30];
// newArr=[];
// //finding the num bwt the range
// for(i=arr[0]; i<=arr[1]; i++){
//     // console.log(i)
//     newArr.push(i)
// }
// // console.log(newArr)
// var prime = [];                       
// //checking for prime
// function isPrime(item) {
//     var identifier = item / 2;
//       for (var j = 2; j <= identifier; j++) {
//        if ((item % j) == 0) { // modulous
//         return false;
//        } 
//      }
//      return true;
// }
// //pushing the prime num into new array
// for (var index = 0; index < newArr.length; index++) {
//   if (isPrime(newArr[index])) {
//       prime.push(newArr[index])
//   }
// }

// // console.log(prime);
// //adding the all prime numbers
// sum=0;
// for(k=0; k<=prime.length-parseInt(1); k++){
// sum+=prime[k]
// }
// console.log(`The sum of all prime numbers is ${sum}`)

//8. finding  the factorial of given number

// let num=5;
// result=1;
// for(let i=1; i<=num; i++){
//     result *=i
// }
// console.log(`The factorial of given number is ${result}`)

// finding the greatest number in the array

// function findGreatestNumber(arr) {
//     if (arr.length === 0) return undefined; // Handle empty array
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findGreatestNumber([3, 5, 7, 2, 8])); // Output: 8

//28. Finding the sum of digits of the factorial of a number

// let num= 4;
// let product= 1;     //find the factorial 
// for(i=1; i<=num; i++){
//     product *= i
// }
// console.log(`the factorial of 4 is ${product}`)
// let sum=0;    //add the digits of the factorial
// let numstr= product.toString();
// for(let digit of numstr){
//     sum += parseInt(digit);
// }
// console.log(`the sum of digit of factorial is ${sum}`)


//17. checking for perfect numbers

// let num= 28;
// let newarr=[];
// for(i=1; i<=num-1; i++){
//     if(num%i===0){
//         // console.log(i)
//         newarr.push(i)
//     }
// }
// // console.log(newarr)
// let newArray= newarr;
// // console.log(newArray)
// let sum=0;
// for(j=0; j<=newArray.length-1; j++){
//    sum +=newArray[j]
// }
// // console.log(sum)
// if(sum===num){
//     console.log(`${num} is perfect number `)
// }else{
//     console.log(`${num} is not a perfect number`)
// }

 
//15. sorting an array
// let arr= [1,4,3,5,7,3];
// let sortedarr= arr.sort();
// console.log(sortedarr)

//generating pattern in javascript

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

 //////////////////////////////////Sprint2///////////////////////////////

//23.finding the sum of digit of the product of two num
// let num1= 5;
// let num2= 7;
// let newarr= [];
// let product= num1*num2;
// // console.log(product)
//  newarr.push(product);
// //  console.log(newarr)
//  function sumDigits(number) {
//     // Convert number to string, split into digits, and sum them
//     return number
//         .toString()            // Convert number to string
//         .split('')             // Split string into array of digits
//         .map(Number)           // Convert each string digit back to a number
//         .reduce((a, b) => a + b, 0); // Sum the digits
// }

// const number = newarr;
// console.log(sumDigits(number)); // Output: 15


//49. finding the differnce btw sum of odd and even numbers in array

// let arr= [1,2,3,4,5,6,7]
// let sumEven=0;
// let sumOdd=0;
// let sumWhole=0;
// for(i=0; i<arr.length; i++){
// if(arr[i]%2===0){
//     sumEven +=arr[i];
// }else{
//     sumOdd += arr[i]
// }
// }console.log(sumEven);
// console.log(sumOdd)
// sumWhole= sumEven+sumOdd;

// console.log(sumWhole)


//40. finding the sum of the square of all even numbers upto N
//  let n= 4;
//  let sum=0;
//  for(i=1; i<=n; i++){
//     if(i%2===0){
//         sum +=i*i
        
//     }       
// }
//  console.log(sum)
        

//36. finding the sum of first N even numbers
// let n=6;
// let sum=0;
// for(i=1; i<=n; i++){
//     if(i%2===0){
//         sum += i;
//     }
// }
// console.log(sum)

// //34. find the numbers of words in a string
// let string= "hello word or kya halchal";
// let spltstr= string.split(" ");
// console.log(spltstr)
// console.log(spltstr.length)

//29. finding the all divisors of the product of two numbers

// let num1= 2;
// let num2= 10;
// product= num1*num2;
// console.log(product)
// let newarr=[];
// for(i=1; i<product; i++){
//     if(product%i===0){
//         newarr.push(i)
//     }
// }
// console.log(newarr)


//49. finding the difference between the sum of even and odd numbers in an array


// let arr= [3,4,6,7,8,9];
// let defference=0;
// let evenSum= 0;
// let oddSum = 0;
// for(i=0; i<arr.length; i++){
//     if(arr[i]%2===0){
//         evenSum +=arr[i];
//     }else{
//         oddSum +=arr[i]
//     }
// }
// console.log(evenSum)
// console.log(oddSum)
//  defference= evenSum- oddSum;
//  console.log(defference);
 

//40. finding the sum of square of all even numbers upto N

// let N=4;
// let square= 1;
// let sum=0;
// for(i=1; i<=N; i++){
//     if(i%2===0){
//      square= i*i;
//      sum +=square
//      console.log(`square of ${i} is ${square}`)

//     }
// }
// console.log(`the sum of squares of even no. is ${sum}`)


//19. checking for perfect square ina range

// let start=1; end= 100;
// let newArr=[];
// for(i=start; i<= end; i++){
//     for(j=1; j<=i; j++){
//         if(j*j===i){
//             console.log(i)
//             newArr.push[i]
//         }
//     }
// }
// console.log(newArr)

//9 finding the sum of first N odd numbers
// let N= 7;
// let sum=0;
// for(i=0; i<=N; i++){
//         if(i%2 != 0){                     
//          sum += i;
//     }
// }
// console.log(sum)


//11. find the largest prime factor of a number

// let num = 38 ;

// // Function to check if a number is prime
// function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// // Loop to find divisors that are prime factors
// for (let i = 2; i <= num; i++) {
//     if (num % i === 0 && isPrime(i)) {
//         console.log(i);
//     }
// }


//10. finding the number of percfect numbers upto a given limit

// let limit=1000;
// let perfectnumber=0; //to count the event
// for(let j=1; j<=limit; j++){
//     let num=j;     //run the loop upto limit
// let sum= 0;
// for(i=1; i<num; i++){
//     if(num%i===0){      
//        sum +=i // add the divisors of the number
//        if(sum===num){       //check for sum of the divisors
//           perfectnumber++;      
        
//       }
       
//     }
//   }
// }
// console.log(perfectnumber)

//

//Smallest number in the array

// function smallestNum(arr){
// let min= arr[0];
// for(let i=1; i<arr.length; i++){
//   if(arr[i]<min){
//       min= arr[i]
//      } 
//   }
//   return min;
// }
// const numbers=[3,5,6,7,1]

// console.log(smallestNum(numbers))


//largest number in the array

// function largestNum(arr){
//   let max=arr[0];
//   for(let i=1; i<arr.length; i++){
//     if(arr[i]>max){
//       max= arr[i]
//     }
//   } return max
// } const numbers= [10,3,5,7,8,1];
// console.log(largestNum(numbers))


//46. finding the longest word in a string

// let string= "Find the longest word"
// let newarr=[];
// splitstr= string.split(" ");
// // console.log(splitstr)
// let max= splitstr[0].length;
// for(let i=1; i<splitstr.length; i++){
//     if(splitstr[i].length > max){
//         max= splitstr[i].length
//     }
// }
// console.log(max)

//24.checking for palindromic numbers in a range

// let start=1; end= 100;
// for(i=start; i<=end; i++){
// let num=i;
//  intostr= num.toString().split('').reverse().join('');
// if(num.toString() === intostr){
//     console.log(num)
//  }
// }

//37. finding the count of digits greater than a specific value 

// let number= 54321; value=3;
//  let output=0; //add a counter
//  tostr= number.toString().split(''); //convert the number into string and split
// //  console.log(tostr)
// let max=3;      //define a max value
// for(i=0; i<tostr.length; i++){   //iterate over values
//     // console.log(tostr[i])
//     if(tostr[i]>max){     //check for maximum value
//         output++          //increase the counter
//     }
// } 
// console.log(output)

//39. finding the common element in two array 

// let arr1=[1,2,3,4]; 
// let arr2=[2,3,4,5,6];
// let newarr=[];
// for(i=0; i<arr1.length; i++){

// for(j=0; j<arr2.length; j++){
 
// if(arr1[i]===arr2[j]){
//     newarr.push(arr1[i]);
//     break;  
//     }
//   }
// }
// console.log(newarr);

//33. finding the median of a list of numbers 

// let list=[3, 1, 4, 5, 6, 7 ]
// let sorted= list.sort();
// console.log(sorted)           //sort the array
// const length= list.length;
// if(length%2===0){                     //write the condition for even length
                        
//     let firstvalue= list[length/2-1];    // for left value
//     let secondvalue= list[length/2];    //for right value
//     // console.log(firstvalue)
//     // console.log(secondvalue)

//     average= (firstvalue + secondvalue)/2;    //take their average
//     console.log(parseFloat(average))
// }else{
//     console.log(list[Math.floor(length/2)])   //for odd number of length

// }

// 49. finding the difference between the sum of even and odd numbers in an array

// let arr= [1,2,3,4,5,6]
//  let sumOfodd=0;
//  let sumOfeven=0;
//  for(i=0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//        sumOfeven += arr[i];
//     }else{
//         sumOfodd += arr[i]
//      }
//     }
//     let diffference= sumOfeven - sumOfodd ;
//     console.log(diffference)


//////////////////////sprint3//////////////////////////////////////


//

let number = prompt("Enter a number greater than 10:");

while (number <= 10) { // The loop continues until the user enters a valid number
    number = prompt("Invalid input. Please enter a number greater than 10:");
}

alert("You entered a valid number: " + number);
