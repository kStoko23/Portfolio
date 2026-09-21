import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/i18n/language';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly i18n = inject(LanguageService);
}
