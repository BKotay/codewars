// SIXTH PROBLEM 

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples: solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    return str.endsWith(ending)
  }

// One of the relative easier problems as well. Before I used endsWith, I used includes.() instead but it did not ad the solution to the end of it. So endsWith was a better solution for this.
