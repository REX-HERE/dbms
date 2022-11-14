package com.ShopNow.Controller;

import com.ShopNow.DAO.productDao;
import com.ShopNow.Models.product;
import com.ShopNow.Models.productData;
import com.ShopNow.Models.shoppingCart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.*;

@RestController
public class productController {
    @Autowired
    productDao productDao;

    @GetMapping("/allProducts")
    List<product> getAllProducts(){
        return productDao.getAllProducts();
    }

    @GetMapping("/products/{id}")
    product getProductById(@PathVariable String id){
        return productDao.getProductById(id);
    }

    @PostMapping("/seller/addProduct/{userId}")
    public Integer PostCart(@RequestBody product productInfo, @PathVariable String userId){
        return productDao.insertProduct(productInfo, userId);
    }

    @GetMapping("/seller/deleteProduct/{productId}")
    public Integer deleteItem(@PathVariable String productId){
        return productDao.deleteProduct(productId);
    }

    @GetMapping("/seller/products/{userId}")
    List<productData> getProductDataByUserId(@PathVariable String userId){
        System.out.println("aa gaya");
        return productDao.getProductDataByUserId(userId);

    }
}
