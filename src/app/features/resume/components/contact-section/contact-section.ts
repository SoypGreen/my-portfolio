import { Component, inject, OnInit } from '@angular/core';
import { ResumeService } from '../../../../core/services/resume';

@Component({
  imports: [],
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
