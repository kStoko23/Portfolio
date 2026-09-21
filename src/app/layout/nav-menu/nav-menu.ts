import { Component, inject, input, output } from '@angular/core';
import { LanguageService } from '../../shared/i18n/language';

@Component({
  selector: 'app-nav-menu',
  imports: [],
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.css',
})
export class NavMenu {
  protected readonly i18n = inject(LanguageService);

  readonly isOpen = input(false);
  readonly linkClick = output<void>();
}
