// Returns true if nums are a collection of nonzero non-repeating numbers
function isValid(nums) {
  return !nums.some((n, i) => {
    return n === 0 || nums.indexOf(n) < i;
  });
}

// Returns nth column of a two -dimensional array
function getColumn(arr, n) {
  return arr.map((x) => x[n]);
}

// Splits board into 3x3 subsquares, returning each subsquare as a 1-D array
function getSubSquares(board) {
  const res = [];
  for (let i = 0; i < 7; i += 3) {
    for (let j = 0; j < 7; j += 3) {
      res.push(
        [].concat(
          ...board.slice(0 + j, 3 + j).map((x) => x.slice(0 + i, 3 + i))
        )
      );
    }
  }
  return res;
}

function validSolution(board) {
  const size = board.length;
  if (!board.every((row) => isValid(row))) return false;
  for (let i = 0; i < size; i++) {
    if (!isValid(getColumn(board, i))) return false;
  }
  const squares = getSubSquares(board);
  if (!squares.every((square) => isValid(square))) return false;
  return true;
}

module.exports = { isValid, validSolution, getSubSquares };
