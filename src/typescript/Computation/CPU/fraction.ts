import { Matrix } from "../../Math/Matrix";

export const fraction = (m1: Matrix, num: number): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      data[row][col] = num / m1.data[row][col];
    }
  }
  return Matrix.from(data);
};