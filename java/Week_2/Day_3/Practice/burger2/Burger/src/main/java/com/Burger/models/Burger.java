package com.Burger.models;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name="burgers")
public class Burger {  
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 @NotNull
	 @Size(min=5, max=200,message="The burger must be at least 5 characters")
	 private String burger_name; 
	
	@NotNull
	 @Size(min=5, max=200,message="The restourant must be at least 5 characters")
	 private String restaurant_name;    
	 @NotNull
	 @Max(5)
	 private int rating ;  
	 @NotNull
	 @Size(min=5, max=200,message="The note must be at least 5 characters")
	 private String note;  
	 
	 @Column(updatable=false)
	 @DateTimeFormat(pattern="yyyy-MM-dd")
	 private Date createdAt;
	 @DateTimeFormat(pattern="yyyy-MM-dd")
	 private Date updatedAt;  
	 public Burger(String burger_name,String restaurant_name,int rating,String note  ){ 
		 this.burger_name=burger_name; 
		 this.restaurant_name=restaurant_name; 
		 this.rating=rating;  
		 this.note=note; 
		 
		 
		  
		 
	 }  
	public Burger(){}
	 @PrePersist
	    protected void onCreate(){
	        this.createdAt = new Date();
	    }
	    @PreUpdate
	    protected void onUpdate(){
	        this.updatedAt = new Date();
	    } 
	    public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getBurger_name() {
			return burger_name;
		}
		public void setBurger_name(String burger_name) {
			this.burger_name = burger_name;
		}
		public String getRestaurant_name() {
			return restaurant_name;
		}
		public void setRestaurant_name(String restaurant_name) {
			this.restaurant_name = restaurant_name;
		}
		public Integer getRating() {
			return rating;
		}
		public void setRating(Integer rating) {
			this.rating = rating;
		}
		public String getNote() {
			return note;
		}
		public void setNote(String note) {
			this.note = note;
		}
		public Date getCreatedAt() {
			return createdAt;
		}
		public void setCreatedAt(Date createdAt) {
			this.createdAt = createdAt;
		}
		public Date getUpdatedAt() {
			return updatedAt;
		}
		public void setUpdatedAt(Date updatedAt) {
			this.updatedAt = updatedAt;
		}
	    
	 
	 
	 
	 
	 
	
	
}
