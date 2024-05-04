import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appThreeDEffect]',
  standalone: true
})
export class ThreeDEffectDirective {

  private imgElement: HTMLImageElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.imgElement = this.el.nativeElement.querySelector('img');
  }

  ngAfterViewInit() {
    this.imgElement = this.el.nativeElement.querySelector('img');
    if (!this.imgElement) {
      console.error('ThreeDEffectDirective must be used on an element containing an <img>.');
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.imgElement, 'transition', 'transform 0.5s ease-out');
    this.renderer.setStyle(this.imgElement, 'transform-style', 'preserve-3d');
    this.renderer.setStyle(this.imgElement, 'transform', 'scale(1.1)'); // Ensure scale is applied here
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) / 20;
    const y = -(event.clientY - rect.top - rect.height / 2) / 20;
    this.renderer.setStyle(this.imgElement, 'transform', `scale(1.1) rotateY(${x}deg) rotateX(${y}deg)`); // Apply both scale and rotate to the image

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.imgElement, 'transform', 'scale(1) rotateY(0deg) rotateX(0deg)'); // Reset the scale as well as rotation
  }
}
