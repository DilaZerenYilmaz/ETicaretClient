import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { MessageType } from './services/admin/alertify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient-new';
  constructor(private toastrService: CustomToastrService) {
    this.toastrService.message("Hello World", "Welcome", {
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.TopRight,
    });
    this.toastrService.message("Hello World", "Welcome", {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.TopLeft,
    });
    this.toastrService.message("Hello World", "Welcome", {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.BottomLeft,
    });
    this.toastrService.message("Hello World", "Welcome", {
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomRight,
    });
  }
}

