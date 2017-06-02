import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  twitter: string = '@josmanv';
  numeros: number[] = [1,2,3,4,5,7];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  showAlert(){
    alert("Hey Hola");
  }

  changeDom(myVar:HTMLElement){
  myVar.innerHTML = 'hola uiverso.';
}

addNumber(){
  this.numeros.push(2);
}

removeNumber(){
  this.numeros.splice(0,1);
}

}
