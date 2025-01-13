const repeatString = function (word, repeats) {
  let repeatedString = "";
  if (repeats >= 0) {
    for (let i = 0; i < repeats; i++) {
      repeatedString += word;
    }
  } else return "ERROR";

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
