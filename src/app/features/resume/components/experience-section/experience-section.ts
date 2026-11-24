import { Component, inject, OnInit, signal } from '@angular/core';
import { ExperienceCard } from '../experience-card/experience-card';
import { ResumeService } from '../../../../core/services/resume';
import { Experience } from '../../../../core/models/resume-data';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [ExperienceCard],
  styleUrl: './experience-section.scss',
  templateUrl: './experience-section.html',
})

export class ExperienceSection implements OnInit{
  private resumeService = inject(ResumeService);

  ngOnInit(): void {
    this.resumeService.loadResumeData();
  }
}
