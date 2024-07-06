import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExperimentsService} from "../../services/experiments.service";


@Component({
  selector: 'app-experiment-preview',
  standalone: true,
  imports: [],
  templateUrl: './experiment-preview.component.html',
  styleUrl: './experiment-preview.component.css'
})
export class ExperimentPreviewComponent implements OnInit{
  @Input() experiment:any
  @Output() deleted = new EventEmitter<any>();
  constructor(private experimentsService: ExperimentsService){}

  delete(){
    this.experimentsService.deleteExperiments(this.experiment.id).subscribe(
      () => {
        console.log(this.experiment.id)
        this.deleted.emit()
      })

  }

  ngOnInit(): void {
    console.log(this.experiment)
  }
}
