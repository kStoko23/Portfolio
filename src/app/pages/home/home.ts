import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Projects } from '../../sections/projects/projects';
import { Skills } from '../../sections/skills/skills';
import { About } from '../../sections/about/about';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, Skills, About, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
