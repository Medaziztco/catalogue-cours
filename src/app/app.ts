import { Component, inject } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { Session } from './services/session';
import { Inscriptions } from './services/inscriptions';

@Component({
  selector: 'app-root',
  imports: [EnTete, PiedPage, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  session = inject(Session);
  inscriptions = inject(Inscriptions);
  private router = inject(Router);

  deconnecter() {
    this.session.deconnecter();
    this.router.navigateByUrl('/');
  }
}