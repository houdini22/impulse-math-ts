import { Matrix } from "../../Math/Matrix";

export const row = (m1: Matrix, row: number): Matrix => {
  const data = [];
  for (let col = 0; col < m1.cols; col += 1) {
    data[col] = [m1.data[row][col]];
  }
  return new Matrix(m1.cols, 1, data);
}