import { Component, OnInit, ViewChild } from '@angular/core';

import { Platform, NavController, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonServiceService } from './services/common-service/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, { static: false }) routerOutlet: IonRouterOutlet;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Order History',
      url: '/order-history',
      icon: 'timer'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Change Password',
      url: '/change-password',
      icon: 'create'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'phone-portrait'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navControl: NavController,
    public router: Router,
    public commonService: CommonServiceService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.handleHardwareBackButton();
      this.statusBar.styleLightContent();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 5000);
    });
  }

  logoutFunction() {
    localStorage.removeItem('isLogin');
    this.navControl.navigateRoot('/login')
  }

  handleHardwareBackButton() {
    this.platform.backButton.subscribe((event: any) => {
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop();
      } else if (this.router.url === '/login') {
        navigator['app'].exitApp();
      } else {
        if (this.router.url === '/home') {
          this.commonService.showConfirm('Fast Food', 'Do you wish to exit?', ['Cancel', 'Exit'], (res: any) => {
            if (res === "Yes") {
              navigator['app'].exitApp();
            }
          });
        }
      }
    });
  }
}
