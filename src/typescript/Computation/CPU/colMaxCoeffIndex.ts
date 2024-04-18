import { Matrix } from "../../Math/Matrix";

export const colMaxCoeffIndex = (m1: Matrix, col: number): number => {
  let maxIndex = -1;
  let max = -Infinity;

  for (let row = 0; row < m1.rows; row += 1) {
    if (m1.data && m1.data[row][col] > max) {
      max = m1.data[row][col];
      maxIndex = row;
    }
  }

  return maxIndex;
};