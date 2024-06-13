import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h1 class="text-3xl font-bold mb-4">Bonjour et bienvenue dans la salle du temps</h1>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent {}
