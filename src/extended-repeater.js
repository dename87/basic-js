const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  let counter1 = 0;
  let counter2 ;
  str = str;
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  let addition = options.addition;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  for (let i = 0; i < repeatTimes; i++) {
    counter1 += 1;
    res += str;
    if (addition !== undefined) {
      if (addition === null || addition === false) {
        addition = String(addition);
      }
      counter2 = 0;
      for (let j = 0; j < additionRepeatTimes; j++) {
        counter2 += 1;
        res += addition;
        if (addition != '' && counter2 !== additionRepeatTimes) {
          res += additionSeparator;
        }
      }
    }
    if (repeatTimes !== 1 && counter1 !== repeatTimes) {
      res += separator;
      }
  }
  return res;
}

module.exports = {
  repeater
};
