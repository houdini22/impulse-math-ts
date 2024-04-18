import { Matrix } from "../../Math/Matrix";

export const colwiseSum = (m1: Matrix): Matrix => {
  const data = [];
  const t = m1.transpose();
  for (let row = 0; row < t.rows; row += 1) {
    data[row] = [0];
    for (let col = 0; col < t.cols; col += 1) {
      data[row][0] += t.data[row][col];
    }
  }
  return new Matrix(m1.cols, 1, data);
};