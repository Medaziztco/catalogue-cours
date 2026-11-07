import { Component,Output,EventEmitter,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{FiltreCoursPipe} from '../../pipes/filtre-cours-pipe';
import{TriCoursPipe}from'../../pipes/tri-cours-pipe';
import { UpperCasePipe }from '@angular/common';
import{ Cours} from '../../donnees/cours';
import { RouterLink } from '@angular/router';
import { Catalogue } from '../../services/catalogue';
@Component({
  imports: [FormsModule,FiltreCoursPipe,TriCoursPipe,UpperCasePipe,RouterLink],
  selector: 'app-liste-cours',
  styleUrl: './liste-cours.css',
  templateUrl: './liste-cours.html',
})
export class ListeCoursComponent {
  private catalogue = inject(Catalogue);
cours: Cours[] = this.catalogue.lister();
  @Output() coursSelectionne=new EventEmitter<Cours>();
  coursActif:Cours | null=null;
  selectionner(c:Cours){
    this.coursActif=c;
    this.coursSelectionne.emit(c);
  }
  recherche =''
  tri: 'asc' | 'desc' = 'asc';
}
