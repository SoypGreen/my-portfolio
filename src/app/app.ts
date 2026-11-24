import { Component, signal } from '@angular/core';
import { HeroSection } from './features/resume/components/hero-section/hero-section';
import { ExperienceSection } from './features/resume/components/experience-section/experience-section';
import { ToolsSection } from './features/resume/components/tools-section/tools-section';
import { ContactSection } from './features/resume/components/contact-section/contact-section';

@Component({
  imports: [HeroSection, ExperienceSection, ToolsSection, ContactSection],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-portfolio');
}