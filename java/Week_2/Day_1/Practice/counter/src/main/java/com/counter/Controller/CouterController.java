package com.counter.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;

@Controller

public class CouterController {
	@RequestMapping("/")

	public String your_sever() {   
		
		return "your_server.jsp";
	}

	@RequestMapping("/your_server/counter")
	public String couter(HttpSession Session) { 
		Integer somme=0;  
		if(Session.getAttribute("somme")==null) { 
			Session.setAttribute("somme", 0);  }
		else { 
				somme=(Integer)Session.getAttribute("somme"); 
				somme ++;
				Session.setAttribute("somme", somme);
			}
			
		return "couter.jsp";

	}

}
