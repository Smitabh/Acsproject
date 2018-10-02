import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,AlertController,LoadingController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}
  loading: Loading;
  registerCredentials = { usrLoginId: '', usrPassword: '' };
 
  /*username = '';
  email = '';
  constructor(private nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('RegisterPage')//'LoginPage')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  */
 constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 
 public createAccount() {
   this.nav.push('RegisterPage');
 }
 public login(){
   this.showLoading()
   this.auth.login(this.registerCredentials).subscribe(allowed=>{


    this.auth.getLoggedInUser().subscribe(data=>{
      console.log("After sub",data);
    }); 
      if(allowed){
        console.log(allowed);
        this.showSuccess('login success')
       // this.nav.setRoot('RegisterPage') 
      }else{
        this.showError("Access Denied");
      }
    }, 
    error =>{
      this.showError(error);
    });
 }
 showLoading(){
   this.loading = this.loadingCtrl.create({
     content: 'Please wait...',
     dismissOnPageChange: true
   });
   this.loading.present();
 }



 showSuccess(txt){
  this.loading.dismiss();
  
  let alert = this.alertCtrl.create({
    //title:'fail',
    title:'success',
    subTitle:txt,
    buttons:['Ok']
  });
  alert.present();
 }

 showError(txt){
   this.loading.dismiss();
   
   let alert = this.alertCtrl.create({
     //title:'fail',
     title:'Error',
     subTitle:txt,
     buttons:['Ok']
   });
   alert.present();
  }
 
}
