import { Matrix } from "../../Math/Matrix";

export const reluBackpropagation = (delta: Matrix, A: Matrix): Matrix => {
  const data = [];
  for (let row = 0; row < A.rows; row += 1) {
    data[row] = new Array(A.cols);
    for (let col = 0; col < A.cols; col += 1) {
      data[row][col] = A.data[row][col] > 0 ? 1 : 0;
    }
  }
  return new Matrix(A.rows, A.cols, data);
};
