import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import{ AuthServiceProvider} from '../../providers/auth-service/auth-service';
//import { Title } from '@angular/platform-browser';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = {usrLoginId:'',usrPassword:'',conformPassword:'', EmailId:''};

  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}
 
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RegisterPage');
  // }
  //this.nav.popToRoot();
   // this.nav.insert(0,RegisterPage);
                  
      constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController) { }
 
                  public register() {
                    this.auth.register(this.registerCredentials).subscribe(success => {
                      if (success) {
                        this.createSuccess = true;
                        this.showPopup("Success", "Account created.");
                      } else {
                        this.showPopup("Error", "Problem creating new user");
                      }
                    },
                      error => {
                        this.showPopup("Error", error);
                      });
                  }
                 
                  showPopup(title, text) {
                    let alert = this.alertCtrl.create({
                      title: title,
                      subTitle: text,
                      buttons: [
                        {
                          text: 'OK',
                          handler: data => {
                            if (this.createSuccess) {
                              this.nav.popToRoot();
                            }
                          }
                        }
                      ]
                    });
                    alert.present();
                  }
                }