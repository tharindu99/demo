package com.abc.cartservice.controller;


import com.abc.cartservice.entity.Cart;
import com.abc.cartservice.service.CartService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cart")
@Slf4j
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/")
    public List<Cart> getAllItems(){
        return cartService.getAllItems();
    }

    @PostMapping("/")
    public void addItemToCart(@RequestBody Cart productSelection){
        log.info("POST: add item to cart");
        cartService.addItemToCart(productSelection);
    }

    @DeleteMapping("/")
    public void emptyCart(){
        log.info("DELETE: empty cart");
        cartService.emptyCart();
    }



}
