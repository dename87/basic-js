const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const notSorted = -1;
  let tmpArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === notSorted) {
      tmpArr.push(i);
    }
  }
  arr = arr.sort(function(a, b) {
  return a - b;
});
  arr = arr.filter(item => item !== -1);
  for (let elem of tmpArr) {
    arr.splice(elem, 0, notSorted);
  }
  return arr;
}

module.exports = {
  sortByHeight
};
