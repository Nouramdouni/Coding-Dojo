package com.Travels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Travels.models.Travels;
import com.Travels.repostories.travleRepostoires;

;
@Service
public class Travleservse { 
	@Autowired 
	travleRepostoires travleRepo; 
	public List<Travels>gettAlltravle(){
	return travleRepo.findAll(); 
	}  
	public Travels createltavle(Travels travels) { 
		return travleRepo.save(travels);  
		
		
	}
	 
	public Travels editetravle(long id, Travels newtravle) {  
		newtravle.setId(id); 
		return travleRepo.save(newtravle);
		
	} 
	public Travels getidtravle(long id) { 
		Optional<Travels> travle=travleRepo.findById(id) ;  
		if(travle.isEmpty()) {  
			return null; 
			 
		}else { return travle.get(); 
		
		 
		}
		
	} 
	 
	public void deletetrav(Long id) {
		travleRepo.deleteById(id);}

		
	}
	


