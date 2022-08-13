const { playback } = require('./index');
const { board, moves, randomBoard, adjacentNewColorBoard } = require('./data');

const randMoves = [{ x: 0, y: 6, color: 4 }];

test('basic test', () => {
  expect(playback(board, moves)).toBe(
    '44444\n44444\n44444\n44444\n44444\n44444\n44444',
  );
});

test('random board test', () => {
  expect(playback(randomBoard, moves)).toBe(
    '55211\n24115\n52122\n13151\n24542\n31443\n42321',
  );
});

// test('random board with random move', () => {
//   expect(playback(randomBoard, randMoves)).toBe(
//     '55211\n24115\n52122\n13151\n24542\n31443\n42321',
//   );
// });

// test('floods when adjacent tile is the new color', () => {
//   expect(playback(adjacentNewColorBoard, [{ x: 4, y: 4, color: 4 }])).toBe(
//     '55211\n24115\n52152\n13141\n24544\n31443\n12341',
//   );
// });
