package com.abc.cartservice;


import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class CartServiceApplicationTests {

	@Autowired
	private MockMvc mvc;

	@Test
	public void getAllItems() throws Exception{
		mvc.perform(MockMvcRequestBuilders.get("/cart/").accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}

	@Test
	public void addItemToCart() throws Exception{

		JSONObject testCartItem = new JSONObject();
		testCartItem.put("cartId",1);
		testCartItem.put("productId",1);
		testCartItem.put("quantity",1);

		mvc.perform(MockMvcRequestBuilders.post("/cart/add/").contentType(MediaType.APPLICATION_JSON)
				.content(testCartItem.toString()))
				.andExpect(status().isOk());
	}



}
