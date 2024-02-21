import { Component } from '@angular/core';

@Component({
  selector: 'ng-mf-qr-code',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col w-52 py-3 bg-white mx-auto mt-24 font-outfit">
      <img src="assets/qr-code/image-qr-code.png" alt="qr-code" />
      <div class="text-container">
        <p class="title">Improve your front-end skills by building project</p>
        <p class="subtitle">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  `,
  styleUrl: './qr-code.component.scss',
})
export class QrCodeComponent {}
