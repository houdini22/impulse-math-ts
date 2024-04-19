import { Matrix } from "../../Math/Matrix";

export const minusOne = (m1: Matrix): Matrix => {
  const data = [...m1.data];
  for (let index = 0; index < m1.rows * m1.cols; index += 1) {
    data[index] = 1 - data[index];
  }
  return new Matrix(m1.rows, m1.cols, data);
};