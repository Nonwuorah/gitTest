//String Manipulation Functions:

                          //Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
  return str.split("").reverse().join("");
}

                            //Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str) {
  return str.length;
}

                            //Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
  return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}


//Array Functions:

                        //Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}


                        //Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}


                        //Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr, callback) {
  return arr.filter(callback);
}

  
//Mathematical Functions:

                            //Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}


                            //Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

                  //Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSequence.push(fibSequence[i-1] + fibSequence[i-2]);
    }
    return fibSequence;
  }
}
