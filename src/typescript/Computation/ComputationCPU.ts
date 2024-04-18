import { AbstractComputation } from "./AbstractComputation";
import { dot } from "./CPU/dot";
import { transpose } from "./CPU/transpose";
import { reluBackpropagation } from "./CPU/reluBackpropagation";

export class ComputationCPU extends AbstractComputation {
  constructor() {
    super();

    this.addKernel("dot", dot);
    this.addKernel("transpose", transpose);
    this.addKernel("reluBackpropagation", reluBackpropagation);
    /*this.addKernel("add", add);
    this.addKernel("subtract", subtract);
    this.addKernel("subtractFromNumber", subtractFromNumber);
    this.addKernel("fillRandom", fillRandom);
    this.addKernel("fillZeros", fillZeros);
    this.addKernel("elementWiseMultiply", elementWiseMultiply);
    this.addKernel("multiplyNumber", multiplyNumber);
    this.addKernel("elementWiseDivide", elementWiseDivide);
    this.addKernel("divideNumber", divideNumber);
    this.addKernel("logisticActivation", logisticActivation);
    this.addKernel("logisticLoss", logisticLoss);
    this.addKernel("logisticBackpropagation", logisticBackpropagation);
    this.addKernel("tanhActivation", tanhActivation);
    this.addKernel("reluActivation", reluActivation);
    this.addKernel("softplusActivation", softplusActivation);
    this.addKernel("penalty", penalty);
    this.addKernel("sqrt", sqrt);
    this.addKernel("transpose", transpose);
    this.addKernel("pow", pow);
    this.addKernel("log", log);
    this.addKernel("logMinusOne", logMinusOne);
    this.addKernel("addNumber", addNumber);*/
  }
}
