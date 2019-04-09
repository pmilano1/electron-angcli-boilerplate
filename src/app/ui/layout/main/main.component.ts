import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="content-container">
      <div class="content-area">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
