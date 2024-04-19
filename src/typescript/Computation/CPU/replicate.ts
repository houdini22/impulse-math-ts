import { Matrix } from "../../Math/Matrix";

export const replicate = (m1: Matrix, rows: number, cols: number): Matrix => {
    if (rows === 1 && m1.cols === 1 && cols > 1) {
      const newData = [];
      for (let col = 0; col < cols; col += 1) {
        for (let row = 0; row < m1.rows; row += 1) {
          newData[row * cols + col] = m1.data[row * m1.cols];
        }
      }
      return new Matrix(m1.rows, cols, newData);
    }
  else
    if (cols === 1 && m1.rows === 1 && rows > 1) {
      const newData = [];
      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < m1.cols; col += 1) {
          newData[row * m1.cols + col] = m1.data[col];
        }
      }
      return new Matrix(rows, m1.cols, newData);
    }
    return m1;
  }
;