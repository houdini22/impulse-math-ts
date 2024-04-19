import { Matrix } from "../../Math/Matrix";

export const setOnes = (m1: Matrix): Matrix => {
  const data = [...m1.data];
  data.forEach((value, index) => {
    data[index] = 1;
  })
  return new Matrix(m1.rows, m1.cols, data);
};