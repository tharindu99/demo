import { environment } from '../../environments/environment';

export const ApiURLs = {
  getProduct: environment.baseApiUrl + '/product/',
  saveProduct: environment.baseApiUrl + '/product/',
  updateProduct: environment.baseApiUrl + '/product/',
  deleteProduct: environment.baseApiUrl + '/product/',
  getCartItem: environment.baseApiUrl + '/cart/',
  saveCartItem: environment.baseApiUrl + '/cart/',
  updateCartItem: environment.baseApiUrl + '/cart/',
  deleteCartItem: environment.baseApiUrl + '/cart/',
};
