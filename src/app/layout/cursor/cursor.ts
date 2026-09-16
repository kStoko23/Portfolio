import { AfterViewInit, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-cursor',
  imports: [],
  template: `
    <div
      #cursorEl
      class="hidden lg:flex fixed top-0 left-0 z-50 pointer-events-none items-center justify-center rounded-full mix-blend-difference transition-[width,height,background-color] duration-200 ease-out"
      [class]="hovering() ? 'w-28 h-28 bg-white' : 'w-10 h-10 border-3 border-current'"
    >
      @if (hovering()) {
        <span class="font-mono text-xs font-medium uppercase tracking-wide text-black">
          Visit ↗
        </span>
      }
    </div>
  `,
})
export class Cursor implements AfterViewInit {
  private readonly cursorEl = viewChild.required<ElementRef<HTMLDivElement>>('cursorEl');
  private readonly destroyRef = inject(DestroyRef);

  readonly hovering = signal(false);

  private readonly mouse = { x: 0, y: 0 };
  private readonly pos = { x: 0, y: 0 };
  private rafId = 0;

  ngAfterViewInit(): void {
    const onMouseMove = (e: MouseEvent) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    };
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest?.('[data-cursor-visit]')) {
        this.hovering.set(true);
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest?.('[data-cursor-visit]')) {
        this.hovering.set(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    const speed = 0.12;
    const el = this.cursorEl().nativeElement;

    const animate = () => {
      this.pos.x += (this.mouse.x - this.pos.x) * speed;
      this.pos.y += (this.mouse.y - this.pos.y) * speed;

      el.style.transform = `translate3d(${this.pos.x}px, ${this.pos.y}px, 0) translate(-50%, -50%)`;

      this.rafId = requestAnimationFrame(animate);
    };

    this.rafId = requestAnimationFrame(animate);

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(this.rafId);
    });
  }
}
