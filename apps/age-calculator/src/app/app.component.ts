import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import * as moment from 'moment';
import { dateValidator } from './date-validator.directive';

interface Birthdate {
  day: number | null;
  month: number | null;
  year: number | null;
}

@Component({
  selector: 'ng-mf-age-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AgeCalculatorComponent {
  private basicValidators = [Validators.required, Validators.min(1)];
  public currentYear = new Date().getFullYear();
  public age!: Birthdate;

  public birthdayForm = new FormGroup(
    {
      day: new FormControl('', {
        nonNullable: true,
        validators: [...this.basicValidators, Validators.max(31)],
      }),
      month: new FormControl('', {
        nonNullable: true,
        validators: [...this.basicValidators, Validators.max(12)],
      }),
      year: new FormControl('', {
        nonNullable: true,
        validators: [...this.basicValidators, Validators.max(this.currentYear)],
      }),
    },
    { validators: dateValidator }
  );

  public isInvalid(control: AbstractControl) {
    return (
      (control.invalid && (control.dirty || control.touched)) ||
      this.birthdayForm.errors?.['invalidDate']
    );
  }

  public get day() {
    return this.birthdayForm.get('day');
  }

  public get month() {
    return this.birthdayForm.get('month');
  }

  public get year() {
    return this.birthdayForm.get('year');
  }

  public getAge() {
    if (
      !this.birthdayForm.valid &&
      !(this.year?.value && this.month?.value && this.day?.value)
    ) {
      this.birthdayForm.markAllAsTouched();

      return;
    }

    if (this.birthdayForm.valid) {
      this.age = this.calculateAge(
        this.birthdayForm.controls.day.value,
        this.birthdayForm.controls.month.value,
        this.birthdayForm.controls.year.value
      );
    }
  }

  private calculateAge(
    birthday: string,
    birthMonth: string,
    birthYear: string
  ): Birthdate {
    const daysPerYear = 365.25; // account for leap years
    const daysPerMonth = 30.44; // on average
    const millisecondsInADay = 1000 * 60 * 60 * 24;

    const parsedBirthDate = moment(
      `${birthYear}/${birthMonth}/${birthday}`,
      'Y/M/D'
    );

    const timeDiff = moment(new Date()).diff(parsedBirthDate);
    const year = Math.floor(timeDiff / (millisecondsInADay * daysPerYear));
    const month = Math.floor(
      (timeDiff % (millisecondsInADay * daysPerYear)) /
        (millisecondsInADay * daysPerMonth)
    );

    const day = Math.floor(
      (timeDiff % (millisecondsInADay * daysPerMonth)) / millisecondsInADay
    );

    return { year, month, day };
  }
}
