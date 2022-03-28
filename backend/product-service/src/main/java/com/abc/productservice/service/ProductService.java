package com.abc.productservice.service;

import com.abc.productservice.entity.Product;
import com.abc.productservice.repository.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public void addProduct(Product product) {
        log.info("ProductService saveProduct service called : {}",product);
        productRepository.save(product);
    }

    public Optional<Product> findProductById(Long productId) {
        log.info("Service : find product by id");
        return productRepository.findById(productId);
    }

    public List<Product> getAllProducts() {
        log.info("Service : get all product service");
        return productRepository.findAll();
    }
}
