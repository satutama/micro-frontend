import { Component } from '@angular/core';

@Component({
  selector: 'ng-mf-qr-code',
  standalone: true,
  imports: [],
  template: `
    <div class="min-h-[100vh] pt-24 bg-[#d6e2f0]">
      <div
        class="flex flex-col w-52 px-3 pt-3 pb-5 bg-white mx-auto text-center rounded-lg shadow-md"
      >
        <img
          class="rounded-lg"
          src="assets/qr-code/image-qr-code.png"
          alt="qr-code"
        />
        <div class="flex flex-col text-base py-0 px-4">
          <p class="py-4 font-bold">
            Improve your front-end skills by building project
          </p>
          <p class="font-normal text-xs text-[hsl(220,15%,55%)]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './app.component.scss',
})
export class QrCodeComponent {}
