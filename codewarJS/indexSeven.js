// SEVENTH PROBLEM 

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


function sumTwoSmallestNumbers(numbers) {  
    const findTwo = numbers.sort((a, b) => a -b)
    return findTwo.at(0) + findTwo.at(1)
   }

   // Relative easier problem than the rest, using sort method you order them from least to greatest. Then you use find to get the index of the the first two to give you your result.