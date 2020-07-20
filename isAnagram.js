// Write a function takes in two strings and determines whether those strings are anagrams. An anagram is a word formed by rearranging the letters of another, such as cinema, formed from iceman.

//length must be same on each
//must only have same letters
//each letter has same count

let counts = {};
const countOccur = (str1) => {
  for (let char of str1) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
};

const isAnagram = (str1, str2) => {
  counts = countOccur(str1);

  if (str1.length !== str2.length) {
    return false;
  }

  console.log(counts, "counts");

  for (let i = 0; i < str2.length; i++) {
    if (!counts[str2[i]]) {
      return false;
    } else {
      counts[str2[i]]--;
    }
  }
  return true;
};
console.log(isAnagram("pat", "tap"));
