import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {

  constructor(public modal: ModalController) { }

  closeModal() {
    this.modal.dismiss();
  }

  submitPassword() {
    this.closeModal();
  }
}
