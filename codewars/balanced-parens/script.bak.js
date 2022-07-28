function addParens(item) {
  for (let i = 0; i < item.length; i++) {}
}

function balancedParens(n) {
  if (n === 0) return [""];
  if (n === 1) return ["()"];
  let items = ["()"];
  for (let i = 2; i <= n; i++) {
    const newItems = [];
    items.forEach((item) => {
      newItems.push(addParens(item));
    });
  }
}

console.log(balancedParens(0));
console.log(balancedParens(1));
console.log(balancedParens(2));
console.log(balancedParens(3));
console.log(balancedParens(4));

module.exports = { balancedParens };

const expected = [
  "(((())))",
  "((()()))",
  "((())())",
  "((()))()",
  "(()(()))",
  "(()()())",
  "(()())()",
  "(())(())",
  "(())()()",
  "()((()))",
  "()(()())",
  "()(())()",
  "()()(())",
  "()()()()",
];
