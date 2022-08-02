// Parses the a in ax+b.
function parseA(numStr) {
  let res = ["", "-"].includes(numStr) ? numStr + "1" : numStr;
  return Number(res);
}

function tokenize(expr) {
  let [base, n] = expr.split("^");
  base = base.replace(/[()\s]/g, "");
  const terms = base.split(/([a-zA-Z])/g);
  if (terms.length === 1) {
    return { base, a: 0, x: null, b: Number(terms[0]), n: Number(n) };
  } else {
    const [a, x, b] = terms;
    return { base, a: parseA(a), x, b: Number(b), n: Number(n) };
  }
}

// Returns n+1 rows of Pascal's Triangle
function getPascalsTriangle(n) {
  const res = [];
  for (let i = 0; i <= n; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      row.push(res[i - 1][j - 1] + res[i - 1][j]);
    }
    if (i > 0) row.push(1);
    res.push(row);
  }
  return res;
}

function expand(expr) {
  const { a, x, b, n, base } = tokenize(expr);
  if (n === 0) return "1";
  if (n === 1) return base;

  let coefficients = getPascalsTriangle(n)
    .pop()
    .map((c, i) => {
      return (c *= a ** (n - i) * b ** i);
    })
    .map((c, i) =>
      i !== n && Math.abs(c) === 1 ? String(c).replace("1", "") : c
    );

  coefficients = coefficients.map((c, i) => {
    while (n - i > 0) {
      return c !== 0 ? `${c}${x ? x : ""}${n - i > 1 ? `^${n - i}` : ""}` : "";
    }
    return `${c !== 0 ? c : ""}`;
  });

  return coefficients
    .filter((item) => item !== "")
    .join("+")
    .replace(/\+-/g, "-");
}

module.exports = { tokenize, expand, getPascalsTriangle, parseA };
