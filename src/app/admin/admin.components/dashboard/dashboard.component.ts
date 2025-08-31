import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, AlertifyOptions, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent {
  constructor(private alertify: AlertifyService, spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit() {
    this.showSpinner(SpinnerType.BallAtom);
  }

  m() {
    this.alertify.message('Welcome to the admin layout!', {
      messageType: MessageType.Success,
      position: Position.TopRight,
      delay: 5,
      dismissOthers: true
    } as Partial<AlertifyOptions>);
  }

  d() {
    this.alertify.dismiss();
  }
}
