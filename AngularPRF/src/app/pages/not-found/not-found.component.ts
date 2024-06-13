import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 class="text-9xl font-bold mb-4">404</h1>
      <p class="text-2xl mb-8">La page n'existe pas.</p>
      <a routerLink="/" class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">Go Home</a>
    </div>
  `,
  styles: [],
})
export class NotFoundComponent implements OnInit {
  code!: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.code = this.activatedRoute.snapshot.paramMap.get('code')!;
  }
}
