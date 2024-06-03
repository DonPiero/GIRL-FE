export class ExperimentResponse{
  id: string;
  name: string;
  date: string;
  state:string;
  model: number;
  instances: string;
  epsilon: number;
  decay: number;
  alpha: number;
  discount: number;
  runs: number;
  epochs: number;
  limit: number;
  generate_graph: boolean;
  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.date = data.date;
    this.state = data.state;
    this.model = data.model;
    this.instances = data.instance;
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
