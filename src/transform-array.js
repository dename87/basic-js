const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let res = [];
  const commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  for (let i = 0; i < arr.length; i++) {
    if (!commands.includes(arr[i])) {
      res.push(arr[i]);
    } else  {
        if (arr[i] === '--discard-next' && i !== arr.length - 1) {
          i += 1;
          res.push('-');
    } else {
        if (arr[i] === '--discard-prev' && i !== 0) {
          res.pop();
    } else {
        if (arr[i] === '--double-next' && i !== arr.length - 1) {
          res.push(arr[i + 1]);
    } else {
        if (arr[i] === '--double-prev' && i !== 0) {
          res.push(res[res.length - 1]);
        }
        }
        }
        }
    }
  }
  res = res.filter(item => item !== '-');
  return res;
}

module.exports = {
  transform
};
