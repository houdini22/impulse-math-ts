import { AbstractComputation } from "./AbstractComputation";
import { dot } from "./CPU/dot";
import { transpose } from "./CPU/transpose";
import { reluBackpropagation } from "./CPU/reluBackpropagation";
import { add } from './CPU/add'
import { subtract } from "./CPU/subtract";
import { multiply } from "./CPU/multiply";
import { divide } from "./CPU/divide";
import { minusOne } from "./CPU/minusOne";
import { log } from "./CPU/log";
import { pow } from "./CPU/pow";
import { exp } from "./CPU/exp";
import { sqrt } from "./CPU/sqrt";
import { subtractNumberFrom } from "./CPU/subtractNumberFrom";
import { setMin } from "./CPU/setMin";
import { setMax } from "./CPU/setMax";
import { setOnes } from "./CPU/setOnes";
import { setZeros } from "./CPU/setZeros";
import { setRandom } from "./CPU/setRandom";
import { fraction } from "./CPU/fraction";
import { max } from "./CPU/max";
import { abs } from "./CPU/abs";
import { mean } from "./CPU/mean";
import { sum } from "./CPU/sum";
import { rowwiseSum } from "./CPU/rowwiseSum";
import { colwiseSum } from "./CPU/colwiseSum";
import { replicate } from "./CPU/replicate";
import { colMaxCoeffIndex } from "./CPU/colMaxCoeffIndex";
import { rowMaxCoeffIndex } from "./CPU/rowMaxCoeffIndex";
import { row } from "./CPU/row";
import { col } from "./CPU/col";
import { rollToColMatrix } from "./CPU/rollToColMatrix";

export class ComputationCPU extends AbstractComputation {
  constructor() {
    super();

    this.addKernel("dot", dot);
    this.addKernel("transpose", transpose);
    this.addKernel("reluBackpropagation", reluBackpropagation);
    this.addKernel("add", add);
    this.addKernel("subtract", subtract);
    this.addKernel("multiply", multiply);
    this.addKernel("divide", divide);
    this.addKernel("minusOne", minusOne);
    this.addKernel("subtractNumberFrom", subtractNumberFrom);
    this.addKernel("log", log);
    this.addKernel("exp", exp);
    this.addKernel("pow", pow);
    this.addKernel("sqrt", sqrt);
    this.addKernel("setMin", setMin);
    this.addKernel("setMax", setMax);
    this.addKernel("setOnes", setOnes);
    this.addKernel("setZeros", setZeros);
    this.addKernel("setRandom", setRandom);
    this.addKernel("fraction", fraction);
    this.addKernel("max", max);
    this.addKernel("abs", abs);
    this.addKernel("mean", mean);
    this.addKernel("sum", sum);
    this.addKernel("rowwiseSum", rowwiseSum);
    this.addKernel("colwiseSum", colwiseSum);
    this.addKernel("replicate", replicate);
    this.addKernel("colMaxCoeffIndex", colMaxCoeffIndex);
    this.addKernel("rowMaxCoeffIndex", rowMaxCoeffIndex);
    this.addKernel("row", row);
    this.addKernel("col", col);
    this.addKernel("rollToColMatrix", rollToColMatrix);
    /*
    this.addKernel("subtractFromNumber", subtractFromNumber);
    this.addKernel("fillRandom", fillRandom);
    this.addKernel("fillZeros", fillZeros);
    this.addKernel("elementWiseMultiply", elementWiseMultiply);
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
