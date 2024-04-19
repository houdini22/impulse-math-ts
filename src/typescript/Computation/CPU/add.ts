import { Matrix } from "../../Math/Matrix";

export const add = (m1: Matrix, m: Matrix | number): Matrix => {
  if (typeof m === "number") {
    const data = [...m1.data];
    data.forEach((value, index) => {
      data[index] = value + m;
    })
    return new Matrix(m1.rows, m1.cols, data);
  } else if (m instanceof Matrix) {
    if (m.rows !== m1.rows || m.cols !== m1.cols) {
      throw new Error(`Dimention error: rows (x: ${m1.rows}, y: ${m1.cols}) !== (x: ${m.rows}, y: ${m.cols})`);
    }
    const data = [...m1.data]
    data.forEach((value, index) => {
      data[index] = value + m.data[index];
    })
    return new Matrix(m1.rows, m1.cols, data);
  }
};