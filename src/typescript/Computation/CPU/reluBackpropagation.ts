import { Matrix } from "../../Math/Matrix";

export const reluBackpropagation = (delta: Matrix, A: Matrix): Matrix => {
  const data = [...A.data];
  data.forEach((value, index) => {
    data[index] = value > 0 ? 1 : 0;
  })
  return new Matrix(A.rows, A.cols, data);
};
