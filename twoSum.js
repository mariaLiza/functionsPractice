const twoSum = (arr, targ) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targ) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};

console.log(twoSum([1, 3, 2, 4], 6));
// O(n^2) => O(1)

const twoSumBetter = (arr, target) => {
  let numObj = {};
  for (let i = 0; i < arr.length; i++) {
    let thisNum = arr[i];
    numObj[thisNum] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (numObj.hasOwnProperty(diff) && numObj[diff] !== i) {
      return [i, numObj[diff]];
    }
  }
};

console.log(twoSumBetter([1, 3, 2, 4], 4));
// O(n) => O(1)

function twoSumKata(numbers, target) {
    resultsI = ""
    resultsJ= ""
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        resultsI += i
        resultsJ += j
      }
    }
  }
  return `${resultsI}, ${resultsJ}`
}

console.log(twoSumKata([1, 2, 3], 5))
