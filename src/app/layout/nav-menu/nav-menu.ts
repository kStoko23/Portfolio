import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  imports: [],
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.css',
})
export class NavMenu {
  readonly isOpen = input(false);
  readonly linkClick = output<void>();
}
