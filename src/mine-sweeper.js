const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  let diff = [1, 0, -1];

  for (let i = 0; i < matrix.length; i++) {
    let tmpRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let counter = 0;
      for (let k of diff) {
        for (let l of diff) {
          if (k === 0 && l === 0) {
            continue;
          }
          let iNew = i + k;
          let jNew = j + l;
          if (iNew >= 0 && iNew < matrix.length && jNew >= 0 && jNew < matrix[i].length && matrix[iNew][jNew]) {
            counter++;
          }
        }
      }
      tmpRow.push(counter);
    }
    res.push(tmpRow);
  }
  return res;
}

module.exports = {
  minesweeper
};
