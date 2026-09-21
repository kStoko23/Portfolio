import { Injectable, computed, effect, signal } from '@angular/core';
import { Lang, translations } from './translations';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.detectInitialLang());
  readonly t = computed(() => translations[this.lang()]);

  constructor() {
    effect(() => {
      document.documentElement.lang = this.lang();
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage unavailable, preference won't persist
    }
  }

  private detectInitialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'pl') return saved;
    } catch {
      // localStorage unavailable, preference won't persist
    }

    const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
    const isPolish = browserLangs.some((locale) => locale.toLowerCase().startsWith('pl'));
    return isPolish ? 'pl' : 'en';
  }
}
