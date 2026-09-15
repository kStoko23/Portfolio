import {
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';

interface Project {
  num: string;
  name: string;
  tags: string[];
  year: string;
  description: string;
  mediaLabel: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly destroyRef = inject(DestroyRef);
  private readonly sectionEl = viewChild.required<ElementRef<HTMLElement>>('sectionEl');

  private ticking = false;

  readonly projects: Project[] = [
    {
      num: '01',
      name: 'Kanban for field crews',
      tags: ['Angular', '.NET', 'SignalR'],
      year: '2026',
      description:
        'Real-time job board replacing a 3,000-row spreadsheet for a logistics operator.',
      mediaLabel: 'Dashboard shot',
    },
    {
      num: '02',
      name: 'Insurance quote engine',
      tags: ['.NET', 'Azure', 'SQL'],
      year: '2025',
      description: 'Rules engine and broker portal; quotes went from two days to ninety seconds.',
      mediaLabel: 'Product shot',
    },
    {
      num: '03',
      name: 'WooCommerce replatform',
      tags: ['WordPress', 'WooCommerce'],
      year: '2025',
      description: 'Migrated 4k SKUs, rebuilt checkout, cut load time by more than half.',
      mediaLabel: 'Storefront shot',
    },
    {
      num: '04',
      name: 'Clinic booking system',
      tags: ['Angular', 'C#', 'Stripe'],
      year: '2024',
      description: 'Multi-location scheduling with staff rotas and automated reminders.',
      mediaLabel: 'Mobile shot',
    },
    {
      num: '05',
      name: 'Design-to-code system',
      tags: ['Figma', 'TypeScript', 'CSS'],
      year: '2024',
      description: "A component library two teams still build every new screen from.",
      mediaLabel: 'Component shot',
    },
  ];

  readonly total = this.projects.length.toString().padStart(2, '0');
  readonly activeIndex = signal(0);
  readonly contentOpacity = signal(1);

  private static readonly FADE_ZONE = 0.15;

  constructor() {
    const onScroll = () => {
      if (this.ticking) return;
      this.ticking = true;
      requestAnimationFrame(() => {
        this.updateActiveIndex();
        this.ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
  }

  private updateActiveIndex(): void {
    const rect = this.sectionEl().nativeElement.getBoundingClientRect();
    const pinnable = rect.height - window.innerHeight;
    if (pinnable <= 0) {
      this.activeIndex.set(0);
      this.contentOpacity.set(1);
      return;
    }

    const progressed = Math.min(Math.max(-rect.top, 0), pinnable);
    const sliceCount = this.projects.length;
    const slice = pinnable / sliceCount;
    const index = Math.min(sliceCount - 1, Math.floor(progressed / slice));
    const localProgress = (progressed - index * slice) / slice;

    let opacity = 1;
    if (index > 0 && localProgress < Projects.FADE_ZONE) {
      opacity = localProgress / Projects.FADE_ZONE;
    } else if (index < sliceCount - 1 && localProgress > 1 - Projects.FADE_ZONE) {
      opacity = (1 - localProgress) / Projects.FADE_ZONE;
    }

    this.activeIndex.set(index);
    this.contentOpacity.set(Math.min(1, Math.max(0, opacity)));
  }
}
