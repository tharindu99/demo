package com.abc.productservice;

import com.abc.productservice.entity.Product;
import com.google.gson.JsonObject;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ProductServiceApplicationTests {

	@Autowired
	private MockMvc mvc;

	@Test
	public void getAllProducts() throws Exception{
		mvc.perform(MockMvcRequestBuilders.get("/products/").accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}

	@Test
	public void addProduct() throws Exception{

		JSONObject testProduct = new JSONObject();
		testProduct.put("productName","ABC");
		testProduct.put("productImage","DEF");

		mvc.perform(MockMvcRequestBuilders.post("/products/add")
						.contentType(MediaType.APPLICATION_JSON)
						.content(testProduct.toString()))
						.andExpect(status().isOk());
	}

	@Test
	public void findProductById() throws Exception{
		mvc.perform(MockMvcRequestBuilders.get("/products/1").accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}



}
