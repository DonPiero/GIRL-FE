import {Component, Input, OnInit} from '@angular/core';
import {ExperimentsService} from "../../services/experiments.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-experiment-result',
  standalone: true,
  imports: [
    NgIf, CommonModule, RouterLink
  ],
  templateUrl: './experiment-result.component.html',
  styleUrl: './experiment-result.component.css'
})
export class ExperimentResultComponent implements OnInit{
  public experiment!: any;
  public id!: string |null;

  constructor(private route:ActivatedRoute,
              private experimentsService: ExperimentsService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {this.id = params.get('id')})
    this.experimentsService.getExperiment(this.id).subscribe((data) => {
      console.log(data)
      this.experiment = data;
    });
  }

  setParams(){
    this.experimentsService.setParams(this.experiment)
  }
}
