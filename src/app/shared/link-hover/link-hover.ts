import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-hover',
  imports: [RouterLink],
  templateUrl: './link-hover.html',
  styleUrl: './link-hover.css',
})
export class LinkHover {
  readonly href = input.required<string>();
  readonly className = input('');
}
