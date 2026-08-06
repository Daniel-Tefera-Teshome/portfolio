import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'portfolio-theme';
  private readonly themeSignal = signal<Theme>('light');

  readonly theme = this.themeSignal.asReadonly();
  readonly isDark = computed(() => this.themeSignal() === 'dark');

  init(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const saved = localStorage.getItem(this.storageKey) as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.apply(saved ?? (prefersDark ? 'dark' : 'light'), false);
  }

  toggle(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.apply(this.isDark() ? 'light' : 'dark');
  }

  private apply(theme: Theme, persist = true): void {
    this.themeSignal.set(theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');

    if (persist) {
      localStorage.setItem(this.storageKey, theme);
    }
  }
}
