import { Matrix } from "../../Math/Matrix";

export const col = (m1: Matrix, col: number): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [m1.data[row][col]];
  }
  return new Matrix(m1.rows, 1, data);
};