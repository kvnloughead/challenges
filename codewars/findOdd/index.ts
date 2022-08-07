export const findOdd = (xs: number[]): number => {
  return xs.find((x) => xs.filter((a) => x === a).length % 2 === 1) || 0;
};
