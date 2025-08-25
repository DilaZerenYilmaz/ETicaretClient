import { Component } from '@angular/core';
import { AlertifyService, AlertifyOptions, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private alertify: AlertifyService) { }

  ngOnInit() {

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
