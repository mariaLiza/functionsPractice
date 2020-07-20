var moveZeros = function (arr) {
  let zeros = [];
  let others = [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      others.push(arr[i]);
    } else {
      zeros.push(arr[i]);
    }
    if (zeros.length > 0) {
      newArr = others.concat(zeros);
    }
  }
  return newArr;
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
