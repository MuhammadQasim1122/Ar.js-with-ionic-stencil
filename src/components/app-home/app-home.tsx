import { Component, h } from '@stencil/core';
import {modalController} from '@ionic/core';
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  private async openModal() {
    const modal: HTMLIonModalElement =
                 await modalController.create({
      component: 'ar-launcher'
    });
    await modal.present();
  }
  private async openModal1() {
    const modal: HTMLIonModalElement =
                 await modalController.create({
      component: 'ar-location'
    });
    await modal.present();
  }

  render() {
    return [
      <ion-button onClick={() => this.openModal()}>Augmented Reality</ion-button>,
      <ion-button onClick={() => this.openModal1()}>Location Based AR</ion-button>
    ];
  }
}
