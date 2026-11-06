import { Component, signal } from '@angular/core';
import { HeroSection } from './features/resume/components/hero-section/hero-section';

@Component({
  imports: [HeroSection],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-portfolio');
}