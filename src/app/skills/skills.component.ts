import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

interface SkillGroup {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  readonly groups: SkillGroup[] = [
    {
      title: 'Frontend & Frameworks',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'Tailwind CSS', 'RxJS', 'NG-ZORRO', 'Angular Material', 'NgRx', 'NGXS'],
    },
    {
      title: 'Tools & DevOps',
      skills: ['NX Monorepo', 'Git', 'CI/CD', 'Docker'],
    },
    {
      title: 'Programming & Other',
      skills: ['C / C++', 'Java', 'MS SQL Server', 'Networking'],
    },
  ];
}
