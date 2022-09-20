import { Component, h } from '@stencil/core';

@Component({
  tag: 'ar-location',
  styleUrl: 'ar-location.css',
  shadow: true,
})
export class ArLocation {
  render() {
    return [
     <iframe src="../../assets/ar-location.html"></iframe>
    ];
  }

}
