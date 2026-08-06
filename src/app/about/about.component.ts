import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly strengths = [
    'Problem Solving',
    'Clean Architecture',
    'Team Collaboration',
    'Performance Optimization',
  ];
}
