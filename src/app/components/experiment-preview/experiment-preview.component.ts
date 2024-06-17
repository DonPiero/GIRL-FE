import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExperimentResponse} from "../../model/ExperimentResponse";
import {ExperimentsService} from "../../services/experiments.service";


@Component({
  selector: 'app-experiment-preview',
  standalone: true,
  imports: [],
  templateUrl: './experiment-preview.component.html',
  styleUrl: './experiment-preview.component.css'
})
export class ExperimentPreviewComponent {
  @Input() experiment:any
  @Output() deleted = new EventEmitter<any>();
  constructor(private experimentsService: ExperimentsService){console.log(this.experiment)}

  delete(){
    this.experimentsService.deleteExperiments(this.experiment.id).subscribe(
      () => {
        console.log(this.experiment.id)
        this.deleted.emit()
      })

  }
}
