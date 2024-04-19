import { Matrix } from "../../Math/Matrix";

export const sum = (m1: Matrix): number => {
  let sum = 0.0;
  for (let index = 0; index < m1.rows * m1.cols; index += 1) {
    sum += m1.data[index];
  }
  return sum;
};