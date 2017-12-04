import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import * as _ from 'underscore';
import 'rxjs/add/operator/map';

@Injectable()
export class StartPageService {

  constructor(private http: Http) {
  }

  private modals: any[] = [];

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string) {
    // remove modal from array of active modals
    let modalToRemove = _.findWhere(this.modals, { id: id });
    this.modals = _.without(this.modals, modalToRemove);
  }

  open(id: string) {
    // open modal specified by id
    let modal = _.findWhere(this.modals, { id: id });
    modal.open();
  }

  close(id: string) {
    // close modal specified by id
    let modal = _.find(this.modals, { id: id });
    modal.close();
  }

  handleError(error: Response): Observable<any> {
    const errorInfo: any = error.json() || {errorCode: 'unknown_error'};
    return Observable.throw(errorInfo);
  }
}
