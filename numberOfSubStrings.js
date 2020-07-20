const numberOfSubstrings = str => {
    let n = str.length
    return n * (n + 1)/2
}

console.log(numberOfSubstrings("hello"))