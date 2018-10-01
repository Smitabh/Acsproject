import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestApiProvider } from '../../providers/rest-api/rest-api';

/**
 * Generated class for the ObservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-observation',
  templateUrl: 'observation.html',
})
export class ObservationPage {

  public todaysDate: string = new Date().toISOString();
  public currentTime: string = new Date().toISOString();
  teacher: string;
  teacherAlertOpts: { title: string };
  AllteacherData: string[];
  errorMessage: string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: RestApiProvider) {
    this.teacherAlertOpts  = {
      title: 'Select your teacher'
      };
  }
  stpSelect() {
    console.log('Teacher selected');
  }

  ionViewDidLoad() {
   // this.getTecaher();
    console.log('ionViewDidLoad ObservationPage');
  }
 
 /* getTecaher() {
    this.rest.getTeacher()
       .subscribe(
         countries => this.AllteacherData = this.AllteacherData,
         error =>  this.errorMessage = <any>error);
  }
   */
}
