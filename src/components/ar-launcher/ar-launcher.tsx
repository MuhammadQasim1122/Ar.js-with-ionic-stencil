import { Component, Element,h } from '@stencil/core';
@Component({
  tag: 'ar-launcher',
  styleUrl: 'ar-launcher.css',
  shadow: true,
})
export class ArLauncher {
  @Element() el: HTMLElement;
  async closeModal() {
    await (this.el.closest('ion-modal') as 
           HTMLIonModalElement).dismiss();
  }
  render() {
    return [
      <ion-header>
  <ion-toolbar>
    <ion-title>ARLauncher</ion-title>
    <ion-buttons slot="start">
            <ion-button onClick={() => this.closeModal()}>
              <ion-icon name="close"></ion-icon>
            </ion-button>
          </ion-buttons>
  </ion-toolbar>
</ion-header>,
 <iframe src="../../assets/aframe-ar.html"></iframe>
    ];
  }

}
