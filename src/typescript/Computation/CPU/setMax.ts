import { Matrix } from "../../Math/Matrix";

export const setMax = (m1: Matrix, max: number): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      data[row][col] = Math.min(m1.data[row][col], max);
    }
  }
  return Matrix.from(data);
};