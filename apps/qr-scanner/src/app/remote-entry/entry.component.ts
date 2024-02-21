import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QrCodeComponent } from '../qr-code/qr-code.component';

@Component({
  standalone: true,
  imports: [CommonModule, QrCodeComponent],
  selector: 'ng-mf-qr-scanner-entry',
  template: `<ng-mf-qr-code></ng-mf-qr-code>`,
})
export class RemoteEntryComponent {}
