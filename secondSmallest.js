const secondSmallest = (arr) => {
  let smallestNum = Infinity;
  let secondSmallestNum = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      secondSmallestNum = smallestNum;
      smallestNum = arr[i];
    } else if (arr[i] < secondSmallestNum && arr[i] !== smallestNum) {
      secondSmallestNum = arr[i];
    }
  }
  return secondSmallestNum;
};
console.log(secondSmallest([1, 3, 4, 5, 2, 6]));
