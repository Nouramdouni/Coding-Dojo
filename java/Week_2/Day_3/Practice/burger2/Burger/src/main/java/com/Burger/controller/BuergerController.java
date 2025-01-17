package com.Burger.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.Burger.models.Burger;
import com.Burger.services.burgerservices;

import jakarta.validation.Valid;

@Controller
public class BuergerController { 
	@Autowired
	burgerservices burgersev;  
	@GetMapping("/")
	public String ceratTask(@ModelAttribute("burger")Burger burger, Model model) { 
		List<Burger> burgers = burgersev.gettAllBurger();
		model.addAttribute("burgers",burgers);
		return "burgers.jsp";
	} 
	@PostMapping ("/process")
	public String Savebuger(@Valid @ModelAttribute("burger")Burger burger,BindingResult  result ,Model model) {
		
		if(result.hasErrors()) {
			model.addAttribute("burgers",burgersev.gettAllBurger());
			return"burgers.jsp";
		}
		burgersev.ceratTask(burger); 
		return "redirect:/"; 
		
		} 
	/* edite */
	@GetMapping("edit/burger/{id}")
	public String Edite (@PathVariable("id")long id ,@ModelAttribute("burger")Burger burger ,Model model) { 
		model.addAttribute("burger",burgersev.getidburger(id)); 
		return "edit.jsp"; 
	}
	@PutMapping ("edit/burger/{id}") 
	public String editeburger (@PathVariable("id")long id ,@ModelAttribute("burger")Burger burger ,Model model,BindingResult  result ) { 
		if(result.hasErrors()) {
			return"edit.jsp";
		}
		burgersev.editeburger(id,burger); 
		return "redirect:/"; 
	
		 
		

}}
