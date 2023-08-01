function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const mid = Math.floor(cleanedStr.length / 2);

  for (let i = 0; i < mid; i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Test
const inputString1 = "racecar";
console.log(isPalindrome(inputString1)); 

const inputString2 = "hello";
console.log(isPalindrome(inputString2)); 

