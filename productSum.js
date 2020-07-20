// Write a function that takes in a “special” array and returns its product sum.
// A “special” array is a non-empty array that contains either integers or other “special” arrays. The product sum of a “special” array is the sum of its elements, where “special” arrays inside it are summed themselves and then multiplied by their level of depth.
// Example : [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// Expected output: 12
// Example 2: // [1,2,3,4,5]
// Expected output : 15
// Example 3:      [1 ,2 , [3] ,4, 5]
// Expected output: 18 
// Example 4:      [  [1 , 2] , 3 , [4, 5] ]
// Expected output: 27

// const prodSum = (arr, depth=1 ) => {
//  let sum = 0
//  arr.forEach(el => {
//      if(arr.isArray(el)) {
//         sum += prodSum(el, depth + 1)
//      } else {
//          sum += el
//      }
//  })

//  return sum * depth

// }

const specialArr = (arr, depth=1) => {
    return depth * arr.reduce((sum, el) => {
        if(arr.isArray(el)) {
            sum += specialArr(el, depth +1)
        } else {
            sum += el
        }
        return sum
    }, 0)


}