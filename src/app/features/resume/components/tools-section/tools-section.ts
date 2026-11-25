import { Component, inject, OnInit } from '@angular/core';
import { ResumeService } from '../../../../core/services/resume';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';

@Component({
  imports: [ScrollReveal],
  selector: 'app-tools-section',
  standalone: true,
  styleUrl: './tools-section.scss',
  templateUrl: './tools-section.html',
})
export class ToolsSection implements OnInit {
  public resumeService = inject(ResumeService);

  ngOnInit(): void {
    this.resumeService.loadResumeData();
  }
}
