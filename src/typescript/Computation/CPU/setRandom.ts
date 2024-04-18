import { Matrix } from "../../Math/Matrix";

export const setRandom = (m1: Matrix, parameter: number): Matrix => {
  const data = [];
  for (let row = 0; row < m1.rows; row += 1) {
    data[row] = [];
    for (let col = 0; col < m1.cols; col += 1) {
      data[row][col] = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution;
    }
  }
  return Matrix.from(data);
};