package com.abc.productservice.controller;


import com.abc.productservice.entity.Product;
import com.abc.productservice.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
@Slf4j
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public List<Product> getAllProducts(){
        log.info("GET: All Products");
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public Optional<Product> findProductById(@PathVariable("id") Long productId ){
        log.info("GET: product by id request");
        return productService.findProductById(productId);

    }

    @PostMapping("/")
    public void addProduct(@RequestBody Product product){
        log.info("POST: saveProduct post request");
        productService.addProduct(product);
    }
}
