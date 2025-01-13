const sumAll = function (firstNum, secondNum) {
  if (
    !Number.isInteger(firstNum) ||
    !Number.isInteger(secondNum) ||
    firstNum < 0 ||
    secondNum < 0
  )
    return "ERROR";
  let biggerNum = firstNum,
    smallerNum = secondNum;
  if (firstNum < secondNum) {
    biggerNum = secondNum;
    smallerNum = firstNum;
  }
  let res = 0;
  for (let i = smallerNum; i <= biggerNum; i++) {
    res += i;
  }
  return res;
};

// Do not edit below this line
module.exports = sumAll;
