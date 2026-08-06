import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

interface Recommendation {
  name: string;
  title: string;
  date: string;
  context: string;
  quote: string;
  linkedin: string;
}

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './recommendations.component.html',
})
export class RecommendationsComponent {
  readonly recommendations: Recommendation[] = [
    {
      name: 'Aemiro Mekete',
      title: 'Lead Software Engineer | Lead Platform Engineer',
      date: 'August 2025',
      context: 'Worked with Daniel on the same team at Perago Information Systems — EGP project',
      quote:
        'Daniel is an exceptional frontend developer. He understands problems quickly and implements solutions effectively. He always writes clean, efficient code and pays attention to detail. Daniel also works very well with others — he communicates, supports his teammates, and helps create a positive work environment. I truly enjoyed working with him and recommend him for any frontend development role.',
      linkedin: 'https://www.linkedin.com/in/aemiro/',
    },
    {
      name: 'Amare Abewa',
      title: 'Lead Developer',
      date: 'August 2025',
      context: 'Worked with Daniel on the same team',
      quote:
        'Daniel is a highly skilled and dependable Frontend Developer with deep expertise in Angular. His ability to turn complex requirements into clean, responsive, and user-friendly interfaces is truly impressive. He writes well-structured, maintainable code, and consistently demonstrates strong attention to detail and performance optimization. Beyond his technical capabilities, he is a proactive team player who communicates clearly, adapts quickly, and always brings a positive, solution-oriented mindset to the table.',
      linkedin: 'https://www.linkedin.com/in/amare-abewa-662716158/',
    },
  ];
}
