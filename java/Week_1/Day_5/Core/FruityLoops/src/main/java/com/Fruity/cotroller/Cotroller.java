package com.Fruity.cotroller;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.Fruity.modls.Item;
@Controller

public class Cotroller { 
	  @RequestMapping("/")
	    public String index(Model model) {
	        
	        ArrayList<Item> fruits = new ArrayList<Item>();
	        fruits.add(new Item("Kiwi", 1.5));
	        fruits.add(new Item("Mango", 2.0));
	        fruits.add(new Item("Goji Berries", 4.0));
	        fruits.add(new Item("Guava", .75));
	        model.addAttribute("fruitscotrolles", fruits); 
	       

	        // Add fruits your view model here
	        
	        return "Fruity.jsp";
}
}