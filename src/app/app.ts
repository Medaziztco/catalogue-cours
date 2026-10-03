import { Component } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { ListeCoursComponent} from './composants/liste-cours/liste-cours';
import { PiedPage } from './composants/pied-page/pied-page';
import { Cours } from './composants/liste-cours/liste-cours';
import { DetailCoursComponent } from './composants/detail-cours/detail-cours';

@Component({
  selector: 'app-root',
  imports: [EnTete, ListeCoursComponent, PiedPage,DetailCoursComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  coursSelectionne: Cours | null=null;

  onSelectionCours(c:Cours){
    this.coursSelectionne=c;
  }
}