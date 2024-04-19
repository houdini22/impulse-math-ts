import { Matrix } from "../../Math/Matrix";

export const abs = (m1: Matrix): Matrix => {
  const data = [...m1.data];
  data.forEach((value, index) => {
    data[index] = Math.abs(value);
  });
  return new Matrix(m1.rows, m1.cols, data);
};