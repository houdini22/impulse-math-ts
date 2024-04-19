import { Matrix } from "../../Math/Matrix";

export const rowwiseSum = (m1: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    let sum = 0.0;
    for (let col = 0; col < m1.cols; col += 1) {
      sum += m1.data[row * m1.cols + col];
    }
    data.push(sum);
  }
  return new Matrix(1, m1.rows, data);
};