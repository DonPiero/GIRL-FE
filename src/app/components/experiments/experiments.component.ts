import {Component, OnInit} from '@angular/core';
import {ExperimentPreviewComponent} from "../experiment-preview/experiment-preview.component";
import {NgForOf, NgIf} from "@angular/common";
import {ExperimentsService} from "../../services/experiments.service";
import {Experiment} from "../../Classes/Experiment";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-experiments',
  standalone: true,
  imports: [
    ExperimentPreviewComponent,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './experiments.component.html',
  styleUrl: './experiments.component.css'
})
export class ExperimentsComponent implements OnInit{
  public experiments!:Experiment[]
  public sort:string = ""
  public order:boolean = true

  constructor(private experimentsService:ExperimentsService,
              private formBuilder:FormBuilder){
  }

  ngOnInit(): void {
  this.experimentsService.getExperiments().subscribe((data) => {
    this.experiments = data;
  });
  }
  sortExperiments(): void{
    if (this.sort === "Sort By:" || this.sort === "Date") {
      this.experiments.sort((a:Experiment, b:Experiment) => {
        if (a.date <= b.date) {
          return -1;
        } else {
          return 1
        }
      })
    } else {
      this.experiments.sort((a:Experiment, b:Experiment) => {
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
  createParametersObject(): void{
    console.log(this.parametersForm)
  }
  public parametersForm:FormGroup = this.formBuilder.group({
    alpha: '',
    decay: '',
    discount: '',
    epsilon: '',
    epochs: '',
    limit: '',
    runs: '',
    model: '',
    generate_graph: '',
    instances: '',
  });

}
