package com.BooksAPI.Repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.BooksAPI.models.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {  
	//addALL 
	List<Book>findAll();   
	//FINDby
    List<Book> findByDescriptionContaining(String search); 
    //delete 
   
    Long deleteByTitleStartingWith(String search);


	

}
