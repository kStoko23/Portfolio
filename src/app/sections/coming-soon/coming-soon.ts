import { Component } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  imports: [],
  template: `
    <div class="flex h-screen w-screen items-center justify-center font-mono">
      <h1 class="text-4xl font-bold">
        <span>Coming Soon</span>
        <span
          class="inline-block w-[0.5em] h-[0.9em] bg-current align-middle ml-1 animate-blink"
        ></span>
      </h1>
    </div>
  `,
})
export class ComingSoon {}
