import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../shared/section-header/section-header.component';
import { ScrollRevealDirective } from '../directives/scroll-reveal.directive';

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  gpa: string;
  url: string;
  thesis: string;
  details: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './education.component.html',
})
export class EducationComponent {
  readonly education: EducationItem[] = [
    {
      degree: 'MSc in Computer Networks and Security',
      school: 'Debre Berhan University',
      period: 'Oct 2020 – Jul 2023',
      gpa: '3.93',
      url: 'https://www.dbu.edu.et',
      thesis: 'An Enhanced Hybrid Algorithm of Modified Caesar and Vigenere Cipher without Key Repetition',
      details: 'Computer Networking, Cryptography, Network Security',
    },
    {
      degree: 'BSc in Computer Science',
      school: 'Woldia University',
      period: 'Oct 2015 – Jul 2019',
      gpa: '3.83',
      url: 'https://www.wldu.edu.et',
      thesis: 'Automated Human Resource Management for Woldia University',
      details: 'Software Engineering, Web Development, Networking',
    },
  ];
}
