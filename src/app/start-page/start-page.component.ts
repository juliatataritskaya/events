import {Component, TemplateRef} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService) {} // {2}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
}
