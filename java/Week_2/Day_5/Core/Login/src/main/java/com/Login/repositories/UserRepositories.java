package com.Login.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Login.model.User;
@Repository

public interface UserRepositories extends CrudRepository<User,Long>  { 
	List<User> findAll();  
	Optional<User> findByEmail(String email);

	

	

}
