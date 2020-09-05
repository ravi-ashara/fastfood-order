import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public menuCtrl: MenuController,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  login() {
    localStorage.isLogin = true;
    this.navCtrl.navigateRoot('home');
  }
}
