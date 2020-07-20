// Write a function that takes in a multi dimensional array and returns a flattened array. Exp input [1, [2, 3, [4], 5]] should return [1, 2, 3, 4, 5].

// takes in arr of arr of numbers
//returns arr => [1, 2, 3, 4, 5]

// let arr = [1, [2, 3, [4], 5]]
// let midArr = arr.flat()
// let newArr = midArr.flat()

// console.log(newArr)

let result = [];

const flatten = (arr) => {
  arr.forEach((el) => {
    if (arr.isArray(el)) {
      result = result.concat(flatten(el));
    } else {
      result.push(el);
    }
  });
  return result;
};
