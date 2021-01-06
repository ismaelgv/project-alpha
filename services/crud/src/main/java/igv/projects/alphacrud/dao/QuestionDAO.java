package igv.projects.alphacrud.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import igv.projects.alphacrud.entities.Question;

public interface QuestionDAO extends PagingAndSortingRepository<Question, Long> {

	@Query(value = "SELECT * FROM question ORDER BY RANDOM() LIMIT :size", nativeQuery = true)
	List<Question> randomQuestions(Integer size);

}
