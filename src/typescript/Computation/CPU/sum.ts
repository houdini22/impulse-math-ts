import { Matrix } from "../../Math/Matrix";

export const sum = (m1: Matrix): number => {
  let sum = 0.0;
  for (let row = 0; row < m1.rows; row += 1) {
    for (let col = 0; col < m1.cols; col += 1) {
      sum += m1.data[row][col];
    }
  }
  return sum;
};