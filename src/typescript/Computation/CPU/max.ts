import { Matrix } from "../../Math/Matrix";

export const max = (m1: Matrix): number => {
  let max = -Infinity;
  for (let row = 0; row < m1.rows; row += 1) {
    for (let col = 0; col < m1.cols; col += 1) {
      max = Math.max(m1.data[row][col], max);
    }
  }
  return max;
};