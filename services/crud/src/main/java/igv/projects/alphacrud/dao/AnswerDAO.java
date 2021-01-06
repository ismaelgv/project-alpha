package igv.projects.alphacrud.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import igv.projects.alphacrud.entities.Answer;

public interface AnswerDAO extends PagingAndSortingRepository<Answer, Long> {

	@Query(value = "SELECT * FROM answer ORDER BY RANDOM() LIMIT :size", nativeQuery = true)
	List<Answer> randomAnswers(Integer size);

}
