// Write a function that takes in an array of socks. Each sock will be represented by a number. The function should return the total number of complete pairs. Exp Input [1, 2, 4, 2, 4], should return 2 because we have a pair of 2's and a pair of 4s 

// takes in arr
// return number of pairs or matching numbers

const counter = (arr) => {
  return arr.reduce((acc, currEl) => {
    acc[currEl] ? acc[currEl]++ : (acc[currEl] = 1);
    return acc;
  }, {});
};

const sockCount = (arr) => {
  const counts = counter(arr);
  let pairs = 0;
  // Object.values(counts).forEach(count => {
  //     pairs += Math.floor(count/2)
  // })
  //or//
  for (let sock in counts) {
    pairs += Math.floor(counts[sock] / 2);
  }
  return pairs;
};
console.log(sockCount([1, 2, 4, 2, 4, 2, 2]));


// const howManyPairs = (arr) => {
//     let count = {}

//     for (el of arr) {
//         if (count[el]) {
//             count[el] += 1
//         } else {
//             count[el] = 1
//         }
//     }
//     console.log(count)

// };

// console.log(howManyPairs([1, 2, 4, 2, 4]));
