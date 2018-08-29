import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[elementCustomColor]'
})
export class CustomColorDirective {

  private isHovering: boolean;

  constructor(private el: ElementRef,
              private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'color', 'red');
    renderer.setElementStyle(el.nativeElement, 'background-color', '#f5f5f5');
              }
  @HostListener('mouseover') onMouseOver() {
    this.isHovering = true;
    if (this.isHovering) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', 'blue');
    }
  }

  @HostListener('mouseout') onMouseOut() {
    this.isHovering = false;
    if (this.isHovering === false) {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red');
    }
  }
}
