import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgeCalculatorComponent } from '../app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, AgeCalculatorComponent],
  selector: 'ng-mf-age-calculator-entry',
  template: `<ng-mf-age-calculator></ng-mf-age-calculator>`,
})
export class RemoteEntryComponent {}
