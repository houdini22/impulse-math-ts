import { Matrix } from "../../Math/Matrix";

export const sqrt = (m1: Matrix): Matrix => {
  const data = [...m1.data];
  data.forEach((value, index) => {
    data[index] = Math.sqrt(value + 1e-8);
  })
  return new Matrix(m1.rows, m1.cols, data);
};