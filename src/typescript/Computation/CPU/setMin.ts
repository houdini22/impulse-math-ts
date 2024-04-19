import { Matrix } from "../../Math/Matrix";

export const setMin = (m1: Matrix, min: number): Matrix => {
  const data = [...m1.data];
  data.forEach((value, index) => {
    data[index] = Math.max(value, min);
  })
  return new Matrix(m1.rows, m1.cols, data);
};