package com.abc.cartservice.service;

import com.abc.cartservice.entity.Cart;
import com.abc.cartservice.repository.CartRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public void addItemToCart(Cart productSelection) {
        cartRepository.save(productSelection);
    }

    public List<Cart> getAllItems() {
        return cartRepository.findAll();
    }

    public void emptyCart() {
        cartRepository.deleteAll();
    }
}
