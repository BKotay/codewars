// SECOND PROBLEM 

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

const isSortedAndHow = a => {
    const s = a.join``;
    return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
           s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
  }
  
  // < -- Old Code --- >
  // function isSortedAndHow(arr){
  //   let ascSort = arr.sort((a, b) => a - b);
  //   let descSort = arr.sort((a, b) => b - a);
  
    
  // //   if(arr === arr.sort((a, b) => a - b)) {
  // //   }
    
    
  //   for(let i = 0; i < arr.length; i++) {
  //       if(arr[i] === ascSort[i]) {
  //       return 'yes, ascending'
  //         } else if(arr[i] === descSort[i]) {
  //           return 'yes, descending'
  //         }
      
  //   }

  
  
  // This problem was very hard to solve, the traditional if/else statement would not wortk, so using ternary operators and the sort method was a better solution.