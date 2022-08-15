export const board = "\
14441\n\
12221\n\
12333\n\
22311\n\
33355\n\
44354\n\
24345";

export const moves = [
  { x: 0, y: 4, color: 4 },
  { x: 0, y: 5, color: 5 },
  { x: 2, y: 2, color: 2 },
  { x: 1, y: 3, color: 1 },
  { x: 4, y: 0, color: 4 },
];

const randomRow = () =>
  Array.from(Array(5))
    .map(() => Math.ceil(5 * Math.random()))
    .join("");

const _randomBoard = Array.from(Array(7))
  .map(() => randomRow())
  .join("\n");

const _randomMove = {
  x: Math.floor(5 * Math.random()),
  y: Math.floor(7 * Math.random()),
  color: Math.ceil(5 * Math.random()),
};

export const randomBoard = "55211\n24115\n52122\n13151\n24542\n31443\n12321";
export const adjacentNewColorBoard =
  "55211\n24115\n52152\n13121\n24542\n31443\n12321";
