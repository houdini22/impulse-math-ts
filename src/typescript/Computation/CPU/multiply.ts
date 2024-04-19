import { Matrix } from "../../Math/Matrix";

export const multiply = (m1: Matrix, num: Matrix | number): Matrix => {
  if (typeof num === "number") {
    const data = [...m1.data];
    data.forEach((value, index) => {
      data[index] = value * num;
    })
    return new Matrix(m1.rows, m1.cols, data);
  } else {
    if (num.rows !== m1.rows || m1.cols !== num.cols) {
      throw new Error(`Dimension error: ${m1.shape()} !== ${num.shape()}`);
    }
    const data = [...m1.data];
    data.forEach((value, index) => {
      data[index] = value * num.data[index];
    })
    return new Matrix(m1.rows, m1.cols, data);
  }
};
