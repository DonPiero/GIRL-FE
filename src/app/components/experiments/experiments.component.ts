import {Component, Input, numberAttribute, OnInit} from '@angular/core';
import {ExperimentPreviewComponent} from "../experiment-preview/experiment-preview.component";
import {NgForOf, NgIf} from "@angular/common";
import {ExperimentsService} from "../../services/experiments.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormBuilder} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-experiments',
  standalone: true,
  imports: [
    ExperimentPreviewComponent,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './experiments.component.html',
  styleUrl: './experiments.component.css'
})
export class ExperimentsComponent implements OnInit {
  public experiments!: any[]
  public sort: string = ""
  public order: boolean = true
  public newExperiment: any;


  constructor(private experimentsService: ExperimentsService) {
  }

  ngOnInit(): void {
    this.experimentsService.getExperiments().subscribe((data) => {
      this.experiments = data;
    });
    this.newExperiment = this.experimentsService.getParams();
  }

  refresh(){
    this.ngOnInit()
  }

  sortExperiments(): void {
    if (this.sort === "Sort By:" || this.sort === "Date") {
      this.experiments.sort((a: any, b: any) => {
        if (a.date <= b.date) {
          return -1;
        } else {
          return 1
        }
      })
    } else {
      this.experiments.sort((a: any, b: any) => {
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

  createExperiment() {
    let json = {
      "name": this.newExperiment.name,
      "model": '[' + String(this.newExperiment.model) + ']',
      "instances": '[' + this.newExperiment.instances + ']',
      "epsilon": '[' + String(this.newExperiment.epsilon) + ']',
      "decay": '[' + String(this.newExperiment.decay) + ']',
      "alpha": '[' + String(this.newExperiment.alpha) + ']',
      "discount": '[' + String(this.newExperiment.discount) + ']',
      "runs": String(this.newExperiment.runs),
      "epochs": String(this.newExperiment.epochs),
      "limit": String(this.newExperiment.limit),
      "optimisation": String(this.newExperiment.optimisation),
      "generateGraph": String(this.newExperiment.generateGraph)
    }
    this.experimentsService.createExperiments(json).subscribe(
      response => {
        console.log(json)
        console.log(response)
        this.refresh()
      })
  }

  clear() {
    this.newExperiment = {
      name: "",
      model: null,
      instances: "",
      epsilon: null,
      decay: null,
      alpha: null,
      discount: null,
      runs: null,
      epochs: null,
      limit: null,
      optimisation: null,
      generateGraph: false,
    }
  }

}
