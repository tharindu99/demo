import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiURLs } from '../constants/api-urls';
import { CartItem } from '../models/cart-item';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private api: ApiService) {}

  getCartItems(): Observable<CartItem[]> {
    return this.api.get(ApiURLs.getCartItem);
  }

  getCartItemById(id: number): Observable<CartItem> {
    return this.api.get(ApiURLs.getCartItem + `${id}`);
  }

  saveCartItem(cartItem: CartItem): Observable<any> {
    return this.api.post(ApiURLs.saveCartItem, cartItem);
  }

  updateCartItem(cartItem: CartItem): Observable<any> {
    return this.api.put(
      ApiURLs.updateCartItem + `/${cartItem.itemId}`,
      cartItem
    );
  }

  deleteCartItem(id: number): Observable<any> {
    return this.api.delete(ApiURLs.deleteCartItem + `/${id}`);
  }

  deleteAllCartItems(): Observable<any> {
    return this.api.delete(ApiURLs.deleteCartItem);
  }
}
