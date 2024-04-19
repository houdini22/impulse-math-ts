import { Matrix } from "../../Math/Matrix";

export const pow = (m1: Matrix, num: number): Matrix => {
  const data = [...m1.data];
  data.forEach((value, index) => {
    data[index] = Math.pow(value, num);
  })
  return new Matrix(m1.rows, m1.cols, data);
};