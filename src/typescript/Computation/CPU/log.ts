import { Matrix } from "../../Math/Matrix";

export const log = (m1: Matrix): Matrix => {
  const data = [...m1.data];
  data.forEach((value, index) => {
    data[index] = Math.log(value + 1e-8);
  })
  return new Matrix(m1.rows, m1.cols, data);
};