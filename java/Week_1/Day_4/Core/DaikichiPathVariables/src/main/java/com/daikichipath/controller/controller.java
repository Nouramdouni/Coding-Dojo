package com.daikichipath.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class controller { 
	@RequestMapping("/daikichi") 
	public String daikichi() { 
		return "welcomee!!!"; 
		
	}@RequestMapping("/daikichi/today") 
	public String daikichiToday() { 
		return "Today you will find luck in all your endeavors!!!"; 
		
	}@RequestMapping("/daikichi/tomorrow") 
	public String daikichitomorrow() { 
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!'.!!!"; 
		

}
	@RequestMapping("/daikichi/travel/{name}") 
	public String tavel(@PathVariable("name") String name) { 
		
		return "Congratulations! You will soon travel to "+name; 
		
	}
	@RequestMapping("/daikichi/lotto/{numb}") 
	public String travel(@PathVariable("numb") int numb) {  
		if(numb %2==0) { return "You will take a grand journey in the near future, but be weary of tempting offers'!!!!!";
			
		} 
		else { 
			return "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends.!!"; 
		}
		
		
	}} 

