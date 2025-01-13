const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, current) => (total += current), 0);
};

const multiply = function (arr) {
  return arr.reduce((total, current) => (total *= current), 1);
};

const power = function (a, b) {
  // let res = 1;
  // while (b > 0) {
  //   res = res * a;
  //   b--;
  // }
  // return res;
  return Math.pow(a, b);
};

const factorial = function (num) {
  let res = 1;
  for (let i = num; i > 1; i--) {
    res = res * i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
