import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiURLs } from '../constants/api-urls';
import { Product } from '../models/product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private api: ApiService) {}

  getProducts(): Observable<Product[]> {
    return this.api.get(ApiURLs.getProduct);
  }

  getProductById(id: number): Observable<Product> {
    return this.api.get(ApiURLs.getProduct + `${id}`);
  }

  saveProduct(product: Product): Observable<any> {
    return this.api.post(ApiURLs.saveProduct, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.api.put(
      ApiURLs.updateProduct + `/${product.productId}`,
      product
    );
  }

  deleteProduct(id: string): Observable<any> {
    return this.api.delete(ApiURLs.deleteProduct + `/${id}`);
  }
}
