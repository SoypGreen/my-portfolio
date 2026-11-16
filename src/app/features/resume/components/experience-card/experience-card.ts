import { Component, input } from '@angular/core';
import { Experience } from '../../../../core/models/resume-data';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  styleUrl: './experience-card.scss',
  templateUrl: './experience-card.html',
})
export class ExperienceCard {
  public experience = input.required<Experience>();
}
