import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient-new';
  constructor() { }
}

$.get("https://localhost:7084/api/products", data => {
  console.log(data);
})

