import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'ar-location',
  styleUrl: 'ar-location.css',
  shadow: true,
})
export class ArLocation {
  @Element() el: HTMLElement;
  async closeModal() {
    await (this.el.closest('ion-modal') as 
           HTMLIonModalElement).dismiss();
  }
  render() {
    return [
      <ion-header>
      <ion-toolbar>
        <ion-title>AR Location Based</ion-title>
        <ion-buttons slot="start">
                <ion-button onClick={() => this.closeModal()}>
                  <ion-icon name="close"></ion-icon>
                </ion-button>
              </ion-buttons>
      </ion-toolbar>
    </ion-header>,
     <iframe src="../../assets/ar-location.html"></iframe>
    ];
  }

}
