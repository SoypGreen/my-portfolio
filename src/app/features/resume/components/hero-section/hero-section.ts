import { Component, inject, OnInit, signal } from '@angular/core';
import { ResumeService } from '../../../../core/services/resume';
import { ResumeData } from '../../../../core/models/resume-data';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  styleUrl: './hero-section.scss',
  templateUrl: './hero-section.html',
})
export class HeroSection implements OnInit {
  // form html
  public resumeService = inject(ResumeService);

  ngOnInit(): void {
    // give service task to download data
    this.resumeService.loadResumeData();
  }
}
