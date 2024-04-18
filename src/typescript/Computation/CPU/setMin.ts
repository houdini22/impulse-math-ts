import { Matrix } from "../../Math/Matrix";

export const setMin = (m1: Matrix, min: number): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      data[row][col] = Math.max(m1.data[row][col], min);
    }
  }
  return Matrix.from(data);
};