import { Component, Renderer2 } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
<nav class="bg-gray-100 dark:bg-gray-800 p-4 shadow-lg">
  <div class="container mx-auto flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <a routerLink="/home" class="text-xl font-semibold text-blue-500 dark:text-white">Angular</a>
      <ul class="hidden md:flex space-x-8">
        <li><a routerLink="/about" class="text-blue-500 dark:text-white hover:underline">About</a></li>
        <li><a routerLink="/counter" class="text-blue-500 dark:text-white hover:underline">Counter</a></li>
        <li><a routerLink="/chrono" class="text-blue-500 dark:text-white hover:underline">Chrono</a></li>
      </ul>
    </div>
    <div class="flex items-center space-x-4">
      <button (click)="toggleTheme()" class="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 p-2 rounded-full">
        <i class="fas" [class.fa-sun]="!isDarkMode" [class.fa-moon]="isDarkMode"></i>
      </button>
      <button class="md:hidden flex items-center p-2">
        <i class="fas fa-bars text-gray-800 dark:text-gray-200"></i>
      </button>
    </div>
  </div>
  <div class="md:hidden mt-4">
    <ul class="space-y-4">
      <li><a routerLink="/home" class="text-blue-500 dark:text-white hover:underline">Home</a></li>
      <li><a routerLink="/about" class="text-blue-500 dark:text-white hover:underline">About</a></li>
      <li><a routerLink="/counter" class="text-blue-500 dark:text-white hover:underline">Counter</a></li>
      <li><a routerLink="/chrono" class="text-blue-500 dark:text-white hover:underline">Chrono</a></li>
    </ul>
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
