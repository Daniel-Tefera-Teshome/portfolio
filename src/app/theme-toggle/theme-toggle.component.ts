import { NgClass } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [NgClass],
  templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent {
  @Input() variant: 'fixed' | 'nav' = 'fixed';

  readonly themeService = inject(ThemeService);

  toggle(): void {
    this.themeService.toggle();
  }
}
