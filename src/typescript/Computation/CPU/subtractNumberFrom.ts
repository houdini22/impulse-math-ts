import { Matrix } from "../../Math/Matrix";

export const subtractNumberFrom = (m1: Matrix, num: number): Matrix => {
  const data = [...m1.data];
  data.forEach((value, index) => {
    data[index] = num - value;
  })
  return new Matrix(m1.rows, m1.cols, data);
};
