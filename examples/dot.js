const {Matrix, setComputation, ComputationMultiCore} = require('../dist/impulse-math-ts.dev')

setComputation(new ComputationMultiCore())

const m1 = Matrix.from([[1, 2, 3], [4, 5, 6], [1, 2, 3], [4, 5, 6]])
const m2 = Matrix.from([[4, 5, 6], [1, 2, 3], [4, 5, 6], [1, 2, 3]])

const result = m1.dot(m2);

console.log(result);