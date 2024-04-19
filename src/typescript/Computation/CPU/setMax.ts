import { Matrix } from "../../Math/Matrix";

export const setMax = (m1: Matrix, max: number): Matrix => {
  const data = [...m1.data];
  data.forEach((value, index) => {
    data[index] = Math.min(value, max);
  })
  return new Matrix(m1.rows, m1.cols, data);
};