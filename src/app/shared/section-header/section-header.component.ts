import { Component, Input } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './section-header.component.html',
})
export class SectionHeaderComponent {
  @Input({ required: true }) eyebrow!: string;
  @Input({ required: true }) title!: string;
  @Input() subtitle = '';
}
