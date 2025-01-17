package com.Burger.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Burger.Repository.burgerRepository;
import com.Burger.models.Burger;

@Service
public class burgerservices {
	@Autowired 
	burgerRepository burgerRepo; 
	public List<Burger>gettAllBurger(){
	return burgerRepo.findAll(); 
	}  
	public Burger ceratTask(Burger burger) { 
		return burgerRepo.save(burger);  
		
		
	}
	 
	public Burger editeburger(long id, Burger nburger) {  
		nburger.setId(id); 
		return burgerRepo.save(nburger);
		
	} 
	public Burger getidburger(long id) { 
		Optional<Burger> bureger=burgerRepo.findById(id) ;  
		if(bureger.isEmpty()) {  
			return null; 
			 
		}else { return bureger.get();
		
		}
		
	}

}
