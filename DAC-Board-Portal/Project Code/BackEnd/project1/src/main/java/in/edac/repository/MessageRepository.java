package in.edac.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.edac.model.Message;
import in.edac.model.User;


@Repository
public interface MessageRepository extends JpaRepository<Message, Integer>{ 

	
	
}