import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Viaja X Colombia</h1>

    <nav>
      <a routerLink="/">Inicio</a> |
      <a routerLink="/destinos">Destinos</a> |
      <a routerLink="/contacto">Contacto</a>
    </nav>

    <hr>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}