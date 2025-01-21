package com.books.Controller;


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

import com.books.Service.BookService;
import com.books.Service.UserService;
import com.books.models.Book;
import com.books.models.LoginUser;
import com.books.models.User;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
@Controller
public class UserController { 
	@Autowired
	UserService userService;  
	@Autowired

	BookService bookservice;
	
	// get the index page 
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}
	
	//Register
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser")User newUser,
			BindingResult result,
			HttpSession session,
			Model model) {
		// we will call the register method from the service 
		User user =userService.register(newUser, result);
		if(result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "index.jsp";
		}
		
		// we will set the userId in the session if true
		session.setAttribute("userId", user.getId());
		// we will redirect to a home page 
		return "redirect:/home";
	}
	
	//Login process
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin")LoginUser newLogin,
			BindingResult result,
			HttpSession session,Model model) {
		User user = userService.login(newLogin,result);
		if(result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index.jsp";
		}
		session.setAttribute("userId", user.getId());
		// we will redirect to a home page 
		return "redirect:/home";
	}
	//home  all books 
	
	@GetMapping("/home")
	public String homePage(HttpSession session,Model model) {
		if(session.getAttribute("userId")!=null) {
			model.addAttribute("user",userService.getUserById((Long) session.getAttribute("userId"))); 
			model.addAttribute("books",bookservice.allBooks());
			return "home.jsp";
		}
		return "redirect:/";
	}
	 // new book 
	@GetMapping("/add/new/book")  
	public String createBook(@ModelAttribute("book") Book book) {
		return "addBook.jsp";
	} 
	@PostMapping("/add/new/book")
	public String createBook(@Valid @ModelAttribute("book")Book book,
			      BindingResult result,
			      HttpSession session) {
		if(result.hasErrors()) {
			return "addBook.jsp";
		}
		User user = userService.getUserById((Long) session.getAttribute("userId"));
		book.setCreator(user);
		bookservice.createBook(book);
		return "redirect:/home";
		
	}
	
	//Logout 
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		//clear session
		session.invalidate();
		//redirect
		return "redirect:/";
	} 
	//one 
	 @GetMapping("/books/{id}")
	    public String show(@PathVariable("id") Long id,Model model) {
	        Book book = bookservice.findBook(id); 
	        model.addAttribute("book",book);
	        return "one.jsp";
	    }   
	 //Delete

		@DeleteMapping("/delete/{id}")
	    public String deletbook(@PathVariable("id")Long id) {
			bookservice.deletebook(id);
	        return "redirect:/home";
	    } 
		//edit
		@GetMapping("/edit/{id}")
		public String Edite (@PathVariable("id")long id ,@ModelAttribute("book")Book book,Model model) { 
			model.addAttribute("book",bookservice.getidbook(id)); 
			return "edit.jsp"; 
		} 
		
		@PutMapping ("/edit/{id}") 
		public String editebook (@PathVariable("id")long id , @Valid @ModelAttribute("book")Book book,BindingResult  result,Model model ) { 
			if(result.hasErrors()) {
				return"edit.jsp";
			}
			bookservice.editebook(id,book); 
			return "redirect:/books/"+id; 
		} 
		
	
}
