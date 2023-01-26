import { Matrix } from "../../Math/Matrix";

export const dot = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.cols !== m2.rows) {
    throw new Error(`DIMENSIONS error. m1.cols ${m1.rows} ${m1.cols} !== m2.rows ${m2.rows} ${m2.cols}.`);
  }
  const data = [];
  for (let row = 0; row < m1.rows; ++row) {
    data[row] = new Array(m2.cols);
    for (let col = 0; col < m2.cols; ++col) {
      data[row][col] = 0;
      for (let i = 0; i < m1.cols; ++i) {
        if (m1.data && m2.data) {
          data[row][col] += m1.data[row][i] * m2.data[i][col];
        }
      }
    }
  }
  return new Matrix(m1.rows, m2.cols, data);
};
