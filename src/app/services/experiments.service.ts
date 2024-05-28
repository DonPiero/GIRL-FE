import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Experiment} from "../Classes/Experiment";

@Injectable({
  providedIn: 'root'
})
export class ExperimentsService {
  constructor(private http: HttpClient) { }

  getExperiments(){
    return this.http.get<Experiment[]>('/assets/Mock/Experiments.json')
  }
}
