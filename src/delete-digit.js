const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  num = String(num).split('');
  let res = [];
  let tmp;
  for (let i = 0; i < num.length; i++) {
    tmp = num[i];
    num[i] = '';
    res.push(Number(num.join('')));
    num[i] = tmp;
  }
  return Math.max(...res);
}


module.exports = {
  deleteDigit
};
