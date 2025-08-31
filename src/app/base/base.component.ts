import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(spinnerNameType: SpinnerType): void {
    this.spinner.show(spinnerNameType);

    setTimeout(() =>
      this.hideSpinner(spinnerNameType), 3000);
  }
  hideSpinner(spinnerNameType: SpinnerType): void {
    this.spinner.hide(spinnerNameType);
  }

}

export enum SpinnerType {
  BallAtom = "s1",
  BallScaleMultiple = "s2",
  BallSpinClockwiseFadeRotating = "s3"
}
