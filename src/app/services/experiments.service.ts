import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExperimentResponse} from "../model/ExperimentResponse";
import {ExperimentCreateRequest} from "../model/ExperimentCreateRequest";

@Injectable({
  providedIn: 'root'
})
export class ExperimentsService {
  constructor(private http: HttpClient) { }

  getExperiments(){
    return this.http.get<any[]>('http://localhost:8080/experiments/')
  }

  createExperiments(request:ExperimentCreateRequest){
    return this.http.post<any>('http://localhost:8080/experiments/create', request)
  }

  deleteExperiments(id:number){
    return this.http.delete<any>('http://localhost:8080/experiments/' + id)
  }
}
