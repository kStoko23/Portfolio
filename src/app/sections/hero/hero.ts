import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly ctaFillX = signal(0);
  readonly ctaFillY = signal(0);

  onCtaPointerCross(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.ctaFillX.set(event.clientX - rect.left);
    this.ctaFillY.set(event.clientY - rect.top);
  }
}
