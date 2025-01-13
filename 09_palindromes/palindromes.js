const palindromes = function (str) {
  const allowedCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const filteredChars = str
    .toLowerCase()
    .split("")
    .filter((char) => allowedCharacters.includes(char));

  const originalString = filteredChars.join("");
  const reversedString = [...filteredChars].reverse().join("");

  return originalString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
