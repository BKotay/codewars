// EIGTH PROBLEM

// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]
  
// As you can see, the lists are cascading; ie, they overlap, but never out of order.

function eachCons(list, n) {
    let newArr = [];
    let arrTwo;
      for(let i = 0; i < list.length; i++) {
      arrTwo = list.slice(i, n + i)
      if(arrTwo.length === n) {
        newArr.push(childArr)
      }
    }
    return newArr
  }

  // This problem took a while to get the syntax together. The For loop reiterates the array and we can do push to add the two arrays into one array. The  