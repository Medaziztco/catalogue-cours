import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{FiltreCoursPipe} from '../../pipes/filtre-cours-pipe';
import{TriCoursPipe}from'../../pipes/tri-cours-pipe';
import { UpperCasePipe }from '@angular/common';
export interface Cours{
  titre:string;
  categorie:string;
  duree:string;
  places:number;
}
@Component({
  imports: [FormsModule,FiltreCoursPipe,TriCoursPipe,UpperCasePipe],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCoursComponent {
  @Output() coursSelectionne=new EventEmitter<Cours>();
  coursActif:Cours | null=null;
  cours:Cours[] = [
    { titre: 'Angular avancé', categorie: 'Front-end', duree: '12h', places: 8 },
    { titre: 'TypeScript pour développeurs', categorie: 'Langage', duree: '8h', places: 15 },
    { titre: 'API REST avec Node.js', categorie: 'Back-end', duree: '16h', places: 6 },
    { titre: 'Git et travail collaboratif', categorie: 'Outils', duree: '4h', places: 20 },
    { titre: 'Angular pour les débutants', categorie: 'Front-end', duree: '10h', places: 12 },
    { titre: 'Bases de données avec MongoDB', categorie: 'Base de données', duree: '14h', places: 10 },
  ];
  selectionner(c:Cours){
    this.coursActif=c;
    this.coursSelectionne.emit(c);
  }
  recherche =''
  tri: 'asc' | 'desc' = 'asc';
}
