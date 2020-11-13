import { Component } from '@angular/core';
import { AdviceService } from 'src/app/services/advice.service';
import { CursorTrackerService } from 'src/app/services/cursor-tracker.service';

@Component({
  selector: 'met-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent {
  public position = {
    x: 0,
    y: 0
  };

  constructor(public adviceService: AdviceService, public tracker: CursorTrackerService) {
    tracker.position.subscribe(event => this.position = { x: event.pageX, y: event.pageY });
  }

}
