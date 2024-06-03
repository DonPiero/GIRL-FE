import {Component, numberAttribute, OnInit} from '@angular/core';
import {ExperimentPreviewComponent} from "../experiment-preview/experiment-preview.component";
import {NgForOf, NgIf} from "@angular/common";
import {ExperimentsService} from "../../services/experiments.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormBuilder} from "@angular/forms";
import {ExperimentResponse} from "../../model/ExperimentResponse";
import {ExperimentCreateRequest} from "../../model/ExperimentCreateRequest";

@Component({
  selector: 'app-experiments',
  standalone: true,
  imports: [
    ExperimentPreviewComponent,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './experiments.component.html',
  styleUrl: './experiments.component.css'
})
export class ExperimentsComponent implements OnInit{
  public experiments!: ExperimentResponse[]
  public sort: string = ""
  public order: boolean = true
  public newExperiment: ExperimentCreateRequest

  constructor(private experimentsService:ExperimentsService,
              private formBuilder:FormBuilder){
    this.newExperiment = new ExperimentCreateRequest({
      "name": "",
      "model": null,
      "instances": "",
      "epsilon": null,
      "decay": null,
      "alpha": null,
      "discount": null,
      "runs": null,
      "epochs": null,
      "limit": null,
      "generate_graph": false,
    })
  }

  ngOnInit(): void {
  this.experimentsService.getExperiments().subscribe((data) => {
    this.experiments = data;
  });
  }
  sortExperiments(): void{
    if (this.sort === "Sort By:" || this.sort === "Date") {
      this.experiments.sort((a:ExperimentResponse, b:ExperimentResponse) => {
        if (a.date <= b.date) {
          return -1;
        } else {
          return 1
        }
      })
    } else {
      this.experiments.sort((a:ExperimentResponse, b:ExperimentResponse) => {
        if (a.name <= b.name) {
          return -1;
        } else {
          return 1
        }
      })
    }
    if (!this.order) {
      this.experiments.reverse()
    }
  }

  createExperiment(){
    console.log(this.newExperiment);
  }

  clear(){
    this.newExperiment = new ExperimentCreateRequest({
      "name": "",
      "model": null,
      "instances": "",
      "epsilon": null,
      "decay": null,
      "alpha": null,
      "discount": null,
      "runs": null,
      "epochs": null,
      "limit": null,
      "generate_graph": false,
    })
  }

}
