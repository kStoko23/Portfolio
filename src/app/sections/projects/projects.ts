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
  url: string;
  image?: string;
  agency?: boolean;
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
      name: 'Animalactin shop & brand site',
      tags: ['WordPress', 'WooCommerce', 'ACF', 'Tailwind'],
      year: '2025',
      description:
      'Storefront and companion brand site (animalactin.eu) for a pet supplement manufacturer, sharing one custom ACF block system across both.',
      mediaLabel: 'Storefront preview',
      url: 'https://animalactin.shop/',
      image: '/assets/projects/animalactin.webp',
      agency: true,
    },
    {
      num: '02',
      name: 'Acha! product site',
      tags: ['WordPress', 'ACF', 'Tailwind', 'Alpine.js'],
      year: '2026',
      description:
        'Product landing page for a ready-to-drink green tea brand, built on a custom ACF block system for fast content updates.',
      mediaLabel: 'Landing page preview',
      url: 'https://achatea.pl/',
      image: '/assets/projects/wosana.webp',
      agency: true,
    },
    {
      num: '03',
      name: 'ONE House digital production',
      tags: ['Statamic', 'PHP', 'Tailwind', 'Alpine.js'],
      year: '2025–2026',
      description:
        'Service site for a digital production team inside a national marketing agency, presenting their process and case studies.',
      mediaLabel: 'Agency site preview',
      url: 'https://dp.one-house.pl/',
      image: '/assets/projects/dp.webp',
      agency: true,
    },
    {
      num: '04',
      name: 'Fruitfarm',
      tags: ['Next.js', 'Tailwind', 'Figma'],
      year: '2025',
      description:
        'Bilingual site for a fruit exporter, presenting certifications and export capacity to wholesale buyers across Europe and Asia.',
      mediaLabel: 'Export site preview',
      url: 'https://www.fruitfarm.com.pl/en',
      image: '/assets/projects/fruitfarm.webp',
    },
    {
      num: '05',
      name: 'BookFlix',
      tags: ['Angular', '.NET', 'PostgreSQL', 'Docker'],
      year: '2026',
      description:
        'A Netflix-styled personal library app proving out fullstack range beyond WordPress — JWT auth, a tested REST API, fully Dockerized.',
      mediaLabel: 'App preview',
      url: 'https://github.com/kstoko23/bookflix',
      image: '/assets/projects/bookflix.webp',
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
