import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomModal1Service {

  constructor(private http: Http) {
  }

  handleError(error: Response): Observable<any> {
    const errorInfo: any = error.json() || {errorCode: 'unknown_error'};
    return Observable.throw(errorInfo);
  }
}
