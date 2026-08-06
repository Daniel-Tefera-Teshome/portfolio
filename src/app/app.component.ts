import { Component, OnInit, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    CertificatesComponent,
    ProjectsComponent,
    ContactComponent,
    ThemeToggleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly themeService = inject(ThemeService);

  title = 'my-porfolio2';

  ngOnInit(): void {
    this.themeService.init();
  }
}
