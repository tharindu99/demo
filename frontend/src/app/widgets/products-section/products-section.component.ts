import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.scss'],
})
export class ProductsSectionComponent implements OnInit, OnDestroy {
  @Output('cartChanged') cartChanged: EventEmitter<boolean> =
    new EventEmitter();

  productList: Product[] = [];
  getProductsSub!: Subscription;
  saveToCartSub!: Subscription;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProductsSub = this.productService
      .getProducts()
      .subscribe((itemList: Product[]) => {
        this.productList = itemList;
      });
  }

  ngOnDestroy(): void {
    this.getProductsSub.unsubscribe();
    this.saveToCartSub.unsubscribe();
  }

  addItemToCart(event: any): void {
    const cartItem = new CartItem();
    cartItem.productId = event.productId;
    cartItem.cartId = 1;
    cartItem.quantity = 1;

    this.saveToCartSub = this.cartService.saveCartItem(cartItem).subscribe({
      next: () => {
        console.log('save action suceeded');
      },
      complete: () => {
        this.cartChanged.emit(true);
      },
    });
  }
}
