import { Matrix } from "../../Math/Matrix";

export const setRandom = (m1: Matrix, parameter: number): Matrix => {
  const data = [...m1.data];
  data.forEach((value, index) => {
    data[index]  = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution;
  })
  return new Matrix(m1.rows, m1.cols, data);
};