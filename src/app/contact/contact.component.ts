import { Component, signal } from '@angular/core';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly contactLinks: ContactLink[] = [
    { label: 'danieltefera14@gmail.com', href: 'mailto:danieltefera14@gmail.com' },
    { label: '(+251) 919 319 791', href: 'tel:+251919319791' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-tefera0/', external: true },
    { label: 'GitHub', href: 'https://github.com/Daniel-Tefera-Teshome', external: true },
    { label: 'Addis Ababa, Ethiopia', href: 'https://www.google.com/maps?q=Addis+Ababa,+Ethiopia', external: true },
  ];

  readonly submitted = signal(false);

  onSend(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
    window.setTimeout(() => this.submitted.set(false), 5000);
  }
}
