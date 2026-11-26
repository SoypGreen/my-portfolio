import { Directive, ElementRef, inject, OnDestroy, OnInit, Renderer2, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollReveal implements OnInit, OnDestroy{
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);
  private observer!: IntersectionObserver;

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
     this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');

     this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.removeClass(this.el.nativeElement, 'reveal-hidden');
          this.renderer.addClass(this.el.nativeElement, 'reveal-visible');
          this.observer.unobserve(this.el.nativeElement);
        }
      });
     }, {
      threshold: 0.2
     });

     this.observer.observe(this.el.nativeElement);
  }
}
  ngOnDestroy(): void {
    if(this.observer){
      this.observer.disconnect();
    }
  }
}
