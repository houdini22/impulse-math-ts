import { Matrix } from "../../Math/Matrix";

export const exp = (m1: Matrix): Matrix => {
  const data = [...m1.data];
  data.forEach((value, index) => {
    data[index] = Math.exp(value + 1e-16);
  })
  return new Matrix(m1.rows, m1.cols, data);
};