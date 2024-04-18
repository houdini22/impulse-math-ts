import { Matrix } from "../../Math/Matrix";

export const multiply = (m1: Matrix, num: Matrix | number): Matrix => {
  if (typeof num === "number") {
    const data = [];
    for (let row = 0; row < m1.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < m1.cols; col += 1) {
        data[row][col] = m1.data[row][col] * num;
      }
    }
    return Matrix.from(data);
  } else {
    if (num.rows !== m1.rows || m1.cols !== num.cols) {
      throw new Error(`Dimension error: ${m1.shape()} !== ${num.shape()}`);
    }
    const data = [];
    for (let row = 0; row < m1.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < m1.cols; col += 1) {
        data[row][col] = m1.data[row][col] * num.data[row][col];
      }
    }
    return Matrix.from(data);
  }
};
