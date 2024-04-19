import { Matrix } from "../../Math/Matrix";

export const rollToColMatrix = (m1: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    for (let col = 0; col < m1.cols; col += 1) {
      data.push(m1.data[row * m1.cols + col]);
    }
  }
  return new Matrix(m1.rows * m1.cols, 1, data);
};