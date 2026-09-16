import { Component } from '@angular/core';

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
  readonly groups: SkillGroup[] = [
    {
      title: 'Languages & Tools',
      skills: [
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
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
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
      ],
    },
    {
      title: 'Core CS Concepts',
      skills: [
        'Data Structures & Algorithms',
        'Databases',
        'OOP',
        'Operating Systems',
        'System Design',
        'REST API Design',
        'JWT Authentication',
      ],
    },
  ];
}
