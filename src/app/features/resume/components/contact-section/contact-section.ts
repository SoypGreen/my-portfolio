import { Component, inject, OnInit } from '@angular/core';
import { ResumeService } from '../../../../core/services/resume';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';

@Component({
  imports: [ScrollReveal],
  standalone: true,
  selector: 'app-contact-section',
  styleUrl: './contact-section.scss',
  templateUrl: './contact-section.html',
})
export class ContactSection implements OnInit{
  public resumeService = inject(ResumeService);

  ngOnInit(): void {
    this.resumeService.loadResumeData();
  }
}
