import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

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

    constructor(private http: HttpClient,private storage: Storage) { 
    
    }

     getLoggedInUser() {
      return Observable.create(observer => {
      this.storage.get('username').then((val) => {
        console.log('Your username', val);
      
      
      observer.next(val);
      observer.complete();
      
      });

    });
    }
    


    getUser() {
      return this.http.get("http://localhost:9090/login");
    }
 
    //Logi code here 
  public login(credentials) {

    if (credentials.usrLoginId === null || credentials.usrPassword === null) {
      return Observable.throw("Please insert credentials");
    } else {

      console.log(credentials); 

      return Observable.create(observer => {

        this.getUser().subscribe((data: User) => {
          console.log(data.LoginId); 
  
        // At this point make a request to your backend to make a real check!
        let access = (credentials.usrPassword === data.Password && credentials.usrLoginId === data.LoginId);
        this.currentUser = new User(data.LoginId, data.Password);
        console.log(access);
        if(access){
          this.storage.set('username', data.LoginId);
        }else{
          this.storage.set('username', null);
        }

        observer.next(access);
        observer.complete();
      });

    });

    }
  }

  //For Register code here

  public register(credentials) {
    console.log(credentials);
    if (credentials.usrLoginId === null && credentials.usrPassword === null &&
      credentials.conformPassword == null && credentials.EmailId == null){
      
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
