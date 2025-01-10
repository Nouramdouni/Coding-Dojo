package com.Fruity.modls;

public class Item { 
	  private String name;
	    public String getName() {
		return name;
	}
	public double getPrice() {
		return price;
	}
		private double price;
	    // CONSTRUCTOR
	    public Item(String name, double price) {
	        this.name = name;
	        this.price = price;
	    }
	    

}
