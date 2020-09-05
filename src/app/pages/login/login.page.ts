import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ModalController } from '@ionic/angular';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public menuCtrl: MenuController,
    public navCtrl: NavController,
    public modal: ModalController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  login() {
    localStorage.isLogin = true;
    this.navCtrl.navigateRoot('home');
  }

  forgotPassword() {
    this.modal.create({
      component: ForgotPasswordPage,
      cssClass: 'custom-forgot-password-modal-css'
    }).then((modalCtrl: any) => {
      modalCtrl.present();
    });
  }

  socialLogin(socialVal: any) {
    this.login();
    if (socialVal == "google") {
      // this.googlePlus.login({}).then(response => console.log('Google Response', response)).catch(error => console.error('Google Error', error));
    } else {
      // this.fb.login(['public_profile', 'user_friends', 'email'])
      //   .then((response: FacebookLoginResponse) => console.log('Logged into Facebook!', response))
      //   .catch(error => console.log('Error logging into Facebook', error));
    }
  }
}
