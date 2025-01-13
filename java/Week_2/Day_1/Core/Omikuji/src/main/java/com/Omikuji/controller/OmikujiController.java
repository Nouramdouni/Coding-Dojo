package com.Omikuji.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpSession;

@Controller
public class OmikujiController {
	@GetMapping("/")
	public String index() {
		return "Omikuji.jsp";

	}

	@PostMapping("/submit")
	public String Omikuji(@RequestParam("numberYear") int numberYear, @RequestParam("city") String city,
			@RequestParam("person") String person, @RequestParam("hobby") String hobby,
			@RequestParam("thing") String thing, @RequestParam("nice") String nice, HttpSession session,
			RedirectAttributes flash) {
		session.setAttribute("numberYear", numberYear);
		session.setAttribute("person", person);
		session.setAttribute("hobby", hobby);
		session.setAttribute("thing", thing);
		session.setAttribute("nice", nice);

		return "redirect:/show";

	} 
	@GetMapping("/show")
	public String show() {
		return "show.jsp";	
		}
	
	

	
	

}
