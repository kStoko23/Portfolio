import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/i18n/language';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  template: `
    <div class="flex items-center gap-1.5 font-mono text-sm tracking-wide">
      <button
        type="button"
        (click)="i18n.setLang('en')"
        [attr.aria-current]="i18n.lang() === 'en' ? 'true' : null"
        [class]="i18n.lang() === 'en' ? 'text-accent' : 'text-[#8e8b86] hover:text-white'"
        class="uppercase transition-colors duration-200"
      >
        EN
      </button>
      <span class="text-[#57565b]">/</span>
      <button
        type="button"
        (click)="i18n.setLang('pl')"
        [attr.aria-current]="i18n.lang() === 'pl' ? 'true' : null"
        [class]="i18n.lang() === 'pl' ? 'text-accent' : 'text-[#8e8b86] hover:text-white'"
        class="uppercase transition-colors duration-200"
      >
        PL
      </button>
    </div>
  `,
})
export class LanguageSwitcher {
  protected readonly i18n = inject(LanguageService);
}
