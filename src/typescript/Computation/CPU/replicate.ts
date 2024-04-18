import { Matrix } from "../../Math/Matrix";

export const replicate = (m1: Matrix, rows: number, cols: number): Matrix => {
  if (rows === 1 && m1.cols === 1 && cols > 1) {
    const newData = [];
    for (let row = 0; row < m1.rows; row += 1) {
      newData[row] = [];
      for (let col = 0; col < cols; col += 1) {
        newData[row][col] = m1.data[row][0];
      }
    }
    return Matrix.from(newData);
  } else if (cols === 1 && m1.rows === 1 && rows > 1) {
    const newData = [];
    for (let row = 0; row < rows; row += 1) {
      newData[row] = [];
      for (let col = 0; col < m1.cols; col += 1) {
        newData[row][col] = m1.data[0][col];
      }
    }
    return Matrix.from(newData);
  }
  return m1;
};