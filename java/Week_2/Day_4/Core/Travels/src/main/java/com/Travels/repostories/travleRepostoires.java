package com.Travels.repostories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.Travels.models.Travels;

@Repository

public interface travleRepostoires  extends CrudRepository<Travels,Long>{ 
	List<Travels>findAll(); 
	

}
