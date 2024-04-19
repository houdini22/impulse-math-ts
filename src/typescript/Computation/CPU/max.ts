import { Matrix } from "../../Math/Matrix";

export const max = (m1: Matrix): number => {
  let max = -Infinity;
  for (let index = 0; index < m1.rows * m1.cols; index += 1) {
    max = Math.max(m1.data[index], max);
  }
  return max;
};