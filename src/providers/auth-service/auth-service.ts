import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { SafeResourceUrl } from '@angular/platform-browser';
import 'rxjs/add/operator/map';

export class User {
  LoginId:string;
  Password:string;
  EmailId:string;
   confmPassword:string;
  /* LoginId:string;
   Password:string;
   EmailId:string;
   confmPassword:string;*/

    constructor(usrLoginId:string , usrPassword:string ){
      this.LoginId = usrLoginId;
      this.Password = usrPassword;
    }
    //usrLoginId:string,usrPassword:string,EmailId:string,conformPassword:string)
     /*this.LoginId = usrLoginId;
     this.Password = usrPassword;
     this.EmailId = EmailId;
     this.confmPassword = conformPassword;*/
  }
  /*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
    currentUser: User;
 
    //Logi code here 
  public login(credentials) {
    if (credentials.usrLoginId === null || credentials.usrPassword === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.usrPassword === "Angelsm" && credentials.usrLoginId === "bksmita");
        this.currentUser = new User('Angelsm', 'bksmita');
        observer.next(access);
        observer.complete();
      });
    }
  }

  //For Register code here

  public register(credentials) {
    if (credentials.usrLoginId === null || credentials.usrPassword === null){
      //credentials.EmailId == null || credentials.confmPassword == null ) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  /*public getUserInfo() : User {
    return this.currentUser;
  }*/
}
