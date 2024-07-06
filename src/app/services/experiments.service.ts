import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class ExperimentsService {
  private parameters = {
    name: '',
    model: null,
    instances: '',
    epsilon: null,
    decay: null,
    alpha: null,
    discount: null,
    runs: null,
    epochs: null,
    limit: null,
    optimisation: null,
    generateGraph: false,
  };

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getExperiments(){
    return this.http.get<any[]>('http://localhost:8080/experiments/user/' + this.authenticationService.getId())
  }

  getExperiment(id: any){
    return this.http.get<any[]>('http://localhost:8080/experiments/' + id)
  }

  createExperiments(request: any){
    return this.http.post<any>('http://localhost:8080/experiments/create/' + this.authenticationService.getId(), request)
  }

  deleteExperiments(id:number){
    return this.http.delete<any>('http://localhost:8080/experiments/' + id)
  }

  setParams(experiment: any){
    this.parameters.name = experiment?.name;
    this.parameters.alpha = experiment?.alpha;
    this.parameters.discount = experiment?.discount;
    this.parameters.epsilon = experiment?.epsilon;
    this.parameters.decay = experiment?.decay;
    this.parameters.model = experiment?.model;
    this.parameters.instances = experiment?.instance;
    this.parameters.runs = experiment?.run;
    this.parameters.epochs = experiment?.epochs;
    this.parameters.limit = experiment?.limit;
    this.parameters.optimisation = experiment?.optimisation;
    this.parameters.generateGraph = experiment?.generateGraph;
  }

  getParams(){
    return this.parameters
  }
}
