import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExperimentResponse} from "../model/ExperimentResponse";

@Injectable({
  providedIn: 'root'
})
export class ExperimentsService {
  constructor(private http: HttpClient) { }

  getExperiments(){
    return this.http.get<ExperimentResponse[]>('http://localhost:8080/experiments/')
  }
}
