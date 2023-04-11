const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (arr === null || arr === undefined) {
    return false
  }
  if (arr.length > 0) {
    let str =''
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof(arr[i]) === "string") {
        str = arr[i];
        str = str.trimLeft();
        str = str.toUpperCase();
        res.push(str);
      }
    }
    res.sort((a, b) => a.localeCompare(b));
    str ='';
    for (let i = 0; i < res.length; i++) {
      str += res[i][0];
    }
    return str;
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
