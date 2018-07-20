import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PushPage } from '../push/push';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
open(){
this.navCtrl.push(PushPage);
}


}
