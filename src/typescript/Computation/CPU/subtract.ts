import { Matrix } from "../../Math/Matrix";

export const subtract = (m1: Matrix, m: Matrix | number): Matrix => {
  if (typeof m === "number") {
    const data = [...m1.data];
    data.forEach((value, index) => {
      data[index] = value - m;
    })
    return new Matrix(m1.rows, m1.cols, data);
  } else {
    if (m1.rows !== m.rows || m1.cols !== m.cols) {
      throw new Error(`Dimensions error: ${m1.rows}, ${m1.cols} !== ${m.rows}, ${m.cols}`);
    }
    const data = [...m1.data];
    data.forEach((value, index) => {
      data[index] = value - m.data[index];
    })
    return new Matrix(m1.rows, m1.cols, data);
  }
};
