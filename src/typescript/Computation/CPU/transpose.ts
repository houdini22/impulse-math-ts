import {Matrix} from "../../Math/Matrix";

export const transpose = (m1: Matrix): Matrix => {
    const data = [];
    for (let col = 0; col < m1.cols; ++col) {
        for (let row = 0; row < m1.rows; ++row) {
            data.push(m1.data[row * m1.cols + col]);
        }
    }
    return new Matrix(m1.cols, m1.rows, data);
};
