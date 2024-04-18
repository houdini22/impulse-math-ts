import { Matrix } from "../../Math/Matrix";

export const setZeros = (m1: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      data[row][col] = 0;
    }
  }
  return Matrix.from(data);
};