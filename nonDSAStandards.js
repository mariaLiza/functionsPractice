// For non DSA standards you seem to have just a couple standards you need to meet the 85% threshold. One of those things is on Arrays. Using forEach, map, filter, reduce, and accessing and using them. I was hoping you could find time in the next couple of days to complete this standard. To do this please solve these problems.
// Given the array [1, 2, 3, 4, 5]
// Using forEach write a function that returns the sum of the array.

const findSum = (arr) => {
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });
  return sum;
};
console.log(findSum([1, 2, 3, 4, 5]));

// Using reduce write a function that returns the sum of the array.

const reduceSum = (arr) => {
  return arr.reduce((acc, currEl) => {
    acc += currEl;
    return acc;
  }, 0);
};
console.log(reduceSum([1, 2, 3, 4, 5]));

// Using filter return an array of only values greater than or equal to 3.

const three = (arr, target = 3) => {
  let newArr = [];
  arr.filter((el) => {
    if (el >= target) {
      newArr.push(el);
    }
  });
  return newArr;
};
console.log(three([1, 2, 3, 4, 5]));

// Using map return the array [2, 4, 6, 8, 10].

const doubleArr = (arr) => {
  let doubled = [];
  arr.map((el) => {
    doubled.push(el * 2);
  });
  return doubled;
};
console.log(doubleArr([1, 2, 3, 4, 5]))

// If you could solve these I could mark you off on two standards which would bring you above 85% percent.
