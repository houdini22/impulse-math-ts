import { Matrix } from "../../Math/Matrix";

export const rollToColMatrix = (m1: Matrix): Matrix => {
  const data = [];
  let _row = 0;
  for (let row = 0; row < m1.rows; row += 1) {
    for (let col = 0; col < m1.cols; col += 1) {
      data[_row] = [];
      data[_row++][0] = m1.data[row][col];
    }
  }
  return Matrix.from(data);
};