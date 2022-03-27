import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { firstValueFrom, Subscription } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ShoppingCartComponent implements OnInit, OnChanges {
  @Input('cartChanged') cartChanged: boolean = false;
  @Output() cartChangedChange: EventEmitter<boolean> = new EventEmitter();

  dataSource: CartItem[] = [];
  getCartItemsSub!: Subscription;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.updateCartItems();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.cartChanged) {
      this.getCartItemsSub.unsubscribe();
      this.updateCartItems();
    }
  }

  updateCartItems(): void {
    this.getCartItemsSub = this.cartService.getCartItems().subscribe({
      next: (itemList: CartItem[]) => {
        this.dataSource = itemList;
      },
      complete: async () => {
        for (const { index, item } of this.dataSource.map((item, index) => ({
          index,
          item,
        }))) {
          let product = await firstValueFrom(
            this.productService.getProductById(item.productId)
          );
          this.dataSource[index].productName = product.productName;
        }
        this.resetCartStatus();
      },
    });
  }

  resetCartStatus() {
    this.cartChanged = false;
    this.cartChangedChange.emit(this.cartChanged);
  }

  emptyCartAction(event: any): void {
    this.cartService.deleteAllCartItems().subscribe(() => {
      console.log('empting action succeded');
      this.cartChanged = true;
      this.cartChangedChange.emit(this.cartChanged);
    });
  }
}
