import { Component, signal } from '@angular/core';
import { HeroSection } from './features/resume/components/hero-section/hero-section';
import { ExperienceSection } from './features/resume/components/experience-section/experience-section';

@Component({
  imports: [HeroSection, ExperienceSection],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-portfolio');
}