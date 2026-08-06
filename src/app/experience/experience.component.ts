import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  url: string;
  summary: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  readonly experiences: ExperienceItem[] = [
    {
      role: 'Senior Frontend Developer',
      company: 'Prana Events',
      period: 'Nov 2023 – Present',
      location: 'Addis Ababa, Ethiopia',
      url: 'https://pranaevents.net/',
      summary: 'Develop and maintain Angular web applications for event management platforms.',
      highlights: [
        'Built responsive user interfaces with modern UI libraries',
        'Integrated REST APIs and collaborated with cross-functional teams',
        'Tested, debugged, and optimized application performance',
      ],
    },
    {
      role: 'Frontend Web Developer',
      company: 'Perago Information System PLC',
      period: 'Jun 2022 – Present',
      location: 'Addis Ababa, Ethiopia',
      url: 'http://peragosystems.com/home',
      summary: 'Angular developer on enterprise information systems in a production environment.',
      highlights: [
        'Delivered new features to existing enterprise applications',
        'Resolved production bugs and improved system stability',
        'Worked with NG-ZORRO, Tailwind CSS, and REST APIs',
      ],
    },
    {
      role: 'University Lecturer',
      company: 'Woldia University',
      period: 'Sep 2019 – Jul 2022',
      location: 'Woldia, Ethiopia',
      url: 'https://www.wldu.edu.et',
      summary: 'Taught and mentored Computer Science students while building web applications.',
      highlights: [
        'Delivered lectures in programming and web development',
        'Guided students through academic projects and research',
        'Developed web applications for university use',
      ],
    },
  ];
}
