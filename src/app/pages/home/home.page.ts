import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public menuCtrl: MenuController,
    public router: Router) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  showDetailsPage(id: string, name: string) {
    const navigationExtras: NavigationExtras = {
      state: {
        itemData: { id, name }
      }
    };
    this.router.navigate(['food-details'], navigationExtras);
  }
}
