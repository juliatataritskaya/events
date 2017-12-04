import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {

  constructor() {
  }

  openModal(button) {
    $('#' + button).modal();
  }

}
