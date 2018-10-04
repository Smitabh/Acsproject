import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestApiProvider Provider');
  }
   
  private apiUrl = 'http://localhost:9090';

  getTeacher(): Observable<string[]> {
    return this.http.get(this.apiUrl+'/getTeacher').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getClassroom(): Observable<string>{
    return this.http.get(this.apiUrl+'/getClassroom').pipe(
        map(this.extractData),
        catchError(this.handleError)
    );
  }
  
  getPeriod(): Observable<string>{
    return this.http.get(this.apiUrl+'/getPeriod').pipe(
        map(this.extractData),
        catchError(this.handleError)
    );
  }

  getRemark(): Observable<string>{
    return this.http.get(this.apiUrl+'/getRemark').pipe(
        map(this.extractData),
        catchError(this.handleError)
    );
  }

  
  addRegister(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiurl+'/saveRegister', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  } 


  // postObservation(): Observable<string>{
  //   this.http.post((this.apiUrl+"/postObservation", "firstname=Nic")
  //       .subscribe(data => {
  //           var alert = Alert.create({
  //               title: "Data String",
  //               subTitle: data.json().data,
  //               buttons: ["close"]
  //           });
  //           this.nav.present(alert);
  //       }, error => {
  //           console.log(JSON.stringify(error.json()));
  //       });
  // }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}