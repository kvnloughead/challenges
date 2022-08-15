const { board, moves, randomBoard } = require("./data");

interface Move {
  x: number;
  y: number;
  color: number;
}

export function playback(map: string, moves: Move[]): string {
  let _board = map.split("\n").map((row) => row.split("").map((cell) => +cell));
  const data = {
    yLen: _board.length,
    xLen: _board[0].length,
    oldColor: 0,
  };
  moves.forEach((move) => {
    data.oldColor = _board[move.y][move.x];
    floodBoard(_board, move, data);
  });
  return _board.map((row) => row.join("")).join("\n");
}

export function floodBoard(
  board: number[][],
  move: Move,
  data: { yLen: number; xLen: number; oldColor: number }
) {
  let { x, y, color } = move;
  const { xLen, yLen, oldColor } = data;
  if (x < 0 || y < 0 || x >= xLen || y >= yLen) return;
  if (board[y][x] != oldColor) return;

  board[y][x] = color;

  floodBoard(board, { ...move, x: x + 1 }, data);
  floodBoard(board, { ...move, x: x - 1 }, data);
  floodBoard(board, { ...move, y: y + 1 }, data);
  floodBoard(board, { ...move, y: y - 1 }, data);
}

// const randMoves = [{ x: 0, y: 6, color: 4 }];
// playback(randomBoard, randMoves);

playback(randomBoard, [moves[0]]);
