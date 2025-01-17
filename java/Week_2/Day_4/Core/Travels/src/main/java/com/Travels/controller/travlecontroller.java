package com.Travels.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.Travels.models.Travels;
import com.Travels.services.Travleservse;

import jakarta.validation.Valid;
;
@Controller
public class travlecontroller { 
	@Autowired
	Travleservse travlesev;
	/* gettAlll*/
	@GetMapping("/")
	public String ceratTrav(@ModelAttribute("travel")Travels travels, Model model) { 
		model.addAttribute("travels",travlesev.gettAlltravle());
		return "travles.jsp";
	}  
	@PostMapping ("/travels")
	public String Savetrav(@Valid @ModelAttribute("travel")Travels travels,BindingResult  result ,Model model) {
		
		if(result.hasErrors()) {
			model.addAttribute("travels",travlesev.gettAlltravle());
			return"travles.jsp";
		}
		travlesev.createltavle(travels); 
		return "redirect:/"; 
		
		}   
	/*Edit */
	@GetMapping("travel/edit/{id}")
	public String Edite (@PathVariable("id")long id ,@ModelAttribute("travel")Travels travels,Model model) { 
		model.addAttribute("travel",travlesev.getidtravle(id)); 
		return "edit.jsp"; 
	} 
	
	@PutMapping ("travel/edit/{id}") 
	public String editetrav (@PathVariable("id")long id ,@ModelAttribute("travel")Travels travels,Model model,BindingResult  result ) { 
		if(result.hasErrors()) {
			return"edit.jsp";
		}
		travlesev.editetravle(id,travels); 
		return "redirect:/"; 
	} 
	/*delete*/ 
	@DeleteMapping("delete/travle/{id}")
    public String destroy(@PathVariable("id")Long id) {
		travlesev.deletetrav(id);
        return "redirect:/";
    }
	/*one*/
	@GetMapping("one/{id}")
	public String oneTravel(@PathVariable("id")Long id,Model model) {
		model.addAttribute("travel",travlesev.getidtravle(id));
		return "one.jsp";
	}
	

}
