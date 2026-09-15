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
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML & CSS'],
    },
    {
      title: 'Backend',
      skills: ['.NET', 'C#', 'SQL', 'REST APIs'],
    },
    {
      title: 'Platform',
      skills: ['WordPress', 'WooCommerce'],
    },
    {
      title: 'Design',
      skills: ['Figma'],
    },
  ];
}
