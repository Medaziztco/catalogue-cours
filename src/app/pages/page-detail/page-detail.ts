import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cours } from '../../donnees/cours';
import { DetailCoursComponent } from '../../composants/detail-cours/detail-cours';
import { Catalogue } from '../../services/catalogue';

@Component({
  selector: 'app-page-detail',
  imports: [DetailCoursComponent, RouterLink],
  templateUrl: './page-detail.html',
  styleUrl: './page-detail.css'
})
export class PageDetail {
  private catalogue = inject(Catalogue);
  @Input() id = '';

  get cours(): Cours | undefined {
    return this.catalogue.trouver(Number(this.id));
  }
}
