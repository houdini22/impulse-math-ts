import { Matrix } from "../../Math/Matrix";

export const rowMaxCoeffIndex = (m1: Matrix, row: number): number => {
  let maxIndex = -1;
  let max = -Infinity;

  for (let col = 0; col < m1.cols; col += 1) {
    if (m1.data[row][col] > max) {
      max = m1.data[row][col];
      maxIndex = col;
    }
  }

  return maxIndex;
};