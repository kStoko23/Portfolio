import { AfterViewInit, Component, DestroyRef, ElementRef, inject, viewChild } from '@angular/core';

@Component({
  selector: 'app-cursor',
  imports: [],
  template: `
    <div
      #cursorEl
      class="hidden lg:block fixed top-0 left-0 z-50 pointer-events-none w-10 h-10 rounded-full border-3 border-current mix-blend-difference"
    ></div>
  `,
})
export class Cursor implements AfterViewInit {
  private readonly cursorEl = viewChild.required<ElementRef<HTMLDivElement>>('cursorEl');
  private readonly destroyRef = inject(DestroyRef);

  private readonly mouse = { x: 0, y: 0 };
  private readonly pos = { x: 0, y: 0 };
  private rafId = 0;

  ngAfterViewInit(): void {
    const onMouseMove = (e: MouseEvent) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const speed = 0.12;
    const el = this.cursorEl().nativeElement;

    const animate = () => {
      this.pos.x += (this.mouse.x - this.pos.x) * speed;
      this.pos.y += (this.mouse.y - this.pos.y) * speed;

      el.style.transform = `translate3d(${this.pos.x - 20}px, ${this.pos.y - 20}px, 0)`;

      this.rafId = requestAnimationFrame(animate);
    };

    this.rafId = requestAnimationFrame(animate);

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(this.rafId);
    });
  }
}
