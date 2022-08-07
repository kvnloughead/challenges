export const nbYear = (
  p0: number,
  percent: number,
  aug: number,
  p: number,
): number => {
  let _p = p0;
  let y = 0;
  while (_p < p) {
    _p = _p + Math.ceil((_p * percent) / 100) + aug;
    y += 1;
  }
  return y;
};
