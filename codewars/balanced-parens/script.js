function addParens(item) {
  for (let i = 0; i < item.length; i++) {}
}

function balancedParens(n) {
  if (n === 0) return [""];
  if (n === 1) return ["()"];
  let items = ["()"];
  for (let i = 2; i <= n; i++) {
    let newItems = [];
    // need to insert these parens at every index
    newItems = newItems.concat(items.map((item) => `()${item}`));
    newItems = newItems.concat(
      items
        .filter((item) => item !== "()".repeat(i - 1))
        .map((item) => `${item}()`)
    );
    // need to wrap all valid subsequences in new parens
    items = items.map((item) => `(${item})`);
    items = items.concat(newItems);
  }
  return items.sort();
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
