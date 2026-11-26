import { Component, inject, OnInit } from '@angular/core';
import { ResumeService } from '../../../../core/services/resume';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer implements OnInit {
  public resumeService = inject(ResumeService);

  public currentYear = new Date().getFullYear();

  ngOnInit(): void {
    this.resumeService.loadResumeData();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
