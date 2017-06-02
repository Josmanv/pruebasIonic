import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { ListsPage } from '../lists/lists';
import { SlidePage } from '../slide/slide';
import { AboutPage } from '../about/about';


import { Person } from '../../models/person.model'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // lists:any[] = [];

  constructor(public navCtrl: NavController) {
    // this.lists.push({
    //   name: 'Jose'
    // });
    // this.lists.push({
    //   name: 'Jose Manuel'
    // });
    // this.lists.push({
    //   name: 'Jose Manuel López'
    // });

    let person = new Person('Jose Manuel', 31);
    let name = person.getName();
    // console.log(name.length);
    console.log(name);
  }

  goToUsersPage(){
    this.navCtrl.push( UsersPage );
  }

   goToListsPage(){
    this.navCtrl.push( ListsPage );
  }

   goToSlidePage(){
    this.navCtrl.push( SlidePage );
  }

  goToAboutPage(){
    this.navCtrl.push( AboutPage );
  }

}
