import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { observation } from '../observation/observation';

import { RestApiProvider } from '../../providers/rest-api/rest-api';
/**
 * Generated class for the SearchRptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-rpt',
  templateUrl: 'search-rpt.html',
})
export class SearchRptPage {
  teacher: string;
  teacherAlertOpts: { title: string };
  AllteacherData: string[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: RestApiProvider) {
    this.getTeacher();
    this.teacherAlertOpts  = { title: 'Select Teacher'};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchRptPage');
  }
  stpSelect() {
    console.log('Teacher selected');
  }
  getTeacher() {
    this.rest.getTeacher()
       .subscribe(
         teachers => this.AllteacherData = this.AllteacherData,
         error =>  this.errorMessage = <any>error);
         console.log(this.AllteacherData);
  }

}
