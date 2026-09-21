import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../shared/i18n/language';

const LANGUAGES_TOOLS = [
  'TypeScript',
  'JavaScript',
  'C#',
  'PHP',
  'PostgreSQL',
  'HTML & CSS',
  'Git',
  'Docker',
  'Nginx',
  'GitHub Actions',
  'Linux',
  'Bash',
  'Figma',
];

const FRAMEWORKS_LIBRARIES = [
  'Angular',
  '.NET',
  'Entity Framework',
  'XUnit',
  'Tailwind CSS',
  'Alpine.js',
  'Next.js',
  'GSAP',
  'WordPress',
  'WooCommerce',
  'ACF',
  'Statamic',
];

interface SkillGroup {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly i18n = inject(LanguageService);

  readonly groups = computed<SkillGroup[]>(() => {
    const t = this.i18n.t().skills;
    return [
      { title: t.groupTitles.tools, skills: LANGUAGES_TOOLS },
      { title: t.groupTitles.frameworks, skills: FRAMEWORKS_LIBRARIES },
      { title: t.groupTitles.concepts, skills: t.concepts },
    ];
  });
}
