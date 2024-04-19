import { getComputation } from "../Computation";
import { minusOne } from "../Computation/CPU/minusOne";

export class Matrix {
  public rows = 0;
  public cols = 0;
  public data: number[] | null = null;

  constructor(rows = 0, cols = 0, data: number[] | null = null) {
    this.rows = rows;
    this.cols = cols;
    this.data = data;
    if (!data) {
      this.data = new Array(rows * cols);
    }
  }

  resize(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;
    this.data = new Array(rows * cols);
  }

  sum(): number {
    return getComputation().execute("sum", this) as number;
  }

  colwiseSum(): Matrix {
    return getComputation().execute("colwiseSum", this) as Matrix;
  }

  rowwiseSum(): Matrix {
    return getComputation().execute("rowwiseSum", this) as Matrix;
  }

  flatten(): number[] {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      for (let col = 0; col < this.cols; col += 1) {
        data.push(this.data[row][col]);
      }
    }
    return data;
  }

  replicate(rows: number, cols: number): Matrix {
    return getComputation().execute("replicate", this, rows, cols) as Matrix;
  }

  transpose(): Matrix {
    return getComputation().execute("transpose", this) as Matrix;
  }

  colMaxCoeffIndex(col: number): number {
    return getComputation().execute("colMaxCoeffIndex", this, col) as number;
  }

  rowMaxCoeffIndex(row: number): number {
    return getComputation().execute("rowMaxCoeffIndex", this, row) as number;
  }/*

  block(startRow: number, startCol: number, blockRows: number, blockCols: number): Matrix {
    const data = [];

    for (let row = startRow, newRow = 0; row < this.rows && row < startRow + blockRows; row += 1, newRow += 1) {
      data[newRow] = new Array(blockCols);
      for (let col = startCol, newCol = 0; col < this.cols && col < startCol + blockCols; col += 1, newCol += 1) {
        data[newRow][newCol] = this.data[row][col];
      }
    }

    return new Matrix(blockRows, blockCols, data);
  }*/

  col(col: number): Matrix {
    return getComputation().execute("col", this, col) as Matrix;
  }

  row(row: number): Matrix {
    return getComputation().execute("row", this, row) as Matrix;
  }

  sigmoid() {
    return this.multiply(-1).exp().add(1).fraction(1);
  }

  rollToColMatrix(): Matrix {
    return getComputation().execute("rollToColMatrix", this) as Matrix;
  }

  abs(): Matrix {
    return getComputation().execute("abs", this) as Matrix;
  }

  mean() {
    return getComputation().execute("mean", this) as number;
  }

  max(): number {
    return getComputation().execute("max", this) as number;
  }

  setMax(max: number): Matrix {
    return getComputation().execute("setMax", this, max) as Matrix;
  }

  setMin(min: number): Matrix {
    return getComputation().execute("setMin", this, min) as Matrix;
  }

  setZeros(): Matrix {
    return getComputation().execute("setZeros", this) as Matrix;
  }

  setOnes(): Matrix {
    return getComputation().execute("setOnes", this) as Matrix;
  }

  setRandom(parameter = 1): Matrix {
    // todo: gaussian distribution
    return getComputation().execute("setRandom", this, parameter) as Matrix;
  }

  fraction(num = 1): Matrix {
    return getComputation().execute("fraction", this, num) as Matrix;
  }

  sqrt(): Matrix {
    return getComputation().execute("sqrt", this) as Matrix;
  }

  dot(m: Matrix): Matrix {
    return getComputation().execute("dot", this, m) as Matrix;
  }

  multiply(num: number | Matrix): Matrix {
    return getComputation().execute("multiply", this, num) as Matrix;
  }

  subtract(m: Matrix | number): Matrix {
    return getComputation().execute("subtract", this, m) as Matrix;
  }

  forEach(cb: (num: number) => number): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = cb(this.data[row][col]);
      }
    }
    return Matrix.from(data);
  }

  shape(): number[] {
    return [this.rows, this.cols];
  }

  divide(num: number | Matrix): Matrix {
    return getComputation().execute("divide", this, num) as Matrix;
  }

  minusOne(): Matrix {
    return getComputation().execute("subtractNumberFrom", this, -1) as Matrix;
  }

  subtractNumberFrom(num: number): Matrix {
    return getComputation().execute("subtractNumberFrom", this, num) as Matrix;
  }

  add(m: Matrix | number): Matrix {
    return getComputation().execute("add", this, m) as Matrix;
  }

  log(): Matrix {
    return getComputation().execute("log", this) as Matrix;
  }

  tanh(): Matrix {
    return this.exp()
      .subtract(this.multiply(-1).exp())
      .divide(this.exp().add(this.multiply(-1).exp()));
  }

  softmax(): Matrix {
    const max = this.max() - 1e-8;
    return this.subtract(max).exp().divide(this.rowwiseSum().replicate(this.cols, 1).transpose());
  }

  exp(): Matrix {
    return getComputation().execute("exp", this) as Matrix;
  }

  pow(num: number): Matrix {
    return getComputation().execute("pow", this, num) as Matrix;
  }

  value(row, col, value = undefined) {
    if (value === undefined) {
      return this.data[row][col];
    }
    this.data[row][col] = value;
    return this;
  }

  copy() {
    return Matrix.from(this.data);
  }

  static from(arr: number[][]): Matrix {
    return new Matrix(arr.length, arr[0]?.length || 0, arr);
  }

  concat(m: Matrix) {
    for (let row = 0; row < m.rows; row += 1) {
      this.data.push(m.data[row]);
    }
    return this;
  }
}
