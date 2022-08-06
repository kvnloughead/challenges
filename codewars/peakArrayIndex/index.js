function sumArray(arr) {
  return arr.reduce((a, b) => a + b);
}

function peak(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (sumArray(arr.slice(0, i)) === sumArray(arr.slice(i + 1))) {
      return i;
    }
  }
  return -1;
}

module.exports = { peak };
