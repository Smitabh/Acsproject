import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Http, Headers, RequestOptions } from '@angular/common/http';
//import { HttpClient, HttpHeaders,HttpRequest } from '@angular/common/http';

import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { obsStructure } from '../observation/obsModel';

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

  public obsDate: string = new Date().toISOString();
  public obsTime: string = new Date().toISOString();

  teacherAlertOpts: { title: string };
  classrmAlertOpts: { title: string };
  periodAlertOpts: { title: string };
  remarkAlertOpts: {title: string };

  AllteacherData: string[];
  AllClassroomData: string[];
  AllPeriodData:string[];
  AllRemarkData:string[];

  errorMessage: string;
      obj:obsStructure= {};

  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: RestApiProvider){

    this.teacherAlertOpts  = { title: 'Select Teacher'};
    this.classrmAlertOpts  = { title: 'Select Classroom'};
    this.periodAlertOpts  = { title: 'Select Period'};
    this.remarkAlertOpts  = { title: 'Select Remark'};

      this.getTeacher();
      this.getClassroom();
      this.getPeriod();
      this.getRemark();
  }
  // stpSelect() {
  //   console.log('Teacher selected');
  // }

  ionViewDidLoad() {
   // this.getTecaher();
    console.log('ionViewDidLoad ObservationPage');
  }
 
 getTeacher() {
    this.rest.getTeacher()
       .subscribe(
         teachers => { 
           this.AllteacherData = teachers.teacher
            console.log(teachers);
          },
         error =>  this.errorMessage = <any>error);
  }
  
  getClassroom(){
    this.rest.getClassroom()
    .subscribe(
      classrooms => {
        this.AllClassroomData = classrooms.classrms
        console.log(classrooms);
      },
      error => this.errorMessage = <any>error);
  }

  getPeriod() {
    this.rest.getPeriod()
       .subscribe(
         data => { 
           this.AllPeriodData = data.periods
            console.log(data);
          },
         error =>  this.errorMessage = <any>error);
  }

  getRemark() {
    this.rest.getRemark()
       .subscribe(
         datarem => { 
           this.AllRemarkData= datarem.remarks
            console.log(datarem);
          },
         error =>  this.errorMessage = <any>error);
  }
  // public saveObs(obj){
  //   alert('hi');
  //   console.log(obj);
  // }
    /*var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    const requestOptions = new HttpRequest({ headers: headers }); 

    let postData = {
            "name": "Customer004",
            "email": "customer004@email.com",
            "tel": "0000252525"
    }

    this.http.post("http://localhost:9090/obsSave", postData, requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  
  }*/
}