import { Matrix } from "../../Math/Matrix";

export const add = (m1: Matrix, m: Matrix | number): Matrix => {
  if (typeof m === "number") {
    const data = [];
    for (let row = 0; row < m1.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < m1.cols; col += 1) {
        data[row][col] = m1.data[row][col] + m;
      }
    }
    return Matrix.from(data);
  } else if (m instanceof Matrix) {
    if (m.rows !== m1.rows || m.cols !== m1.cols) {
      throw new Error(`Dimention error: rows (x: ${m1.rows}, y: ${m1.cols}) !== (x: ${m.rows}, y: ${m.cols})`);
    }
    const data = [];
    for (let row = 0; row < m1.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < m1.cols; col += 1) {
        data[row][col] = m1.data[row][col] + m.data[row][col];
      }
    }
    return Matrix.from(data);
  }
};