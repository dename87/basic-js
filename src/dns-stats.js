const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let tmpElem;
  let tmpStr = '';
  for (let elem of domains) {
    tmpElem = elem.split('.').reverse();
    for (let elems of tmpElem) {
      tmpStr += '.' + elems;
      if (Object.keys(obj).includes(tmpStr)) {
        obj[tmpStr] += 1;
      } else {
          obj[tmpStr] = 1;
      }
    }
    tmpStr = '';
  }
  return obj;
}

module.exports = {
  getDNSStats
};
