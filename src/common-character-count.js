const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(word1, word2) {
  word1 = word1.split('');
  word2 = word2.split('');
  let index = -1;
  let counter = 0;
  for (let i = 0; i < word1.length; i++) {
  if (word2.includes(word1[i])) {
    counter += 1;
    index = word2.indexOf(word1[i]);
    word2.splice(index, 1);
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
