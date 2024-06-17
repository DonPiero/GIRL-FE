export class ExperimentCreateRequest {
  "name": string;
  "instances": string;
  "model": string;
  "epsilon": string;
  "decay": string;
  "alpha": string;
  "discount": string;
  "runs": string;
  "epochs": string;
  "limit": string;
  "optimisation": string;
  "generateGraph": string;
  constructor(data: any) {
    this.name = data.name;
    this.model = data.model;
    this.instances = data.instances;
    this.epsilon = data.epsilon;
    this.decay = data.decay;
    this.alpha = data.alpha;
    this.discount = data.discount;
    this.runs = data.runs;
    this.epochs = data.epochs;
    this.limit = data.limit;
    this.optimisation = data.optimisation;
    this.generateGraph = data.generateGraph;
  }
}
