import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ExperimentsComponent} from "./components/experiments/experiments.component";
import {DocumentationComponent} from "./components/documentation/documentation.component";
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {MainComponent} from "./components/main/main.component";
import {ExperimentResultComponent} from "./components/experiment-result/experiment-result.component";


export const routes: Routes = [
  {path: '', component: MainComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'experiments', component: ExperimentsComponent},
      {path: 'documentation', component: DocumentationComponent},
      {path: 'experiment-result', component: ExperimentResultComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]},
  {path: 'authentication', component: AuthenticationComponent}
];
