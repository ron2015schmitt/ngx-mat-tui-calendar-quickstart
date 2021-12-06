import { Component } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Angular Material TOAST UI Calendar Quickstart";

  constructor(private overlay: Overlay) {
    this.overlay.create();
  }

}

