import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chrono',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 class="text-4xl font-bold mb-4 text-center">Chronometre</h1>
        <div class="text-center mb-6">
          <p class="text-3xl mb-2">{{ minutes }}:{{ seconds | number: '2.0-0' }}</p>
          <p class="text-xl text-gray-500">{{ currentTime }}</p>
          <div *ngIf="intervalId" class="text-green-500">En avant...</div>
          <div *ngIf="!intervalId && (minutes > 0 || seconds > 0)" class="text-red-500">Stop</div>
        </div>
        <div class="space-x-2 flex justify-center">
          <button *ngIf="!intervalId" (click)="startTimer()" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">Start</button>
          <button *ngIf="intervalId" (click)="stopTimer()" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">Stop</button>
          <button (click)="resetTimer()" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Reset</button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ChronoComponent implements OnInit, OnDestroy {
  counter = 0;
  minutes = 0;
  seconds = 0;
  intervalId: any;
  currentTime: string | undefined;

  ngOnInit(): void {
    this.updateCurrentTime();
    setInterval(() => this.updateCurrentTime(), 1000);
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  startTimer(): void {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.seconds++;
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes++;
        }
      }, 1000);
    }
  }

  stopTimer(): void {
    this.clearTimer();
  }

  resetTimer(): void {
    this.stopTimer();
    this.minutes = 0;
    this.seconds = 0;
  }

  private clearTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private updateCurrentTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
}
