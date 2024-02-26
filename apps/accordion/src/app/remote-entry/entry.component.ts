import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionComponent } from '../app.component';

@Component({
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  selector: 'ng-mf-accordion-entry',
  template: `<ng-mf-accordion></ng-mf-accordion>`,
})
export class RemoteEntryComponent {}
