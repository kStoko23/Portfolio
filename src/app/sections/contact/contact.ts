import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly email = 'j.stokowskii23@gmail.com';
  readonly statusText = 'Available for work';
  readonly copied = signal(false);

  private resetTimeoutId: ReturnType<typeof setTimeout> | undefined;

  async copyEmail(event: Event): Promise<void> {
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(this.email);
      this.copied.set(true);
      clearTimeout(this.resetTimeoutId);
      this.resetTimeoutId = setTimeout(() => this.copied.set(false), 1200);
    } catch {
      // clipboard access unavailable — silently ignore, link still shows the address
    }
  }
}
