import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

/**
 * Generated class for the MaintainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maintain',
  templateUrl: 'maintain.html',
})
export class MaintainPage {
  AllMappingDtls: string[];
  errorMessage:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public rest:RestApiProvider) {
 
    //this.LoadMappingDtls();
  }

  //  LoadMappingDtls(){
  //   this.rest.LoadMappingDtls()
  //   .subscribe(
  //     teachers => this.AllMappingDtls = this.AllMappingDtls,
  //     error =>  this.errorMessage = <any>error);
  //     console.log(this.AllMappingDtls);
  //LoadMappingDtls(){
    //   this.rest.LoadMappingDtls()
    //   .subscribe(
    //     teachers => this.AllMappingDtls = this.AllMappingDtls,
    //     error =>  this.errorMessage = <any>error);
    //     console.log(this.AllMappingDtls);
    //  }//  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MaintainPage');
  }

}
