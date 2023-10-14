const hasUniqueChars = (str) => {
    let charCount = {};
    for (let i=0;i<=str.length-1;i++) {
      let char = str[i];
      if (charCount[char]) {
        return false;
      }
      charCount[char] = 1;
    }
    return true;
}
  
console.log(hasUniqueChars("abcd")); 
console.log(hasUniqueChars("aabc"));