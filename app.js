"use strict"

function checkPalindrome() {
  const word = "Able was I ere I saw Elba"
  const newWord = word.split("");
  const wordRev = newWord.reverse();
  const finalWord = wordRev.join("");

  return finalWord === word 
};

console.log(checkPalindrome());

