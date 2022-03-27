import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.scss'],
})
export class StorePageComponent implements OnInit {
  pageHeaderTitle: string;
  cartChanged: boolean = false;

  constructor() {
    this.pageHeaderTitle = 'Smart Hardware Shop';
  }

  ngOnInit(): void {}

  updateCartStatus(event: boolean): void {
    this.cartChanged = event;
  }
}
