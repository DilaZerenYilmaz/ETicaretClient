import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);

    this.httpClientService.get<Product[]>({ controller: "products" }).subscribe(data => {
      console.log(data);
    });

    // this.httpClientService.post({ controller: "products" }, { name: "Kalem", stock: 100, price: 10 }).subscribe();

    // this.httpClientService.put({ controller: "products" }, { id: "14842b63-7b03-439d-93e3-2f52320ac9da", name: "Tükenmez Kalem", stock: 500, price: 10.5 }).subscribe();

    // this.httpClientService.delete({ controller: "products" }, "14842b63-7b03-439d-93e3-2f52320ac9da").subscribe();

    // this.httpClientService.get({
    //   baseUrl: "https://jsonplaceholder.typicode.com",
    //   controller: "posts"
    // }).subscribe(data => {
    //   console.log(data);
    // })
  }
}
