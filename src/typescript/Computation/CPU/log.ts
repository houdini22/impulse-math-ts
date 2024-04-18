import { Matrix } from "../../Math/Matrix";

export const log = (m1: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      data[row][col] = Math.log(m1.data[row][col] + 1e-8);
    }
  }
  return Matrix.from(data);
};