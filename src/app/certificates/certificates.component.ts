import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

interface CertificateItem {
  title: string;
  date: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './certificates.component.html',
})
export class CertificatesComponent {
  readonly certificates: CertificateItem[] = [
    {
      title: 'Introduction to DevOps',
      date: 'May 2024',
      description: 'Docker and containerization fundamentals for modern deployment workflows.',
      url: 'https://olympus.mygreatlearning.com/courses/38652/certificate',
    },
    {
      title: 'Programming with JavaScript',
      date: 'May 2024',
      description: 'JavaScript fundamentals, async programming, ES6+ features, and API integration.',
      url: 'https://www.coursera.org/account/accomplishments/records/DZGVZTRCVF5V',
    },
    {
      title: 'Advanced Angular 7',
      date: 'Oct 2023',
      description: 'RxJS, routing, lazy loading, NgRx, reactive forms, and Angular Material.',
      url: 'https://olympus.mygreatlearning.com/courses/40969/certificate',
    },
  ];
}
