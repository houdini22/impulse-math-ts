import { Matrix } from "../../Math/Matrix";

export const row = (m1: Matrix, row: number): Matrix => {
  const startIndex = row * m1.cols;
  const data = [];
  for (let i = startIndex; i < startIndex + m1.cols; i += 1) {
    data.push(m1.data[i]);
  }
  return new Matrix(1, m1.cols, data);
}