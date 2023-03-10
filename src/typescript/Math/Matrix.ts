import { getComputation } from "../Computation";

export class Matrix {
  public rows = 0;
  public cols = 0;
  public data: number[][] | null = null;

  constructor(rows = 0, cols = 0, data: number[][] | string[][] | null = null) {
    this.resize(rows, cols);
    if (data) {
      this.generateData(data);
    }
  }

  resize(rows: number, cols: number): Matrix {
    this.rows = rows;
    this.cols = cols;
    this.data = new Array(this.rows);
    for (let row = 0; row < this.rows; row += 1) {
      this.data[row] = new Array(this.cols);
    }

    return this;
  }

  generateData(arr: number[][] | string[][] | null): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = new Array(this.cols);
    }
    for (let col = 0; col < this.cols; col += 1) {
      for (let row = 0; row < this.rows; row += 1) {
        if (typeof arr[row] === "number") {
          data[row][col] = arr[row];
        } else {
          if (typeof arr[row][col] === "string") {
            if (/^[0-9.]+$/.test(String(arr[row][col]))) {
              data[row][col] = Number(arr[row][col]);
            } else {
              data[row][col] = arr[row][col];
            }
          } else {
            data[row][col] = arr[row][col];
          }
        }
      }
    }
    this.data = data;
    return this;
  }

  sum(): number {
    let sum = 0.0;
    for (let row = 0; row < this.rows; row += 1) {
      for (let col = 0; col < this.cols; col += 1) {
        sum += this.data[row][col];
      }
    }
    return sum;
  }

  colwiseSum(): Matrix {
    const data = [];
    const t = this.transpose();
    for (let row = 0; row < t.rows; row += 1) {
      data[row] = [0];
      for (let col = 0; col < t.cols; col += 1) {
        data[row][0] += t.data[row][col];
      }
    }
    return new Matrix(this.cols, 1, data);
  }

  rowwiseSum(): Matrix {
    const data = [[]];
    for (let row = 0; row < this.rows; row += 1) {
      let sum = 0.0;
      for (let col = 0; col < this.cols; col += 1) {
        sum += this.data[row][col];
      }
      data[0].push(sum);
    }
    return new Matrix(1, this.rows, data);
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
    if (rows === 1 && this.cols === 1 && cols > 1) {
      const newData = [];
      for (let row = 0; row < this.rows; row += 1) {
        newData[row] = [];
        for (let col = 0; col < cols; col += 1) {
          newData[row][col] = this.data[row][0];
        }
      }
      return Matrix.from(newData);
    } else if (cols === 1 && this.rows === 1 && rows > 1) {
      const newData = [];
      for (let row = 0; row < rows; row += 1) {
        newData[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          newData[row][col] = this.data[0][col];
        }
      }
      return Matrix.from(newData);
    }
    return this;
  }

  transpose(): Matrix {
    return getComputation().execute("transpose", this) as Matrix;
  }

  colMaxCoeffIndex(col: number): number {
    let maxIndex = -1;
    let max = -Infinity;

    for (let row = 0; row < this.rows; row += 1) {
      if (this.data && this.data[row][col] > max) {
        max = this.data[row][col];
        maxIndex = row;
      }
    }

    return maxIndex;
  }

  rowMaxCoeffIndex(row: number): number {
    let maxIndex = -1;
    let max = -Infinity;

    for (let col = 0; col < this.cols; col += 1) {
      if (this.data[row][col] > max) {
        max = this.data[row][col];
        maxIndex = col;
      }
    }

    return maxIndex;
  }

  block(startRow: number, startCol: number, blockRows: number, blockCols: number): Matrix {
    const data = [];

    for (let row = startRow, newRow = 0; row < this.rows && row < startRow + blockRows; row += 1, newRow += 1) {
      data[newRow] = new Array(blockCols);
      for (let col = startCol, newCol = 0; col < this.cols && col < startCol + blockCols; col += 1, newCol += 1) {
        data[newRow][newCol] = this.data[row][col];
      }
    }

    return new Matrix(blockRows, blockCols, data);
  }

  col(col: number): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [this.data[row][col]];
    }
    return new Matrix(this.rows, 1, data);
  }

  row(row: number): Matrix {
    const data = [];
    for (let col = 0; col < this.cols; col += 1) {
      data[col] = [this.data[row][col]];
    }
    return new Matrix(this.cols, 1, data);
  }

  setCol(col: number, tmp: Matrix): Matrix {
    for (let row = 0; row < this.rows; row += 1) {
      if (this.data && tmp.data) {
        this.data[row][col] = tmp.data[row][0];
      }
    }
    return this;
  }

  sigmoid() {
    return this.multiply(-1).exp().add(1).fraction(1);
  }

  rollToColMatrix(): Matrix {
    const data = [];
    let _row = 0;
    for (let row = 0; row < this.rows; row += 1) {
      for (let col = 0; col < this.cols; col += 1) {
        data[_row] = [];
        data[_row++][0] = this.data[row][col];
      }
    }
    return Matrix.from(data);
  }

  abs(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.abs(this.data[row][col]);
      }
    }
    return Matrix.from(data);
  }

  mean() {
    let sum = 0;
    const numberOfElements = this.rows * this.cols;

    for (let row = 0; row < this.rows; row += 1) {
      for (let col = 0; col < this.cols; col += 1) {
        sum += this.data[row][col];
      }
    }

    return sum / numberOfElements;
  }

  max(): number {
    let max = -Infinity;
    for (let row = 0; row < this.rows; row += 1) {
      for (let col = 0; col < this.cols; col += 1) {
        max = Math.max(this.data[row][col], max);
      }
    }
    return max;
  }

  setMax(max: number): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.min(this.data[row][col], max);
      }
    }
    return Matrix.from(data);
  }

  setMin(min: number): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.max(this.data[row][col], min);
      }
    }
    return Matrix.from(data);
  }

  setZeros(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = 0;
      }
    }
    return Matrix.from(data);
  }

  setOnes(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = 1;
      }
    }
    return Matrix.from(data);
  }

  setRandom(parameter: number = 1): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = (Math.random() * 4 - 2) * Math.sqrt(2 / parameter); // todo: gaussian distribution;
      }
    }
    return Matrix.from(data);
  }

  fraction(num: number = 1): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = num / this.data[row][col];
      }
    }
    return Matrix.from(data);
  }

  sqrt(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.sqrt(this.data[row][col] + 1e-8);
      }
    }
    return Matrix.from(data);
  }

  dot(m: Matrix): Matrix {
    return getComputation().execute("dot", this, m) as Matrix;
  }

  multiply(num: number | Matrix): Matrix {
    if (typeof num === "number") {
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          // @ts-ignore
          data[row][col] = this.data[row][col] * num;
        }
      }
      return Matrix.from(data);
    } else {
      if (num.rows !== this.rows || this.cols !== num.cols) {
        throw new Error(`Dimension error: ${this.shape()} !== ${num.shape()}`);
      }
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          // @ts-ignore
          data[row][col] = this.data[row][col] * num.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }

  subtract(m: Matrix | number): Matrix {
    if (typeof m === "number") {
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          data[row][col] = this.data[row][col] - m;
        }
      }
      return Matrix.from(data);
    } else {
      if (this.rows !== m.rows || this.cols !== m.cols) {
        throw new Error(`Dimensions error: ${this.rows}, ${this.cols} !== ${m.rows}, ${m.cols}`);
      }
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          data[row][col] = this.data[row][col] - m.data[row][col];
        }
      }
      return Matrix.from(data);
    }
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
    if (typeof num === "number") {
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          data[row][col] = this.data[row][col] / num;
        }
      }
      return Matrix.from(data);
    } else {
      if (num.rows !== this.rows || num.cols !== this.cols) {
        throw new Error(`Dimensions error (${this.rows}, ${this.cols}) !== (${num.rows}, ${num.cols})`);
      }
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          data[row][col] = this.data[row][col] / num.data[row][col];
        }
      }
      return Matrix.from(data);
    }
  }

  minusOne(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = 1 - this.data[row][col];
      }
    }
    return Matrix.from(data);
  }

  subtractFromNumber(num: number): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = num - this.data[row][col];
      }
    }
    return Matrix.from(data);
  }

  add(m: Matrix | number): Matrix {
    if (typeof m === "number") {
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          data[row][col] = this.data[row][col] + m;
        }
      }
      return Matrix.from(data);
    } else if (m instanceof Matrix) {
      if (m.rows !== this.rows || m.cols !== this.cols) {
        throw new Error(`Dimention error: rows (x: ${this.rows}, y: ${this.cols}) !== (x: ${m.rows}, y: ${m.cols})`);
      }
      const data = [];
      for (let row = 0; row < this.rows; row += 1) {
        data[row] = [];
        for (let col = 0; col < this.cols; col += 1) {
          data[row][col] = this.data[row][col] + m.data[row][col];
        }
      }
      return Matrix.from(data);
    }
    return this;
  }

  log(): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.log(this.data[row][col] + 1e-8);
      }
    }
    return Matrix.from(data);
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
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.exp(this.data[row][col] + 1e-8);
      }
    }
    return Matrix.from(data);
  }

  pow(num): Matrix {
    const data = [];
    for (let row = 0; row < this.rows; row += 1) {
      data[row] = [];
      for (let col = 0; col < this.cols; col += 1) {
        data[row][col] = Math.pow(this.data[row][col], num);
      }
    }
    return Matrix.from(data);
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
