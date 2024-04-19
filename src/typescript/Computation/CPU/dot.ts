import { Matrix } from "../../Math/Matrix";

export const dot = (m1: Matrix, m2: Matrix): Matrix => {
  if (m1.cols !== m2.rows) {
    throw new Error(`DIMENSIONS error. m1.cols ${m1.rows} ${m1.cols} !== m2.rows ${m2.rows} ${m2.cols}.`);
  }
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = new Array(m2.cols);
    for (let col = 0; col < m2.cols; col += 1) {
      data[row][col] = 0;
      for (let i = 0; i < m1.cols; i += 1) {
        for (let j = 0; j < m2.rows; j += 1) {
          data[row][col] += m1.data[row * m1.cols + i] * m2.data[j * m2.cols + col];
        }
      }
    }
  }
  let newData = [];
  data.forEach((row) => {
    newData = [...newData, ...row];
  })
  return new Matrix(m1.rows, m2.cols, newData);
};
