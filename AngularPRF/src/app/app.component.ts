import { Component, Renderer2 } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
<nav class="bg-gray-100 dark:bg-gray-800 p-4">
  <div class="container mx-auto flex justify-between items-center">
    <ul class="flex space-x-4">
      <li><a routerLink="/home" class="text-blue-500 dark:text-white hover:underline">Home</a></li>
      <li><a routerLink="/about" class="text-blue-500 dark:text-white hover:underline">About</a></li>
      <li><a routerLink="/counter" class="text-blue-500 dark:text-white hover:underline">Counter</a></li>
      <li><a routerLink="/chrono" class="text-blue-500 dark:text-white hover:underline">Chrono</a></li>

    </ul>
    <button (click)="toggleTheme()" class="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 p-2 rounded-full">
      <i class="fas" [class.fa-sun]="!isDarkMode" [class.fa-moon]="isDarkMode"></i>
    </button>
  </div>
</nav>

<main class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-4">
  <router-outlet></router-outlet>
</main>
  `,
  styles: [],
})
export class AppComponent {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.updateTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }

  updateTheme() {
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }
}
