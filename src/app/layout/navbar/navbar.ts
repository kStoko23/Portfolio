import { Component, DestroyRef, inject, signal } from '@angular/core';
import { BurgerButton } from '../burger-button/burger-button';
import { NavMenu } from '../nav-menu/nav-menu';

@Component({
  selector: 'app-navbar',
  imports: [BurgerButton, NavMenu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly destroyRef = inject(DestroyRef);

  private static readonly HIDE_THRESHOLD_PX = 80;

  readonly isOpen = signal(false);
  readonly hidden = signal(false);
  readonly statusText = 'Available for work';
  readonly warsawTime = signal(this.formatWarsawTime());

  private lastScrollY = 0;
  private ticking = false;

  constructor() {
    const intervalId = setInterval(() => this.warsawTime.set(this.formatWarsawTime()), 1000 * 30);
    this.destroyRef.onDestroy(() => clearInterval(intervalId));

    this.lastScrollY = window.scrollY;
    const onScroll = () => {
      if (this.ticking) return;
      this.ticking = true;
      requestAnimationFrame(() => {
        this.updateVisibility();
        this.ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
  }

  toggleMenu(): void {
    this.isOpen.update((prev) => !prev);
  }

  closeMenu(): void {
    this.isOpen.set(false);
  }

  private updateVisibility(): void {
    const currentY = window.scrollY;
    const delta = currentY - this.lastScrollY;

    if (this.isOpen()) {
      this.hidden.set(false);
    } else if (currentY < Navbar.HIDE_THRESHOLD_PX) {
      this.hidden.set(false);
    } else if (delta > 0) {
      this.hidden.set(true);
    } else if (delta < 0) {
      this.hidden.set(false);
    }

    this.lastScrollY = currentY;
  }

  private formatWarsawTime(): string {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Warsaw',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(new Date());
    const hour = parts.find((p) => p.type === 'hour')?.value ?? '00';
    const minute = parts.find((p) => p.type === 'minute')?.value ?? '00';
    return `${hour}:${minute}`;
  }
}
