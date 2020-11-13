import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CursorTrackerService } from 'src/app/services/cursor-tracker.service';

@Component({
  selector: 'met-eyes',
  templateUrl: './eyes.component.html',
  styleUrls: ['./eyes.component.css']
})
export class EyesComponent {
  @ViewChild('eyes') eyes: ElementRef;

  constructor(private renderer: Renderer2, private tracker: CursorTrackerService) {
    tracker.position.subscribe(event => this.updateEyes(event.pageX, event.pageY));
  }

  private updateEyes(pageX: number, pageY: number): void {
    if (!this.eyes) {
      return;
    }

    const eyes: HTMLCollection = this.eyes.nativeElement.children;
    for (let i = 0; i < eyes.length; i++) {
      const eye = eyes.item(i);
      const rect = eye.getBoundingClientRect();
      const x = (rect.left) + (rect.width / 2);
      const y = (rect.top) + (rect.height / 2);
      const rad = Math.PI - Math.atan2(pageX - x, pageY - y);
      ['', '-webkit-', '-moz-', '-o-', '-ms-'].forEach(prefix => this.renderer.setStyle(eye, prefix + 'transform', `rotate(${rad}rad)`));
    }
  }

}
