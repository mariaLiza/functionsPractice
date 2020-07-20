//change original text to all lowercase
//creat count obj to keep track of duplicates
//extract values over 1 from object
//at those values to get total number of duplicates

// let text = "hello"
function duplicateCount(text){
let newString = text.toLowerCase()
let count = {}

for (let char of newString) {
    if(count[char]) {
        count[char]++
    } else {
        count[char] = 1
    }
}
let sum = []
let newArr = Object.values(count)
console.log(newArr, "new")
newArr.filter(el => {
    if(el > 1) {
        sum.push(el)    
    }
})

return sum.length

}
console.log(duplicateCount("h4ellm4"))