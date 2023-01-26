import { AbstractComputation } from "./AbstractComputation";
import { ComputationMultiCore } from "./ComputationMultiCore";
import { ComputationCPU } from "./ComputationCPU";

let currentComputation: AbstractComputation = new ComputationCPU();

export const setComputation = (type: AbstractComputation): void => {
  currentComputation = type;
};

export const getComputation = (): AbstractComputation => {
  return currentComputation;
};
