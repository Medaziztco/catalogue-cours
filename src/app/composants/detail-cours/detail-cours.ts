import { Component,Input } from '@angular/core';
import{ Cours , COURS } from '../../donnees/cours';


@Component({
  imports: [],
  selector: 'app-detail-cours',
  styleUrl: './detail-cours.css',
  templateUrl: './detail-cours.html',
})
export class DetailCoursComponent {
  @Input() cours: Cours | null = null;
}
