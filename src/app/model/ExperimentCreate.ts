export class ExperimentCreate {
  name: string;
  model: number;
  instance: number[];
  epsilon: number;
  decay: number;
  alpha: number;
  discount: number;
  runs: number;
  epochs: number;
  limit: number;
  generate_graph: boolean;
  constructor(data: any) {
    this.name = data.name;
    this.model = data.model;
    this.instance = data.instance;
    this.epsilon = data.epsilon;
    this.decay = data.decay;
    this.alpha = data.alpha;
    this.discount = data.discount;
    this.runs = data.runs;
    this.epochs = data.epochs;
    this.limit = data.limit;
    this.generate_graph = data.generate_graph;
  }
}
