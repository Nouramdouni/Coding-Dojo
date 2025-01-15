package com.BooksAPI.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BooksAPI.Repositories.BookRepository;
import com.BooksAPI.models.Book;

@Service
public class BookService {  
	@Autowired
	BookRepository bookRepo;  
	public List<Book> allBook() {  
		return bookRepo.findAll();		
	}
	public void deleteBook(Long id )  { 
		bookRepo.deleteById(id);
	}
	public Book updateBook(Book book) {
		return bookRepo.save(book);
	}
	public Book createBook(Book book) {
	
		return bookRepo.save(book) ;
	}  
	public Book findBook(Long id) {
		Optional<Book> optionalBook = bookRepo.findById(id);
		if(optionalBook.isPresent()) {
			return optionalBook.get();
		}else {
			return null;
		}
	} 
	 
	

}
