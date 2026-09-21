import {
  Component,
  DestroyRef,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { LanguageService } from '../../shared/i18n/language';

type ProjectKey = 'animalactin' | 'wosana' | 'dp' | 'fruitfarm' | 'bookflix';

interface RawProject {
  key: ProjectKey;
  num: string;
  tags: string[];
  year: string;
  url: string;
  image?: string;
  imageMobile?: string;
  agency?: boolean;
}

interface Project extends RawProject {
  name: string;
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
  protected readonly i18n = inject(LanguageService);

  private ticking = false;

  private readonly rawProjects: RawProject[] = [
    {
      key: 'animalactin',
      num: '01',
      tags: ['WordPress', 'WooCommerce', 'ACF', 'Tailwind'],
      year: '2025',
      url: 'https://animalactin.shop/',
      image: '/assets/projects/animalactin.webp',
      imageMobile: '/assets/projects/animalactin_mobile.webp',
      agency: true,
    },
    {
      key: 'wosana',
      num: '02',
      tags: ['WordPress', 'ACF', 'Tailwind', 'Alpine.js'],
      year: '2026',
      url: 'https://achatea.pl/',
      image: '/assets/projects/wosana.webp',
      imageMobile: '/assets/projects/wosana_mobile.webp',
      agency: true,
    },
    {
      key: 'dp',
      num: '03',
      tags: ['Statamic', 'PHP', 'Tailwind', 'Alpine.js'],
      year: '2025–2026',
      url: 'https://dp.one-house.pl/',
      image: '/assets/projects/dp.webp',
      imageMobile: '/assets/projects/dp_mobile.webp',
      agency: true,
    },
    {
      key: 'fruitfarm',
      num: '04',
      tags: ['Next.js', 'Tailwind', 'Figma'],
      year: '2025',
      url: 'https://www.fruitfarm.com.pl/en',
      image: '/assets/projects/fruitfarm.webp',
      imageMobile: '/assets/projects/fruitfarm_mobile.webp',
    },
    {
      key: 'bookflix',
      num: '05',
      tags: ['Angular', '.NET', 'PostgreSQL', 'Docker'],
      year: '2026',
      url: 'https://github.com/kstoko23/bookflix',
      image: '/assets/projects/bookflix.webp',
      imageMobile: '/assets/projects/bookflix_mobile.webp',
    },
  ];

  readonly projectCount = this.rawProjects.length;
  readonly total = this.projectCount.toString().padStart(2, '0');

  readonly projects = computed<Project[]>(() => {
    const items = this.i18n.t().projects.items;
    return this.rawProjects.map((project) => ({
      ...project,
      ...items[project.key],
    }));
  });

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
    const sliceCount = this.projectCount;
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
