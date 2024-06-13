import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h1 class="text-3xl font-bold mb-4">Counter</h1>
        <p class="mb-4 text-xl"> {{ counter }}</p>
        <div class="flex justify-center space-x-4 mb-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded" (click)="decrement()">-</button>
          <button class="bg-green-500 text-white px-4 py-2 rounded" (click)="increment()">+</button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  counter = 0;

  ngOnInit(): void {}

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }
}
