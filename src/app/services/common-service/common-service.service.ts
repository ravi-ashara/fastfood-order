import { Injectable } from '@angular/core';
import { Platform, AlertController, ToastController, LoadingController, NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  isconfirmBox: boolean = false;
  constructor(public platform: Platform,
    public alertController: AlertController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public navCtrl: NavController) { }

  showLoader() {
    this.loadingController.create({
      message: 'Please wait...',
      mode: 'ios',
    }).then((loader: any) => {
      loader.present();
    })
  }

  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 500);
  }

  /**
   * 
   * @param val_method // get/post/delete
   * @param val_url // Endpoint Name
   * @param val_data // PayLoad Data Post Method
   */
  hitAPICall(val_method: string, val_url: any, val_data: any) {
    if (val_method === 'get') {

    } else if (val_method === 'post') {

    } else if (val_method === 'delete') {

    }
  }

  /**
   * 
   * @param val_header //Show header //Show header pass '' to show custom header
   * @param val_message // Show Message
   * @param val_button // Button Name
   * @param callBack_func // Return value Yes
   */
  showAlert(val_header: string, val_message: string, val_button: any, callBack_func: any) {
    this.alertController.create({
      header: val_header ? val_header : 'PCA',
      message: val_message,
      mode: 'ios',
      buttons: [
        {
          text: val_button,
          handler: () => {
            callBack_func('Yes');
          }
        }
      ]
    }).then((alert: any) => {
      alert.present();
    });
  }

  /**
   * 
   * @param val_header //Show header pass '' to show custom header
   * @param val_message // Show Message
   * @param val_button // button name ['No','Yes']
   * @param callBack_func // Return value No/Yes
   */
  showConfirm(val_header: string, val_message: string, val_button: any, callBack_func: any) {
    this.isconfirmBox = true;
    this.alertController.create({
      header: val_header ? val_header : 'PCA',
      message: val_message,
      mode: 'ios',
      buttons: [
        {
          text: val_button[0],
          role: 'cancel',
          handler: () => {
            this.isconfirmBox = false;
            callBack_func('No');
          }
        },
        {
          text: val_button[1],
          handler: () => {
            this.isconfirmBox = false;
            callBack_func('Yes');
          }
        }
      ]
    }).then((confirm: any) => {
      confirm.present();
    });
  }

  /**
   * 
   * @param val_message //Show Message
   * @param val_position // set position top/bottom
   * @param val_color // set color 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark';
   * @param val_duration // val_duration set duration Number
   */
  showToastWithDuration(val_message: string, val_position: any, val_color: string, val_duration: number) {
    this.toastController.create({
      message: val_message,
      position: val_position,
      duration: val_duration,
      color: val_color != '' ? val_color : 'primary',
    }).then((toast: any) => {
      toast.present();
    });
  }

  /**
   * Automatically hide after 7 second.
   * @param val_message  //Show Message
   * @param val_position // set position top/bottom
   * @param val_color // set color 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark';
   * @param callback_func Callback function return Yes
   */
  showToastWithButton(val_message: string, val_position: any, val_color: string, callback_func: any) {
    this.toastController.create({
      message: val_message,
      position: val_position,
      color: val_color != '' ? val_color : 'primary',
      duration: 7000,
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            callback_func('Yes');
          }
        }
      ]
    }).then((toast: any) => {
      toast.present();
    });
  }

  /**
   * Hide loader with Show server side error message
   */
  serverSideError() {
    this.hideLoader();
    this.showAlert('', 'Error form server side', 'Ok', () => { });
  }
}
