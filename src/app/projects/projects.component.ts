import { Component, signal } from '@angular/core';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
  image?: string;
  images?: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly showAll = signal(false);

  readonly featuredProjects: ProjectItem[] = [
    {
      title: 'Prana Events Platform',
      description: 'Angular event management system with dashboard, event listing, filtering, and admin workflows for Prana Events.',
      tags: ['Angular', 'TypeScript', 'REST API'],
      link: 'https://pranaevents.net/',
      linkLabel: 'Visit Website',
      image: 'assets/projects/prana-events.png',
      featured: true,
    },
    {
      title: 'Procurement Information Report',
      description: 'Enterprise EGP reporting module with procurement statistics, interactive charts, sidebar filters, and budget analytics dashboards.',
      tags: ['Angular', 'NG-ZORRO', 'Data Visualization'],
      link: 'https://training.egp.gov.et/egp/records/procurement-information/portal',
      linkLabel: 'View Project',
      images: [
        'assets/projects/procurement-report.png',
        'assets/projects/procurement-statistics.png',
      ],
      featured: true,
    },
    {
      title: 'Organizational Structure — Perago',
      description: 'Enterprise Angular module modeling organizational hierarchy as part of Perago Systems.',
      tags: ['Angular', 'Enterprise'],
      link: 'https://github.com/Daniel-Tefera-Teshome/organizational-structure',
      linkLabel: 'GitHub',
      featured: true,
    },
    {
      title: 'Cryptography Research App',
      description: 'MSc thesis — hybrid encryption algorithm combining Modified Caesar and Vigenère cipher without key repetition.',
      tags: ['MATLAB', 'Cryptography', 'Research'],
      link: 'https://github.com/Daniel-Tefera-Teshome/Cryptography',
      linkLabel: 'GitHub',
      featured: true,
    },
  ];

  readonly otherProjects: ProjectItem[] = [
    {
      title: 'HR System — Woldia University',
      description: 'BSc thesis — automated human resource management system built with PHP.',
      tags: ['PHP', 'MySQL'],
      link: 'https://github.com/Daniel-Tefera-Teshome/WLDU-HR-System',
      linkLabel: 'GitHub',
    },
    {
      title: 'Cost Sharing System',
      description: 'C++ application for managing student cost sharing efficiently.',
      tags: ['C++'],
      link: 'https://github.com/Daniel-Tefera-Teshome/cost-sharing-system',
      linkLabel: 'GitHub',
    },
    {
      title: 'Car Plate Recognition',
      description: 'MATLAB-based system for license plate detection and extraction.',
      tags: ['MATLAB', 'AI'],
      link: 'https://github.com/Daniel-Tefera-Teshome/car-plate-recognition',
      linkLabel: 'GitHub',
    },
    {
      title: 'Lounge Management System',
      description: 'PHP application for managing university lounge facilities.',
      tags: ['PHP'],
      link: 'https://github.com/Daniel-Tefera-Teshome/Lounge-management-system-for-wldu',
      linkLabel: 'GitHub',
    },
  ];

  toggleShowAll(): void {
    this.showAll.update((value) => !value);
  }
}
