import { Component, input } from '@angular/core';

@Component({
  selector: 'app-burger-button',
  imports: [],
  templateUrl: './burger-button.html',
  styleUrl: './burger-button.css',
})
export class BurgerButton {
  readonly isOpen = input(false);
}
