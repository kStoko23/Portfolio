import { Component, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Cursor } from './layout/cursor/cursor';
import { ComingSoon } from './sections/coming-soon/coming-soon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Cursor, ComingSoon],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly isDevelopment = isDevMode();
}
