const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let letter;
  let res = '';
  for (let i = 0; i < str.length; i++) {
    letter = str[i];
    if (letter === str[i + 1]) {
      counter += 1;
    } else {
      if (counter > 1) {
        res += String(counter);
        res += letter;
        counter = 1;
      } else {
        res += letter;
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
