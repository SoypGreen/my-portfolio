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
  private resumeService = inject(ResumeService);

  public resumeData = signal<ResumeData | null>(null);

  ngOnInit(): void {
    this.resumeService.getResumeData().subscribe({
      next: (data) => {
        this.resumeData.set(data);
      },
      error: (err) => {
        console.error('Downloading error: ', err);
      }
    })
  }
}
