import { Matrix } from "../../Math/Matrix";

export const subtract = (m1: Matrix, m: Matrix | number): Matrix => {
  if (typeof m === "number") {
    const data = [];
    for (let row = 0; row < m1.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < m1.cols; col += 1) {
        data[row][col] = m1.data[row][col] - m;
      }
    }
    return Matrix.from(data);
  } else {
    if (m1.rows !== m.rows || m1.cols !== m.cols) {
      throw new Error(`Dimensions error: ${m1.rows}, ${m1.cols} !== ${m.rows}, ${m.cols}`);
    }
    const data = [];
    for (let row = 0; row < m1.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < m1.cols; col += 1) {
        data[row][col] = m1.data[row][col] - m.data[row][col];
      }
    }
    return Matrix.from(data);
  }
};
