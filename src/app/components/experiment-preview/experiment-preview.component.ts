import {Component, Input} from '@angular/core';
import {Experiment} from "../../Classes/Experiment";


@Component({
  selector: 'app-experiment-preview',
  standalone: true,
  imports: [],
  templateUrl: './experiment-preview.component.html',
  styleUrl: './experiment-preview.component.css'
})
export class ExperimentPreviewComponent {
  @Input() experiment!:Experiment
}
