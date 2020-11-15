import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[metBackgroundColorRandomizer]'
})
export class BackgroundColorRandomizerDirective {
  static randomizeColor(): string {
    return '#' + ('000000' + Math.floor(Math.random() * 16777216).toString(16)).substr(-6);
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  @HostListener('click') onClick(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', BackgroundColorRandomizerDirective.randomizeColor());
  }
}
