package com.books.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.books.Repositories.BookRepository;
import com.books.models.Book;

//...

@Service
public class BookService {
 // adding the book repository as a dependency
 private final BookRepository bookRepository;
 
 public BookService(BookRepository bookRepository) {
     this.bookRepository = bookRepository;
 }
 // returns all the books
 public List<Book> allBooks() {
     return bookRepository.findAll();
 }
 // creates a book
 public Book createBook(Book b) {
     return bookRepository.save(b);
 }
 // retrieves a book
 public Book findBook(Long id) {
     Optional<Book> optionalBook = bookRepository.findById(id);
     if(optionalBook.isPresent()) {
         return optionalBook.get();
     } else {
         return null;
     } 
     
 }
 public void deletebook(Long id){
	 bookRepository.deleteById(id); 
	 
} 
  
 public Book getidbook(long id) { 
		Optional<Book> book=bookRepository.findById(id) ;  
		if(book.isEmpty()) {  
			return null; 
			 
		}else { return book.get(); 
		
		 
		}
		
	} 
public Book editebook(long id, Book newbook) {  
	 newbook.setId(id); 
		return bookRepository.save(newbook);
		
	} 

}

