const removeFromArray = function (arr, ...arrToRemove) {
  return arr.filter((el) => !arrToRemove.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
