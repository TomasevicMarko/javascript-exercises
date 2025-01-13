const reverseString = function (str) {
  const words = str.split(" ");
  const wordsReversedArray = [];
  words.forEach((word) => {
    const wordArray = word.split("");
    const reversedWordArray = wordArray.reverse();
    const wordReversed = reversedWordArray.join("");
    wordsReversedArray.unshift(wordReversed);
  });
  const res = wordsReversedArray.join(" ");
  return res;
};

// const reverseString = function (str) {
//     return str
//       .split(" ")
//       .map((word) => word.split("").reverse().join(""))
//       .reverse()
//       .join(" ");
//   };

// Do not edit below this line
module.exports = reverseString;
